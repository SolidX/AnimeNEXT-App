function compareEventsByTime(a, b) {
    return a.Start.toMillis() - b.Start.toMillis()
}

function sortStrings(a, b) {
    return ('' + a.Artist).localeCompare(b.Artist);
}

function eventTypeColorClassMapping (t) {
    switch (t) {
        case 'Panel Programming':
            return 'text-bg-info';
        case 'Game Shows':
            return 'text-bg-success';
        case 'AMVs':
            return 'text-bg-secondary';
        case '18+':
            return 'text-bg-danger';
        case 'Main Events':
            return 'text-bg-warning';
        case 'Guests / Autographs':
            return 'text-bg-dark'
        default:
            return 'text-bg-light';
    }
}

function getDataFeed(feedType) {
    let file = null;
    
    switch(feedType) {
        case 'schedule':
            file = 'schedule.json';
            break;
        case 'artists':
            file = 'artists.json';
            break;
        case 'dealers':
            file = 'dealers.json';
            break;
        default:
            file = null;
    }

    if (file !== null) {
        return fetch(file).then((response) => {
            if (!response.ok) {
                //TODO: Error handling
                throw new Error(`Failed to get scheduling file. Status: ${response.status}`);
            }
            return response.json();
        }).then((data) => data);
    }
}

function parseSchedule(rawSchedule) {
    const parsedEvents = new Map();

    rawSchedule.events.forEach(item => {
        let startDt = luxon.DateTime.fromFormat(item.Start, "L/d/yyyy H:mm");
        let endDt = luxon.DateTime.fromFormat(item.End, "L/d/yyyy H:mm");
        let key = startDt.toFormat("EEEE (L/d/yyyy)");
        
        if (!parsedEvents.has(key)) {
            parsedEvents.set(key, new Array());
        }

        item.Start = startDt;
        item.End = endDt;
        parsedEvents.get(key).push(item);
    });

    const parsedSchedule = { updatedAt: luxon.DateTime.fromSeconds(rawSchedule.updatedAt).toFormat("L/d/yyyy hh:mm a"), events: parsedEvents };
    return parsedSchedule;
}

function displaySchedule(parsedSched) {
    let eventTypes = new Set();
    let eventLocations = new Set();

    parsedSched.events.forEach((events, day, map) => {
        events.sort(compareEventsByTime);
        const date = luxon.DateTime.fromFormat(day, "EEEE (L/d/yyyy)");
        let schedRoot = document.getElementById('schedule');
        let expandDay = date.hasSame(luxon.DateTime.now(), 'day');

        const section = document.createElement("div");
        section.setAttribute('class', 'accordian-item');
        const sectionHeader = document.createElement('h2');
        sectionHeader.setAttribute('class', 'accordian-header');
        const sectionHeaderButton = document.createElement('button');
        sectionHeaderButton.setAttribute('class', 'fw-bold accordion-button');
        if (!expandDay) sectionHeaderButton.classList.add('collapsed');
        sectionHeaderButton.setAttribute('type', 'button');
        sectionHeaderButton.setAttribute('data-bs-toggle', 'collapse');
        sectionHeaderButton.setAttribute('data-bs-target', '#collapse' + date.day);
        sectionHeaderButton.setAttribute('aria-expanded', 'true');
        sectionHeaderButton.setAttribute('aria-controls', 'collapse' + date.day);
        sectionHeaderButton.innerText = day;
        sectionHeader.appendChild(sectionHeaderButton);
        const sectionContainer = document.createElement('div');
        sectionContainer.setAttribute('id', 'collapse' + date.day);
        sectionContainer.setAttribute('class', 'accordion-collapse collapse');
        if (expandDay) sectionContainer.classList.add('show');
        sectionContainer.setAttribute('data-bs-parent', '#schedule');
        const sectionBody = document.createElement('div');
        sectionBody.setAttribute('class', 'accordian-body');

        const eventList = document.createElement('ul')
        eventList.setAttribute('class', 'list-group')

        let schedTimes = new Set();

        events.forEach(e => {
            let itemStart = e.Start.toFormat('hh:mm a');

            const scheduleItem = document.createElement('li');
            scheduleItem.setAttribute('class', 'list-group-item scheduleItem');
            scheduleItem.setAttribute('data-evttype', e.Type.replace(' ', '').replace(',', ' ').toLowerCase());
            scheduleItem.setAttribute('data-evtloc', e.Location.replace(' ', '').toLowerCase());

            const title = document.createElement('h5');
            title.setAttribute('class', 'mb-1');
            title.innerText = e.Name;
            scheduleItem.appendChild(title);

            const subtitle = document.createElement('div');
            subtitle.setAttribute('class', 'row h6');

            const eventTime = document.createElement('div');
            eventTime.setAttribute('class', 'col align-self-start text-wrap text-start');
            eventTime.innerHTML = `${itemStart} &ndash; ${e.End.toFormat('hh:mm a')}`;

            const eventPlace = document.createElement('div');
            eventPlace.setAttribute('class', 'col align-self-end text-wrap text-end');
            eventPlace.innerText = e.Location;
            eventLocations.add(e.Location);

            subtitle.appendChild(eventTime);
            subtitle.appendChild(eventPlace);
            scheduleItem.appendChild(subtitle);

            const eventDesc = document.createElement('p');
            eventDesc.setAttribute('class', 'mb-2');
            eventDesc.innerText = e.Description;
            scheduleItem.appendChild(eventDesc);

            //Add content tracks as badges
            e.Type.split(',').forEach((t) => {
                const badge = document.createElement('span');
                const track = t.trim();
                badge.setAttribute('class', `badge rounded-pill me-3 ${eventTypeColorClassMapping(track)}`);
                badge.innerText = track;

                eventTypes.add(track);
                scheduleItem.appendChild(badge);
            });

            if (!schedTimes.has(itemStart)) {
                const timeHeader = document.createElement('li')
                timeHeader.setAttribute('class', 'list-group-item list-group-item-secondary fw-bold');
                timeHeader.innerText = itemStart;
                eventList.appendChild(timeHeader);

                schedTimes.add(itemStart);
            }

            eventList.appendChild(scheduleItem);
        });
        
        sectionBody.appendChild(eventList);

        sectionContainer.appendChild(sectionBody);
        section.appendChild(sectionHeader);
        section.appendChild(sectionContainer);
        schedRoot.appendChild(section);

        const lastUpdated = document.getElementById('schedUpdatedAt');
        lastUpdated.innerText = parsedSched.updatedAt;
    });

    const locationFilter = document.getElementById('locationFilter');
    eventLocations.forEach((item) => {
        if (item == null || item.length == 0) return;

        const opt = document.createElement('option');
        opt.setAttribute('value', item.replace(' ', '').toLowerCase());
        opt.innerText = item;

        locationFilter.appendChild(opt);
    })

    const typeFilter = document.getElementById('eventTypeFilter');
    eventTypes.forEach((item) => {
        if (item == null || item.length == 0) return;

        const opt = document.createElement('option');
        opt.setAttribute('value', item.replace(' ', '').replace(',', ' ').toLowerCase());
        opt.innerText = item;

        typeFilter.appendChild(opt);
    });
}

function displayExhibitors(exhibitors, type) {
    const artistList = document.getElementById("exhibitors");

    exhibitors.forEach((exhibitor) => {
        if (exhibitor.Name == '' || exhibitor.Name == null || exhibitor.Name == undefined || exhibitor.Name.length == 0)
            return;

        const artistItem = document.createElement('li');
        artistItem.classList.add('list-group-item');

        const studio = document.createElement('div');
        studio.classList.add('fw-bold');
        studio.innerText = exhibitor.Name;

        const booth = document.createElement('div');
        booth.innerText = "Booth #" + exhibitor.Booth;

        artistItem.appendChild(studio);
        artistItem.appendChild(booth);
        artistList.appendChild(artistItem);
    });    
}