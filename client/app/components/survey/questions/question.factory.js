let QuestionFactory = function () {

  let answers = [];
  let answersStatus = [];

  let getAnswer = (userId, questionId, subQuestion=false) => {
    if ( answers[userId]) {
      if (!subQuestion) {
        return answers[userId]['answer' + questionId];
      } else {
        let questionAnswer = [];
        angular.forEach(answers[userId], function(ans, index){
          let questionKey = 'answer' + questionId + (subQuestion ? '' : '_');
          if (index.indexOf(questionKey) > -1) {
            questionAnswer[index] = ans;
          }
        });

        return questionAnswer;
      }
    }

    return [];
  };

  let getAnswerStatus = (userId, questionId, subQuestion=false) => {
    if ( answers[userId]) {
      if (!subQuestion) {
        return angular.isDefined(answers[userId]['answer' + questionId]) ? answers[userId]['answer' + questionId].status : 'terkirim';
      } else {
        let questionStatus = 'terkirim';
        angular.forEach(answers[userId], function(ans, index){
          let questionKey = 'answer' + questionId;
          if (index.indexOf(questionKey) > -1) {
            questionStatus = ans.status;
          }
        });

        return questionStatus;
      }
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

  let setStatus = (status, userId) => {
    answersStatus[userId] = status;
  };

  let updateStatus = (userId, questionId, status) => {
    answersStatus[userId]['answer'+ questionId].status = status;
  };


  return {getAnswer, getAnswerStatus, getChecked, setAnswers, setStatus};

};

export default QuestionFactory;
