


const slide = document.querySelector(".slide-nav")
const btn = document.querySelector(".btn")
const btn1 = document.querySelector(".btn1")

btn.addEventListener("click", () => {
    slide.classList.toggle("show")
    slide.classList.remove("hide")
    console.log(slide);

})
btn1.addEventListener("click", () => {
    slide.classList.toggle("hide")
    slide.classList.remove("show")
    console.log(slide);

})

