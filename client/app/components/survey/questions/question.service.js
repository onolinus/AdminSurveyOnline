class questionService {
  constructor($http, $uibModal, User, apiURL, questionFactory) {
    "ngInject";

    this.$uibModal = $uibModal;
    this.$http = $http;
    this.User = User;
    this.apiURL = apiURL;
    this.questionFactory = questionFactory;
  }

  rejectAnswer = (questionIndex) => {
    const modalInstance = this.$uibModal.open({
      animation: true,
      template: '' +
        '<div class="modal-header">' +
            '<h4 class="modal-title">Reject Komentar</h4>' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="$dismiss()"><span aria-hidden="true"><i class="fa fa-close"></i></span></button>' +
        '</div>' +
        '<div class="modal-body">' +
          '<textarea class="form-control" name="comment" rows="5" ng-model="comment"></textarea>' +
        '</div>'+
        '<div class="modal-footer">'+
          '<div class="pull-right text-center mtop20">' +
            '<a href="#" ng-click="$close(comment)" class="btn btn-sm btn-success" ng-click="$ctrl.approve()"><i class="fa fa-check"></i>Simpan</a>' +
            '<a href="#" ng-click="$dismiss()" class="btn btn-sm btn-danger" ng-click="$ctrl.reject()"><i class="fa fa-close"></i>Batal</a>' +
          '</div>' +
        '</div>',
        windowClass: 'modal-reject'
    });


    modalInstance.result.then((arg) => {
      console.log('comment', arg);
    });
  };

  approveAnswer = (questionIndex) => {

  };

  getAnswers = (userId) => {
    const answersReq = {
      method: 'GET',
      url: this.apiURL + '/admin/survey/' + userId,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': 'Bearer' + ' ' + this.User.getAuth().access_token
      },
    };

    return this.$http(answersReq)
      .then((response) => {
        this.questionFactory.setAnswers(response.data, userId)
      });
  }
}

export default questionService;
