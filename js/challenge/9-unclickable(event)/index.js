


const btn2 = document.getElementById("btn2")
const btn1 = document.getElementById("btn1")
const banner = document.getElementById("banner")
const btn3 = document.getElementById("btn3")


btn2.addEventListener("mouseover", (e) => {
    const random = Math.floor(Math.random() * 600)
    btn2.style.position = "absolute";
    btn2.style.top = `${random}px`;
    btn2.style.left = `${random}px`;
})


btn1.addEventListener("click", () => {
    banner.style.visibility = "visible";
    banner.style.zIndex = "1";
})
btn3.addEventListener("click", () => {
    banner.style.visibility = "hidden";
})
