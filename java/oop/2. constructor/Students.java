

public class Students {
    String name;
    int age;
    double gpa;
    boolean isEnrolled;
    
    public Students(String name, int age, double gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
        this.isEnrolled = true;
    }

    public void study(){
        System.out.println(this.name + " is studying");
    }
    
}
