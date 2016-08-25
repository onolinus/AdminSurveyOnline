let QuestionFactory = function () {

  let answers = [];

  let getAnswer = (userId, questionId, subQuestion=false) => {
    if ( answers[userId]) {
      let questionAnswer = [];
      console.log('all answer: ', answers[userId]);
      angular.forEach(answers[userId], function(ans, index){
        let questionKey = 'answer' + questionId + (subQuestion ? '' : '_');
        console.log('question key: ', questionKey);
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
      console.log('checked', checked);
      return checked;
    }

    return false;
  }

  let setAnswers = (data, userId) => {
    answers[userId] = data;
  };


  return {getAnswer, getChecked, setAnswers};

};

export default QuestionFactory;
