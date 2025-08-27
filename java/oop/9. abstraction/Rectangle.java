public class Rectangle extends Shape{
    

    double length;
    double width;

    Rectangle(double length, double width){
        this.length = length;
        this.width = width;
    }


    @Override
    double area(){
        return length * width;
    }

    @Override
    void displayArea(){
        System.out.println(this.area() + " of a rectangle area");
    }


}
