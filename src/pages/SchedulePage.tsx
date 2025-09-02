import { useState, type ChangeEvent, type ReactElement } from "react";
import { Fragment } from "react/jsx-runtime";
import Accordion from "../components/Accordion";
import Badge from "../components/Badge";
import { BadgeTypes, type AccordionItemDetails, type RawScheduleEvent, type ScheduleEvent } from "../components/components";
import { DateTime } from "luxon";
import Schedule from "../assets/schedule.json";

function compareEventsByTime(a : ScheduleEvent, b : ScheduleEvent) {
    return a.Start.toMillis() - b.Start.toMillis()
}

function eventTypeColorClassMapping (t : string) {
    switch (t) {
        case 'Panel Programming':
            return BadgeTypes.Info;
        case 'Game Shows':
            return BadgeTypes.Success;
        case 'AMVs':
            return BadgeTypes.Secondary;
        case '18+':
            return BadgeTypes.Danger;
        case 'Main Events':
            return BadgeTypes.Warning;
        case 'Guests / Autographs':
            return BadgeTypes.Dark
        default:
            return BadgeTypes.Light;
    }
}

export default function SchedulePage() {
    const [eventTypeFilter, setEventTypeFilter] = useState<string | undefined>(undefined);
    const [eventLocationFilter, setEventLocationFilter] = useState<string | undefined>(undefined);

    //parse raw schedule in to days and their events
    const parsedEvents = new Map<string, Array<ScheduleEvent>>();
    const allEventLocations = new Set<string>();
    const allEventTypes = new Set<string>();

    Schedule.events.forEach((item : RawScheduleEvent) => {
        const startDt = DateTime.fromFormat(item.Start, "L/d/yyyy H:mm");
        const endDt = DateTime.fromFormat(item.End, "L/d/yyyy H:mm");
        const key = startDt.toFormat("EEEE (L/d/yyyy)")!;
        
        if (!parsedEvents.has(key)) {
            parsedEvents.set(key, new Array<ScheduleEvent>());
        }

        allEventLocations.add(item.Location);
    
        const mapItem : ScheduleEvent =  {
            ...item,
            Start: startDt,
            End: endDt
        };
        parsedEvents.get(key)!.push(mapItem);
    });
    
    function eventTypeFilterHandler(evt : ChangeEvent<HTMLSelectElement>) {
        console.log(evt.target.value);
        setEventTypeFilter(evt.target.value !== "*" ? evt.target.value : undefined);
    }

    function eventLocationFilterHandler(evt : ChangeEvent<HTMLSelectElement>) {
        console.log(evt.target.value);
        setEventLocationFilter(evt.target.value !== "*" ? evt.target.value : undefined);
    }

    const scheduleDays : AccordionItemDetails[] = new Array<AccordionItemDetails>();

    parsedEvents.forEach((events, day, map) => {
        const scheduleDay = DateTime.fromFormat(day, "EEEE (L/d/yyyy)");
        const expandDay = scheduleDay.hasSame(DateTime.now(), 'day');

        const scheduleDayTimes = new Set<number>();
        const daysEvents = new Array<ReactElement>();

        events.sort(compareEventsByTime);
        events.forEach((e) => {
            const eventTypes = (e.Type !== undefined) ? e.Type.split(",").map((t) => {
                const eType = t.trim();
                if (eType.length > 0) {
                    allEventTypes.add(eType);
                }

                return (
                    <Badge
                        type={eventTypeColorClassMapping(eType)}
                        content={eType}
                        className="rounded-pill me-3"
                    />
                );
            }) : undefined;

            const eventStartMillis = e.Start.toMillis();
            const eventStartStr = e.Start.toFormat('hh:mm a');

            if (!scheduleDayTimes.has(eventStartMillis)) {
                daysEvents.push((
                    <li key={eventStartMillis} className="list-group-item list-group-item-secondary fw-bold">
                        {eventStartStr}
                    </li>
                ));
                scheduleDayTimes.add(eventStartMillis);
            }

            //Apply event type and location filters
            if ((eventTypeFilter === undefined || e.Type?.includes(eventTypeFilter)) && (eventLocationFilter === undefined || e.Location == eventLocationFilter)) {
                daysEvents.push((
                    <li key={eventStartMillis + e.Name} className="list-group-item scheduleItem">
                        <h5 className="mb-1">{e.Name}</h5>
                        <div className="row h6">
                            <div className="col align-self-start text-wrap text-start">{eventStartStr} - {e.End.toFormat('hh:mm a')}</div>
                            <div className="col align-self-end text-wrap text-end">{e.Location}</div>
                        </div>
                        <p className="mb-2">{e.Description}</p>
                        {eventTypes != undefined && eventTypes}
                    </li>
                ));
            }
        });        

        scheduleDays.push({
            itemId: scheduleDay.toSeconds().toString(),
            header: day,
            parentId: "schedule",
            isCollapsed: !expandDay,
            content: (<ul className="list-group">{daysEvents}</ul>)
        });
    });

    const eventFilters = Array.from(allEventTypes).sort((a, b) => {
        return a.localeCompare(b);
    }).map(x => (<option value={x}>{x}</option>));
    const locationFilters = Array.from(allEventLocations).sort((a, b) => {
        return a.localeCompare(b);
    }).map(x =>(<option value={x}>{x}</option>));

    return (
        <Fragment>
            <h1 className="mb-1">Schedule</h1>
            <small className="mb-3">Schedule as of <span id="schedUpdatedAt">{DateTime.fromSeconds(Schedule.updatedAt).toFormat("L/d/yyyy hh:mm a")}</span></small>
            <div className="sticky-top mb-3 bg-body py-2" style={{zIndex: 990}}>
                <div className="input-group mb-1">
                    <div className="input-group-text">Event Type</div>
                    <select id="eventTypeFilter" className="form-select" value={eventTypeFilter} aria-label="Event Type Filter" onChange={eventTypeFilterHandler}>
                        <option value="*">All</option>
                        {eventFilters}
                    </select>
                </div>
                <div className="input-group mt-1">
                    <div className="input-group-text">Location</div>
                    <select id="locationFilter" className="form-select" value={eventLocationFilter} aria-label="Location Filter" onChange={eventLocationFilterHandler}>
                        <option value="*">All</option>
                        {locationFilters}
                    </select>
                </div>
            </div>
            <Accordion
                accordionId="schedule"
                items={scheduleDays}
            />
        </Fragment>
    );
}