

public class Main {

    public static void main(String[] args) {
        
        User user1 = new User("joshua");
        User user2 = new User("joshua", "joshua@gmail.com");
        User user3 = new User("joshua", "joshua@gmail.com", 19);

        System.out.println(user1.username);
        System.out.println(user2.email);
        System.out.println(user3.age);


    }
}