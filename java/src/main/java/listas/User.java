package listas;

public class User {

    private Integer id;
    private String name;
    private Double salary;


    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Double getSalary() {
        return salary;
    }

    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public  void increaseSalary(Double percent){
        this.salary = (this.salary * (percent/100)) + this.salary;
    }


}
