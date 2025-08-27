

public class Main {

    public static void main(String[] args) {
        
        // super - is a keyword that refers to the parent class (subclass <- superclass)
        // used in constructors and method overriding
        // calls the parent constructor to initialized attributes


        Person person1 = new Person("joshua", "daliva");
        System.out.println(person1.firstName);

        Student student1 = new Student("joshua", "daliva", 2.4);
        student1.showGpa();

        Employee employee1 = new Employee("josh", "daliva", 3123.20);
        employee1.showSalary();


    }
}