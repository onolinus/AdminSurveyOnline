import controller from './question.dynamic.controller';

const ChapterComponent = {
  restrict: 'E',
  controller,
  bindings: {},
  template: ($state) => {
    'ngInject';

    let no = $state.$current.no;
    let subQuestion = false;

    if ($state.params.year == '2017') {
      if ($state.$current.no == '14') {
        no = 19;
      } else {
        no = $state.$current.no - 1;
      }
    }

    if (no == '15' || no == '16') {
      subQuestion = true;
    }

    return `
      <question${no} answer="$ctrl.answer" alias-no="${no}" year="${$state.params.year}" sub="${subQuestion}"></question${no}>
    `;
  }
};

export default ChapterComponent;
