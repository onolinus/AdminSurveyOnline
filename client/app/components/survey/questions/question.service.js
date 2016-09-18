import modalReject from './modalReject.html';

class questionService {
  constructor($http, $uibModal, $q, User, apiURL, questionFactory) {
    "ngInject";

    this.$uibModal = $uibModal;
    this.$http = $http;
    this.$q = $q;
    this.User = User;
    this.apiURL = apiURL;
    this.questionFactory = questionFactory;

    this.usersAnswersId = [];
  }

  rejectAnswer = (userId, questionIndex, subQuestion=false) => {
    const modalInstance = this.$uibModal.open({
      animation: true,
      template: modalReject,
      windowClass: 'modal-reject',
      controller: 'modalReject',
      controllerAs: '$ctrl',
      resolve: {
        subQuestion: () => {
          return subQuestion;
        },
        questionKeys: (questionFactory) => {
          "ngInject";
          if (!subQuestion) {
            return [];
          } else {
            let answerkeys = [];
            const answersDetail = questionFactory.getAnswer(userId, questionIndex, subQuestion);
            for (var key in answersDetail) {
              if (key != 'status') {
                let subQuestionIndex = key.substr(key.length - 1);
                answerkeys.push(questionIndex + ' ' + subQuestionIndex);
              }
            }

            return answerkeys;
          }
        }
      }
    });

    let deffered = this.$q.defer();

    modalInstance.result.then((comment) => {
      let promises = [];
      const answersId = this.usersAnswersId[userId];

      promises.push(this.rejectRequest(answersId, questionIndex, subQuestion));
      promises.push(this.rejectComment(answersId, questionIndex, comment, subQuestion));

      this.$q.all(promises)
        .then((response) => {
          this.getAnswers(userId)
            .then((answers) => {
              deffered.resolve(answers);
            });
        }, () => {
          deffered.reject();
        });
    });

    return deffered.promise;
  };

  approveAnswer = (userId, questionIndex, subQuestion) => {
    const answersId = this.usersAnswersId[userId];

    let deffered = this.$q.defer();

    if (subQuestion) {
        const answersDetail = this.questionFactory.getAnswer(userId, questionIndex, subQuestion);
        let approvePromises = [];

        for (var key in answersDetail) {
          if (key != 'status') {
            let subQuestionIndex = key.substr(key.length - 1);

            const approveAnswersReq = {
              method: 'PUT',
              url: this.apiURL + '/survey/' + answersId + '/answers' + questionIndex + subQuestionIndex + '/approve',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
              },
            };

            approvePromises.push(this.$http(approveAnswersReq));
          }
        }

        this.$q.all(approvePromises).then((response) => {
          this.getAnswers(userId) .then((answers) => {
            deffered.resolve(answers);
          });
        }, () => {
          deffered.reject();
        });
    } else {
      const approveAnswersReq = {
        method: 'PUT',
        url: this.apiURL + '/survey/' + answersId + '/answers' + questionIndex + '/approve',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
        },
      };

      

      this.$http(approveAnswersReq) .then((response) => {
        this.getAnswers(userId) .then((answers) => {
          deffered.resolve(answers);
        });
      }, () => {
        deffered.reject();
      });
    }

    return deffered.promise;
  };

  rejectRequest = (answersId, questionIndex, subQuestion) => {
    let deffered = this.$q.defer();

    if (subQuestion) {
      const answersDetail = this.questionFactory.getAnswer(userId, questionIndex, subQuestion);
      let rejectPromises = [];

      for (var key in answersDetail) {
        if (key != 'status') {
          let subQuestionIndex = key.substr(key.length - 1);

          const rejectAnswersReq = {
            method: 'PUT',
            url: this.apiURL + '/survey/' + answersId + '/answers' + questionIndex + subQuestionIndex + '/approve',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
            },
          };

          rejectPromises.push(this.$http(rejectAnswersReq));
        }
      }

      this.$q.all(rejectPromises).then((response) => {
        deffered.resolve(response);
      }, () => {
        deffered.reject();
      });
    } else {
      const rejectAnswersReq = {
        method: 'PUT',
        url: this.apiURL + '/survey/' + answersId + '/answers' + questionIndex + '/reject',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
        },
      };

      this.$http(rejectAnswersReq) .then((response) => {
        deffered.resolve(response);
      }, () => {
        deffered.reject();
      });
    }

    return deffered.promise;
  };

  rejectComment = (answersId, questionIndex, comment, subQuestion) => {
    let deffered = this.$q.defer();

    if (subQuestion) {
      const answersDetail = this.questionFactory.getAnswer(userId, questionIndex, subQuestion);
      let commentPromises = [];

      let answerIndex = 0;
      for (var key in answersDetail) {
        if (key != 'status') {
          let subQuestionIndex = key.substr(key.length - 1);

          const commentAnswersReq = {
            method: 'PUT',
            url: this.apiURL + '/survey/' + answersId + '/answers' + questionIndex + subQuestionIndex + '/comment',
            data:$.param({comment: comment[answerIndex]}),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
            },
          };

          commentPromises.push(this.$http(commentAnswersReq));
          answerIndex++;
        }
      }

      this.$q.all(commentPromises).then((response) => {
        deffered.resolve(response);
      }, () => {
        deffered.reject();
      });

    } else{
      const commentAnswersReq = {
        method: 'PUT',
        url: this.apiURL + '/survey/' + answersId + '/answers' + questionIndex + '/comment',
        data:$.param({comment: comment}),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
        },
      };

      this.$http(commentAnswersReq) .then((response) => {
        deffered.resolve(response);
      }, () => {
        deffered.reject();
      });
    }

    return deffered.promise;
  };

  getAnswers = (userId) => {
    const answersReq = {
      method: 'GET',
      url: this.apiURL + '/correspondent/' + userId + '/survey/detail',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(answersReq)
      .then((response) => {
        this.usersAnswersId[userId] = response.data.data.id;

        this.questionFactory.setAnswers(response.data.data.detail, userId);
        this.questionFactory.setStatus(response.data.data.status, userId);
      });
  }

  updateAnswersStatus = (userId) => {
    const answersId = this.usersAnswersId[userId];

    let allChecked = this.questionFactory.isAnswersChecked(userId);
    let rejectedExist = this.questionFactory.rejectedAnswerExist(userId);

    if (allChecked) {
      var statusReqUrl = this.apiURL + '/survey/' + answersId + '/approve';

      if (rejectedExist) {
        statusReqUrl = this.apiURL + '/survey/' + answersId + '/reject';
      }

      const updateAnswersStatusReq = {
        method: 'PUT',
        url: statusReqUrl,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
        },
      };

      this.$http(updateAnswersStatusReq)
        .then((response) => {
            console.log('updateAnswersStatus', response);
        });
    }
  }
}

export default questionService;
