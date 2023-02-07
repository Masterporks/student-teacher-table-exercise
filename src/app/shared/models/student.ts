export class Student{
 firstName: string;
 lastName: string;
  age: number;
  address: string;
  email: string;


  constructor(firstName: string, lastName: string, age: number, address: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.email = email;
  }
}
