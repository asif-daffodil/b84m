const myForm = document.querySelector("#my-form");
const pain = document.querySelector(".pain");
const showName = document.querySelector("#showName");


myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const yname = fd.get('yname');
    if (!yname) {
        if (!document.querySelector("#errMsg")) {
            const div = document.createElement("div");
            div.innerHTML = "Please write your name";
            div.style.color = "red";
            div.style.padding = "10px 0";
            div.id = "errMsg";
            pain.appendChild(div);
            showName.style.display = 'none';
        }
    } else {
        if (document.querySelector("#errMsg")) {
            pain.removeChild(document.querySelector("#errMsg"));
        }
        showName.style.cssText = `
            color: green;
            font-style: italic;
            padding: 10px 0;
            display: block;
        `;
        showName.innerHTML = `Your name is : ${yname}`;
        myForm.reset();
    }
})