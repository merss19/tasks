import TaskItemModule from './taskItem'
import TaskItemController from './taskItem.controller';
import TaskItemComponent from './taskItem.component';
import TaskItemTemplate from './taskItem.html';

describe('TaskItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TaskItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TaskItemController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(TaskItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TaskItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TaskItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TaskItemController);
      });
  });
});
