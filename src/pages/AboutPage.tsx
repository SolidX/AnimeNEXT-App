import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import packageInfo from "../../package.json";

export default function AboutPage() {
    useEffect(() => {
        document.title = "About the App | AnimeNEXT";
    }, []);

    return (
        <Fragment>
            <h1 className="mb-1">About the App</h1>
            <p>
                Since we don't have a Guidebook app this year, a few staff members got together and decided to build this <a href="https://en.wikipedia.org/wiki/Progressive_web_app" target="_blank">PWA</a> as a proof of concept of what we could do on our own.
                However, we only had a few hours in the middle of the night the weekend before con to pull it off. If you're reading this, things have escalated quickly and we're ready for users.
            </p>
            <p>
                Big thanks to all who pitched in at the last second to make this happen in time for con! Especially our PM Liz, Junior Dev Chibi, and our invaluable testers (Prim & Louis).
                Finally a big thanks goes out to the entire Info Table team for supporting us with communications and publicizing this app. Keep rocking it Izzy & Magda!
            </p>
            <p>
                For inquiries, feedback, or to volunteer to help futher develop this app you can contact <a href="mailto:comptroller@animenext.org">comptroller@animenext.org</a> (after the convention please).
            </p>
            
            <h2>Version</h2>
            <p>
                Version {packageInfo.version}
            </p>
            <p>
                This is a beta version of this app. It should get the job done but there's still a lot more to do.
            </p>
            <h2>Software License - MIT</h2>
            <p>
                Copyright (c) 2023-2025 Universal Animation, Inc.
            </p>
            <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
            </p>
            <p>
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
            </p>
            <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
            </p>
        </Fragment>        
    );
}