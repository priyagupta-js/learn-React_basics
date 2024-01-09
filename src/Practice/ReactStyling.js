
// Q. Show a single h1 that says "Good Morning" if between midnight and 12PM.
// or "Good Afternoon" if between  12PM and 6PM.
// or "Good Evening" if between 6PM and Midnight.
// Apply "heading" style in styles.css
// Dynamically change the color of h1 using inline css styles.
// Morning = red ; Afternoon = green ; night = blue

import React from "react";

function ReactStyling (){
const date = new Date().getHours;
// console.log(date);
    return(
<div>

    <h1>{}Good morning</h1>
</div>
    );
}

export default ReactStyling;
