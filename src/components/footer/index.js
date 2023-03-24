let Student = {
  name: "sam",
  age: 20,
};
let clone = {};
for (let key in Student) {
  clone[key] = Student[key];
  clone.name = "kumar";
  alertr(Student.name);
}
