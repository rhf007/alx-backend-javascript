export default function getListStudents() {
  const student1 = { id: 1, firstName: 'Guillaume', location: 'San Francisco' };
  const student2 = { id: 2, firstName: 'James', location: 'Columbia' };
  const student3 = { id: 3, firstName: 'Serena', location: 'San Francisco' };

  const students = [student1, student2, student3];

  return students;
}
