export interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string):string {
  return `${firstName[0]}. ${lastName}`;
}

export interface IStudentClassConstructor {
  new (firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass {
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._last = lastName;
  }

  workOnHomework() {
    return `Currently working`;
  }

  displayName() {
    return this.first_name;
  }
}
