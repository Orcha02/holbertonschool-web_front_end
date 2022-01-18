function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }
  let students = [];
  let i = 0;
  while (i < numberOfStudents) {
    students[i] = studentSeat(i + 1);
    i++;
  }
  return students;
}
classRoom = createClassRoom(10);
