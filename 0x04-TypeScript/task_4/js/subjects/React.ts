namespace Subjects {

  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subjects.Subject{
    getRequirements() {
      return `Here is the list of requirements for React`;
    }

    getAvailableTeacher() {
      if(this.teacher.experienceTeachingReact <= 0) {
        return `No available teacher`;
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
