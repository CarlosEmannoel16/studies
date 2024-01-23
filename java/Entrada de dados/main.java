import java.util.Locale;

public class main(){
    public static void main (String[] args){
        Locale.setDafault(Locale.US); // Para usar o ponto como separador de casas decimais
        Scanner sc = new Scanner(System.in);

        double x;
        x = sc.nextDouble();
        System.out.println("Voce digitou: " + x);

        //Pegando primeiro carater de uma string
        char x;
        x = sc.next().charAt(0);
        System.out.println("Voce digitou: " + x);

        //Lendo uma linha inteira
        String y;
        int z;
        double w;
      
        y = sc.next();
        z = sc.nextInt();
        w = sc.nextDouble();

        System.out.println("Dados digitados: ");
        System.out.println(y);
        System.out.println(z);
        System.out.println(w);


        //Lendo text até a quebra de linha

        Strings s1, s2, s3; 

        s1 = sc.nextLine(); //Lê até a quebra de linha
        s2 = sc.nextLine();
        s3 = sc.nextLine();

        System.out.println("Dados digitados: ");
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);

    }
}
