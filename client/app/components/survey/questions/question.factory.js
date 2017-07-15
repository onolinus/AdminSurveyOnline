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
          let questionKey = questionId;
          if (index.indexOf(questionKey) > -1) {
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
        return angular.isDefined(answers[surveyId][questionId]) ? answers[surveyId][questionId].status : 'diterima';
      } else {
        let questionStatus = 'diterima';
        angular.forEach(answers[surveyId], function(ans, index){
          let questionKey = questionId;
          if (index.indexOf(questionKey) > -1) {
            if (ans.status != 'diterima') {
              questionStatus = ans.status;
            }
          }
        });
        return questionStatus;
      }
    }

    return;
  };

  let getChecked = (surveyId, questionId) => {
    if ( answers[surveyId]) {
      let checked = false;

      angular.forEach(answers[surveyId], function(ans, index){
        let questionKey =  questionId;
        if (index.indexOf(questionKey) > -1) {
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

  let isAnswersChecked = (surveyId) => {
    let checked = true;
    angular.forEach(answers[surveyId], function(ans, index){
      if(checked){
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
        if (ans.status == 'ditolak' ) {
          rejected = true;
        }
      }
    });

    return rejected;
  }

  return {getAnswer, getAnswerStatus, getChecked, setAnswers, setStatus, isAnswersChecked, rejectedAnswerExist};

};

export default QuestionFactory;
