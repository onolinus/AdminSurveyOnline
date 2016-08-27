let QuestionFactory = function () {

  let answers = [];

  let getAnswer = (userId, questionId, subQuestion=false) => {
    if ( answers[userId]) {
      let questionAnswer = [];
      angular.forEach(answers[userId], function(ans, index){
        let questionKey = 'answer' + questionId + (subQuestion ? '' : '_');
        if (index.indexOf(questionKey) > -1) {
          questionAnswer[index] = ans;
        }
      });

      return questionAnswer;
    }

    return [];
  };

  let getChecked = (userId, questionId) => {
    if ( answers[userId]) {
      let checked = false;
      angular.forEach(answers[userId], function(ans, index){
        let questionKey = 'question' + questionId + '_';
        if (index.indexOf(questionKey) > -1) {
          checked = (ans == 'on') ? true: false;
        }
      });

      return checked;
    }

    return false;
  }

  let setAnswers = (data, userId) => {
    console.log('all answer', data);
    answers[userId] = data;
  };


  return {getAnswer, getChecked, setAnswers};

};

export default QuestionFactory;
