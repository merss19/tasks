webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(298);


/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _common = __webpack_require__(301);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _components = __webpack_require__(349);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _app = __webpack_require__(356);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _services = __webpack_require__(380);
	
	var _services2 = _interopRequireDefault(_services);
	
	var _angularMaterial = __webpack_require__(382);
	
	var _angularMaterial2 = _interopRequireDefault(_angularMaterial);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_angular2.default.module('app', ['ngMaterial', _common2.default, _components2.default, _services2.default.name]).config(["$locationProvider", function ($locationProvider) {
		"ngInject";
		// @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
		// #how-to-configure-your-server-to-work-with-html5mode
	
		$locationProvider.html5Mode(true).hashPrefix('!');
	}]).component('app', _app2.default).config(["$mdThemingProvider", function ($mdThemingProvider) {
		"ngInject";
	
		$mdThemingProvider.definePalette('mainPalette', {
			'50': 'fff',
			'100': 'fff',
			'200': 'fff',
			'300': 'fff',
			'400': 'fff',
			'500': '292c33', //btns
			'600': '56567a', //hover/secondary
			'700': '56567a', //fab
			'800': '56567a',
			'900': '000', //overlay
			'A100': '292c33', //main color
			'A200': '000',
			'A400': '000',
			'A700': 'd50000',
			'contrastDefaultColor': 'light',
	
			'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
			'contrastLightColors': undefined
		});
		$mdThemingProvider.theme('default').primaryPalette('mainPalette');
	
		$mdThemingProvider.theme('main').dark().backgroundPalette('mainPalette');
	}]);

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _tasks = __webpack_require__(302);
	
	var _tasks2 = _interopRequireDefault(_tasks);
	
	var _taskItem = __webpack_require__(330);
	
	var _taskItem2 = _interopRequireDefault(_taskItem);
	
	var _sideLeft = __webpack_require__(337);
	
	var _sideLeft2 = _interopRequireDefault(_sideLeft);
	
	var _sideDynamic = __webpack_require__(343);
	
	var _sideDynamic2 = _interopRequireDefault(_sideDynamic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var commonModule = _angular2.default.module('app.common', [_sideLeft2.default, _tasks2.default, _taskItem2.default, _sideDynamic2.default]).name;
	
	exports.default = commonModule;

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _tasks = __webpack_require__(303);
	
	var _tasks2 = _interopRequireDefault(_tasks);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tasksModule = _angular2.default.module('tasks', []).component('tasks', _tasks2.default).name;
	
	exports.default = tasksModule;

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _tasks = __webpack_require__(304);
	
	var _tasks2 = _interopRequireDefault(_tasks);
	
	var _tasks3 = __webpack_require__(305);
	
	var _tasks4 = _interopRequireDefault(_tasks3);
	
	__webpack_require__(326);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tasksComponent = {
		restrict: 'E',
		bindings: {
			tasks: '<',
			addTask: '&',
			openTask: '&',
			del: '&'
		},
		template: _tasks2.default,
		controller: _tasks4.default,
		controllerAs: 'vm'
	};
	
	exports.default = tasksComponent;

/***/ },

/***/ 304:
/***/ function(module, exports) {

	module.exports = "\r\n\t<md-input-container md-no-float\r\n\t                    class=\"tasks__top md-block\"\r\n\t                    ng-class=\"{'icons8-search': vm.focusInput}\">\r\n\r\n\t\t<input ng-model=\"vm.search\"\r\n\t\t       ng-focus=\"vm.focus()\"\r\n\t\t       ng-blur=\"vm.focus()\"\r\n\t\t       type=\"text\"\r\n\t\t       class=\"tasks__input\"\r\n\t\t       aria-label=\"Search\">\r\n\r\n\t\t<md-menu>\r\n\r\n\t\t\t<md-button ng-click=\"$mdOpenMenu()\"\r\n\t\t\t           class=\"tasks__btn md-raised\"\r\n\t\t\t           aria-label=\"Edit Project\">\r\n\r\n\t\t\t\t<div class=\"tasks__btn-icon icons8-more\"></div>\r\n\r\n\t\t\t</md-button>\r\n\r\n\t\t\t<md-menu-content>\r\n\r\n\t\t\t\t<md-menu-item>\r\n\t\t\t\t\t<md-button >Edit</md-button>\r\n\t\t\t\t</md-menu-item>\r\n\r\n\t\t\t\t<md-menu-item>\r\n\t\t\t\t\t<md-button >Remove</md-button>\r\n\t\t\t\t</md-menu-item>\r\n\r\n\t\t\t</md-menu-content>\r\n\r\n\t\t</md-menu>\r\n\r\n\t</md-input-container>\r\n\r\n\t<div ng-show=\"vm.tasks.length\" class=\"tasks__content\" layout=\"row\" >\r\n\r\n\t\t<md-list  class=\"tasks__list\" flex>\r\n\r\n\t\t\t<task-item ng-repeat = \"task in vm.tasks\"\r\n\t\t\t\tdelete=\"vm.del({id})\"\r\n\t\t\t\topen-task = \"vm.openTask()\"\r\n\t\t\t\titem=\"task\"\r\n\t\t\t\tlayout=\"row\"\r\n\t\t\t\tclass=\"tasks__item\">\r\n\t\t\t</task-item>\r\n\r\n\t\t</md-list>\r\n\r\n\t</div>\r\n\r\n\t<div ng-hide=\"vm.tasks.length\"\r\n\t     class=\"tasks__no-match\"\r\n\t     layout=\"column\"\r\n\t     layout-align=\"center center\"\r\n\t     flex>\r\n\r\n\t\t<div class=\"tasks__no-match-wrapper\">\r\n\t\t\t<div class=\"icons8-todo-list\"></div>\r\n\t\t\t<div class=\"tasks__no-match-text\">Have a good day</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\r\n\t<md-button ng-click = \"vm.addTask()\"\r\n\t           class=\"tasks__add md-fab md-primary md-hue-2\"\r\n\t           aria-label=\"Add Task\">\r\n\r\n\t  <div class=\"icons8-plus\"></div>\r\n\r\n\t</md-button>\r\n"

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _classCallCheck2 = __webpack_require__(306);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(307);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TasksController = function () {
		function TasksController() {
			(0, _classCallCheck3.default)(this, TasksController);
	
			this.search = '';
			this.focus = this.focusHandler;
			this.focusInput = true;
			this.radio = '';
			console.log(this.radio);
		}
	
		(0, _createClass3.default)(TasksController, [{
			key: 'focusHandler',
			value: function focusHandler() {
				this.focusInput = !this.focusInput;
				if (this.search.length) this.focusInput = false;
			}
		}]);
		return TasksController;
	}();
	
	exports.default = TasksController;

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(327);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(329)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./tasks.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./tasks.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(328)();
	// imports
	
	
	// module
	exports.push([module.id, "input,\ntextarea {\n  outline: none;\n}\ninput:active,\ntextarea:active {\n  outline: none;\n}\n:focus {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\ntextarea {\n  resize: vertical;\n}\ntextarea {\n  resize: horizontal;\n}\nbutton:active,\nbutton:focus {\n  outline: none !important;\n}\nbutton::-moz-focus-inner {\n  border: 0;\n}\n.tasks__top {\n  margin: 0;\n}\n.tasks__top .md-errors-spacer {\n  display: none;\n}\n.tasks__top-drop {\n  display: inline-block;\n}\n.tasks__top.icons8-search:before {\n  position: absolute;\n  left: 17px;\n  top: 10px;\n  font-size: 30px;\n  color: #b3bbcb;\n}\n.tasks__btn.md-button.md-raised:not([disabled]) {\n  position: absolute;\n  right: 0;\n  box-shadow: none;\n  margin: 0;\n  top: 9px;\n  min-width: 62px;\n}\n.tasks__btn-icon {\n  line-height: 25px;\n}\n.tasks__btn-icon:before {\n  font-size: 26px;\n  color: #9e9e9e;\n}\n.tasks__input.md-input {\n  height: 49px;\n  border-color: #b3bbcb;\n}\n.tasks__content {\n  padding-bottom: 166px;\n}\n.tasks__list {\n  margin-top: 7px;\n  overflow: auto;\n}\n.tasks__item {\n  padding: 12px 0;\n}\n.tasks__add.md-button.md-fab {\n  position: absolute;\n  bottom: 24px;\n  right: 22px;\n  width: 50px;\n  height: 50px;\n}\n.tasks__add .icons8-plus {\n  font-size: 30px;\n}\n.tasks__no-match {\n  color: #b1b1c8;\n}\n.tasks__no-match .icons8-todo-list {\n  text-align: center;\n}\n.tasks__no-match .icons8-todo-list:before {\n  font-size: 200px;\n}\n.tasks__no-match-wrapper {\n  margin: -62px 0 0 0;\n}\n.tasks__no-match-text {\n  font-size: 26px;\n  margin-top: 36px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularUiRouter = __webpack_require__(331);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _taskItem = __webpack_require__(332);
	
	var _taskItem2 = _interopRequireDefault(_taskItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var taskItemModule = _angular2.default.module('taskItem', []).component('taskItem', _taskItem2.default).name;
	
	exports.default = taskItemModule;

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _taskItem = __webpack_require__(333);
	
	var _taskItem2 = _interopRequireDefault(_taskItem);
	
	var _taskItem3 = __webpack_require__(334);
	
	var _taskItem4 = _interopRequireDefault(_taskItem3);
	
	__webpack_require__(335);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var taskItemComponent = {
		restrict: 'E',
		bindings: {
			item: '<',
			delete: '&',
			openTask: '&'
		},
		template: _taskItem2.default,
		controller: _taskItem4.default,
		controllerAs: 'vm'
	};
	
	exports.default = taskItemComponent;

/***/ },

/***/ 333:
/***/ function(module, exports) {

	module.exports = "\r\n\r\n<md-list-item class=\"task-item\">\r\n\r\n\t<div class=\"task-item__date\">{{vm.item.date}}</div>\r\n\r\n\t<md-card class=\"task-item__card md-primary\"  layout=\"column\" flex>\r\n\r\n\t\t<div class=\"task-item__box\" ng-repeat = \"task in vm.item.tasks\" layout=\"row\" flex>\r\n\r\n\t\t\t<div class=\"task-item__delete\">\r\n\r\n\t\t\t\t<div class=\"task-item__checkbox\" layout=\"row\" layout-align=\"center center\">\r\n\r\n\t\t\t\t\t<input type=\"checkbox\"\r\n\t\t\t\t\t       ng-model=\"vm.deleteBox\"\r\n\t\t\t\t\t       ng-change=\"vm.remove(task.id)\"\r\n\t\t\t\t\t       id=\"{{task.id}}\"\r\n\t\t\t\t\t       class=\"task-item__input\">\r\n\r\n\t\t\t\t\t<label class=\"task-item__label\" for=\"{{task.id}}\"></label>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<md-card-title class=\"task-item__title\" ng-click = \"vm.open(task)\">\r\n\r\n\t\t\t\t<md-card-title-text >\r\n\t\t\t\t\t<span class=\"task-item__title-name\">{{task.task}}</span>\r\n\t\t\t\t</md-card-title-text>\r\n\r\n\t\t\t</md-card-title>\r\n\r\n\t\t</div>\r\n\r\n\t</md-card>\r\n\r\n\r\n\r\n</md-list-item>\r\n\r\n\r\n"

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _classCallCheck2 = __webpack_require__(306);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(307);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TaskItemController = function () {
		TaskItemController.$inject = ["dataService"];
		function TaskItemController(dataService) {
			"ngInject";
	
			(0, _classCallCheck3.default)(this, TaskItemController);
			this.name = 'taskItemddd';
			this.deleteBox = false;
			this.data = dataService;
		}
	
		(0, _createClass3.default)(TaskItemController, [{
			key: "remove",
			value: function remove(id) {
				this.delete({ id: id });
			}
		}, {
			key: "open",
			value: function open(task) {
				this.data.currentTaskSet(task);
				this.openTask();
			}
		}]);
		return TaskItemController;
	}();
	
	exports.default = TaskItemController;

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(336);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(329)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./taskItem.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./taskItem.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(328)();
	// imports
	
	
	// module
	exports.push([module.id, "input,\ntextarea {\n  outline: none;\n}\ninput:active,\ntextarea:active {\n  outline: none;\n}\n:focus {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\ntextarea {\n  resize: vertical;\n}\ntextarea {\n  resize: horizontal;\n}\nbutton:active,\nbutton:focus {\n  outline: none !important;\n}\nbutton::-moz-focus-inner {\n  border: 0;\n}\n.task-item {\n  width: 58.8%;\n  max-width: 58.8%;\n  margin: 0 auto;\n}\n@media (max-width: 1200px) {\n  .task-item {\n    width: 75%;\n    max-width: 75%;\n  }\n}\n@media (max-width: 992px) {\n  .task-item {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n.task-item__date {\n  position: absolute;\n  top: -13px;\n  left: 32px;\n  color: #b3bbcb;\n  font-family: 'SF-Semibold', Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  letter-spacing: 1px;\n}\n.task-item__delete {\n  width: 14.2%;\n  padding: 8px 0;\n}\n.task-item__card {\n  padding: 0 2px;\n  box-shadow: 0 9px 13px -1px rgba(0,0,0,0.05), -1px 4px 10px -2px rgba(0,0,0,0.05), 0px 1px 10px 0px rgba(0,0,0,0.12);\n}\n.task-item__checkbox {\n  border-right: 1px solid #eaeaea;\n  height: 100%;\n}\n.task-item__title {\n  font-size: 15px;\n  font-family: 'SF-Semibold', Helvetica, Arial, sans-serif;\n  color: #212121;\n  width: 85.8%;\n  font-weight: bold;\n  letter-spacing: 0.4px;\n  line-height: 15px;\n  padding-top: 19px;\n  cursor: pointer;\n}\n.task-item__input {\n  display: none;\n}\n.task-item__label {\n  display: block;\n  width: 20px;\n  height: 20px;\n  border: 3px solid #bdbdbd;\n  border-radius: 33px;\n  cursor: pointer;\n}\n.task-item__box {\n  position: relative;\n  padding: 5.5px 0;\n}\n.task-item__box:before {\n  content: '';\n  display: block;\n  background: #eaeaea;\n  height: 1px;\n  width: 81%;\n  position: absolute;\n  top: 0;\n  left: 58px;\n}\n.task-item__box:first-child:before {\n  display: none;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _sideLeft = __webpack_require__(338);
	
	var _sideLeft2 = _interopRequireDefault(_sideLeft);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sideLeftModule = _angular2.default.module('sideLeft', []).component('sideLeft', _sideLeft2.default).name;
	
	exports.default = sideLeftModule;

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _sideLeft = __webpack_require__(339);
	
	var _sideLeft2 = _interopRequireDefault(_sideLeft);
	
	var _sideLeft3 = __webpack_require__(340);
	
	var _sideLeft4 = _interopRequireDefault(_sideLeft3);
	
	__webpack_require__(341);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sideLeftComponent = {
		restrict: 'E',
		bindings: {
			projects: '<',
			user: '<',
			newProject: '&'
		},
		template: _sideLeft2.default,
		controller: _sideLeft4.default,
		controllerAs: 'vm'
	};
	
	exports.default = sideLeftComponent;

/***/ },

/***/ 339:
/***/ function(module, exports) {

	module.exports = "<md-sidenav  md-theme=\"main\" md-is-locked-open=\"true\" class=\"side-left__nav\">\r\n\r\n\t<md-card class=\"side-left__card\">\r\n\r\n\t\t<md-card-header layout=\"row\" layout-align=\"center center\" class=\"side-left__card-header\">\r\n\r\n\t\t\t<md-card-avatar class=\"side-left__card-avatar\">\r\n\t\t\t\t<div class=\"side-left__ava\">\r\n\t\t\t\t\t<img ng-src=\"{{vm.user.ava}}\" class=\"md-user-avatar\" alt=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t</md-card-avatar>\r\n\r\n\t\t\t<md-card-header-text>\r\n\t\t\t\t<span class=\"side-left__card-text md-title\">{{vm.user.name}}</span>\r\n\t\t\t</md-card-header-text>\r\n\r\n\t\t</md-card-header>\r\n\r\n\t</md-card>\r\n\r\n\t<div class=\"side-left__add md-primary\" layout=\"row\" layout-align=\"start center\">\r\n\r\n\t\t<span class=\"side-left__add-text\" flex=\"85\">Projects</span>\r\n\r\n\t\t<md-button ng-click=\"vm.newProject()\"\r\n\t\t           class=\"side-left__add-btn md-raised md-primary\"\r\n\t\t           aria-label=\"Add Project\"\r\n\t\t           flex=\"15\">\r\n\r\n\t\t\t<span class=\"side-left__icon-plus icons8-plus\"></span>\r\n\t\t</md-button>\r\n\r\n\r\n\t</div>\r\n\r\n\r\n\t<md-list  class=\"side-left__list\">\r\n\r\n\t\t<md-list-item ng-repeat=\"project in vm.projects\" class=\"side-left__item\">\r\n\r\n\t\t\t<md-button class=\"side-left__btn md-raised md-primary\" layout=\"row\" >\r\n\t\t\t\t<span class=\"side-left__btn-name\" flex=\"85\">{{project.title}}</span>\r\n\t\t\t\t<span class=\"side-left__btn-value\" flex=\"15\">{{project.task_count}}</span>\r\n\t\t\t</md-button>\r\n\r\n\t\t</md-list-item>\r\n\r\n\t</md-list>\r\n\r\n\t<div class=\"side-left__logout\">\r\n\t\t<md-button class=\"side-left__btn md-raised md-primary\" layout=\"row\" >\r\n\t\t\tLog out\r\n\t\t</md-button>\r\n\t</div>\r\n\r\n\r\n</md-sidenav>\r\n\r\n"

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _classCallCheck2 = __webpack_require__(306);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SideLeftController = function SideLeftController() {
		(0, _classCallCheck3.default)(this, SideLeftController);
	
		this.name = 'sideLeft';
	};
	
	exports.default = SideLeftController;

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(342);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(329)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./sideLeft.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./sideLeft.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(328)();
	// imports
	
	
	// module
	exports.push([module.id, "input,\ntextarea {\n  outline: none;\n}\ninput:active,\ntextarea:active {\n  outline: none;\n}\n:focus {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\ntextarea {\n  resize: vertical;\n}\ntextarea {\n  resize: horizontal;\n}\nbutton:active,\nbutton:focus {\n  outline: none !important;\n}\nbutton::-moz-focus-inner {\n  border: 0;\n}\n.side-left__nav {\n  width: 100%;\n}\n.side-left__card {\n  box-shadow: none;\n}\n.side-left__card-header {\n  padding-left: 24px;\n}\n.side-left__card-text.md-title {\n  font-family: 'SF-Semibold', Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  padding-left: 14px;\n  letter-spacing: 0.5px;\n}\n.side-left__card-avatar {\n  width: 51.5px;\n  height: 50px;\n  margin: 0;\n}\n.side-left__add {\n  padding: 0 30px;\n  margin-top: 7px;\n}\n.side-left__add-btn.md-button.md-raised:not([disabled]) {\n  box-shadow: none;\n  min-width: 42px;\n  margin: 2px 0 0 0;\n}\n.side-left__add-btn.md-button.md-raised:not([disabled]):focus,\n.side-left__add-btn.md-button.md-raised:not([disabled]):active,\n.side-left__add-btn.md-button.md-raised:not([disabled]):visited {\n  background-color: transparent;\n}\n.side-left__add-text {\n  color: #b3bbcb;\n  font-family: 'SF-Semibold', Helvetica, Arial, sans-serif;\n  font-size: 11px;\n  padding: 0 16px;\n  letter-spacing: 1.2px;\n}\n.side-left__icon-plus {\n  font-size: 20px;\n}\n.side-left__list {\n  padding: 0 30px;\n  margin-top: 3px;\n}\n.side-left__item {\n  min-height: 40px;\n  height: 40px;\n}\n.side-left__btn {\n  width: 100%;\n  font-family: 'SF-Medium', Helvetica, Arial, sans-serif;\n  height: 40px;\n}\n.side-left__btn.md-button.md-raised:not([disabled]) {\n  box-shadow: none;\n  text-transform: none;\n  margin: 0;\n  font-family: 'SF-Semibold', Helvetica, Arial, sans-serif;\n  font-size: 15px;\n  letter-spacing: 1px;\n  padding: 3px 14px 3px 15px;\n  color: #fff;\n}\n.side-left__btn-name {\n  text-align: left;\n}\n.side-left__btn-value {\n  text-align: right;\n}\n.side-left__logout {\n  position: absolute;\n  bottom: 12px;\n  padding: 0 30px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _sideDynamic = __webpack_require__(344);
	
	var _sideDynamic2 = _interopRequireDefault(_sideDynamic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sideDynamicModule = _angular2.default.module('sideDynamic', []).component('sideDynamic', _sideDynamic2.default).name;
	
	exports.default = sideDynamicModule;

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _sideDynamic = __webpack_require__(345);
	
	var _sideDynamic2 = _interopRequireDefault(_sideDynamic);
	
	var _sideDynamic3 = __webpack_require__(346);
	
	var _sideDynamic4 = _interopRequireDefault(_sideDynamic3);
	
	__webpack_require__(347);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sideDynamicComponent = {
		restrict: 'E',
		bindings: {
			value: '<',
			content: '<',
			close: '&',
			add: '&',
			current: '='
		},
		template: _sideDynamic2.default,
		controller: _sideDynamic4.default,
		controllerAs: 'vm'
	};
	
	exports.default = sideDynamicComponent;

/***/ },

/***/ 345:
/***/ function(module, exports) {

	module.exports = "<md-sidenav md-theme=\"main\"\r\n            md-component-id='right'\r\n            class=\"side-dynamic md-sidenav-right\"\r\n            layout=\"row\"\r\n            layout-align=\"center start\"\r\n            lex=\"36\">\r\n\r\n\t<div ng-show=\"vm.content.project\" class=\"side-dynamic__form\" layout=\"column\">\r\n\r\n\t\t<div class=\"side-dynamic__title\">Create new project</div>\r\n\r\n\t\t<md-input-container ng-show=\"vm.content.project\"\r\n\t\t                    class=\"side-dynamic__container md-primary md-hue-1\"\r\n\t\t                    flex>\r\n\r\n\t\t\t<input ng-model=\"vm.value.project\"\r\n\t\t\t       minlength=\"1\"\r\n\t\t\t       placeholder=\"Project name\"\r\n\t\t\t       class=\"side-dynamic__container-input\">\r\n\r\n\t\t</md-input-container>\r\n\r\n\t</div>\r\n\r\n\t<div ng-show=\"vm.content.task\" class=\"side-dynamic__form\" layout=\"column\">\r\n\r\n\t\t<div class=\"side-dynamic__title\">Create new task</div>\r\n\r\n\t\t<md-input-container class=\"side-dynamic__container md-primary md-hue-1\" flex>\r\n\r\n\t\t\t<input ng-model=\"vm.value.task\"\r\n\t\t\t       placeholder=\"Task name\"\r\n\t\t\t       class=\"side-dynamic__container-input\"\r\n\t\t\t       minlength=\"1\">\r\n\r\n\t\t</md-input-container>\r\n\r\n\t\t<md-input-container class=\"side-dynamic__container md-hue-1\" flex>\r\n\r\n\t\t\t<input ng-model=\"vm.value.desc\"\r\n\t\t\t       placeholder=\"Description\"\r\n\t\t\t       class=\"side-dynamic__container-input\"\r\n\t\t\t       minlength=\"1\">\r\n\r\n\t\t</md-input-container>\r\n\r\n\t</div>\r\n\r\n\t<div ng-show=\"vm.content.open\"\r\n\t     class=\"side-dynamic__form side-dynamic__form_type_text\"\r\n\t     layout=\"column\">\r\n\r\n\t\t<div class=\"side-dynamic__title\">{{vm.current.task}}</div>\r\n\r\n\t\t<md-input-container class=\"side-dynamic__container side-dynamic__container_type_text md-primary md-hue-2\" flex>\r\n\r\n\t\t\t<textarea ng-model=\"vm.current.desc\"\r\n\t\t\t          class=\"side-dynamic__text\"\r\n\t\t\t          rows=\"5\"\r\n\t\t\t          aria-label=\"Description\"\r\n\t\t\t          md-select-on-focus>\r\n\t\t\t</textarea>\r\n\r\n\t\t</md-input-container>\r\n\r\n\r\n\t</div>\r\n\r\n\t<md-button ng-click=\"vm.add()\"\r\n\t           ng-hide=\"vm.content.open\"\r\n\t           class=\"side-dynamic__add md-fab md-primary md-hue-2\" aria-label=\"Add\">\r\n\r\n\t\t<div class=\"icons8-checkmark\"></div>\r\n\r\n\t</md-button>\r\n\r\n\t<div ng-click=\"vm.close()\" class=\"side-dynamic__close\">\r\n\t\t<div class=\"icons8-delete-2\"></div>\r\n\t\t<div class=\"side-dynamic__close-text\">esc</div>\r\n\t</div>\r\n\r\n\t<div class=\"side-dynamic__btns\" ng-show=\"vm.content.open\">\r\n\r\n\t\t<div class=\"side-dynamic__btns-item icons8-edit\"></div>\r\n\t\t<div class=\"side-dynamic__btns-item icons8-delete\"></div>\r\n\r\n\t</div>\r\n\r\n\r\n</md-sidenav>\r\n\r\n"

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _classCallCheck2 = __webpack_require__(306);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SideDynamicController = function SideDynamicController() {
		(0, _classCallCheck3.default)(this, SideDynamicController);
	
		this.name = 'sideDynamic';
	};
	
	exports.default = SideDynamicController;

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(348);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(329)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./sideDynamic.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./sideDynamic.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(328)();
	// imports
	
	
	// module
	exports.push([module.id, "input,\ntextarea {\n  outline: none;\n}\ninput:active,\ntextarea:active {\n  outline: none;\n}\n:focus {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\ntextarea {\n  resize: vertical;\n}\ntextarea {\n  resize: horizontal;\n}\nbutton:active,\nbutton:focus {\n  outline: none !important;\n}\nbutton::-moz-focus-inner {\n  border: 0;\n}\n.side-dynamic {\n  width: 36%;\n  max-width: 500px;\n}\n.side-dynamic__container {\n  margin: -3px 0;\n}\n.side-dynamic__container_type_text {\n  margin-top: -4px;\n  margin-left: -6px;\n}\n.side-dynamic__container label {\n  letter-spacing: 0.6px;\n  padding: 5px 0 5px 7px;\n  font-size: 15px;\n  color: #fff;\n}\n.side-dynamic__container .md-placeholder {\n  padding-left: 7px;\n}\n.side-dynamic__container-input {\n  font-size: 15px;\n  color: #fff;\n}\n.side-dynamic__form {\n  padding-top: 30px;\n  width: 68%;\n}\n.side-dynamic__form md-input-container.md-main-theme.md-hue-1 label {\n  color: #fff;\n}\n.side-dynamic__form md-input-container.md-main-theme.md-hue-1 .md-input {\n  border-color: #fff;\n}\n.side-dynamic__form_type_text md-input-container .md-input {\n  line-height: 23px;\n}\n.side-dynamic__form_type_text md-input-container.md-main-theme.md-hue-2 .md-input {\n  border-color: transparent;\n}\n.side-dynamic__title {\n  color: #fff;\n  font-size: 18px;\n  letter-spacing: 1px;\n  font-family: 'SF-Medium', Helvetica, Arial, sans-serif;\n  text-align: center;\n  margin-bottom: 28px;\n}\n.side-dynamic__close {\n  color: #fff;\n  position: absolute;\n  top: 21px;\n  left: 12px;\n  cursor: pointer;\n}\n.side-dynamic__close .icons8-delete-2 {\n  font-size: 22px;\n}\n.side-dynamic__close-text {\n  font-size: 9px;\n  text-transform: uppercase;\n  font-family: 'SF-Semibold', Helvetica, Arial, sans-serif;\n  margin: -3px 0 0 2px;\n}\n.side-dynamic__add.md-button.md-fab {\n  position: absolute;\n  bottom: 24px;\n  right: 22px;\n  width: 50px;\n  height: 50px;\n}\n.side-dynamic__add .icons8-checkmark {\n  font-size: 24px;\n}\n.side-dynamic__text {\n  font-size: 12px;\n  color: #fff;\n  line-height: 23px;\n  letter-spacing: 0.1px;\n  word-spacing: 0.4px;\n  font-family: 'SF-Regular', Helvetica, Arial, sans-serif;\n}\n.side-dynamic__btns {\n  position: absolute;\n  right: 21px;\n  top: 29px;\n}\n.side-dynamic__btns-item {\n  color: #51555e;\n  font-size: 20px;\n  cursor: pointer;\n  display: inline-block;\n  padding: 0 7px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _dashboard = __webpack_require__(350);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var componentModule = _angular2.default.module('app.components', [_dashboard2.default]).name;
	
	exports.default = componentModule;

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _dashboard = __webpack_require__(351);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dashboardModule = _angular2.default.module('dashboard', []).component('dashboard', _dashboard2.default).name;
	
	exports.default = dashboardModule;

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _dashboard = __webpack_require__(352);
	
	var _dashboard2 = _interopRequireDefault(_dashboard);
	
	var _dashboard3 = __webpack_require__(353);
	
	var _dashboard4 = _interopRequireDefault(_dashboard3);
	
	__webpack_require__(354);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var dashboardComponent = {
		restrict: 'E',
		bindings: {},
		template: _dashboard2.default,
		controller: _dashboard4.default,
		controllerAs: 'vm'
	};
	
	exports.default = dashboardComponent;

/***/ },

/***/ 352:
/***/ function(module, exports) {

	module.exports = "\r\n\t<side-left projects = \"vm.projects\"\r\n\t\t\t\tuser =\"vm.user\"\r\n\t\t\t\tnew-project=\"vm.newProject()\"\r\n\t\t\t\tclass=\"dashboard__left\"\r\n\t\t\t\tlayout=\"row\">\r\n\r\n\t</side-left>\r\n\r\n\t<tasks tasks =\"vm.tasks\"\r\n\t\t\tadd-task = \"vm.addTask()\"\r\n\t\t\topen-task = \"vm.openTask()\"\r\n\t\t\tlayout=\"column\"\r\n\t\t\tclass=\"dashboard__tasks\"\r\n\t\t\tdel = \"vm.removeItem(id)\" flex>\r\n\t</tasks>\r\n\r\n\r\n\t<side-dynamic value = \"vm.value\"\r\n\t\t\t\t\tcontent = \"vm.navContent\"\r\n\t\t\t\t\tclose =\"vm.closeSide()\"\r\n\t\t\t\t\tadd =\"vm.add()\"\r\n\t\t\t\t\tcurrent = \"vm.current\"\r\n\t\t\t\t\tlayout=\"row\">\r\n\t</side-dynamic>\r\n\r\n\r\n"

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _classCallCheck2 = __webpack_require__(306);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(307);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DashboardController = function () {
		DashboardController.$inject = ["$log", "$mdSidenav", "dataService"];
		function DashboardController($log, $mdSidenav, dataService) {
			"ngInject";
	
			(0, _classCallCheck3.default)(this, DashboardController);
			this.$mdSidenav = $mdSidenav;
			this.$log = $log;
			this.data = dataService;
	
			this.value = {
				project: "",
				task: "",
				desc: ""
			};
	
			this.current = {};
	
			this.user = this.data.user;
			this.projects = [];
			this.tasks = [];
	
			this.navContent = {
				project: false,
				task: false,
				open: false
			};
	
			this.openRight = this.open('right');
			this.closeSide = this.close('right');
			this.newProject = this.newProjectHandler;
		}
	
		(0, _createClass3.default)(DashboardController, [{
			key: "$onInit",
			value: function $onInit() {
				this.data.addTasks();
				this.data.addProjects();
				this.tasks = this.data.tasks;
				this.projects = this.data.projects;
			}
		}, {
			key: "removeItem",
			value: function removeItem(id) {
				this.data.remove(id);
				this.tasks = this.data.tasks;
			}
		}, {
			key: "addTask",
			value: function addTask() {
				this.navContent = {
					project: false,
					task: true,
					open: false
				};
	
				this.openRight();
			}
		}, {
			key: "openTask",
			value: function openTask() {
				this.navContent = {
					project: false,
					task: false,
					open: true
				};
	
				this.current = this.data.current;
				this.openRight();
			}
		}, {
			key: "newProjectHandler",
			value: function newProjectHandler() {
				this.navContent = {
					project: true,
					task: false,
					open: false
				};
	
				this.openRight();
			}
		}, {
			key: "add",
			value: function add() {
				if (this.navContent.project) {
					var id = '_' + Math.random().toString(36).substr(2, 9);
	
					if (this.value.project.trim().length > 0) {
	
						var newProject = {
							id: id,
							title: this.value.project.trim(),
							task_count: 0
						};
	
						this.data.addProject(newProject);
						this.value = {
							project: "",
							task: "",
							desc: ""
						};
					}
				}
	
				if (this.navContent.task) {
	
					if (this.value.task.trim().length > 0) {
						var _id = '_' + Math.random().toString(36).substr(2, 9);
						var newTask = {
							date: "Today",
							tasks: [{
								id: _id,
								task: this.value.task.trim(),
								desc: this.value.desc.trim()
							}]
	
						};
	
						this.data.addTask(newTask);
						this.value = {
							project: "",
							task: "",
							desc: ""
						};
					}
				}
			}
		}, {
			key: "close",
			value: function close(nav) {
				var _this = this;
	
				return function () {
					_this.navContent = {
						project: false,
						task: false
					};
	
					_this.$mdSidenav(nav).close().then(function () {
						_this.$log.debug("toggle " + nav + "close");
					});
				};
			}
		}, {
			key: "open",
			value: function open(nav) {
				var _this2 = this;
	
				return function () {
					_this2.$mdSidenav(nav).open().then(function () {
						_this2.$log.debug("toggle " + nav + "open");
					});
				};
			}
		}]);
		return DashboardController;
	}();
	
	exports.default = DashboardController;

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(355);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(329)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./dashboard.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./dashboard.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(328)();
	// imports
	
	
	// module
	exports.push([module.id, "input,\ntextarea {\n  outline: none;\n}\ninput:active,\ntextarea:active {\n  outline: none;\n}\n:focus {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\ntextarea {\n  resize: vertical;\n}\ntextarea {\n  resize: horizontal;\n}\nbutton:active,\nbutton:focus {\n  outline: none !important;\n}\nbutton::-moz-focus-inner {\n  border: 0;\n}\n.dashboard__left {\n  width: 341px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _app = __webpack_require__(357);
	
	var _app2 = _interopRequireDefault(_app);
	
	__webpack_require__(358);
	
	__webpack_require__(360);
	
	__webpack_require__(367);
	
	__webpack_require__(369);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var appComponent = {
		template: _app2.default,
		restrict: 'E'
	};
	
	exports.default = appComponent;

/***/ },

/***/ 357:
/***/ function(module, exports) {

	module.exports = "<dashboard layout=\"row\" flex></dashboard>"

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(361);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(329)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./styles.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./styles.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(328)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n * Icon Font Test--front-end\n * Made with love by Icons8 [ https://icons8.com/ ] using FontCustom [ https://github.com/FontCustom/fontcustom ]\n *\n * Contacts:\n *    [ https://icons8.com/contact ]\n *\n * Follow Icon8 on\n *    Twitter [ https://twitter.com/icons_8 ]\n *    Facebook [ https://www.facebook.com/Icons8 ]\n *    Google+ [ https://plus.google.com/+Icons8 ]\n *    GitHub [ https://github.com/icons8 ]\n */\n\n\n@font-face {\n  font-family: \"Test--front-end\";\n  src: url(" + __webpack_require__(362) + ");\n  src: url(" + __webpack_require__(362) + "?#iefix) format(\"embedded-opentype\"),\n       url(" + __webpack_require__(363) + ") format(\"woff2\"),\n       url(" + __webpack_require__(364) + ") format(\"woff\"),\n       url(" + __webpack_require__(365) + ") format(\"truetype\"),\n       url(" + __webpack_require__(366) + "#Test--front-end) format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  @font-face {\n    font-family: \"Test--front-end\";\n    src: url(" + __webpack_require__(366) + "#Test--front-end) format(\"svg\");\n  }\n}\n\n[data-icons8]:before { content: attr(data-icons8); }\n\n[data-icons8]:before,\n.icons8-add-user-male:before,\n.icons8-camera:before,\n.icons8-checked:before,\n.icons8-checkmark:before,\n.icons8-delete:before,\n.icons8-delete-2:before,\n.icons8-edit:before,\n.icons8-expand-arrow:before,\n.icons8-more:before,\n.icons8-plus:before,\n.icons8-search:before,\n.icons8-todo-list:before,\n.icons8-user:before {\n  display: inline-block;\n  font-family: \"Test--front-end\";\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  line-height: 1;\n  text-decoration: inherit;\n  text-rendering: optimizeLegibility;\n  text-transform: none;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n}\n\n.icons8-add-user-male:before { content: \"\\F100\"; }\n.icons8-camera:before { content: \"\\F101\"; }\n.icons8-checked:before { content: \"\\F102\"; }\n.icons8-checkmark:before { content: \"\\F103\"; }\n.icons8-delete:before { content: \"\\F104\"; }\n.icons8-delete-2:before { content: \"\\F105\"; }\n.icons8-edit:before { content: \"\\F106\"; }\n.icons8-expand-arrow:before { content: \"\\F107\"; }\n.icons8-more:before { content: \"\\F108\"; }\n.icons8-plus:before { content: \"\\F109\"; }\n.icons8-search:before { content: \"\\F10A\"; }\n.icons8-todo-list:before { content: \"\\F10B\"; }\n.icons8-user:before { content: \"\\F10C\"; }", ""]);
	
	// exports


/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/Test--front-end_098c06d65defbb6ea10311c32cd9831b.eot?e6251df1e34c8e5c0b52b85dd3f4469f";

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/Test--front-end_098c06d65defbb6ea10311c32cd9831b.woff2?3278d6c50495d95ecceb12abdbe3ff19";

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/Test--front-end_098c06d65defbb6ea10311c32cd9831b.woff?036672cef4942f83a122f9e507131e6c";

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/Test--front-end_098c06d65defbb6ea10311c32cd9831b.ttf?572012d8f2d2381765f3b6a96c790abc";

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/Test--front-end_098c06d65defbb6ea10311c32cd9831b.svg?a774e1be391e59962a59766c264e6c3d";

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(370);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(329)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(328)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\n  font-family: 'SF-Medium';\n  src: url(" + __webpack_require__(371) + ");\n  src: url(" + __webpack_require__(371) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(372) + ") format('woff'), url(" + __webpack_require__(373) + "#custom_font) format('svg');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'SF-Regular';\n  src: url(" + __webpack_require__(374) + ");\n  src: url(" + __webpack_require__(374) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(375) + ") format('woff'), url(" + __webpack_require__(376) + "#custom_font) format('svg');\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'SF-Semibold';\n  src: url(" + __webpack_require__(377) + ");\n  src: url(" + __webpack_require__(377) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(378) + ") format('woff'), url(" + __webpack_require__(379) + "#custom_font) format('svg');\n  font-weight: 400;\n  font-style: normal;\n}\ninput,\ntextarea {\n  outline: none;\n}\ninput:active,\ntextarea:active {\n  outline: none;\n}\n:focus {\n  outline: none;\n}\ntextarea {\n  resize: none;\n}\ntextarea {\n  resize: vertical;\n}\ntextarea {\n  resize: horizontal;\n}\nbutton:active,\nbutton:focus {\n  outline: none !important;\n}\nbutton::-moz-focus-inner {\n  border: 0;\n}\nbody {\n  font-size: 16px;\n  font-family: 'SF-Regular', Helvetica, Arial, sans-serif;\n  overflow: hidden;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/SFUIText-Medium.eot?d41d8cd98f00b204e9800998ecf8427e";

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/SFUIText-Medium.woff?d41d8cd98f00b204e9800998ecf8427e";

/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/SFUIText-Medium.svg?cf11a247846bf5e9e2f44445d44c0790";

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/SFUIText-Regular.eot?d41d8cd98f00b204e9800998ecf8427e";

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/SFUIText-Regular.woff?d41d8cd98f00b204e9800998ecf8427e";

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/SFUIText-Regular.svg?1b2e77b43c71904a988a4fac0f1c7bcb";

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/SFUIText-Semibold.eot?d41d8cd98f00b204e9800998ecf8427e";

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/SFUIText-Semibold.woff?d41d8cd98f00b204e9800998ecf8427e";

/***/ },

/***/ 379:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "assets/fonts/SFUIText-Semibold.svg?c847bbf5e404761957603a0276286c37";

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _angular = __webpack_require__(299);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _dataService = __webpack_require__(381);
	
	var _dataService2 = _interopRequireDefault(_dataService);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _angular2.default.module('app.services', []).service({
	  dataService: _dataService2.default
	});

/***/ },

/***/ 381:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(306);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(307);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DataService = function () {
	    function DataService() {
	        (0, _classCallCheck3.default)(this, DataService);
	
	        this.user = this.getUser();
	        this.projects = [];
	        this.addTasks = this.addTasksHandler;
	        this.addProjects = this.addProjectsHandler;
	        this.tasks = [];
	        this.current = {};
	    }
	
	    (0, _createClass3.default)(DataService, [{
	        key: "getUser",
	        value: function getUser() {
	            return {
	                "id": 123,
	                "name": "Trevor Reyes",
	                "ava": "user.png"
	            };
	        }
	    }, {
	        key: "addProjectsHandler",
	        value: function addProjectsHandler() {
	            this.projects = this.getProjects();
	        }
	    }, {
	        key: "addTasksHandler",
	        value: function addTasksHandler() {
	            this.tasks = this.getTasks();
	        }
	    }, {
	        key: "currentTaskSet",
	        value: function currentTaskSet(task) {
	            this.current = task;
	        }
	    }, {
	        key: "getTasks",
	        value: function getTasks() {
	            return [{
	                "date": "Today",
	                "tasks": [{
	                    "id": 111,
	                    "task": "Create a company",
	                    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
	                }]
	            }, {
	                "date": "Tomorrow",
	                "tasks": [{
	                    "id": 222,
	                    "task": "Call in barber shop",
	                    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	                }]
	            }, {
	                "date": "Friday",
	                "tasks": [{
	                    "id": 33,
	                    "task": "Call in barber",
	                    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut..."
	                }, {
	                    "id": 44,
	                    "task": "Call in",
	                    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ..."
	                }]
	            }];
	        }
	    }, {
	        key: "getProjects",
	        value: function getProjects() {
	            return [{
	                "id": 123,
	                "title": "Private",
	                "task_count": 8
	            }, {
	                "id": 236,
	                "title": "Decode",
	                "task_count": 25
	            }, {
	                "id": 235,
	                "title": "Family",
	                "task_count": 3
	            }, {
	                "id": 233,
	                "title": "Cookle",
	                "task_count": 13
	            }];
	        }
	    }, {
	        key: "addTask",
	        value: function addTask(task) {
	            this.tasks.push(task);
	        }
	    }, {
	        key: "addProject",
	        value: function addProject(project) {
	            this.projects.push(project);
	        }
	    }, {
	        key: "remove",
	        value: function remove(id) {
	            this.tasks.forEach(function (item) {
	                item.tasks = item.tasks.filter(function (task) {
	                    return task.id !== id;
	                });
	            });
	
	            this.tasks = this.tasks.filter(function (task) {
	                return task.tasks.length;
	            });
	        }
	    }]);
	    return DataService;
	}();
	
	exports.default = DataService;

/***/ }

});
//# sourceMappingURL=app.bundle.js.map