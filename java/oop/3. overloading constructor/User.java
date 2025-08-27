

public class User {
    String username;
    String email;
    int age;

    public User(String username){
        this.username = username;
    }
    public User(String username, String email){
        this.username = username;
        this.email = email;
    }
    public User(String username, String email, int age){
        this.username = username;
        this.email = email;
        this.age = age;
    }
    
}