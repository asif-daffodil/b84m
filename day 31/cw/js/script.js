const date = document.querySelector(".date");
const time = document.querySelector(".time");
const day = Array.from(document.querySelector(".day").children[0].children);


const clock = () => {
    const d = new Date();
    date.textContent = d.getDate() + "/" + d.toLocaleString("en-US", { month: "long" }) + "/" + d.getFullYear()
    const formattedTime = d.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    time.textContent = formattedTime;
    day.forEach((el, i) => {
        if (i === d.getDay()) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
}
setInterval(clock, 1000);
