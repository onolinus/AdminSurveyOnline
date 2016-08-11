class SurveyController {
  constructor($state, $rootScope) {
    "ngInject";

    this.activeIndex = 1;
    this.$state = $state;

    this.$state.go('question' + this.activeIndex);

    $rootScope.$on('$stateChangeSuccess', function(event, toState){
      console.log('toState', toState);
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
