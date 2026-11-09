function multiplyValue(num: number, multiplier?: number) : number{
    if(multiplier !== undefined){
      return (num * multiplier);
    }
    else{
      return (num * 2)
    }
}

type InputTypes= string | number | boolean;
type OutputTypes= string | number;

function processInput(input: InputTypes): OutputTypes{
    if(typeof input === "string"){
      return input.trim().toLowerCase();
    }
    else if(typeof input === "number"){
      return input * 10;
    }
    else{
      if(input){
        return "Active";
      }
      else{
        return "Inactive";
      }
    }
}


type Address = readonly [number,number,string];

function formatCoordinate(address: Address): string{
  const [latitude,longitude,locationName] = address;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T> (...arrays: T[][]): T[]{
  return arrays.flat();
}


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses (arr: Course[], minStudents: number): Course[] {
    const newArray: Course[] = arr.filter(c => c.isPublished === true && c.students >= minStudents)
    return newArray;
}

function pluckValues<T,K extends  keyof T> (items: T[], name: K): T[K][]{
  const values = items.map(item => item[name])
  return values;
} 

class Employee{
  protected name: string;
  private baseSalary: number;
  constructor (name: string, baseSalary: number){
    this.name = name;
    this.baseSalary = baseSalary;
  }
  getDetails(): string{
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
  }
}

class Manager extends Employee{
  private department: string;
  constructor(name: string, baseSalary: number, department: string){
    super(name, baseSalary);
    this.department = department;
  }
  getRoleInfo(): string{
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync (age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if(age < 18){
      return reject(new Error("Access Denied: Must be 18 or older"));
    }else{
      setTimeout(() => {
          return resolve("Access Granted");
      }, 1000);
    }
  });
};