export default function getStudentIdsSum(students) {
  const idSum = students.reduce((agg, student) => agg + student.id, 0);

  return idSum;
}
