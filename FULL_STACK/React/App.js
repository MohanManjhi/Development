import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1",{id:"title",key:"h1"},"Heading1 Mohan Manjhi");
const heading2 = React.createElement("h2", {id:"heding",key:"h2"},"Heading2")
const container = React.createElement("div",{id:"container"},[heading1,heading2])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container)