export class Teacher{
  firstName: string;

  lastName: string;
  speciality: string;
  address: string;
  email: string;


  constructor(firstName: string, lastName: string, speciality: string, address: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.speciality = speciality;
    this.address = address;
    this.email = email;
  }
}
