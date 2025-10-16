const learners = [
  { fullName: "Alice", marks: 35 },
  { fullName: "Bob", marks: 99 },
  { fullName: "Charlie", marks: 58 },
  { fullName: "David", marks: 74 },
  { fullName: "Yash", marks: 10 },
  { fullName: "Parth", marks: 85 },
  { fullName: "Het", marks: 52 },
  { fullName: "Shivam", marks: 70 },
  { fullName: "Dev", marks: 77 },
  { fullName: "Deep", marks: 97 }
];

function calculateAverage(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].marks;
  }
  return sum / data.length;
}

function findTopper(data) {
  let maxScore = data[0].marks;
  let topperName = data[0].fullName;

  for (let j = 1; j < data.length; j++) {
    if (data[j].marks > maxScore) {
      maxScore = data[j].marks;
      topperName = data[j].fullName;
    }
  }

  return { topperName, maxScore };
}

function findLowestScorer(data) {
  let minScore = data[0].marks;
  let lowName = data[0].fullName;

  for (let k = 1; k < data.length; k++) {
    if (data[k].marks < minScore) {
      minScore = data[k].marks;
      lowName = data[k].fullName;
    }
  }

  return { lowName, minScore };
}

function getGradeDistribution(data) {
  const gradeChart = { A: 0, B: 0, C: 0, D: 0, F: 0 };

  for (let i = 0; i < data.length; i++) {
    const score = data[i].marks;

    if (score >= 90) gradeChart.A++;
    else if (score >= 80) gradeChart.B++;
    else if (score >= 70) gradeChart.C++;
    else if (score >= 60) gradeChart.D++;
    else gradeChart.F++;
  }

  return gradeChart;
}

function getRetestList(data) {
  const retakeList = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].marks < 60) {
      retakeList.push(data[i].fullName);
    }
  }
  return retakeList;
}

const topStudent = findTopper(learners);
const lowStudent = findLowestScorer(learners);

console.log("Average Marks:", calculateAverage(learners).toFixed(2));
console.log("Topper:", topStudent.topperName, "-", topStudent.maxScore);
console.log("Lowest Scorer:", lowStudent.lowName, "-", lowStudent.minScore);
console.log("Grade Distribution:", getGradeDistribution(learners));
console.log("Retest Required For:", getRetestList(learners));
