export default (text="Hello Webpack with first deployment without gh pages") => {
    const elem = document.createElement("p");
    elem.innerHTML = text + '..!';
    return elem;
};