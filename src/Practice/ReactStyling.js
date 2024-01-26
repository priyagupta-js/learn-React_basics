
// Q. Show a single h1 that says "Good Morning" if between midnight and 12PM.
// or "Good Afternoon" if between  12PM and 6PM.
// or "Good Evening" if between 6PM and Midnight.
// Apply "heading" style in styles.css
// Dynamically change the color of h1 using inline css styles.
// Morning = red ; Afternoon = green ; night = blue

import React from "react";

function ReactStyling (){

const date = new Date();
const currentTime = date.getHours();
let greetings = "";

const customStyle = {
    color: ""
}

if (currentTime < 12)
{
    greetings = "Good Morning ";
    customStyle.color="red";
}
else if (currentTime < 18)
{
    greetings = "Good Afternoon ";
    customStyle.color="green";
}
else {
    greetings = "Good Night";
    customStyle.color = "blue";
}

    return(
    <h1 className="heading" style={customStyle}>{greetings}</h1>
    );
}

export default ReactStyling;
