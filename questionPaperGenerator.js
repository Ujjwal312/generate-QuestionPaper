

class QuestionPaperGenerator {
    constructor(questionStore) {
      this.questionStore = questionStore;
    }
  
    generateQuestionPaper(totalMarks, difficultyDistribution) {
          if(totalMarks<=0){
            console.log("can't generate question paper");
            return;
        }
      const questionPaper = [];
  
      difficultyDistribution.forEach(({ difficulty, percentage ,marks}) => {

if(percentage<0||percentage>100){
    console.log("invalid input");
    return;
}
if(marks<=0){
    console.log("invalid input");
    return;
}

      if(difficulty=="Easy"||difficulty=="Medium"||difficulty=="Hard"){

      
        const count = Math.round(((percentage / 100) * totalMarks)/marks);
        const questions = this.getQuestionsByDifficulty(difficulty, count);
        questionPaper.push(...questions);
      }
           else{
        console.log("invalid input");
        return;
      }
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
     return;
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
  
