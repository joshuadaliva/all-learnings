

public class Main {

    public static void main(String[] args) {
        
        Car car1 = new Car("Mustang", "red");
        Car car2 = new Car("corvette", "yellow");
        Car car3 = new Car("charger", "yellow");


        Car[] cars = {car1, car2, car3};

        for (Car car : cars) {
            car.drive();
        }


    }
}