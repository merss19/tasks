import TasksModule from './tasks'
import TasksController from './tasks.controller';
import TasksComponent from './tasks.component';
import TasksTemplate from './tasks.html';

describe('Tasks', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TasksModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TasksController();
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
      expect(TasksTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TasksComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TasksTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TasksController);
      });
  });
});
