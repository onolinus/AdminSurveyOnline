let QuestionFactory = function () {

  let answers = [];
  let answersStatus = [];

  let getAnswer = (surveyId, questionId, subQuestion=false) => {
    if ( answers[surveyId]) {
      if (!subQuestion) {
        return answers[surveyId][questionId];
      } else {
        let questionAnswer = [];
        angular.forEach(answers[surveyId], function(ans, index){
          if (ans && index.indexOf(questionId) > -1 ) {
            questionAnswer[index] = ans;
            questionAnswer.status = ans.status;
          }
        });

        if (questionAnswer.status) {
          return questionAnswer;
        } else {
          return [];
        }
      }
    } else {
      return [];
    }
  };

  let getAnswerStatus = (surveyId, questionId, subQuestion=false) => {
    if ( answers[surveyId]) {
      if (!subQuestion) {
        return angular.isDefined(answers[surveyId][questionId]) && answers[surveyId][questionId]
          ? answers[surveyId][questionId].status
          : 'terkirim';
      } else {
        let questionStatus = 'terkirim';
        angular.forEach(answers[surveyId], function(ans, index){
          if (index.startsWith(questionId)) {
            if (ans && ans.status != 'terkirim') {
              questionStatus = ans.status;
            }
          }
        });

        return questionStatus;
      }
    }

    return 'terkirim';
  };

  let getChecked = (surveyId, questionId) => {
    if ( answers[surveyId]) {
      let checked = false;

      angular.forEach(answers[surveyId], function(ans, index){
        if (ans && index == questionId) {
          checked = true
        }
      });

      return checked;
    }

    return false;
  }

  let setAnswers = (data, surveyId) => {
    // console.log('all answer', data);
    answers[surveyId] = data;
  };

  let setStatus = (status, surveyId) => {
    answersStatus[surveyId] = status;
  };

  let updateStatus = (surveyId, questionId, status) => {
    answersStatus[surveyId]['answer'+ questionId].status = status;
  };

  let isAllAnswersChecked = (surveyId) => {
    let checked = true;
    angular.forEach(answers[surveyId], function(ans, index){
      if(checked && ans){
        if (ans.status == 'terkirim' ) {
          checked = false;
        } else {
          checked = true;
        }
      }
    });

    return checked;
  }

  let rejectedAnswerExist = (surveyId) => {
    let rejected = false;
    angular.forEach(answers[surveyId], function(ans, index){
      if(!rejected){
        if (ans && ans.status == 'ditolak' ) {
          rejected = true;
        }
      }
    });

    return rejected;
  }

  return {getAnswer, getAnswerStatus, getChecked, setAnswers, setStatus, isAllAnswersChecked, rejectedAnswerExist};

};

export default QuestionFactory;
