export default function getStudentsByLocation(students, city) {
  const inCity = students.filter((student) => student.location === city);

  return inCity;
}
