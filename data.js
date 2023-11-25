
const QuestionStore = require('./questionStore');

const questionStore = new QuestionStore();
questionStore.addQuestion({
  question: "What is the speed of light",
  subject: "Physics",
  topic: "Waves",
  difficulty: "Easy",
  marks: 5,
});
questionStore.addQuestion({
    question: "eq2",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 5,
  });
  questionStore.addQuestion({
    question: "eq3",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 5,
  });
  questionStore.addQuestion({
    question: "eq4",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Easy",
    marks: 5,
  });
questionStore.addQuestion({
    question: "q2",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    marks: 10,
  });
  questionStore.addQuestion({
    question: "q3",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    marks: 10,
  });
  questionStore.addQuestion({
    question: "q4",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    marks: 10,
  });
  questionStore.addQuestion({
    question: "q5",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    marks: 10,
  });
  questionStore.addQuestion({
    question: "q6",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    marks: 10,
  });
  questionStore.addQuestion({
    question: "q7",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Medium",
    marks: 10,
  });
  questionStore.addQuestion({
    question: "hq1",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Hard",
    marks: 15,
  });
  questionStore.addQuestion({
    question: "hq2",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Hard",
    marks: 15,
  });
  questionStore.addQuestion({
    question: "hq3",
    subject: "Physics",
    topic: "Waves",
    difficulty: "Hard",
    marks: 15,
  });
  module.exports = questionStore;