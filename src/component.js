export default (text="Hello Webpack") => {
    const elem = document.createElement("p");
    elem.innerHTML = text + '..!';
    return elem;
};