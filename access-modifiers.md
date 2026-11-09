<h1>Access Modifiers</h1>
Access modifiers in TypeScript control the accessibility and visibility of a class's properties and methods from outside the class. They help with encapsulation, which is a core principle of OOP.
This post will describe all.
<h3>public:</h3> This is default modifire. public property can be accessed anywhere inside the class and subclasses. It can be accessed from outside the class by an instance. If you do not declare a modifier, then TS automatically treats this as public.
<h3>private:</h3> This is very strict. Private properties are only accessible within the class. It helps with encapsulation for a class. It can't be accessed by an instance.
<h3>protected:</h3> protected behaves like a private property; the only difference is that it can be accessed within a subclass.It can't be accessed by an instance.
<h3>readonly:</h3>
In TypeScript readonly is a modifire which can be use combinely with other access modifiers. Once a readonly property is initialised, its value can not be changed anywhere.We can only assign a value to a readonly property during declaration and within the constructor. It can be accessed depending on the access modifier. If dont add access modifire then it will be public by default.</br>
<b>Examples: </b>
<pre>
class Employee1{
  protected name: string;                                   //can be use within sub-class
  private baseSalary: number;                               //can't be used outside the class
  public empType: string;                                   //It can't be accessed anywhere within the class and sub-class
  public readonly company: string = "Programming hero";     // It can access but can't be reassign
  constructor (name: string, baseSalary: number, empType: string){
    this.name = name;
    this.baseSalary = baseSalary;
    this.empType = empType;
  }
  getDetails(): string{
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}, employee type : ${this.empType}`
  }
}

class Manager1 extends Employee1{
private department: string;
constructor(name: string, baseSalary: number,empType: string, department: string){
super(name, baseSalary, empType);
this.department = department;
}
getRoleInfo(): string{
return `Manager of ${this.department}: ${this.name} employee type : ${this.empType} company: ${this.company}`;
}
}

</pre>
