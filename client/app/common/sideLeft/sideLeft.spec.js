import SideLeftModule from './sideLeft'
import SideLeftController from './sideLeft.controller';
import SideLeftComponent from './sideLeft.component';
import SideLeftTemplate from './sideLeft.html';

describe('SideLeft', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SideLeftModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SideLeftController();
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
      expect(SideLeftTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SideLeftComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SideLeftTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SideLeftController);
      });
  });
});
