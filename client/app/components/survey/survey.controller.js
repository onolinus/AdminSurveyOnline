class SurveyController {
  constructor($state, $rootScope, questionService) {
    "ngInject";

    this.activeIndex = 0;
    this.$state = $state;

    $rootScope.$on('$stateChangeSuccess', (event, toState, toStateParam, fromState) => {
      if (toState.no) {
        this.activeIndex = toState.no;
      } else {
        if (this.activeIndex == 0) {
            this.activeIndex = 1;
            this.$state.go('question' + this.activeIndex);
        }
      }
    });
  };


  next = () => {
    if (this.activeIndex < 18) {
      this.activeIndex += 1;
    } else {
      this.activeIndex = 1;
    }

    this.$state.go('question' + this.activeIndex);
  };

  prev = () => {
    if (this.activeIndex > 1) {
      this.activeIndex -= 1;
    } else {
      this.activeIndex = 18;
    }

    this.$state.go('question' + this.activeIndex);
  };
}

export default SurveyController;
