

// async / await 
// async = makes a function return a promise
// await = makes an async function wait for promsie

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you clean the kitchen");
        }, 1100)
    })

}
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you walk the dog");
        }, 1600)

    })

}
function takeTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("you take out the trash");
        }, 1200)

    })

}


async function doChores() {
    try{
        const walkDogResult = await walkDog()
        console.log(walkDogResult);
        const cleanKitchenResult = await cleanKitchen()
        console.log(cleanKitchenResult);
        const takeTrashs = await takeTrash()
        console.log(takeTrashs);
    }catch(error){
        console.log(error)
    }
}   

doChores()