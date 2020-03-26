//imports
import React from 'react';
import { useHistory } from 'react-router-dom';

//button to exit the application
function Exit(props) {

    const history = useHistory();

    return(
        <button onClick={(e) => {  
            e.preventDefault(); // prevent default refresh
            localStorage.setItem('cancelled', 'true'); //sets local storage for proper render of thank you component
            history.push(`/thank-you`); // push the user to the next page - defined by props passed from demographics component
        }} className="save">
            Exit
        </button>
    )
}

export default Exit;