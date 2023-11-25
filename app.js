
const QuestionPaperGenerator = require('./questionPaperGenerator');
const questionStore=require('./data');




const questionPaperGenerator = new QuestionPaperGenerator(questionStore);


const difficultyDistribution = [
  { difficulty: "Easy", percentage: 20,marks: 5 },
  { difficulty: "Medium", percentage: 50,marks: 10 },
  { difficulty: "Hard", percentage: 30,marks: 15 },
];


const totalMarks = 100;
const questionPaper = questionPaperGenerator.generateQuestionPaper(
  totalMarks,
  difficultyDistribution
);

console.log("Generated Question Paper:");
console.log(questionPaper);
