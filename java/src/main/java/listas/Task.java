package listas;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.List;
import java.util.stream.Collectors;

public class Task {
    public static void main(String[] args) {


        Scanner sc = new Scanner(System.in);

        System.out.println("Digite  a quantidade de funcionários a serem cadastrados");
        Integer quantity = sc.nextInt();

        List<User> employee = new ArrayList<>();

        for (int i = 0; i < quantity; i++){
            User funcionario = new User();
            funcionario.setId(i);
            System.out.println("Funcionário #"+funcionario.getId());
            System.out.println("informe o nome: ");
            sc.nextLine();
            String name = sc.nextLine();
            funcionario.setName(name);
            System.out.println("informe o salário: ");
            Double salary = sc.nextDouble();
            funcionario.setSalary(salary);
            employee.add(funcionario);
        }

        System.out.println("Informe a id do funcionário que receberar o aumento: ");
        Integer idEmployee = sc.nextInt();
        System.out.println("Entre com a porcentagem: ");
        Double percent = sc.nextDouble();

        User user = employee.stream().filter(emp -> emp.getId() == idEmployee).findFirst().orElse(null);
        user.increaseSalary(percent);

        System.out.println("Lista de funcionárops ");
        for (User usr:employee){
            System.out.println(usr.getId() + " " + usr.getName() + " " + usr.getSalary());
        }

    }
}
