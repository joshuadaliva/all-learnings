// getter = special method that makes a property readable
// seter = special method that makes a property writable

// modify value
// this._width = newWidth; telling devs that the property is a private

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0 ){
            this._width = newWidth
        }
        else{
            console.log("width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0 ){
            this._height = newHeight
        }
        else{
            console.log("height must be a positive number");
        }
    }


    get width(){
        return this._width.toFixed(1);
    }
    get height(){
        return this._height.toFixed(1);
    }


    get both(){
        return this._width + " " + this._height;
    }
}


const rectangle = new Rectangle(12, 21)
rectangle.width = 32;
rectangle.height = 333;
console.log(rectangle.width, rectangle.height);
console.log(rectangle.both);