const btn = document.querySelector(".btn")
const sidePanel = document.querySelector(".side-panel")

btn.addEventListener("click", () => {
    sidePanel.classList.toggle("show")
    console.log(sidePanel);
    fetchManga()
})


const fetchManga = async () =>{
    try{
        const response = await fetch("https://gomanga-api.vercel.app/api/manga-list/1")
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}