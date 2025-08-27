

public class Main {

    public static void main(String[] args) {


        // static = makes an attribute or methods belongs to the class itself rather than on object

        Friend friend1 = new Friend("Joshua");
        Friend friend2 = new Friend("Hans");

        System.out.println(Friend.numFriends);

    }
}