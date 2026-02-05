let student = {
  firstName: "Leko",
  lastName: "Shonia",
  age: 22,
  scores: [4, 7, 5, 3, 2],
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};


function sum (scores) {
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum;
}

console.log(sum(student.scores));