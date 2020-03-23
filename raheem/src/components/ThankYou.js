import React, { useState } from 'react';

function ThankYou() {

    /* we could possibly store some value in localStorage to determine
        whether or not the user has rendered the Thank You component from
        the cancel button on the initial landing, or from actually completing
        a submission */
    const [cancelled, setCancelled] = useState(!!localStorage.getItem('cancelled'));
    const [submitted, setSubmitted] = useState(!!localStorage.getItem('submitted'));

    return (
        <div>
            {cancelled &&
                <div>
                    <h2>Thank You</h2>
                    <p>Thank you for your time today. If you accidentally clicked on 'cancel', you can click the back button
                    to return to the report submission form and continue filling out your report,
                    otherwise, we hope you have a great rest of the day.
                    </p>
                </div>}

            {submitted &&
                <div>
                    <h2>Thank You</h2>
                    <p>Thank you for taking the time to help build a safer community.</p>
                    <p>For further escalation of your report, you have the following options: </p>
                    <ul>
                        <li>Escalate to Raheem staff.</li>
                        <li>Escalate to the media.</li>
                        <li>Escalate to law enforcement.</li>
                    </ul>
                </div>}
        </div>
    )
}

export default ThankYou;
