import React from 'react';
import { useHistory } from 'react-router-dom';

//button to continue in the application
function Continue(props) {

    const history = useHistory(); // bring history in using the useHistory hook from react-router-dom
    const { next } = props; // desconstruct next from props

    return (
        <button onClick={(e) => {
            e.preventDefault(); // prevent default refresh
            console.log("continue button", next) //read next
            history.push(`${next}`); // push the user to the next page - defined by props passed from demographics component
        }} className="save">
            Continue
        </button>
    )
}

export default Continue;