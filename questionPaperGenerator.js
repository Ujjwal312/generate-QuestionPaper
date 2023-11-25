

class QuestionPaperGenerator {
    constructor(questionStore) {
      this.questionStore = questionStore;
    }
  
    generateQuestionPaper(totalMarks, difficultyDistribution) {
      const questionPaper = [];
  
      difficultyDistribution.forEach(({ difficulty, percentage ,marks}) => {
        const count = Math.round(((percentage / 100) * totalMarks)/marks);
        const questions = this.getQuestionsByDifficulty(difficulty, count);
        questionPaper.push(...questions);
      });
  
      return questionPaper;
    }
  
    getQuestionsByDifficulty(difficulty, count) {
      const allQuestions = this.questionStore.getQuestions();
      const filteredQuestions = allQuestions.filter(
        (question) => question.difficulty === difficulty
      );

      if (filteredQuestions.length < count) {
        console.warn(`Warning: Not enough questions of difficulty ${difficulty}. Adjusting count.`);
        count = filteredQuestions.length; 
      }
  

      const selectedQuestions = [];
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
        selectedQuestions.push(filteredQuestions.splice(randomIndex, 1)[0]);
      }
  
      return selectedQuestions;
    }
  }
  
  module.exports = QuestionPaperGenerator;
  