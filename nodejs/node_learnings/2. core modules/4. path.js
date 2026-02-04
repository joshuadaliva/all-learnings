
// path - to work mostly to destination and directories
// instead of defining specific directories path makes it easy for you

const path = require("path");

// path.join() - combine paths public\images\logo.png
const filePath = path.join("public", "images", "logo.png");
console.log(filePath);



// path.resolve() - converts path into an absolute path C:\Users\shie\Desktop\programming-learnings\nodejs\uploads\file.txt
// use resolve for fs
const absPath = path.resolve("uploads", "file.txt");
console.log(absPath);


// path.basename(path) - photo.png if remove photo
console.log(path.basename("images/photo.png", ".png"));


// path.dirname(directory) - images
console.log(path.dirname("images/photo.png"));


// path.extname - .png
console.log(path.extname("/images/photo.png"));

// path.parse - breaks down and format using object
console.log(path.parse("images/photo.png"));

// path.normalize()
console.log(path.normalize("/images//home.png"));





