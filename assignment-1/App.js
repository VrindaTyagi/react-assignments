
const root = ReactDOM.createRoot(document.getElementById("root"))

const content = React.createElement("div", {id: "parent"}, ["im parent element", React.createElement("div", {id: "child"}, "im the kid div tag")])

root.render(content);
