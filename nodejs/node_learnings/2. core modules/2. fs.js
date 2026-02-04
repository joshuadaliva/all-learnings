
// fs = file system that can interact with the files and folders
// using fs you can read, write, append text, deleting file, rename, creating and reading directories
// if you dont define the encoding it will return bytes

import fs from "fs/promises";





const readFile =  async () => {

    try{

        // write and overwrite the file or create if not exist
        await fs.writeFile("index.html", "hello world");

        // make a directory
        await fs.mkdir("haha");

        // rename a directory
        await fs.rename("learnings", "node_learnings");

        // append a text
        await fs.appendFile("index.html", "hahahahahahha");
        
        // directories
        const dir = await fs.readdir("C:/Users/shie/Desktop/programming-learnings/nodejs/");
        console.log(dir);
        
        // read file and log text
        const data = await fs.readFile("index.html", "utf-8");
        console.log(data);

    }catch(error){
        console.log(error);
    }

}




readFile()




