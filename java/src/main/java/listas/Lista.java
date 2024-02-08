package listas;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Lista {

    public static void main(String[] args) {
        List<String> list = new ArrayList<>();

        list.add("Carlos");
        list.add("Maria");
        list.add("Pedro");
        list.add("Clara");
        list.add("Joana");
        list.add("Maria Clara");
        list.add(2, "Joao");
        System.out.println(list.size());
        list.remove("Pedro");

        list.removeIf(name -> name.charAt(0) == 'M' );

        for (String x : list){
            System.out.println(x);
        }

        System.out.println("Index of Carlos " + list.indexOf("Carlos"));
        List<String> result = list.stream().filter(x-> x.charAt(0) == 'J').collect(Collectors.toList());
        System.out.println("--------------------------------");
        for (String x : result){
            System.out.println(x);
        }
        System.out.println("-----------------");

        String name = list.stream().filter(x-> x.charAt(0) == 'J').findFirst().orElse(null);
        System.out.println(name);
    }
}
