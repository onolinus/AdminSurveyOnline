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
            questionAnswer.status = ans.status;
          }
        });
        if (questionAnswer.status) {
          return questionAnswer;
        } else {
          return;
        }
      }
    }

    return;
  };

  let getAnswerStatus = (userId, questionId, subQuestion=false) => {
    if ( answers[userId]) {
      if (!subQuestion) {
        return angular.isDefined(answers[userId]['answer' + questionId]) ? answers[userId]['answer' + questionId].status : 'diterima';
      } else {
        let questionStatus = 'diterima';
        angular.forEach(answers[userId], function(ans, index){
          let questionKey = 'answer' + questionId;
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

  let getChecked = (userId, questionId) => {
    if ( answers[userId]) {
      let checked = false;

      angular.forEach(answers[userId], function(ans, index){
        let questionKey = 'answer' + questionId;
        if (index.indexOf(questionKey) > -1) {
          checked = true
        }
      });

      return checked;
    }

    return false;
  }

  let setAnswers = (data, userId) => {
    // console.log('all answer', data);
    answers[userId] = data;
  };

  let setStatus = (status, userId) => {
    answersStatus[userId] = status;
  };

  let updateStatus = (userId, questionId, status) => {
    answersStatus[userId]['answer'+ questionId].status = status;
  };

  let isAnswersChecked = (userId) => {
    let checked = true;
    console.log('isAnswersChecked', answers[userId]);
    angular.forEach(answers[userId], function(ans, index){
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

  let rejectedAnswerExist = (userId) => {
    let rejected = false;
    angular.forEach(answers[userId], function(ans, index){
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
