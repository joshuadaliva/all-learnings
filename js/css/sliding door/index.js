
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let video = document.querySelector("#video")

document.body.addEventListener("click", (e) => {
    if(!left.classList.contains("open-left") || !right.classList.contains("open-right")){
        right.classList.toggle("open-right")
        left.classList.toggle("open-left")
        setTimeout(() => {
            video.play()
        }, 3090)
    }
})