export default function getListStudentIds(students) {
  if (!(students instanceof Array)) {
    return [];
  }

  const ids = students.map((obj) => obj.id);

  return ids;
}
