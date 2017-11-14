/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _components = __webpack_require__(1);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _services = __webpack_require__(120);
	
	var _services2 = _interopRequireDefault(_services);
	
	var _filters = __webpack_require__(150);
	
	var _filters2 = _interopRequireDefault(_filters);
	
	var _app = __webpack_require__(153);
	
	var _app2 = _interopRequireDefault(_app);
	
	__webpack_require__(154);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//  import commonComponents from './common/components.js';
	var app = angular.module('app', ['ui.router', 'ngResource', 'ngFileUpload', 'ngMaterial', 'ngAnimate']);
	
	// Components Entrypoint
	
	
	// Single Style Entry Point
	/* global angular */
	//  Angular & Router ES6 Imports
	//  import angular from 'angular';
	//  import angularUIRouter from 'angular-ui-router';
	(0, _components2.default)(app);
	
	//  Common Components Entrypoint
	//  commonComponents(app);
	
	//  App Services Entrypoint
	(0, _services2.default)(app);
	
	// App Filters Entrypoint
	(0, _filters2.default)(app);
	
	// Router Configuration
	// Components must be declared first since
	// Routes reference controllers that will be bound to route templates.
	(0, _app2.default)(app);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _header = __webpack_require__(2);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _home = __webpack_require__(5);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _signIn = __webpack_require__(27);
	
	var _signIn2 = _interopRequireDefault(_signIn);
	
	var _accountPage = __webpack_require__(32);
	
	var _accountPage2 = _interopRequireDefault(_accountPage);
	
	var _myInfo = __webpack_require__(47);
	
	var _myInfo2 = _interopRequireDefault(_myInfo);
	
	var _tabs = __webpack_require__(51);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	var _signUp = __webpack_require__(54);
	
	var _signUp2 = _interopRequireDefault(_signUp);
	
	var _myTalks = __webpack_require__(59);
	
	var _myTalks2 = _interopRequireDefault(_myTalks);
	
	var _forgotPassword = __webpack_require__(66);
	
	var _forgotPassword2 = _interopRequireDefault(_forgotPassword);
	
	var _userPhoto = __webpack_require__(71);
	
	var _userPhoto2 = _interopRequireDefault(_userPhoto);
	
	var _logout = __webpack_require__(76);
	
	var _logout2 = _interopRequireDefault(_logout);
	
	var _newtalk = __webpack_require__(79);
	
	var _newtalk2 = _interopRequireDefault(_newtalk);
	
	var _talks = __webpack_require__(89);
	
	var _talks2 = _interopRequireDefault(_talks);
	
	var _newPassword = __webpack_require__(99);
	
	var _newPassword2 = _interopRequireDefault(_newPassword);
	
	var _registrationConfirm = __webpack_require__(104);
	
	var _registrationConfirm2 = _interopRequireDefault(_registrationConfirm);
	
	var _invalidLink = __webpack_require__(107);
	
	var _invalidLink2 = _interopRequireDefault(_invalidLink);
	
	var _newEmailConfirm = __webpack_require__(110);
	
	var _newEmailConfirm2 = _interopRequireDefault(_newEmailConfirm);
	
	var _manageUsers = __webpack_require__(112);
	
	var _manageUsers2 = _interopRequireDefault(_manageUsers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  (function includeAllModulesGlobalFn(modulesArray, application) {
	        modulesArray.forEach(function executeModuleIncludesFn(moduleFn) {
	          moduleFn(application);
	        });
	      })([_header2.default, _home2.default, _signIn2.default, _accountPage2.default, _myInfo2.default, _tabs2.default, _myTalks2.default, _signUp2.default, _forgotPassword2.default, _userPhoto2.default, _newtalk2.default, _talks2.default, _logout2.default, _newPassword2.default, _registrationConfirm2.default, _invalidLink2.default, _newEmailConfirm2.default, _manageUsers2.default], app);
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _header = __webpack_require__(3);
	
	var _header2 = _interopRequireDefault(_header);
	
	var _header3 = __webpack_require__(4);
	
	var _header4 = _interopRequireDefault(_header3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
	    'ngInject';
	
	    $urlRouterProvider.otherwise('/');
	    $stateProvider.state('header', {
	      url: '',
	      resolve: {
	        user: ["Current", function getCurrent(Current) {
	          'ngInject';
	
	          Current.getInfo();
	          return Current.current;
	        }]
	      },
	      abstract: true,
	      template: _header4.default,
	      controller: _header2.default,
	      controllerAs: 'ctrl'
	    });
	  }]);
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* global angular */
	
	var HeaderController = function HeaderController($state, $scope, $document, $location, LocalStorage, user, Menus) {
	  'ngInject';
	
	  var _this = this;
	
	  _classCallCheck(this, HeaderController);
	
	  this.role = user ? user.roles : '';
	  this.name = user ? user.fname + '\'s' : 'Your';
	  this.menu = Menus.getMenu(this.role);
	  this.menuHidden = false;
	  $scope.$on('signInEvent', function () {
	    $state.go('header.home', {}, { reload: true });
	  });
	  $scope.$on('closeDropdown', function () {
	    _this.menuHidden = false;
	  });
	
	  var off = $scope.$on('$viewContentLoaded', function () {
	    $document.on('click', function (e) {
	      var target = angular.element(e.target);
	
	      var parents = target;
	      var dropDownArea = false;
	
	      if (!_this.menuHidden) {
	        return;
	      }
	      // to not use jQuery for one method parents() not supported in JQLight
	      // so this loop finds all parents
	      while (parents.parent().length) {
	        if (parents.hasClass('js-dropdown')) {
	          dropDownArea = true;
	          break;
	        }
	        parents = parents.parent();
	      }
	
	      if (!dropDownArea) {
	        _this.menuHidden = false;
	        $scope.$apply();
	      }
	    });
	
	    off();
	  });
	};
	HeaderController.$inject = ["$state", "$scope", "$document", "$location", "LocalStorage", "user", "Menus"];
	
	exports.default = HeaderController;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<header class=\"header\">\n  <div class=\"header__title\"><a href=\"/#/\" class=\"link_header\">conference management</a></div>\n        <div class=\"menu-container\">\n            <button class=\"menu-container__button js-dropdown\" ng-click=\"ctrl.menuHidden=!ctrl.menuHidden\">{{ctrl.name}} Account</button>\n            <div class=\"menu-container__content\" ng-show=\"ctrl.menuHidden\">\n              <sign-in ng-if=\"!ctrl.menu\"></sign-in>\n              <div  ng-if=\"ctrl.menu\" class=\"dropdown\">\n                <div class=\"menu-arrow\"></div>\n                <ul class=\"menu-list\">\n                  <li class=\"menu-list__item\"\n                      ng-repeat=\"items in ctrl.menu\">\n                    <a href=\"#\" class=\"menu-list__title\"\n                       ui-sref=\"header.{{items.link}}\"\n                       ui-sref-active=\"is-active\">\n                      {{items.name}}</a>\n                  </li>\n                  <li class=\"menu-list__item menu-list__item_sign-out\">\n                      <a class=\"menu-list__title\"\n                         ui-sref=\"header.logout\">Sign Out</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n        </div>\n</header>\n\n<div ui-view></div>\n";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _home = __webpack_require__(6);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _homeGuest = __webpack_require__(9);
	
	var _homeGuest2 = _interopRequireDefault(_homeGuest);
	
	var _homeSpeaker = __webpack_require__(12);
	
	var _homeSpeaker2 = _interopRequireDefault(_homeSpeaker);
	
	var _homeOrganiser = __webpack_require__(15);
	
	var _homeOrganiser2 = _interopRequireDefault(_homeOrganiser);
	
	var _homeAdmin = __webpack_require__(18);
	
	var _homeAdmin2 = _interopRequireDefault(_homeAdmin);
	
	var _newConferencePopup = __webpack_require__(21);
	
	var _newConferencePopup2 = _interopRequireDefault(_newConferencePopup);
	
	var _conferenceCard = __webpack_require__(24);
	
	var _conferenceCard2 = _interopRequireDefault(_conferenceCard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.home', {
	      url: '/',
	      template: '<home user="ctrl.currentUser"></home>',
	      resolve: {
	        currentUser: ["Current", function currentUser(Current) {
	          return Current.current;
	        }]
	      },
	      controller: ["currentUser", function controller(currentUser) {
	        this.currentUser = currentUser;
	      }],
	
	      controllerAs: 'ctrl'
	    });
	  }]).component('home', _home2.default).component('homeGuest', _homeGuest2.default).component('homeSpeaker', _homeSpeaker2.default).component('homeOrganiser', _homeOrganiser2.default).component('homeAdmin', _homeAdmin2.default).component('newConferencePopup', _newConferencePopup2.default).component('conferenceCard', _conferenceCard2.default);
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _home = __webpack_require__(7);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _home3 = __webpack_require__(8);
	
	var _home4 = _interopRequireDefault(_home3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var homeComponent = {
	  bindings: {
	    user: '<'
	  },
	  template: _home2.default,
	  controller: _home4.default
	};
	
	exports.default = homeComponent;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"Container home\">\n  <home-speaker ng-if=\"$ctrl.landingType('ROLE_SPEAKER')\" user=\"$ctrl.user\"></home-speaker>\n  <home-admin ng-if=\"$ctrl.landingType('ROLE_ADMIN')\"></home-admin>\n  <home-organiser ng-if=\"$ctrl.landingType('ROLE_ORGANISER') && !$ctrl.landingType('ROLE_ADMIN')\"></home-organiser>\n  <home-guest ng-if=\"$ctrl.defaultLanding\"></home-guest>\n  <ui-view></ui-view>\n</div>\n";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  function _class() {
	    _classCallCheck(this, _class);
	
	    this.defaultLanding = true;
	  }
	
	  _createClass(_class, [{
	    key: 'landingType',
	    value: function landingType(type) {
	      switch (type) {
	        case 'ROLE_SPEAKER':
	        case 'ROLE_ORGANISER':
	        case 'ROLE_ADMIN':
	          if (this.user && this.user.roles && this.user.roles.indexOf(type) > -1) {
	            this.defaultLanding = false;
	            return true;
	          }
	          return false;
	        default:
	          return false; // default case - unknown landing type
	      }
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _homeGuest = __webpack_require__(10);
	
	var _homeGuest2 = _interopRequireDefault(_homeGuest);
	
	var _homeGuest3 = __webpack_require__(11);
	
	var _homeGuest4 = _interopRequireDefault(_homeGuest3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  bindings: {
	    user: '<'
	  },
	  template: _homeGuest2.default,
	  controller: _homeGuest4.default
	};
	
	exports.default = component;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"tabs-layout\">\n  <div class=\"tabs-wrapper\">\n    <div class=\"home__header\">\n        <a ng-click=\"$ctrl.signIn()\" class=\"btn home__button\">propose new talk</a>\n    </div>\n\n    <div class=\"tabs-wrapper_embedded\">\n      <ul class=\"tabs-list\">\n        <li class=\"tabs-list__item\">\n          <a class=\"tabs-list__anchor\"\n            ng-class=\"$ctrl.conditionalClass('upcoming')\"\n            ng-click=\"$ctrl.showView('upcoming')\">Upcoming</a>\n        </li>\n        <li class=\"tabs-list__item\">\n          <a class=\"tabs-list__anchor\"\n            ng-class=\"$ctrl.conditionalClass('past')\"\n            ng-click=\"$ctrl.showView('past')\">Past</a>\n        </li>\n      </ul>\n      <div class=\"tabs-container\">\n        <conference-card ng-repeat=\"conference in $ctrl.conferences\"\n                        data=\"conference\"\n                        show-counters=\"false\"\n                        show-submit=\"true\"\n                        on-click=\"$ctrl.signIn()\">\n        </conference-card>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["Conference", "$state"];
	  function _class(Conference, $state) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.conferenceService = Conference;
	    this.state = $state;
	
	    this.view = 'upcoming'; // default view
	    this.conferences = [];
	    this.getConferences(); // get initial conferences collection
	
	    this.popupOpen = false;
	    this.fillInfoPopupOpen = false;
	
	    this.fillInfoPopupFwdState = 'header.home';
	  }
	
	  _createClass(_class, [{
	    key: 'conditionalClass',
	    value: function conditionalClass(condition) {
	      return this.view === condition ? 'tabs-list__anchor_active' : '';
	    }
	  }, {
	    key: 'showView',
	    value: function showView(viewName) {
	      this.view = viewName;
	      this.getConferences();
	    }
	  }, {
	    key: 'getConferences',
	    value: function getConferences() {
	      switch (this.view) {
	        case 'upcoming':
	          this.conferences = this.conferenceService.getUpcoming();
	          break;
	        case 'past':
	          this.conferences = this.conferenceService.getPast();
	          break;
	        default:
	          this.conferences = [];
	      }
	    }
	  }, {
	    key: 'signIn',
	    value: function signIn() {
	      this.state.go('header.sign-in');
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _homeSpeaker = __webpack_require__(13);
	
	var _homeSpeaker2 = _interopRequireDefault(_homeSpeaker);
	
	var _homeSpeaker3 = __webpack_require__(14);
	
	var _homeSpeaker4 = _interopRequireDefault(_homeSpeaker3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  bindings: {
	    user: '<'
	  },
	  template: _homeSpeaker2.default,
	  controller: _homeSpeaker4.default
	};
	
	exports.default = component;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"tabs-layout\">\n\n  <div class=\"tabs-wrapper\">\n    <div class=\"home__header\">\n        <a ng-click=\"$ctrl.showPopup()\" class=\"btn home__button\">propose new talk</a>\n    </div>\n\n    <div class=\"tabs-wrapper_embedded\">\n      <ul class=\"tabs-list\">\n        <li class=\"tabs-list__item\">\n          <a class=\"tabs-list__anchor\"\n            ng-class=\"$ctrl.conditionalClass('upcoming')\"\n            ng-click=\"$ctrl.showView('upcoming')\">Upcoming</a>\n        </li>\n        <li class=\"tabs-list__item\">\n          <a class=\"tabs-list__anchor\"\n            ng-class=\"$ctrl.conditionalClass('past')\"\n            ng-click=\"$ctrl.showView('past')\">Past</a>\n        </li>\n      </ul>\n      <div class=\"tabs-container\">\n        <conference-card ng-repeat=\"conference in $ctrl.conferences\"\n                        data=\"conference\"\n                        show-counters=\"false\"\n                        show-submit=\"true\"\n                        on-click=\"$ctrl.showPopup(conferenceId)\">\n        </conference-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n<newtalk-popup ng-if=\"$ctrl.popupOpen\"\n         on-close=\"$ctrl.popupCloseCallback()\"\n         on-submit=\"$ctrl.popupSubmitCallback()\"\n         conference-id=\"$ctrl.conferenceId\">\n</newtalk-popup>\n\n<fill-info-popup ng-if=\"$ctrl.fillInfoPopupOpen\"\n               on-close=\"$ctrl.fillInfoPopupCloseCallback()\"\n               fwd-state=\"$ctrl.fillInfoPopupFwdState\">\n</fill-info-popup>\n";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["Conference", "$state"];
	  function _class(Conference, $state) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.conferenceService = Conference;
	    this.state = $state;
	
	    this.view = 'upcoming'; // default view
	    this.conferences = [];
	    this.getConferences(); // get initial conferences collection
	
	    this.popupOpen = false;
	    this.fillInfoPopupOpen = false;
	
	    this.fillInfoPopupFwdState = 'header.home';
	  }
	
	  _createClass(_class, [{
	    key: 'conditionalClass',
	    value: function conditionalClass(condition) {
	      return this.view === condition ? 'tabs-list__anchor_active' : '';
	    }
	  }, {
	    key: 'showView',
	    value: function showView(viewName) {
	      this.view = viewName;
	      this.getConferences();
	    }
	  }, {
	    key: 'getConferences',
	    value: function getConferences() {
	      switch (this.view) {
	        case 'upcoming':
	          this.conferences = this.conferenceService.getUpcoming();
	          break;
	        case 'past':
	          this.conferences = this.conferenceService.getPast();
	          break;
	        default:
	          this.conferences = [];
	      }
	    }
	  }, {
	    key: 'showPopup',
	    value: function showPopup(conferenceId) {
	      if (this.userInfoFilled()) {
	        this.conferenceId = conferenceId;
	        this.popupOpen = true;
	      } else {
	        this.fillInfoPopupOpen = true;
	      }
	    }
	  }, {
	    key: 'popupCloseCallback',
	    value: function popupCloseCallback() {
	      this.popupOpen = false;
	    }
	  }, {
	    key: 'popupSubmitCallback',
	    value: function popupSubmitCallback() {
	      this.popupOpen = false;
	    }
	  }, {
	    key: 'userInfoFilled',
	    value: function userInfoFilled() {
	      var _this = this;
	
	      var mandatory = ['bio', 'job', 'company'];
	      return mandatory.every(function (el) {
	        return _this.user[el] !== '';
	      });
	    }
	  }, {
	    key: 'fillInfoPopupCloseCallback',
	    value: function fillInfoPopupCloseCallback() {
	      this.fillInfoPopupOpen = false;
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _homeOrganiser = __webpack_require__(16);
	
	var _homeOrganiser2 = _interopRequireDefault(_homeOrganiser);
	
	var _homeOrganiser3 = __webpack_require__(17);
	
	var _homeOrganiser4 = _interopRequireDefault(_homeOrganiser3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  template: _homeOrganiser2.default,
	  controller: _homeOrganiser4.default
	};
	
	exports.default = component;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"tabs-layout\">\n  <div class=\"tabs-wrapper\">\n    <ul class=\"tabs-list\">\n      <li class=\"tabs-list__item\">\n        <a class=\"tabs-list__anchor\"\n           ng-class=\"$ctrl.conditionalClass('upcoming')\"\n           ng-click=\"$ctrl.showView('upcoming')\">Upcoming</a>\n      </li>\n      <li class=\"tabs-list__item\">\n        <a class=\"tabs-list__anchor\"\n           ng-class=\"$ctrl.conditionalClass('past')\"\n           ng-click=\"$ctrl.showView('past')\">Past</a>\n      </li>\n    </ul>\n    <div class=\"tabs-container\">\n      <conference-card ng-repeat=\"conference in $ctrl.conferences\"\n                       data=\"conference\"\n                       show-counters=\"true\"\n                       show-submit=\"false\"></conference-card>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["Conference"];
	  function _class(Conference) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.conferenceService = Conference;
	
	    this.view = 'upcoming'; // default view
	    this.conferences = [];
	    this.getConferences(); // get initial conferences collection
	  }
	
	  _createClass(_class, [{
	    key: 'conditionalClass',
	    value: function conditionalClass(condition) {
	      return this.view === condition ? 'tabs-list__anchor_active' : '';
	    }
	  }, {
	    key: 'showView',
	    value: function showView(viewName) {
	      this.view = viewName;
	      this.getConferences();
	    }
	  }, {
	    key: 'getConferences',
	    value: function getConferences() {
	      switch (this.view) {
	        case 'upcoming':
	          this.conferences = this.conferenceService.getUpcoming();
	          break;
	        case 'past':
	          this.conferences = this.conferenceService.getPast();
	          break;
	        default:
	          this.conferences = [];
	      }
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _homeAdmin = __webpack_require__(19);
	
	var _homeAdmin2 = _interopRequireDefault(_homeAdmin);
	
	var _homeAdmin3 = __webpack_require__(20);
	
	var _homeAdmin4 = _interopRequireDefault(_homeAdmin3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  template: _homeAdmin2.default,
	  controller: _homeAdmin4.default
	};
	
	exports.default = component;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"tabs-layout\">\n  <div class=\"tabs-wrapper\">\n    <div class=\"home__header\">\n      <a class=\"btn home__button\"\n         ng-click=\"$ctrl.openNewConferencePopup()\">new conference</a>\n    </div>\n    <div class=\"tabs-wrapper_embedded\">\n      <ul class=\"tabs-list\">\n        <li class=\"tabs-list__item\">\n          <a class=\"tabs-list__anchor\"\n            ng-class=\"$ctrl.conditionalClass('upcoming')\"\n            ng-click=\"$ctrl.showView('upcoming')\">Upcoming</a>\n        </li>\n        <li class=\"tabs-list__item\">\n          <a class=\"tabs-list__anchor\"\n            ng-class=\"$ctrl.conditionalClass('past')\"\n            ng-click=\"$ctrl.showView('past')\">Past</a>\n        </li>\n      </ul>\n      <div class=\"tabs-container\">\n        <conference-card ng-repeat=\"conference in $ctrl.conferences\"\n                        data=\"conference\"\n                        show-counters=\"true\"\n                        show-submit=\"false\"></conference-card>\n      </div>\n    </div>\n  </div>\n</div>\n\n<new-conference-popup ng-if=\"$ctrl.showNewConferencePopup\"\n                      on-submit=\"$ctrl.closeNewConferencePopup(); $ctrl.getConferences()\"\n                      on-close=\"$ctrl.closeNewConferencePopup()\"></new-conference-popup>";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["Conference"];
	  function _class(Conference) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.conferenceService = Conference;
	
	    this.view = 'upcoming'; // default view
	    this.conferences = [];
	    this.getConferences(); // get initial conferences collection
	
	    this.showNewConferencePopup = false;
	  }
	
	  _createClass(_class, [{
	    key: 'conditionalClass',
	    value: function conditionalClass(condition) {
	      return this.view === condition ? 'tabs-list__anchor_active' : '';
	    }
	  }, {
	    key: 'showView',
	    value: function showView(viewName) {
	      this.view = viewName;
	      this.getConferences();
	    }
	  }, {
	    key: 'getConferences',
	    value: function getConferences() {
	      switch (this.view) {
	        case 'upcoming':
	          this.conferences = this.conferenceService.getUpcoming();
	          break;
	        case 'past':
	          this.conferences = this.conferenceService.getPast();
	          break;
	        default:
	          this.conferences = [];
	      }
	    }
	  }, {
	    key: 'openNewConferencePopup',
	    value: function openNewConferencePopup() {
	      this.showNewConferencePopup = true;
	    }
	  }, {
	    key: 'closeNewConferencePopup',
	    value: function closeNewConferencePopup() {
	      this.showNewConferencePopup = false;
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newConferencePopup = __webpack_require__(22);
	
	var _newConferencePopup2 = _interopRequireDefault(_newConferencePopup);
	
	var _newConferencePopup3 = __webpack_require__(23);
	
	var _newConferencePopup4 = _interopRequireDefault(_newConferencePopup3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  template: _newConferencePopup2.default,
	  controller: _newConferencePopup4.default,
	  bindings: {
	    onSubmit: '&',
	    onClose: '&'
	  }
	};
	
	exports.default = component;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pop-up-wrapper\">\n  <div class=\"pop-up pop-up_big\">\n    <h3 class=\"pop-up__title\">create new conference</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.close()\"></button>\n    <form class=\"new-talk\" name=\"$ctrl.form\"\n          novalidate\n          ng-submit=\"$ctrl.submit()\">\n\n      <label for=\"new-conf-title\" class=\"form-label form-label_required\">\n        title\n      </label>\n      <input type=\"text\" id=\"new-conf-title\" class=\"field field_border\"\n             maxlength=\"1000\"\n             ng-required=\"true\"\n             ng-model=\"$ctrl.conf.title\">\n\n      <label for=\"new-conf-desc\" class=\"form-label form-label_required\">\n        description\n      </label>\n      <textarea id=\"new-conf-desc\"\n                class=\"textarea\"\n                maxlength=\"3000\"\n                ng-required=\"true\"\n                ng-model=\"$ctrl.conf.description\">\n\n      </textarea>\n\n      <label for=\"new-conf-location\" class=\"form-label form-label_required\">\n        location\n      </label>\n      <input type=\"text\" id=\"new-conf-location\" class=\"field field_border\"\n             maxlength=\"256\"\n             ng-required=\"true\"\n             ng-model=\"$ctrl.conf.location\">\n\n      <div class=\"form-date-block\">\n        <div>\n          <label class=\"form-label form-label_inline form-label_required\">\n            dates\n          </label>\n          <md-datepicker ng-model=\"$ctrl.conf.startDate\"\n                        md-placeholder=\"Select date\"\n                        class=\"my-talk-settings__date\"\n                        md-hide-icons=\"triangle\"\n                        md-max-date=\"$ctrl.conf.endDate\"\n                        ng-required=\"!$ctrl.conf.noDates\">\n          </md-datepicker>\n          <md-datepicker ng-model=\"$ctrl.conf.endDate\"\n                        md-placeholder=\"Select date\"\n                        class=\"my-talk-settings__date\"\n                        md-hide-icons=\"triangle\"\n                        md-min-date=\"$ctrl.conf.startDate\"\n                        ng-required=\"!$ctrl.conf.noDates\">\n          </md-datepicker>\n          <input type=\"checkbox\"\n                ng-model=\"$ctrl.conf.noDates\"\n                ng-click=\"$ctrl.noDatesToggle()\"> no dates\n        </div>\n\n        <div>\n          <label class=\"form-label form-label_inline form-label_required\">\n            call for papers\n          </label>\n          <md-datepicker ng-model=\"$ctrl.conf.cfpStartDate\"\n                        md-placeholder=\"Select date\"\n                        class=\"my-talk-settings__date\"\n                        md-hide-icons=\"triangle\"\n                        md-max-date=\"$ctrl.conf.cfpEndDate\"\n                        ng-required=\"!$ctrl.conf.cfpNoDates\">\n          </md-datepicker>\n          <md-datepicker ng-model=\"$ctrl.conf.cfpEndDate\"\n                        md-placeholder=\"Select date\"\n                        class=\"my-talk-settings__date\"\n                        md-hide-icons=\"triangle\"\n                        md-min-date=\"$ctrl.conf.cfpStartDate\"\n                        md-max-date=\"$ctrl.conf.startDate\"\n                        ng-required=\"!$ctrl.conf.cfpNoDates\">\n          </md-datepicker>\n          <input type=\"checkbox\"\n                ng-model=\"$ctrl.conf.cfpNoDates\"\n                ng-click=\"$ctrl.cfpNoDatesToggle()\"> no dates\n        </div>\n      </div>\n\n      <label class=\"form-label form-label_inline form-label_required\">\n        topics\n      </label>\n      <input type=\"text\" ng-model=\"$ctrl.newTopic\"></input>\n      <button type=\"button\" ng-click=\"$ctrl.addTopic()\">Add Topic</button>\n      <select class=\"new-talk__select\"\n              multiple ng-attr-size=\"{{ $ctrl.multiSelectSize('topics') }}\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.conf.topics\"\n              ng-options=\"topic.id as topic.name for topic in $ctrl.topics | orderBy: 'name'\">\n      </select>\n\n      <label class=\"form-label  form-label_inline form-label_required\">\n        types\n      </label>\n      <input type=\"text\" ng-model=\"$ctrl.newType\"></input>\n      <button type=\"button\" ng-click=\"$ctrl.addType()\">Add Type</button>\n      <select class=\"new-talk__select\"\n              multiple ng-attr-size=\"{{ $ctrl.multiSelectSize('types') }}\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.conf.types\"\n              ng-options=\"type.id as type.name for type in $ctrl.types | orderBy: 'id'\">\n      </select>\n\n      <label class=\"form-label form-label_required\">\n        languages\n      </label>\n      <select class=\"new-talk__select\"\n              multiple ng-attr-size=\"{{ $ctrl.multiSelectSize('langs') }}\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.conf.langs\"\n              ng-options=\"lang.id as lang.name for lang in $ctrl.langs | orderBy: 'id'\">\n      </select>\n\n      <label class=\"form-label form-label_required\">\n        levels\n      </label>\n      <select class=\"new-talk__select\"\n              multiple ng-attr-size=\"{{ $ctrl.multiSelectSize('levels') }}\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.conf.levels\"\n              ng-options=\"level.id as level.name for level in $ctrl.levels | orderBy: 'id'\">\n      </select>\n\n      <label class=\"form-label form-label_required\">\n        organisers\n      </label>\n      <select class=\"new-talk__select\"\n              multiple ng-attr-size=\"{{ $ctrl.multiSelectSize('orgs') }}\"\n              ng-model=\"$ctrl.conf.orgs\"\n              ng-options=\"org.id as org.name for org in $ctrl.orgs\">\n      </select>\n\n      <span class=\"field-error\" ng-show=\"$ctrl.submitAttempt && $ctrl.form.$error.required\">\n        Please fill in all mandatory fields\n      </span>\n\n      <button class=\"btn pop-up__button\"\n              ng-disabled=\"$ctrl.buttonsBlocked\">Submit</button>\n    </form>\n  </div>\n</div>\n\n<div class=\"pop-up-wrapper\" ng-show=\"$ctrl.isShownPopup\">\n  <div class=\"pop-up\">\n    <h3 class=\"pop-up__title\">Info</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.isShownPopup = false\"></button>\n    <p class=\"pop-up__notification\">Are you sure you want to leave the window?</p>\n    <p class=\"pop-up__notification pop-up__notification_light pop-up__notification_not-margin\">Click 'Yes' to leave and all your changes will lost.</p>\n    <p class=\"pop-up__notification pop-up__notification_light pop-up__notification_not-margin\">Click 'No' to return and Submit/Update your changes</p>\n    <div class=\"pop-up-button-wrapper\">\n      <button class=\"btn pop-up__button\" ng-click=\"$ctrl.onClose()\">Yes</button>\n      <button class=\"btn btn__cancel pop-up__button\" ng-click=\"$ctrl.isShownPopup = false\">No</button>\n    </div>\n  </div>\n</div>";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["Conference", "Topic", "Type", "Language", "Level", "ManageUsers"];
	  function _class(Conference, Topic, Type, Language, Level, ManageUsers) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.conferenceService = Conference;
	    this.topicService = Topic;
	    this.typeService = Type;
	    this.langService = Language;
	    this.levelService = Level;
	    this.manageUsersService = ManageUsers;
	
	    this.topics = Topic.query();
	    this.types = Type.query();
	    this.langs = Language.query();
	    this.levels = Level.query();
	
	    this.users = ManageUsers.getAll();
	
	    this.conf = {};
	  }
	
	  _createClass(_class, [{
	    key: 'submit',
	    value: function submit() {
	      if (this.form.$invalid) {
	        this.submitAttempt = true;
	        return;
	      }
	
	      function dd(num) {
	        // Double Digit - add leading zero if needed
	        var str = num.toString();
	        if (str.length === 1) {
	          return '0' + str;
	        }
	        return str;
	      }
	
	      function formatDate(date) {
	        return date.getFullYear() + '-' + dd(date.getMonth() + 1) + '-' + dd(date.getDate());
	      }
	
	      var sendObj = {
	        title: this.conf.title,
	        description: this.conf.description,
	        location: this.conf.location,
	        no_dates: this.conf.noDates,
	        cfp_no_dates: this.conf.cfpNoDates,
	        topics: this.conf.topics,
	        types: this.conf.types,
	        levels: this.conf.levels,
	        languages: this.conf.langs,
	        organisers: this.conf.orgs
	      };
	
	      if (this.conf.startDate) {
	        // if is set - format
	        sendObj.start_date = formatDate(this.conf.startDate);
	      }
	      if (this.conf.endDate) {
	        sendObj.end_date = formatDate(this.conf.endDate);
	      }
	      if (this.conf.cfpStartDate) {
	        sendObj.cfp_start_date = formatDate(this.conf.cfpStartDate);
	      }
	      if (this.conf.cfpEndDate) {
	        sendObj.cfp_end_date = formatDate(this.conf.cfpEndDate);
	      }
	
	      if (!this.conf.noDates) {
	        sendObj.no_dates = false;
	      }
	      if (!this.conf.cfpNoDates) {
	        sendObj.cfp_no_dates = false;
	      }
	      this.conferenceService.save(sendObj, this.onSubmit);
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      this.onClose();
	    }
	  }, {
	    key: 'addTopic',
	    value: function addTopic() {
	      var _this = this;
	
	      if (this.newTopic) {
	        this.topicService.save(this.newTopic, function () {
	          // upon success - reload topics
	          _this.newTopic = '';
	          _this.topics = _this.topicService.query();
	        });
	      }
	    }
	  }, {
	    key: 'addType',
	    value: function addType() {
	      var _this2 = this;
	
	      if (this.newType) {
	        this.typeService.save(this.newType, function () {
	          // upon success - reload topics
	          _this2.newType = '';
	          _this2.types = _this2.typeService.query();
	        });
	      }
	    }
	  }, {
	    key: 'multiSelectSize',
	    value: function multiSelectSize(arrName) {
	      return this[arrName].length > 7 ? 7 : this[arrName].length;
	    }
	  }, {
	    key: 'orgs',
	    get: function get() {
	      var orgs = this.users.filter(function (el) {
	        return el.roles.indexOf('ROLE_ORGANISER') > -1 && el.roles.indexOf('ROLE_ADMIN') === -1;
	      });
	      orgs.map(function (el) {
	        el.name = el.fname + ' ' + el.lname;
	        return el;
	      });
	
	      return orgs;
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _conferenceCard = __webpack_require__(25);
	
	var _conferenceCard2 = _interopRequireDefault(_conferenceCard);
	
	var _conferenceCard3 = __webpack_require__(26);
	
	var _conferenceCard4 = _interopRequireDefault(_conferenceCard3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  bindings: {
	    showCounters: '<', // boolean
	    showSubmit: '<', // boolean
	    data: '<', // object
	    onClick: '&', // callback
	    signInFirst: '<' // boolean
	  },
	  template: _conferenceCard2.default,
	  controller: _conferenceCard4.default
	};
	
	exports.default = component;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"tabs-container conference-card\">\n  <div class=\"conference-card-title\">\n    <a href=\"#/conference/{{ $ctrl.data.id }}\" class=\"conference-card-title__link\">\n      {{ $ctrl.data.title }}\n    </a>\n  </div><button class=\"btn btn-right conference-card-title__btn\"\n                ng-if=\"$ctrl.showSubmit && $ctrl.data.cfp_active\"\n                ng-click=\"$ctrl.onClick({ conferenceId: $ctrl.data.id })\">Submit Talk</button>\n  <div class=\"conference-card-dates\">\n    <span class=\"conference-card-label\">Dates:</span>\n    {{ $ctrl.startDate }} &mdash; {{ $ctrl.endDate }}\n  </div>\n  <div class=\"conference-card-dates_cfp\">\n    <span class=\"conference-card-label\">Call For Papers:</span>\n    {{ $ctrl.cfpStartDate }} &mdash; {{ $ctrl.cfpEndDate }}</div>\n  <div class=\"conference-card-description\">{{ $ctrl.data.description }}</div>\n  <div class=\"conference-card-location\"><span class=\"conference-card-label\">Location:</span>{{ $ctrl.data.location }}</div>\n  <div ng-if=\"$ctrl.showCounters\">\n    <div class=\"conference-card-counter\">New: {{ $ctrl.data.new }}</div>\n    <div class=\"conference-card-counter\">In Progress: {{ $ctrl.data.in-progress }}</div>\n    <div class=\"conference-card-counter\">Approved: {{ $ctrl.data.approved }}</div>\n    <div class=\"conference-card-counter\">Rejected: {{ $ctrl.data.rejected }}</div>\n  </div>\n</div>";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function _class() {
	  _classCallCheck(this, _class);
	
	  var tbdString = 'TBD';
	
	  // Format date output from YYYY-MM-DD ISO 8601 format we receive from server to human readable MM/DD/YYYY
	  function format(isoDate) {
	    return isoDate.substr(8, 2) + '/' + isoDate.substr(5, 2) + '/' + isoDate.substr(0, 4);
	  }
	
	  this.startDate = this.data.start_date ? format(this.data.start_date) : tbdString;
	  this.endDate = this.data.end_date ? format(this.data.end_date) : tbdString;
	  this.cfpStartDate = this.data.call_for_paper_start_date ? format(this.data.call_for_paper_start_date) : tbdString;
	  this.cfpEndDate = this.data.call_for_paper_end_date ? format(this.data.call_for_paper_end_date) : tbdString;
	};
	
	exports.default = _class;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _signIn = __webpack_require__(28);
	
	var _signIn2 = _interopRequireDefault(_signIn);
	
	var _signIn3 = __webpack_require__(31);
	
	var _signIn4 = _interopRequireDefault(_signIn3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.sign-in', {
	      url: '/sign-in',
	      template: '<sign-in display="full"></sign-in>'
	    });
	  }]).component('signIn', _signIn2.default).service('signInService', _signIn4.default);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _signIn = __webpack_require__(29);
	
	var _signIn2 = _interopRequireDefault(_signIn);
	
	var _signIn3 = __webpack_require__(30);
	
	var _signIn4 = _interopRequireDefault(_signIn3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var signInComponent = {
	  bindings: {
	    display: '@'
	  },
	  template: _signIn2.default,
	  controller: _signIn4.default
	};
	
	exports.default = signInComponent;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = "<div ng-class=\"$ctrl.conditionalWrapperClass\">\n  <form class=\"sign-in\" name=\"$ctrl.userForm\" novalidate ng-submit=\"$ctrl.login()\">\n    <h2 class=\"form-title sign-in__title\">sign in</h2>\n    <label for=\"sign-in-email\" class=\"sign-in__label form-label\">email:</label>\n    <input type=\"email\"\n           name=\"mail\"\n           id=\"sign-in-email\"\n           class=\"field sing-in__field\"\n           ng-model=\"$ctrl.user.mail\"\n           ng-pattern=\"$ctrl.emailPattern\"\n           required\n           tabindex=\"1\">\n    <span class=\"field-error\" ng-if=\"$ctrl.userForm.mail.$error.login_auth_err\">We can not find an account with that email address</span>\n    <span class=\"field-error\" ng-if=\"$ctrl.userForm.mail.$error.confirm_reg\">You have to go to your email and confirm your account</span>\n    <div class=\"sign-in__password-cont\">\n      <label for=\"sign-in-password\" class=\"form-label\">password:</label>\n      <a href=\"#\" ui-sref=\"header.forgotPassword\" class=\"sign-in__forgot\" tabindex=\"4\">forgot password?</a>\n    </div>\n    <input type=\"password\"\n           name=\"password\"\n           class=\"field\"\n           id=\"sign-in-password\"\n           ng-model=\"$ctrl.user.password\"\n           tabindex=\"2\">\n    <span class=\"field-error\" ng-if=\"$ctrl.userForm.password.$error.password_auth_err\">Your password is incorrect</span>\n\n    <input type=\"submit\"\n           value=\"Sign In\"\n           class=\"btn sign-in__submit\"\n           tabindex=\"3\">\n  </form>\n  \n  <div class=\"sign-in__separator\"></div>\n\n  <a ui-sref=\"header.sign-up\" class=\"btn sign-in__create\" tabindex=\"5\">create new account</a>\n</div>";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SignInController = function () {
	  SignInController.$inject = ["$scope", "$state", "$location", "signInService", "Constants", "LocalStorage"];
	  function SignInController($scope, $state, $location, signInService, Constants, LocalStorage) {
	    'ngInject';
	
	    _classCallCheck(this, SignInController);
	
	    this.user = {};
	    this.userForm = {};
	    this.service = signInService;
	    this.scope = $scope;
	    this.emailPattern = Constants.email;
	
	    this.state = $state;
	    this.location = $location;
	    this.localStorageService = LocalStorage;
	  }
	
	  _createClass(SignInController, [{
	    key: 'login',
	    value: function login() {
	      var _this = this;
	
	      this.userForm.password.$setValidity('password_auth_err', true);
	      this.userForm.mail.$setValidity('login_auth_err', true);
	      this.userForm.mail.$setValidity('confirm_reg', true);
	
	      if (this.userForm.mail.$error.required || this.userForm.mail.$error.pattern) {
	        this.userForm.mail.$setValidity('login_auth_err', false);
	      }
	
	      if (this.userForm.$valid) {
	        this.service.login(this.user).then(function () {
	          _this.successSignIn();
	        }, function (error) {
	          _this.showError(error.data.error);
	        });
	      }
	    }
	  }, {
	    key: 'showError',
	    value: function showError(error) {
	      if (error === 'password_auth_err') {
	        this.userForm.password.$setValidity(error, false);
	      }
	
	      if (error === 'login_auth_err') {
	        this.userForm.mail.$setValidity(error, false);
	      }
	      if (error === 'confirm_reg') {
	        this.userForm.mail.$setValidity(error, false);
	      }
	    }
	  }, {
	    key: 'successSignIn',
	    value: function successSignIn() {
	      this.user = {};
	      this.userForm.$setPristine();
	
	      var redirectStateName = this.localStorageService.getItem('redirectStateName');
	      var redirectStateParams = JSON.parse(this.localStorageService.getItem('redirectStateParams'));
	
	      if (redirectStateName) {
	        this.localStorageService.removeItem('redirectStateName');
	        this.localStorageService.removeItem('redirectStateParams');
	        this.state.go(redirectStateName, redirectStateParams, { reload: true });
	      } else {
	        this.service.callTheEvent();
	      }
	    }
	  }, {
	    key: 'emitCloseDropdown',
	    value: function emitCloseDropdown() {
	      this.scope.$emit('closeDropdown');
	    }
	  }, {
	    key: 'conditionalWrapperClass',
	    get: function get() {
	      if (this.display === 'full') {
	        return 'sign-in-wrapper sign-in-wrapper_full js-dropdown'; // fullscreen
	      }
	      return 'sign-in-wrapper js-dropdown'; // dropdown, default
	    }
	  }]);
	
	  return SignInController;
	}();
	// no_info_auth_err
	
	
	exports.default = SignInController;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SignIn = function () {
	  SignIn.$inject = ["$http", "$q", "$window", "$rootScope", "$document"];
	  function SignIn($http, $q, $window, $rootScope, $document) {
	    'ngInject';
	
	    _classCallCheck(this, SignIn);
	
	    this.userInfo = null;
	    this.http = $http;
	    this.q = $q;
	    this.window = $window;
	    this.rootScope = $rootScope;
	    this.document = $document[0]; // $document is a jqLite collection
	  }
	
	  _createClass(SignIn, [{
	    key: 'utf8ToB64',
	    value: function utf8ToB64(str) {
	      return this.window.btoa(unescape(encodeURIComponent(str)));
	    }
	  }, {
	    key: 'login',
	    value: function login(user) {
	      var _this = this;
	
	      var deferred = this.q.defer();
	      var headers = void 0;
	      var body = void 0;
	
	      if (this.document.cookie.indexOf('XSRF') === -1) {
	        headers = {};
	        body = user;
	      } else {
	        headers = user ? { authorization: 'Basic ' + this.utf8ToB64(user.mail + ':' + user.password) } : {};
	        body = {};
	      }
	
	      this.http.post('/login/', body, { headers: headers }).then(function (_ref) {
	        var data = _ref.data;
	
	        if (data.token) {
	          _this.userInfo = {
	            token: data.token
	          };
	        } else {
	          _this.userInfo = {
	            token: 'auth'
	          };
	        }
	
	        _this.window.localStorage.setItem('userInfo', JSON.stringify(_this.userInfo));
	        deferred.resolve(_this.userInfo);
	      }, function (error) {
	        _this.window.localStorage.removeItem('userInfo');
	        deferred.reject(error);
	      });
	
	      return deferred.promise;
	    }
	  }, {
	    key: 'callTheEvent',
	    value: function callTheEvent() {
	      this.rootScope.$broadcast('signInEvent');
	    }
	  }]);
	
	  return SignIn;
	}();
	
	exports.default = SignIn;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _accountPage = __webpack_require__(33);
	
	var _accountPage2 = _interopRequireDefault(_accountPage);
	
	var _editPassword = __webpack_require__(36);
	
	var _editPassword2 = _interopRequireDefault(_editPassword);
	
	var _editName = __webpack_require__(39);
	
	var _editName2 = _interopRequireDefault(_editName);
	
	var _editEmail = __webpack_require__(42);
	
	var _editEmail2 = _interopRequireDefault(_editEmail);
	
	var _editPassword3 = __webpack_require__(45);
	
	var _editPassword4 = _interopRequireDefault(_editPassword3);
	
	var _editEmail3 = __webpack_require__(46);
	
	var _editEmail4 = _interopRequireDefault(_editEmail3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.account', {
	      url: '/account',
	      template: '<account-page user="ctrl.currentUser" ng-if="ctrl.resolved"></account-page>',
	      resolve: {
	        currentUser: ["Current", function currentUser(Current) {
	          return Current.current;
	        }]
	      },
	      controller: ["currentUser", "$rootScope", function myInfoController(currentUser, $rootScope) {
	        if (!currentUser) {
	          $rootScope.$broadcast('signInEvent');
	        }
	        this.resolved = true;
	        this.currentUser = currentUser;
	      }],
	      controllerAs: 'ctrl'
	    });
	  }]).component('accountPage', _accountPage2.default).component('editPassword', _editPassword2.default).component('editName', _editName2.default).component('editEmail', _editEmail2.default).service('EditPasswordService', _editPassword4.default).service('EditEmailService', _editEmail4.default);
	};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _accountPage = __webpack_require__(34);
	
	var _accountPage2 = _interopRequireDefault(_accountPage);
	
	var _accountPage3 = __webpack_require__(35);
	
	var _accountPage4 = _interopRequireDefault(_accountPage3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var accountPageComponent = {
	  bindings: {
	    user: '='
	  },
	  template: _accountPage2.default,
	  controller: _accountPage4.default
	};
	
	exports.default = accountPageComponent;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"settings-wrapper\">\n    <div class=\"settings__header\">settings account</div>\n    <div class=\"settings__block\">\n        <div class=\"settings__row\">\n           <div class=\"settings__brief\" ng-click=\"$ctrl.showEditname()\" ng-show=\"!$ctrl.editName\">\n               <div class=\"settings__title\">name</div>\n               <div class=\"settings__row-content settings__row-content_name\">{{$ctrl.user.fname}} {{$ctrl.user.lname}}</div>\n               <div class=\"settings__edit\">edit</div>\n           </div>\n           <div class=\"settings__details\" ng-if=\"$ctrl.editName\">\n               <edit-name changename=\"$ctrl.editName\" user=\"$ctrl.user\"></edit-name>\n           </div>\n        </div>\n        <div class=\"settings__row\">\n            <div class=\"settings__brief\" ng-click=\"$ctrl.showEditemail()\" ng-show=\"!$ctrl.editEmail\">\n                <div class=\"settings__title\">email</div>\n                <div class=\"settings__row-content settings__row-content_name\">{{$ctrl.user.mail}}</div>\n                <div class=\"settings__edit\">edit</div>\n            </div>\n            <div class=\"settings__details\" ng-if=\"$ctrl.editEmail\">\n                <edit-email editing=\"$ctrl.editEmail\" user=\"$ctrl.user\"></edit-email>\n            </div>\n        </div>\n        <div class=\"settings__row\">\n            <div class=\"settings__brief\" ng-click=\"$ctrl.showEditpass()\" ng-show=\"!$ctrl.editPass\">\n                <div class=\"settings__title\">password</div>\n                <div class=\"settings__row-content settings__row-content_name\">*******</div>\n                <div class=\"settings__edit\">edit</div>\n            </div>\n            <div class=\"settings__details\" ng-if=\"$ctrl.editPass\">\n                <edit-password editing=\"$ctrl.editPass\"></edit-password>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AccountPageController = function () {
	  function AccountPageController() {
	    'ngInject';
	
	    _classCallCheck(this, AccountPageController);
	
	    this.editName = false;
	    this.editEmail = false;
	    this.editPass = false;
	  }
	
	  _createClass(AccountPageController, [{
	    key: 'showEditname',
	    value: function showEditname() {
	      this.editName = true;
	      this.editEmail = false;
	      this.editPass = false;
	    }
	  }, {
	    key: 'showEditemail',
	    value: function showEditemail() {
	      this.editEmail = true;
	      this.editPass = false;
	      this.editName = false;
	    }
	  }, {
	    key: 'showEditpass',
	    value: function showEditpass() {
	      this.editPass = true;
	      this.editEmail = false;
	      this.editName = false;
	    }
	  }]);
	
	  return AccountPageController;
	}();
	
	exports.default = AccountPageController;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _editPassword = __webpack_require__(37);
	
	var _editPassword2 = _interopRequireDefault(_editPassword);
	
	var _editPassword3 = __webpack_require__(38);
	
	var _editPassword4 = _interopRequireDefault(_editPassword3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var editPasswordComponent = {
	  bindings: {
	    editing: '='
	  },
	  template: _editPassword2.default,
	  controller: _editPassword4.default
	};
	
	exports.default = editPasswordComponent;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"edit-password\">\n  <span class=\"edit-password__result edit-password__result_success\" ng-if=\"$ctrl.changed\">\n    Your password has been changed successfully\n  </span>\n  <span class=\"edit-password__result edit-password__result_error\" ng-if=\"$ctrl.error\">\n    {{$ctrl.errorMessage}}\n  </span>\n\n\n  <form\n    class=\"edit-password__form\"\n    novalidate\n    name=\"$ctrl.editPasswordForm\"\n    ng-submit=\"$ctrl.changePassword()\"\n    >\n    <p class=\"edit-password__title\">Password</p>\n\n    <div class=\"edit-password__fields-wrapper\">\n      <label class=\"form-label\">Current Password</label>\n      <input class=\"field field_border edit-password__field\"\n             type=\"password\"\n             name=\"currentPassword\"\n             required\n             ng-model=\"$ctrl.passwords.currentPassword\">\n\n      <label class=\"form-label\">New Password</label>\n      <input class=\"field field_border edit-password__field\"\n             type=\"password\"\n             name=\"newPassword\"\n             required\n             minlength=\"6\"\n             maxlength=\"30\"\n             ng-pattern=\"$ctrl.passwordPattern\"\n             ng-model=\"$ctrl.passwords.newPassword\">\n\n      <label class=\"form-label\">Confirm New Password</label>\n      <input class=\"field field_border edit-password__field\"\n             type=\"password\"\n             name=\"confirmNewPassword\"\n             required\n             ng-model=\"$ctrl.passwords.confirmNewPassword\">\n\n      <div class=\"edit-password__buttons-wrapper\">\n        <input type=\"submit\" value=\"Save\" class=\"btn edit-password__button edit-password__button_left\"\n               ng-disabled=\"$ctrl.changed\">\n        <input type=\"reset\" value=\"Cancel\" class=\"btn edit-password__button\"\n               ng-disabled=\"$ctrl.changed\" ng-click=\"$ctrl.closeEditPassword()\">\n      </div>\n    </div>\n\n  </form>\n</div>";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EditPasswordController = function () {
	  EditPasswordController.$inject = ["EditPasswordService", "Constants", "$timeout"];
	  function EditPasswordController(EditPasswordService, Constants, $timeout) {
	    'ngInject';
	
	    _classCallCheck(this, EditPasswordController);
	
	    this.timeout = $timeout;
	    this.editPasswordService = EditPasswordService;
	    this.passwordPattern = Constants.password;
	
	    this.editPasswordForm = {};
	    this.passwords = {};
	    this.changed = false;
	    this.error = false;
	    this.errorMessage = null;
	
	    this.errorMessages = this.editPasswordService.getErrors();
	  }
	
	  _createClass(EditPasswordController, [{
	    key: 'closeEditPassword',
	    value: function closeEditPassword() {
	      this.passwords = {};
	      this.error = false;
	      this.errorMessage = null;
	      this.editPasswordForm.$setPristine();
	      this.editing = false;
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword() {
	      var _this = this;
	
	      this.setToDefault();
	      if (this.editPasswordForm.$valid && this.checkMatchPasswords()) {
	        this.editPasswordService.changePassword(this.passwords).then(function () {
	          _this.successChanged();
	        }).catch(function (error) {
	          _this.errorChanged(error.data);
	        });
	        return;
	      }
	
	      this.showError();
	    }
	  }, {
	    key: 'successChanged',
	    value: function successChanged() {
	      var _this2 = this;
	
	      this.passwords = {};
	      this.editPasswordForm.$setPristine();
	      this.changed = true;
	      this.timeout(function () {
	        _this2.changed = false;
	        _this2.editing = false;
	      }, 1000);
	    }
	  }, {
	    key: 'errorChanged',
	    value: function errorChanged(error) {
	      var _this3 = this;
	
	      if (error.fields) {
	        error.fields.forEach(function (field) {
	          _this3.editPasswordForm[field].$setValidity(error.error, false);
	        });
	        this.showError();
	      }
	    }
	  }, {
	    key: 'checkMatchPasswords',
	    value: function checkMatchPasswords() {
	      if (this.passwords.newPassword === this.passwords.confirmNewPassword) {
	        return true;
	      }
	
	      this.editPasswordForm.newPassword.$setValidity('passwords_match', false);
	      this.editPasswordForm.confirmNewPassword.$setValidity('passwords_match', false);
	      return false;
	    }
	  }, {
	    key: 'setToDefault',
	    value: function setToDefault() {
	      this.error = false;
	      this.errorMessage = null;
	
	      this.editPasswordForm.currentPassword.$setValidity('wrong_password', true);
	      this.editPasswordForm.newPassword.$setValidity('passwords_match', true);
	      this.editPasswordForm.confirmNewPassword.$setValidity('passwords_match', true);
	    }
	  }, {
	    key: 'showError',
	    value: function showError() {
	      this.error = true;
	
	      if (this.editPasswordForm.currentPassword.$error.required || this.editPasswordForm.newPassword.$error.required || this.editPasswordForm.confirmNewPassword.$error.required) {
	        this.errorMessage = this.errorMessages.require;
	        return;
	      }
	
	      if (this.editPasswordForm.newPassword.$error.minlength || this.editPasswordForm.confirmNewPassword.$error.minlength) {
	        this.errorMessage = this.errorMessages.minLength;
	        return;
	      }
	
	      if (this.editPasswordForm.newPassword.$error.maxlength || this.editPasswordForm.confirmNewPassword.$error.maxlength) {
	        this.errorMessage = this.errorMessages.maxLength;
	        return;
	      }
	
	      if (this.editPasswordForm.newPassword.$error.pattern || this.editPasswordForm.confirmNewPassword.$error.pattern) {
	        this.errorMessage = this.errorMessages.nonSpace;
	        return;
	      }
	
	      if (this.editPasswordForm.newPassword.$error.passwords_match || this.editPasswordForm.confirmNewPassword.$error.passwords_match) {
	        this.errorMessage = this.errorMessages.passwordsMatch;
	        return;
	      }
	
	      if (this.editPasswordForm.currentPassword.$error.wrong_password) {
	        this.errorMessage = this.errorMessages.wrongPassword;
	      }
	    }
	  }]);
	
	  return EditPasswordController;
	}();
	
	exports.default = EditPasswordController;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _editName = __webpack_require__(40);
	
	var _editName2 = _interopRequireDefault(_editName);
	
	var _editName3 = __webpack_require__(41);
	
	var _editName4 = _interopRequireDefault(_editName3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var editNameComponent = {
	  bindings: {
	    changename: '=',
	    user: '='
	  },
	  template: _editName2.default,
	  controller: _editName4.default
	};
	
	exports.default = editNameComponent;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"edit-password\">\n  <span class=\"edit-password__result edit-password__result_success\" ng-if=\"$ctrl.changed\">\n    Your changes have been saved successfully\n  </span>\n  <span class=\"edit-password__result edit-password__result_error\" ng-if=\"$ctrl.error\">\n    Please enter a name\n  </span>\n\n\n  <form\n    class=\"edit-password__form\"\n    novalidate\n    name=\"$ctrl.editNameForm\"\n    ng-submit=\"$ctrl.submit()\"\n  >\n    <p class=\"edit-password__title\">Name</p>\n\n    <div class=\"edit-password__fields-wrapper\">\n      <label class=\"form-label\">first name</label>\n      <input class=\"field field_border edit-password__field\"\n             type=\"text\"\n             name=\"fname\"\n             required\n             maxlength=\"56\"\n             ng-model=\"$ctrl.userInfo.fname\">\n\n      <label class=\"form-label\">last name</label>\n      <input class=\"field field_border edit-password__field\"\n             type=\"text\"\n             name=\"lname\"\n             required\n             maxlength=\"56\"\n             ng-model=\"$ctrl.userInfo.lname\">\n\n      <div class=\"edit-password__buttons-wrapper\">\n        <input type=\"submit\" value=\"Save\" class=\"btn edit-password__button edit-password__button_left\"\n               ng-disabled=\"$ctrl.changed\">\n        <input type=\"reset\" value=\"Cancel\" class=\"btn edit-password__button\"\n               ng-disabled=\"$ctrl.changed\" ng-click=\"$ctrl.close()\">\n      </div>\n    </div>\n  </form>\n</div>";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EditNameController = function () {
	  EditNameController.$inject = ["Current", "$timeout", "$state"];
	  function EditNameController(Current, $timeout, $state) {
	    'ngInject';
	
	    _classCallCheck(this, EditNameController);
	
	    this.currentUserService = Current;
	    this.timeout = $timeout;
	    this.state = $state;
	    this.editNameForm = {};
	    this.userInfo = {
	      fname: this.user.fname,
	      lname: this.user.lname
	    };
	    this.changed = false;
	    this.error = false;
	  }
	
	  _createClass(EditNameController, [{
	    key: 'close',
	    value: function close() {
	      this.changename = false;
	    }
	  }, {
	    key: 'submit',
	    value: function submit() {
	      if (this.editNameForm.$invalid) {
	        this.showAlert('error');
	      } else {
	        this.user.fname = this.userInfo.fname;
	        this.user.lname = this.userInfo.lname;
	        this.currentUserService.updateInfo(this.user);
	        this.showAlert('success');
	        this.editNameForm.$setPristine();
	      }
	    }
	  }, {
	    key: 'showAlert',
	    value: function showAlert(message) {
	      var _this = this;
	
	      if (message === 'error') {
	        this.error = true;
	        return;
	      }
	
	      if (message === 'success') {
	        this.changed = true;
	        this.error = false;
	        this.timeout(function () {
	          _this.changed = false;
	          _this.changename = false;
	          _this.state.go('header.account', {}, { reload: true });
	        }, 1000);
	      }
	    }
	  }]);
	
	  return EditNameController;
	}();
	
	exports.default = EditNameController;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _editEmail = __webpack_require__(43);
	
	var _editEmail2 = _interopRequireDefault(_editEmail);
	
	var _editEmail3 = __webpack_require__(44);
	
	var _editEmail4 = _interopRequireDefault(_editEmail3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var editEmailComponent = {
	  bindings: {
	    editing: '=',
	    user: '='
	  },
	  template: _editEmail2.default,
	  controller: _editEmail4.default
	};
	
	exports.default = editEmailComponent;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"edit-email\">\n  <div class=\"edit-email__result edit-email__result_confirm\"\n        ng-show=\"$ctrl.confirm\"\n        ng-bind=\"$ctrl.confirmMessage\"></div>\n  <div class=\"edit-email__result edit-email__result_error\"\n        ng-show=\"$ctrl.error\"\n        ng-bind=\"$ctrl.errorMessage\"></div>\n\n    <form class=\"edit-email__form\"\n          novalidate\n          name=\"$ctrl.editEmailForm\"\n          ng-submit=\"$ctrl.changeEmail()\">\n\n      <p class=\"edit-email__title \">Email</p>\n      <div class=\"edit-email__fields-wrapper\">\n        <label class=\"form-label\">Current Email</label>\n        <input class=\"field field_border edit-email__field\"\n               type=\"text\"\n               name=\"currentEmail\"\n               disabled\n               ng-model=\"$ctrl.user.mail\">\n\n        <label class=\"form-label edit-email__label\">New Email</label>\n        <input class=\"field field_border edit-email__field\"\n               type=\"text\"\n               name=\"newEmail\"\n               required\n               ng-pattern=\"$ctrl.emailPattern\"\n               ng-model=\"$ctrl.newEmail\"\n               ng-focus=\"$ctrl.showTooltip()\"\n               ng-blur=\"$ctrl.hideTooltip()\"\n               ng-change=\"$ctrl.resetEmailValidity()\">\n        <div class=\"edit-email__tooltip\" ng-show=\"$ctrl.tooltipVisible\">\n          <div>A confirmation link will be sent to your <strong>new</strong> address</div>\n          <div>A notification will be sent to your <strong>old</strong> address</div>\n        </div>\n\n        <div class=\"edit-email__buttons-wrapper\">\n          <input type=\"submit\"\n               value=\"Save\"\n               class=\"btn edit-email__button edit-email__button_left\"\n               ng-disabled=\"$ctrl.buttonsBlocked\">\n\n          <input type=\"button\"\n               value=\"Cancel\"\n               class=\"btn edit-email__button\"\n               ng-disabled=\"$ctrl.buttonsBlocked\"\n               ng-click=\"$ctrl.closeEditEmail()\">\n        </div>\n      </div>\n    </form>\n</div>";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EditEmailController = function () {
	  EditEmailController.$inject = ["Constants", "EditEmailService", "$timeout"];
	  function EditEmailController(Constants, EditEmailService, $timeout) {
	    'ngInject';
	
	    _classCallCheck(this, EditEmailController);
	
	    this.timeout = $timeout;
	    this.editEmailService = EditEmailService;
	
	    this.emailPattern = Constants.email;
	    this.messages = this.editEmailService.getMessages();
	
	    this.timeoutHandler = null;
	
	    this.editEmailForm = {};
	    this.newEmail = null;
	
	    this.error = false;
	    this.errorMessage = null;
	
	    this.buttonsBlocked = false;
	
	    this.tooltipVisible = false;
	
	    this.pendingChange = false;
	    this.confirmTimeout = 3600000; // default 1 hour
	
	    this.checkPendingUpdate();
	  }
	
	  _createClass(EditEmailController, [{
	    key: 'checkPendingUpdate',
	    value: function checkPendingUpdate() {
	      var _this = this;
	
	      this.editEmailService.checkPendingUpdate().then(function (res) {
	        if (res.data.result === 'pending_email_change_found') {
	          _this.pendingChange = true;
	          _this.confirmTimeout = res.data.secondsToExpiry * 1000;
	          _this.showConfirm(_this.messages.confirmationSent);
	        }
	      });
	    }
	  }, {
	    key: 'changeEmail',
	    value: function changeEmail() {
	      var _this2 = this;
	
	      if (this.editEmailForm.newEmail.$error.pattern || this.editEmailForm.newEmail.$error.required) {
	        this.showError(this.messages.errInvalidEmail);
	      } else if (this.user.mail === this.newEmail) {
	        this.showError(this.messages.errEmailIsTheSame);
	        this.editEmailForm.newEmail.$setValidity('email_is_the_same', false);
	      } else if (this.editEmailForm.$valid) {
	        this.buttonsBlocked = true; // block the buttons until the promise is resolved
	        this.editEmailService.updateEmail(this.newEmail).then(function () {
	          _this2.pendingChange = true;
	          _this2.showConfirm(_this2.messages.confirmationSent);
	        }).catch(function (err) {
	          if (err.data.error === 'email_already_exists') {
	            _this2.editEmailForm.newEmail.$setValidity('email_already_exists', false);
	
	            var errMessage = _this2.messages.errEmailAlreadyExists.replace('{{email}}', _this2.newEmail);
	            _this2.showError(errMessage);
	          } else {
	            // unknown error, default handler
	            _this2.showError(err.data.error);
	          }
	        }).finally(this.buttonsBlocked = false);
	      }
	    }
	  }, {
	    key: 'showError',
	    value: function showError(message) {
	      this.error = true;
	      this.errorMessage = message;
	    }
	  }, {
	    key: 'showConfirm',
	    value: function showConfirm(message) {
	      var _this3 = this;
	
	      this.error = false;
	      this.errorMessage = null;
	
	      this.confirm = true;
	      this.confirmMessage = message;
	
	      this.timeout(function () {
	        _this3.confirm = false;
	        _this3.confirmMessage = null;
	        _this3.closeEditEmail();
	      }, this.confirmTimeout);
	    }
	  }, {
	    key: 'closeEditEmail',
	    value: function closeEditEmail() {
	      this.error = false;
	      this.errorMessage = null;
	      this.newEmail = null;
	      this.editEmailForm.$setPristine();
	      this.editing = false;
	    }
	  }, {
	    key: 'showTooltip',
	    value: function showTooltip() {
	      var _this4 = this;
	
	      this.tooltipVisible = true;
	      this.timeoutHandler = this.timeout(function () {
	        _this4.tooltipVisible = false;
	      }, 3000);
	    }
	  }, {
	    key: 'hideTooltip',
	    value: function hideTooltip() {
	      this.tooltipVisible = false;
	      if (this.timeoutHandler) {
	        // cancel a pending timeout promise if any
	        this.timeout.cancel(this.timeoutHandler);
	      }
	    }
	  }, {
	    key: 'resetEmailValidity',
	    value: function resetEmailValidity() {
	      this.editEmailForm.newEmail.$setValidity('email_is_the_same', true);
	      this.editEmailForm.newEmail.$setValidity('email_already_exists', true);
	    }
	  }]);
	
	  return EditEmailController;
	}();
	
	exports.default = EditEmailController;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EditPasswordService = function () {
	  EditPasswordService.$inject = ["$http", "LocalStorage"];
	  function EditPasswordService($http, LocalStorage) {
	    'ngInject';
	
	    _classCallCheck(this, EditPasswordService);
	
	    this.http = $http;
	    this.localStorage = LocalStorage;
	
	    this.errors = {
	      nonSpace: 'Please use at least one non-space character in your password.',
	      minLength: 'Your password must be at least 6 characters long. Please try another.',
	      maxLength: 'Your password should not be longer than 30 characters. Please try another.',
	      require: 'All fields are mandatory. Please make sure all required fields are filled out.',
	      passwordsMatch: 'Passwords do not match.',
	      wrongPassword: 'You entered an invalid current password.'
	    };
	  }
	
	  _createClass(EditPasswordService, [{
	    key: 'changePassword',
	    value: function changePassword(passwords) {
	      return this.http.post('settings/password', passwords, {
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      });
	    }
	  }, {
	    key: 'getErrors',
	    value: function getErrors() {
	      return this.errors;
	    }
	  }]);
	
	  return EditPasswordService;
	}();
	
	exports.default = EditPasswordService;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EditEmailService = function () {
	  EditEmailService.$inject = ["$http", "LocalStorage"];
	  function EditEmailService($http, LocalStorage) {
	    'ngInject';
	
	    _classCallCheck(this, EditEmailService);
	
	    this.http = $http;
	    this.localStorage = LocalStorage;
	
	    this.messages = {
	      errInvalidEmail: 'Please enter a valid email address',
	      errEmailIsTheSame: 'The new e-mail address you have provided is the same as your current e-mail address',
	      errEmailAlreadyExists: 'There is an existing account associated with {{email}}',
	      confirmationSent: 'We\'ve sent a confirmation link to your new email address,\n                         please check your inbox and confirm your changes'
	    };
	  }
	
	  _createClass(EditEmailService, [{
	    key: 'updateEmail',
	    value: function updateEmail(newEmail) {
	      return this.http.post('settings/email', { mail: newEmail }, {
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      });
	    }
	  }, {
	    key: 'checkPendingUpdate',
	    value: function checkPendingUpdate() {
	      return this.http.get('settings/email', {
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      });
	    }
	  }, {
	    key: 'getMessages',
	    value: function getMessages() {
	      return this.messages;
	    }
	  }]);
	
	  return EditEmailService;
	}();
	
	exports.default = EditEmailService;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _myInfo = __webpack_require__(48);
	
	var _myInfo2 = _interopRequireDefault(_myInfo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.tabs.myInfo', {
	      url: '/my-info',
	      template: '<my-info user="ctrl.currentUser" ng-if="ctrl.resolved"></my-info>',
	      resolve: {
	        currentUser: ["Current", function currentUser(Current) {
	          return Current.current;
	        }]
	      },
	      controller: ["currentUser", "Permissions", function myInfoController(currentUser, Permissions) {
	        Permissions.permitted('ROLE_SPEAKER', currentUser);
	        this.resolved = true;
	        this.currentUser = currentUser;
	      }],
	      controllerAs: 'ctrl',
	      params: { fwdState: 'header.tabs.myInfo' }
	    });
	  }]).component('myInfo', _myInfo2.default);
	};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _myInfo = __webpack_require__(49);
	
	var _myInfo2 = _interopRequireDefault(_myInfo);
	
	var _myInfo3 = __webpack_require__(50);
	
	var _myInfo4 = _interopRequireDefault(_myInfo3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var myInfoComponent = {
	  bindings: {
	    user: '='
	  },
	  template: _myInfo2.default,
	  controller: _myInfo4.default
	};
	
	exports.default = myInfoComponent;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

	module.exports = "<user-photo user=\"$ctrl.user\"></user-photo>\n<form class=\"my-info\" name=\"$ctrl.userInfoForm\" novalidate ng-submit=\"$ctrl.submit()\">\n  <label for=\"my-info-bio\" class=\"form-label form-label_required my-info__label my-info__label_bio\">Short Bio</label>\n  <textarea name=\"bio\" id=\"my-info-bio\" class=\"textarea my-info__bio\" maxlength=\"2000\"\n              ng-model=\"$ctrl.user.bio\"\n              ng-maxlength=\"2000\"\n              ng-required=\"true\">{{$ctrl.user.bio}}</textarea>\n  <label for=\"my-info-job\" class=\"form-label form-label_required my-info__label\">Job Title</label>\n  <input type=\"text\" name=\"job\" id=\"my-info-job\"\n         class=\"field field_border my-info__field_job\"\n         maxlength=\"256\"\n         ng-model=\"$ctrl.user.job\"\n         ng-required=\"true\">\n  <label for=\"my-info-company\" class=\"form-label form-label_required my-info__label\">Company\n    <md-icon class=\"icon icon_info\">\n      <md-tooltip md-direction=\"right\" class=\"tooltip\">e.g. Company name or self-employed</md-tooltip>\n    </md-icon>\n\n  </label>\n  <input type=\"text\" name=\"company\" id=\"my-info-company\"\n         class=\"field field_border my-info__field_company\"\n         maxlength=\"256\"\n         ng-model=\"$ctrl.user.company\"\n         ng-required=\"true\">\n  <label for=\"my-info-linkedin-past-conferences\" class=\"form-label my-info__label\">Past Conferences</label>\n  <textarea type=\"text\" name=\"past\" id=\"my-info-linkedin-past-conferences\" rows=\"5\"\n         class=\"textarea\"\n         maxlength=\"1000\"\n         ng-model=\"$ctrl.user.past\">{{$ctrl.user.past}}</textarea>\n  <label for=\"my-info-linkedin\" class=\"form-label my-info__label\">LinkedIn</label>\n  <input type=\"text\" name=\"linkedin\" id=\"my-info-linkedin\"\n         class=\"field field_border\"\n         ng-model=\"$ctrl.user.linkedin\">\n  <label for=\"my-info-twitter\" class=\"form-label my-info__label\">twitter</label>\n  <input type=\"text\" name=\"twitter\" id=\"my-info-twitter\"\n         class=\"field field_border\"\n         ng-model=\"$ctrl.user.twitter\">\n  <label for=\"my-info-facebook\" class=\"form-label my-info__label\">facebook</label>\n  <input type=\"text\" name=\"facebook\" id=\"my-info-facebook\"\n          class=\"field field_border\"\n         ng-model=\"$ctrl.user.facebook\">\n  <label for=\"my-info-blog\" class=\"form-label my-info__label\">blog</label>\n  <input type=\"text\" name=\"blog\" id=\"my-info-blog\"\n         class=\"field field_border\"\n         ng-model=\"$ctrl.user.blog\">\n  <label for=\"my-info-additional-info\" class=\"form-label my-info__label\">Additional Info</label>\n  <textarea name=\"info\" id=\"my-info-additional-info\" rows=\"5\" class=\"textarea\"\n            ng-model=\"$ctrl.user.info\"\n            maxlength=\"1000\">{{$ctrl.user.info}}</textarea>\n\n  <input type=\"submit\" value=\"save\" class=\"btn my-info__button \">\n\n</form>\n\n<div class=\"pop-up-wrapper\" ng-show=\"$ctrl.alertVisible\">\n  <div class=\"pop-up\">\n    <h3 class=\"pop-up__title\">{{$ctrl.message.title}}</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.hideMessage()\"></button>\n    <p class=\"pop-up__notification\">\n      {{$ctrl.message.content}}\n    </p>\n    <input type=\"button\" value=\"ok\" class=\"btn btn_right btn_small\"\n           ng-click=\"$ctrl.hideMessage()\">\n  </div>\n  <button class=\"pop-up__close\" ng-click=\"$ctrl.hideMessage()\"></button>\n</div>\n\n\n<div class=\"pop-up-wrapper\" ng-show=\"$ctrl.confirmVisible\">\n  <div class=\"pop-up\">\n    <h3 class=\"pop-up__title\">{{$ctrl.message.title}}</h3>\n    <p class=\"pop-up__notification\">\n      {{$ctrl.message.content}}\n    </p>\n    <div class=\"pop-up-button-wrapper\">\n      <input type=\"button\" value=\"yes\" class=\"btn\"\n             ng-click=\"$ctrl.saveChangesBeforeOut()\">\n      <input type=\"button\" value=\"no\" class=\"btn btn_cancel\"\n             ng-click=\"$ctrl.cancelChanges()\">\n    </div>\n  </div>\n  <button class=\"pop-up__close\" ng-click=\"$ctrl.hideMessage()\"></button>\n</div>\n";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MyInfoController = function () {
	  MyInfoController.$inject = ["Current", "$scope", "$state", "$stateParams"];
	  function MyInfoController(Current, $scope, $state, $stateParams) {
	    'ngInject';
	
	    var _this = this;
	
	    _classCallCheck(this, MyInfoController);
	
	    this.state = $state;
	    this.stateParams = $stateParams;
	    this.currentUserService = Current;
	
	    this.alertVisible = false;
	    this.confirmVisible = false;
	    this.message = {};
	
	    this.messages = {
	      error: {
	        title: 'Error',
	        content: 'Please fill in all mandatory fields'
	      },
	      success: {
	        title: 'Saved',
	        content: 'Changes saved successfully'
	      },
	      leave: {
	        title: 'Attention',
	        content: 'Would you like to save changes?'
	      }
	    };
	
	    this.userInfoForm = {};
	
	    this.event = $scope.$on('$stateChangeStart', function (e, toState) {
	      if (_this.userInfoForm.$pristine || _this.userInfoForm.$submitted && _this.userInfoForm.$valid && _this.userInfoForm.$pristine) {
	        return;
	      }
	      e.preventDefault();
	      _this.nextState = toState;
	      _this.showConfirm('leave');
	    });
	  }
	
	  _createClass(MyInfoController, [{
	    key: 'submit',
	    value: function submit() {
	      if (this.userInfoForm.$invalid) {
	        this.showAlert('error');
	      } else {
	        this.currentUserService.updateInfo(this.user);
	        this.showAlert('success');
	        this.userInfoForm.$setPristine();
	        this.state.go(this.stateParams.fwdState);
	      }
	    }
	  }, {
	    key: 'showAlert',
	    value: function showAlert(message) {
	      this.message = this.messages[message];
	      this.alertVisible = true;
	    }
	  }, {
	    key: 'showConfirm',
	    value: function showConfirm(message) {
	      this.message = this.messages[message];
	      this.confirmVisible = true;
	    }
	  }, {
	    key: 'hideMessage',
	    value: function hideMessage() {
	      this.alertVisible = false;
	      this.confirmVisible = false;
	      this.message = {};
	    }
	  }, {
	    key: 'saveChangesBeforeOut',
	    value: function saveChangesBeforeOut() {
	      this.hideMessage();
	      this.submit();
	
	      this.userInfoForm.$setSubmitted();
	      if (this.userInfoForm.$valid) {
	        this.event();
	        this.state.go(this.nextState.name);
	      }
	    }
	  }, {
	    key: 'cancelChanges',
	    value: function cancelChanges() {
	      this.hideMessage();
	      this.event();
	      this.state.reload();
	      this.state.go(this.nextState.name);
	    }
	  }]);
	
	  return MyInfoController;
	}();
	
	exports.default = MyInfoController;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tabs = __webpack_require__(52);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.tabs', {
	      template: '<tabs></tabs>'
	    });
	  }]).component('tabs', _tabs2.default);
	};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tabs = __webpack_require__(53);
	
	var _tabs2 = _interopRequireDefault(_tabs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var tabsComponent = {
	  template: _tabs2.default
	};
	
	exports.default = tabsComponent;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"tabs-layout\">\n  <div class=\"tabs-wrapper\">\n    <ul class=\"tabs-list\">\n      <li class=\"tabs-list__item\">\n        <a ui-sref=\"header.tabs.myInfo\" ui-sref-active=\"tabs-list__anchor_active\" class=\"tabs-list__anchor\">\n          my info\n        </a>\n      </li>\n      <li class=\"tabs-list__item\">\n        <a ui-sref=\"header.tabs.myTalks\" ui-sref-active=\"tabs-list__anchor_active\" class=\"tabs-list__anchor\">\n          my talks\n        </a>\n      </li>\n    </ul>\n    <div class=\"tabs-container\">\n      <ui-view></ui-view>\n    </div>\n  </div>\n</div>";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _signUp = __webpack_require__(55);
	
	var _signUp2 = _interopRequireDefault(_signUp);
	
	var _signUp3 = __webpack_require__(58);
	
	var _signUp4 = _interopRequireDefault(_signUp3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.sign-up', {
	      url: '/sign-up',
	      template: '<sign-up></sign-up>'
	    });
	  }]).component('signUp', _signUp2.default).service('SignUpService', _signUp4.default);
	};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _signUp = __webpack_require__(56);
	
	var _signUp2 = _interopRequireDefault(_signUp);
	
	var _signUp3 = __webpack_require__(57);
	
	var _signUp4 = _interopRequireDefault(_signUp3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var signUpComponent = {
	  template: _signUp2.default,
	  controller: _signUp4.default
	};
	
	exports.default = signUpComponent;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"sign-up-wrapper\">\n  <form class=\"sign-up\" name=\"$ctrl.userForm\" novalidate ng-submit=\"$ctrl.signUp()\">\n    <h2 class=\"form-title sign-up__title\">create new account</h2>\n\n    <label for=\"name\" class=\"form-label form-label_required\">first name:</label>\n    <input type=\"text\" id=\"name\" name=\"fname\"\n           class=\"field sign-up__field\"\n           required\n           maxlength=\"56\"\n           ng-model=\"$ctrl.user.fname\">\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.fname.$error.required\">\n                All fields are mandatory. Please make sure all required fields are filled out</span>\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.fname.$error.maxlength\">\n                Your First Name should not be longer than 56 characters. Please try another</span>\n\n    <label for=\"surname\" class=\"form-label form-label_required\">last name:</label>\n    <input type=\"text\" id=\"surname\" name=\"lname\"\n           class=\"field sign-up__field\"\n           required\n           maxlength=\"56\"\n           ng-model=\"$ctrl.user.lname\">\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.lname.$error.required\">\n                All fields are mandatory. Please make sure all required fields are filled out</span>\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.fname.$error.maxlength\">\n                Your Last Name should not be longer than 56 characters. Please try another</span>\n\n    <label for=\"mail\" class=\"form-label form-label_required\">Email:</label>\n    <input type=\"email\" id=\"mail\" name=\"mail\"\n           class=\"field sign-up__field\"\n           required\n           ng-model=\"$ctrl.user.mail\"\n           ng-pattern=\"$ctrl.emailPattern\"\n           ng-change=\"$ctrl.resetEmailAlreadyExists()\">\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.mail.$error.required\">\n                All fields are mandatory. Please make sure all required fields are filled out</span>\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && ( $ctrl.userForm.mail.$error.pattern ||\n                                                  $ctrl.userForm.mail.$error.email )\">\n                Please enter a valid email address</span>\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.mail.$error.email_already_exists\">\n                There is an existing account associated with {{$ctrl.user.mail}}</span>\n\n    <label for=\"password\" class=\"form-label form-label_required\">password:</label>\n    <input type=\"password\" id=\"password\" name=\"password\"\n           class=\"field sign-up__field\"\n           required\n           minlength=\"6\"\n           maxlength=\"30\"\n           ng-pattern=\"$ctrl.passwordPattern\"\n           ng-model=\"$ctrl.user.password\"\n           ng-change=\"$ctrl.setPasswordsMatch(true)\">\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.password.$error.required\">\n                All fields are mandatory. Please make sure all required fields are filled out</span>\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.password.$error.pattern\">\n                Please use at least one non-space character in your password</span>\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.password.$error.minlength\">\n                Your password must be at least 6 characters long. Please try another</span>\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.password.$error.maxlength\">\n                Your password should not be longer than 30 characters. Please try another</span>\n\n    <label for=\"confirm\" class=\"form-label form-label_required\">confirm password:</label>\n    <input type=\"password\" id=\"confirm\" name=\"confirm\"\n           class=\"field sign-up__field\"\n           required\n           minlength=\"6\"\n           maxlength=\"30\"\n           ng-model=\"$ctrl.user.confirm\"\n           ng-change=\"$ctrl.setPasswordsMatch(true)\">\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.confirm.$error.required\">\n                All fields are mandatory. Please make sure all required fields are filled out</span>\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.confirm.$error.minlength\">\n                Your password must be at least 6 characters long. Please try another</span>\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.confirm.$error.maxlength\">\n                Your password should not be longer than 30 characters. Please try another</span>\n    <span class=\"field-error\"\n          ng-show=\"$ctrl.userForm.confirm.$error.passwords_match\">\n                Passwords do not match</span>\n\n    <input type=\"submit\" class=\"sign-up__button btn\" value=\"submit\" ng-disabled=\"$ctrl.formSent\">\n  </form>\n</div>\n\n<div class=\"pop-up-wrapper\" ng-show=\"$ctrl.showPopup\">\n  <div class=\"pop-up\">\n    <h3 class=\"pop-up__title\">You've successfully registered.</h3>\n    <p class=\"pop-up__notification\">\n      <span class=\"pop-up__notification-user\">{{$ctrl.user.fname}}</span>, go to\n      <span class=\"pop-up__notification-user\">{{$ctrl.user.mail}}</span> to complete the sign-up process</p>\n    <button class=\"btn pop-up__button\" ui-sref=\"header.home\">OK</button>\n  </div>\n</div>";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SignUpController = function () {
	  SignUpController.$inject = ["SignUpService", "Constants"];
	  function SignUpController(SignUpService, Constants) {
	    'ngInject';
	
	    _classCallCheck(this, SignUpController);
	
	    this.service = SignUpService;
	
	    this.emailPattern = Constants.email;
	    this.passwordPattern = Constants.password;
	
	    this.user = {};
	    this.userForm = {};
	
	    this.showPopup = false;
	    this.formSent = false;
	  }
	
	  _createClass(SignUpController, [{
	    key: 'signUp',
	    value: function signUp() {
	      var _this = this;
	
	      if (this.userForm.$valid) {
	        if (this.user.password !== this.user.confirm) {
	          this.setPasswordsMatch(false);
	          return;
	        }
	
	        this.formSent = true;
	
	        this.service.signUp(this.user, function () {
	          // success callback
	          _this.userForm.$setPristine();
	          _this.showPopup = true;
	        }, function (error) {
	          // error callback
	          if (error.data.error === 'email_already_exists') {
	            _this.userForm.mail.$setValidity('email_already_exists', false);
	            _this.formSent = false;
	          }
	        });
	      }
	    }
	  }, {
	    key: 'setPasswordsMatch',
	    value: function setPasswordsMatch(bool) {
	      this.userForm.password.$setValidity('passwords_match', bool);
	      this.userForm.confirm.$setValidity('passwords_match', bool);
	    }
	  }, {
	    key: 'resetEmailAlreadyExists',
	    value: function resetEmailAlreadyExists() {
	      this.userForm.mail.$setValidity('email_already_exists', true);
	    }
	  }]);
	
	  return SignUpController;
	}();
	
	exports.default = SignUpController;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var SignUpService = function () {
	  SignUpService.$inject = ["$resource"];
	  function SignUpService($resource) {
	    'ngInject';
	
	    _classCallCheck(this, SignUpService);
	
	    this.resource = $resource('/registration', {}, {});
	  }
	
	  _createClass(SignUpService, [{
	    key: 'signUp',
	    value: function signUp(user, successCallback, errorCallback) {
	      // POST
	      this.resource.save(user, function (result) {
	        successCallback(result);
	      }, function (error) {
	        errorCallback(error);
	      });
	    }
	  }]);
	
	  return SignUpService;
	}();
	
	exports.default = SignUpService;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _myTalks = __webpack_require__(60);
	
	var _myTalks2 = _interopRequireDefault(_myTalks);
	
	var _editTalkPopup = __webpack_require__(63);
	
	var _editTalkPopup2 = _interopRequireDefault(_editTalkPopup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.tabs.myTalks', {
	      url: '/my-talks',
	      template: '<my-talks ng-if="ctrl.resolved"></my-talks>',
	      resolve: {
	        currentUser: ["Current", function currentUser(Current) {
	          return Current.current;
	        }]
	      },
	      controller: ["currentUser", "Permissions", function myTalkPreController(currentUser, Permissions) {
	        Permissions.permitted('ROLE_SPEAKER', currentUser);
	        this.resolved = true;
	        this.currentUser = currentUser;
	      }],
	      controllerAs: 'ctrl'
	    });
	  }]).component('myTalks', _myTalks2.default).component('editTalkPopup', _editTalkPopup2.default);
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _myTalks = __webpack_require__(61);
	
	var _myTalks2 = _interopRequireDefault(_myTalks);
	
	var _myTalks3 = __webpack_require__(62);
	
	var _myTalks4 = _interopRequireDefault(_myTalks3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var myTalksComponent = {
	  template: _myTalks2.default,
	  controller: _myTalks4.default
	};
	
	exports.default = myTalksComponent;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"my-talks-container\">\n  <div class=\"my-talks\">\n    <div class=\"my-talks__header\">\n      <a ui-sref=\"header.tabs.myTalks.newtalk({fwdState: 'header.tabs.myTalks'})\" type=\"button\" class=\"btn my-talks__button\">submit new talk </a>\n      <div ui-view></div>\n    </div>\n    <div class=\"show-settings\">\n      <button class=\"show-settings__button\" ng-click=\"$ctrl.showSettings()\"></button>\n    </div>\n    <div class=\"my-talk-settings\" ng-show=\"$ctrl.showFilters\">\n      <form class=\"my-talk-settings__filters\">\n        <p class=\"my-talk-settings__title\">filter by:</p>\n        <div class=\"my-talk-settings__select-wrapper\">\n        <label for=\"my-talk-status\" class=\"form-label my-talk-settings__label my-talk-settings__label_status\">Status</label>\n        <select id=\"my-talk-status\" class=\"my-talk-settings__select\"\n                ng-model=\"$ctrl.filter.status\"\n                ng-options=\"status for status in $ctrl.statuses\">\n        </select>\n        </div>\n        <div class=\"my-talk-settings__select-wrapper my-talk-settings__select-wrapper_topic\">\n        <label for=\"my-talk-topic\" class=\"form-label my-talk-settings__label \">Topic</label>\n        <select id=\"my-talk-topic\" class=\"my-talk-settings__select my-talk-settings__select_topic\"\n                ng-model=\"$ctrl.filter.topic\"\n                ng-options=\"topic.name as topic.name for topic in $ctrl.topics\">\n        </select>\n        </div>\n        <div class=\"my-talk-settings__date-wrapper\">\n          <div class=\"form-label my-talk-settings__date-label\">submitted date</div>\n          <div class=\"calendars-wrapper\">\n            <md-datepicker ng-model=\"$ctrl.filter.fromDate\"\n                           md-placeholder=\"Select date\"\n                           class=\"my-talk-settings__date\"\n                           md-hide-icons=\"triangle\"\n                           md-max-date=\"$ctrl.filter.toDate\"\n            ></md-datepicker>\n            <md-datepicker ng-model=\"$ctrl.filter.toDate\"\n                           md-placeholder=\"Select date\"\n                           class=\"my-talk-settings__date\"\n                           md-hide-icons=\"triangle\"\n                           md-min-date=\"$ctrl.filter.fromDate\"\n            ></md-datepicker>\n          </div>\n        </div>\n        <div class=\"my-talk-settings__button-wrapper\">\n          <input type=\"button\" class=\"my-talk-settings__button\" value=\"apply\" ng-click=\"$ctrl.filterApply()\">\n          <input type=\"reset\" class=\"my-talk-settings__button\" value=\"reset\" ng-click=\"$ctrl.filterReset()\">\n        </div>\n      </form>\n    </div>\n      <div class=\"data-table\">\n        <div class=\"table-header\">\n          <div class=\"table-header__item table-header__item_title\">title\n          </div>\n          <div class=\"table-header__item table-header__item_topic\">topic\n          </div>\n          <div class=\"table-header__item table-header__item_date\">submitted date\n          </div>\n          <div class=\"table-header__item table-header__item_status\">status\n          </div>\n          <div class=\"table-header__item table-header__item_comments\">organizer comments\n          </div>\n          <div class=\"table-header__item table-header__item_conference\">conference\n          </div>\n          <div class=\"table-header__item table-header__scroll-fix\"></div>\n        </div>\n        <div class=\"data-table__inner-wrapper\">\n          <div class=\"data-table__row\" ng-repeat=\"talk in $ctrl.talks\">\n            <div class=\"data-table__column data-table__column_title\">\n              <a ng-click=\"$ctrl.edit(talk)\" class=\"link\">{{talk.title}}</a>\n            </div>\n            <div class=\"data-table__column data-table__column_topic\">{{talk.topic}}</div>\n            <div class=\"data-table__column data-table__column_date\">{{talk.date |date:\"dd/MM/yyyy\"}}</div>\n            <div class=\"data-table__column data-table__column_status\">{{talk.status}}</div>\n            <div class=\"data-table__column data-table__column_comments\">{{talk.comment}}</div>\n            <div class=\"data-table__column data-table__column_conference\">{{talk.conferenceName}}</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pagination\">\n        <div class=\"pagination__left-side\">\n          <div class=\"pagination__item-wrapper\">\n            <div class=\"pagination__item pagination__item_fast-back\"></div>\n            <div class=\"pagination__item pagination__item_back\"></div>\n            <div class=\"pagination__item pagination__item_current\">1</div>\n            <div class=\"pagination__item pagination__item_forward\"></div>\n            <div class=\"pagination__item pagination__item_fast-forward\"></div>\n          </div>\n          <select class=\"pagination__select\">\n            <option value=\"5\">5</option>\n            <option value=\"10\">10</option>\n            <option value=\"20\">20</option>\n            <option selected value=\"50\">50</option>\n            <option value=\"100\">100</option>\n          </select>\n          <div class=\"pagination__per-page\">\n            Items per page\n          </div>\n        </div>\n        <div class=\"pagination__right-side\">\n            <p class=\"pagination__navi\">1 - 4 of 4 items</p>\n        </div>\n      </div>\n    </div>\n</div>\n<div ng-if=\"$ctrl.showEditPopup\">\n  <edit-talk-popup talk=\"$ctrl.editTalkObj\" on-hide-edit-popup=\"$ctrl.hideEditPopup()\"></edit-talk-popup>\n</div>";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MyTalksController = function () {
	  MyTalksController.$inject = ["Current", "Talks", "Topic"];
	  function MyTalksController(Current, Talks, Topic) {
	    'ngInject';
	
	    _classCallCheck(this, MyTalksController);
	
	    this.current = Current.current;
	
	    this.unfilteredTalks = Talks.getAll();
	    this.talks = this.unfilteredTalks; // talks list is initially unfiltered
	
	    this.filter = {};
	    this.showFilters = true;
	
	    this.editTalkObj = {};
	    this.showEditPopup = false;
	
	    this.statuses = Talks.statusStrings;
	    this.topics = Topic.queryForTalkPage();
	  }
	
	  _createClass(MyTalksController, [{
	    key: 'showSettings',
	    value: function showSettings() {
	      this.showFilters = !this.showFilters;
	    }
	  }, {
	    key: 'edit',
	    value: function edit(talk) {
	      // talk object passed
	      this.editTalkObj = talk;
	      this.showEditPopup = true;
	    }
	  }, {
	    key: 'hideEditPopup',
	    value: function hideEditPopup() {
	      this.editTalkObj = {};
	      this.showEditPopup = false;
	    }
	  }, {
	    key: 'filterReset',
	    value: function filterReset() {
	      this.filter = {};
	      this.talks = this.unfilteredTalks; // point to unfiltered list
	    }
	  }, {
	    key: 'filterApply',
	    value: function filterApply() {
	      var _this = this;
	
	      this.talks = this.unfilteredTalks; // reset previous filters
	
	      function dd(num) {
	        // Double Digit - add leading zero if needed
	        var str = num.toString();
	        if (str.length === 1) {
	          return '0' + str;
	        }
	        return str;
	      }
	
	      function formatCalendarDate(date) {
	        return '' + date.getFullYear() + dd(date.getMonth() + 1) + dd(date.getDate());
	      }
	
	      function formatStoredDate(dateStr) {
	        return '' + dateStr.substr(0, 4) + dateStr.substr(5, 2) + dateStr.substr(8, 2);
	      }
	
	      var fTalks = this.talks.slice(); // copy, filtered talks
	      if (this.filter.status) {
	        fTalks = fTalks.filter(function (talk) {
	          return talk.status === _this.filter.status;
	        });
	      }
	      if (this.filter.topic) {
	        fTalks = fTalks.filter(function (talk) {
	          return talk.topic === _this.filter.topic;
	        });
	      }
	      if (this.filter.fromDate) {
	        fTalks = fTalks.filter(function (talk) {
	          return formatStoredDate(talk.date) >= formatCalendarDate(_this.filter.fromDate);
	        });
	      }
	      if (this.filter.toDate) {
	        fTalks = fTalks.filter(function (talk) {
	          return formatStoredDate(talk.date) <= formatCalendarDate(_this.filter.toDate);
	        });
	      }
	      this.talks = fTalks.slice();
	    }
	  }]);
	
	  return MyTalksController;
	}();
	
	exports.default = MyTalksController;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _editTalkPopup = __webpack_require__(64);
	
	var _editTalkPopup2 = _interopRequireDefault(_editTalkPopup);
	
	var _editTalkPopup3 = __webpack_require__(65);
	
	var _editTalkPopup4 = _interopRequireDefault(_editTalkPopup3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  bindings: {
	    talk: '<',
	    onHideEditPopup: '&'
	  },
	  template: _editTalkPopup2.default,
	  controller: _editTalkPopup4.default
	};
	
	exports.default = component;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pop-up-wrapper\">\n  <div class=\"pop-up pop-up_big\">\n    <h3 class=\"pop-up__title\">Talk</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.closeCheck()\"></button>\n    <form class=\"new-talk\" name=\"$ctrl.form\" novalidate ng-submit=\"$ctrl.save()\">\n      <label for=\"edit-talk-title\" class=\"form-label\"\n             ng-class=\"$ctrl.editable ? 'form-label_required' : ''\">\n        title\n      </label>\n      <input type=\"text\"\n             class=\"field field_border\"\n             maxlength=\"250\"\n             ng-required=\"$ctrl.editable\"\n             ng-disabled=\"!$ctrl.editable\"\n             ng-model=\"$ctrl.obj.title\">\n\n      <label for=\"edit-talk-desc\" class=\"form-label\"\n             ng-class=\"$ctrl.editable ? 'form-label_required' : ''\">\n        description\n      </label>\n      <textarea id=\"edit-talk-desc\"\n                class=\"textarea\"\n                maxlength=\"3000\"\n                ng-required=\"$ctrl.editable\"\n                ng-disabled=\"!$ctrl.editable\"\n                ng-model=\"$ctrl.obj.description\">\n      </textarea>\n\n      <label for=\"edit-talk-topic\" class=\"form-label\"\n             ng-class=\"$ctrl.editable ? 'form-label_required' : ''\">\n        topic\n      </label>\n      <select name=\"edit-talk-topic\" class=\"new-talk__select\"\n              ng-if=\"$ctrl.editable\"\n              ng-required=\"true\"\n              ng-disabled=\"!$ctrl.editable\"\n              ng-model=\"$ctrl.obj.topic\"\n              ng-options=\"topic.name as topic.name for topic in $ctrl.topics | orderBy: 'name'\">\n      </select>\n      <input type=\"text\"\n             class=\"field field_border\"\n             ng-if=\"!$ctrl.editable\"\n             ng-disabled=\"!$ctrl.editable\"\n             ng-model=\"$ctrl.obj.topic\">\n\n      <label class=\"form-label\"\n             ng-class=\"$ctrl.editable ? 'form-label_required' : ''\">\n        type\n      </label>\n      <select class=\"new-talk__select\"\n              ng-if=\"$ctrl.editable\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.obj.type\"\n              ng-options=\"type.name as type.name for type in $ctrl.types | orderBy: 'id'\">\n      </select>\n      <input type=\"text\"\n             class=\"field field_border\"\n             ng-if=\"!$ctrl.editable\"\n             ng-disabled=\"!$ctrl.editable\"\n             ng-model=\"$ctrl.obj.type\">\n\n      <label class=\"form-label\"\n             ng-class=\"$ctrl.editable ? 'form-label_required' : ''\">\n        language\n      </label>\n      <select class=\"new-talk__select\"\n              ng-if=\"$ctrl.editable\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.obj.lang\"\n              ng-options=\"lang.name as lang.name for lang in $ctrl.langs | orderBy: 'id'\">\n      </select>\n      <input type=\"text\"\n             class=\"field field_border\"\n             ng-if=\"!$ctrl.editable\"\n             ng-disabled=\"!$ctrl.editable\"\n             ng-model=\"$ctrl.obj.lang\">\n\n      <label class=\"form-label\"\n             ng-class=\"$ctrl.editable ? 'form-label_required' : ''\">\n        level\n      </label>\n      <select class=\"new-talk__select\"\n              ng-if=\"$ctrl.editable\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.obj.level\"\n              ng-options=\"level.name as level.name for level in $ctrl.levels | orderBy: 'id'\">\n      </select>\n      <input type=\"text\"\n             class=\"field field_border\"\n             ng-if=\"!$ctrl.editable\"\n             ng-disabled=\"!$ctrl.editable\"\n             ng-model=\"$ctrl.obj.level\">\n\n      <div ng-if=\"$ctrl.fileNameObj.fileName\">\n        <span class=\"icon icon_attach\"></span>\n        <a class=\"form-link link\" ng-href=\"/talk/{{ $ctrl.talk.id }}/takeFile\">{{ $ctrl.fileNameObj.fileName }}</a>\n\n        <a class=\"form-link link\"\n           ng-if=\"$ctrl.editable\"\n           ng-click=\"$ctrl.confirmDeleteFile()\">\n          <span class=\"icon icon_delete icon-small icon-small-margin-left\"></span>\n        </a>\n      </div>\n      <div ng-if=\"!$ctrl.fileNameObj.fileName\">\n        <label class=\"form-label\">\n          file upload\n          <md-icon class=\"icon icon_info\">\n            <md-tooltip md-direction=\"right\" class=\"tooltip\">\n              You can add an attachment of your talk here and insert a link to it in the Additional Info field.<br>\n              Allowed formats are docx, pdf, pptx, ppt, odp and maximum size is 300 Mb.\n            </md-tooltip>\n          </md-icon>\n        </label>\n\n        <label ng-class=\"$ctrl.fileLabelClass\">\n          <span class=\"btn file-upload__button file-upload__button_named\"></span>\n          <span class=\"file-upload__filename\">{{ $ctrl.file.name }}</span>\n\n          <input type=\"file\"\n                 class=\"file-upload__uploading\"\n                 ng-model=\"$ctrl.file\"\n                 ngf-select\n                 ngf-max-size=\"300MB\"\n                 ngf-min-size=\"1\"\n                 ngf-pattern=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/mspowerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/vnd.oasis.opendocument.presentation,application/x-vnd.oasis.opendocument.presentation\"\n                 accept=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/mspowerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/vnd.oasis.opendocument.presentation,application/x-vnd.oasis.opendocument.presentation\"\n                 name=\"file\">\n        </label>\n        <span class=\"field-error\" ng-show=\"$ctrl.form.$error.pattern\">\n          We could not understand the contents of your file. Make sure it is docx, pdf, pptx, ppt or odp.\n        </span>\n        <span class=\"field-error\" ng-show=\"$ctrl.form.$error.maxSize\">\n          You exceeded the maximum allowed size of 300 MB. Please make another choice.\n        </span>\n      </div>\n\n      <label for=\"new-talk-add-inf\" class=\"form-label\">\n        additional info\n      </label>\n      <textarea class=\"textarea\"\n                ng-disabled=\"!$ctrl.editable\"\n                maxlength=\"1500\"\n                ng-model=\"$ctrl.obj.addon\">\n      </textarea>\n\n      <label for=\"new-talk-add-inf\" class=\"form-label\" ng-if=\"!$ctrl.new\">\n        organizer's comments\n      </label>\n      <textarea class=\"textarea\" name=\"comment\"\n                disabled\n                ng-model=\"$ctrl.obj.comment\"\n                maxlength=\"1000\"\n                ng-if=\"!$ctrl.new\">\n      </textarea>\n\n      <span class=\"field-error\" ng-show=\"$ctrl.submitAttempt && $ctrl.form.$error.required\">\n        Please fill in all mandatory fields\n      </span>\n\n      <div class=\"pop-up-button-wrapper pop-up-button-wrapper_wrap\">\n        <button type=\"submit\" class=\"btn pop-up__button\" ng-if=\"$ctrl.editable\">update</button>\n        <button type=\"button\" class=\"btn pop-up__button\" ng-if=\"!$ctrl.editable\" ng-click=\"$ctrl.close()\">close</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"pop-up-wrapper\" ng-show=\"$ctrl.confirmShown\">\n  <div class=\"pop-up\">\n    <h3 class=\"pop-up__title\">Confirm</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.hideConfirm()\"></button>\n    <p class=\"pop-up__notification\">Are you sure you want to leave the window?</p>\n    <p class=\"pop-up__notification pop-up__notification_light pop-up__notification_not-margin\">Click 'Yes' to leave and all your changes will lost.</p>\n    <p class=\"pop-up__notification pop-up__notification_light pop-up__notification_not-margin\">Click 'No' to return and Submit/Update your changes</p>\n    <div class=\"pop-up-button-wrapper\">\n      <button class=\"btn pop-up__button\" ng-click=\"$ctrl.close()\">Yes</button>\n      <button class=\"btn btn__cancel pop-up__button\" ng-click=\"$ctrl.hideConfirm()\">No</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"pop-up-wrapper\" ng-show=\"$ctrl.confirmDeleteFileShown\">\n  <div class=\"pop-up\">\n    <h3 class=\"pop-up__title\">Confirm</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.hideConfirmDeleteFile()\"></button>\n    <p class=\"pop-up__notification\">Are you sure you want to delete this file?</p>\n    <div class=\"pop-up-button-wrapper\">\n      <button class=\"btn pop-up__button\" ng-click=\"$ctrl.deleteFile()\">Yes</button>\n      <button class=\"btn btn__cancel pop-up__button\" ng-click=\"$ctrl.hideConfirmDeleteFile()\">No</button>\n    </div>\n  </div>\n</div>";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["Talks", "TalkFile", "Topic", "Type", "Language", "Level"];
	  function _class(Talks, TalkFile, Topic, Type, Language, Level) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.talksService = Talks;
	    this.talkFileService = TalkFile;
	
	    this.obj = {}; // temp object to hold the original object's properties while editing
	    Object.assign(this.obj, this.talk); // shallow copy object, not to modify the original obj itself yet
	
	    this.form = {};
	
	    this.confirmShown = false;
	    this.confirmDeleteFileShown = false;
	    this.submitAttempt = false;
	
	    this.fileNameObj = this.talkFileService.getName(this.talk.id);
	
	    this.topics = Topic.queryForTalkPage();
	    this.types = Type.queryForTalkPage();
	    this.langs = Language.queryForTalkPage();
	    this.levels = Level.queryForTalkPage();
	  }
	
	  _createClass(_class, [{
	    key: 'save',
	    value: function save() {
	      var _this = this;
	
	      if (this.form.$invalid) {
	        this.submitAttempt = true;
	        return;
	      }
	
	      // upload file first
	      var formData = new FormData();
	      formData.append('file', this.file);
	
	      this.talkFileService.save(this.talk.id, formData, function () {
	        _this.fileNameObj = _this.talkFileService.getName(_this.talk.id);
	      });
	
	      // use separate send object, to filter out prohibited properties
	      var sendObj = {};
	      Object.assign(sendObj, this.obj);
	
	      delete sendObj.status; // filter out
	      delete sendObj.comment;
	      delete sendObj.id;
	
	      this.talksService.update(this.talk.id, sendObj, function () {
	        // success callback
	        Object.assign(_this.talk, _this.obj); // modify the obj itself, affect the view
	        _this.close();
	      });
	    }
	  }, {
	    key: 'closeCheck',
	    value: function closeCheck() {
	      if (this.form.$dirty) {
	        // form modified, but attempting to leave
	        this.showConfirm();
	      } else {
	        this.close();
	      }
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      this.onHideEditPopup();
	    }
	  }, {
	    key: 'showConfirm',
	    value: function showConfirm() {
	      this.confirmShown = true;
	    }
	  }, {
	    key: 'hideConfirm',
	    value: function hideConfirm() {
	      this.confirmShown = false;
	    }
	  }, {
	    key: 'deleteFile',
	    value: function deleteFile() {
	      var _this2 = this;
	
	      this.talkFileService.delete(this.talk.id, function () {
	        _this2.fileNameObj = {};
	        _this2.hideConfirmDeleteFile();
	      });
	    }
	  }, {
	    key: 'confirmDeleteFile',
	    value: function confirmDeleteFile() {
	      this.confirmDeleteFileShown = true;
	    }
	  }, {
	    key: 'hideConfirmDeleteFile',
	    value: function hideConfirmDeleteFile() {
	      this.confirmDeleteFileShown = false;
	    }
	  }, {
	    key: 'editable',
	    get: function get() {
	      // getter, convenient for template inline triggers
	      if (this.talk.status === this.talksService.TALK_STATUS_NEW || this.talk.status === this.talksService.TALK_STATUS_PROGRESS) {
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'new',
	    get: function get() {
	      // getter to check if talk is new
	      if (this.talk.status === this.talksService.TALK_STATUS_NEW) {
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: 'fileLabelClass',
	    get: function get() {
	      if (this.form.$error.pattern || this.form.$error.maxSize) {
	        return 'file-upload file-upload__label_named file-upload__label_error';
	      }
	      return 'file-upload file-upload__label_named';
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _forgotPassword = __webpack_require__(67);
	
	var _forgotPassword2 = _interopRequireDefault(_forgotPassword);
	
	var _forgotPassword3 = __webpack_require__(70);
	
	var _forgotPassword4 = _interopRequireDefault(_forgotPassword3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.forgotPassword', {
	      url: '/forgot-password',
	      template: '<forgot-password></forgot-password>'
	    });
	  }]).component('forgotPassword', _forgotPassword2.default).service('ForgotPasswordService', _forgotPassword4.default);
	};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _forgotPassword = __webpack_require__(68);
	
	var _forgotPassword2 = _interopRequireDefault(_forgotPassword);
	
	var _forgotPassword3 = __webpack_require__(69);
	
	var _forgotPassword4 = _interopRequireDefault(_forgotPassword3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var forgotPasswordComponent = {
	  template: _forgotPassword2.default,
	  controller: _forgotPassword4.default
	};
	
	exports.default = forgotPasswordComponent;

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pop-up-wrapper\">\n  <div class=\"pop-up\" ng-if=\"!$ctrl.forgotten\">\n    <h3 class=\"pop-up__title\">Forgot password?</h3>\n    <form novalidate\n          name=\"$ctrl.userForm\"\n          ng-submit=\"$ctrl.restore()\">\n      <p class=\"pop-up__notification\">Please enter your email:</p>\n      <input type=\"email\"\n             class=\"field pop-up__input\"\n             name=\"mail\"\n             required\n             ng-model=\"$ctrl.user.mail\"\n             ng-pattern=\"$ctrl.emailPattern\"\n             ng-change=\"$ctrl.resetEmailNotFound()\">\n\n      <span class=\"field-error error-title_pop-up\"\n         ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.mail.$error.required\">\n        Please enter your registered email</span>\n      <span class=\"field-error error-title_pop-up\"\n         ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.mail.$error.pattern\">\n        Please enter a valid email address</span>\n      <span class=\"field-error error-title_pop-up\"\n         ng-show=\"$ctrl.userForm.mail.$error.email_not_found\">\n        We can not find an account with that email address</span>\n\n      <div class=\"pop-up-button-wrapper\">\n        <input type=\"submit\"\n               value=\"Continue\"\n               class=\"btn pop-up__button\">\n\n        <input class=\"btn pop-up__button btn_cancel\"\n               ui-sref=\"header.home\"\n               type=\"button\"\n               value=\"cancel\">\n      </div>\n    </form>\n    <button class=\"pop-up__close\" ui-sref=\"header.home\"></button>\n  </div>\n\n  <div class=\"pop-up\" ng-if=\"$ctrl.forgotten\">\n    <h3 class=\"pop-up__title\">Password forgotten</h3>\n    <p class=\"pop-up__notification\">\n      We just emailed you a link. Please check your email and click the secure link.\n    </p>\n\n    <button class=\"btn pop-up__button\" ui-sref=\"header.home\">Close</button>\n  </div>\n</div>";

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ForgotPasswordController = function () {
	  ForgotPasswordController.$inject = ["ForgotPasswordService", "Constants"];
	  function ForgotPasswordController(ForgotPasswordService, Constants) {
	    'ngInject';
	
	    _classCallCheck(this, ForgotPasswordController);
	
	    this.user = {};
	    this.userForm = {};
	    this.service = ForgotPasswordService;
	    this.forgotten = false;
	    this.emailPattern = Constants.email;
	  }
	
	  _createClass(ForgotPasswordController, [{
	    key: 'restore',
	    value: function restore() {
	      var _this = this;
	
	      if (this.userForm.$valid) {
	        this.service.restore(this.user, function () {
	          // success callback
	          _this.forgotten = true;
	        }, function (error) {
	          // error callback
	          if (error.data.error === 'email_not_found') {
	            _this.userForm.mail.$setValidity('email_not_found', false);
	          }
	        });
	      }
	    }
	  }, {
	    key: 'resetEmailNotFound',
	    value: function resetEmailNotFound() {
	      this.userForm.mail.$setValidity('email_not_found', true);
	    }
	  }]);
	
	  return ForgotPasswordController;
	}();
	
	exports.default = ForgotPasswordController;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ForgotPasswordService = function () {
	  ForgotPasswordService.$inject = ["$resource"];
	  function ForgotPasswordService($resource) {
	    'ngInject';
	
	    _classCallCheck(this, ForgotPasswordService);
	
	    this.resource = $resource('/forgotPasswordPage/forgotPassword');
	  }
	
	  _createClass(ForgotPasswordService, [{
	    key: 'restore',
	    value: function restore(user, successCallback, errorCallback) {
	      this.resource.save(user, function (result) {
	        successCallback(result);
	      }, function (error) {
	        errorCallback(error);
	      });
	    }
	  }]);
	
	  return ForgotPasswordService;
	}();
	
	exports.default = ForgotPasswordService;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _userPhoto = __webpack_require__(72);
	
	var _userPhoto2 = _interopRequireDefault(_userPhoto);
	
	var _userPhoto3 = __webpack_require__(75);
	
	var _userPhoto4 = _interopRequireDefault(_userPhoto3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.component('userPhoto', _userPhoto2.default).service('userPhotoService', _userPhoto4.default);
	};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _userPhoto = __webpack_require__(73);
	
	var _userPhoto2 = _interopRequireDefault(_userPhoto);
	
	var _userPhoto3 = __webpack_require__(74);
	
	var _userPhoto4 = _interopRequireDefault(_userPhoto3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var userPhotoComponent = {
	  bindings: {
	    user: '='
	  },
	  template: _userPhoto2.default,
	  controller: _userPhoto4.default
	};
	
	exports.default = userPhotoComponent;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"my-info__ava\" ngf-background=\"$ctrl.ava || $ctrl.user.photo || $ctrl.defaultImage\">\n  <input type=\"button\" class=\"my-info__remove\" ng-click=\"$ctrl.askToDeletePhoto()\">\n  <div class=\"slide\">\n    <input type=\"button\" class=\"slide__button\" value=\"{{ $ctrl.currentPhotoStatus.button }}\" ng-click=\"$ctrl.toggleSlide()\">\n  </div>\n</div>\n\n<div class=\"pop-up-wrapper\" ng-show=\"$ctrl.showLoad\">\n  <div class=\"pop-up\" ng-show=\"!$ctrl.uploadPreview\">\n    <h3 class=\"pop-up__title\">{{$ctrl.currentPhotoStatus.title}}</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.toggleSlide()\"></button>\n    <form novalidate\n          name=\"$ctrl.uploadForm\">\n      <div\n        ngf-drop=\"$ctrl.downloadByDrag()\"\n        ng-model=\"$ctrl.file\"\n        ngf-max-size=\"2MB\"\n        ngf-min-size=\"1\"\n        ngf-pattern=\"image/jpeg,image/png,image/gif\"\n        required\n        name=\"dragfile\">\n\n        <p class=\"pop-up__notification pop-up__notification_light\">\n          It is much easier to identify you if you have a photo.\n        </p>\n\n        <p class=\"pop-up__notification pop-up__notification_light\">\n          You can upload an image in JPG, PNG or GIF format. The maximum allowed size for uploads is 2 Mb\n        </p>\n\n        <label class=\"file-upload\">\n          <span class=\"btn file-upload__button\">\n            Choose\n          </span>\n          <input type=\"file\"\n                 class=\"file-upload__uploading\"\n                 ng-model=\"$ctrl.file\"\n                 required\n                 ngf-select=\"$ctrl.downloadBySelect()\"\n                 ngf-max-size=\"2MB\"\n                 ngf-min-size=\"1\"\n                 ngf-pattern=\"image/jpeg,image/png,image/gif\"\n                 accept=\"image/jpeg,image/png,image/gif\"\n                 name=\"file\"\n          >\n\n        </label>\n        <p ng-if=\"$ctrl.uploadForm.file.$error.maxSize || $ctrl.uploadForm.dragfile.$error.maxSize\" class=\"field-error field-error_center\">\n          You exceeded maximum allowed size for uploaded photo (2Mb)\n        </p>\n        <p ng-if=\"$ctrl.uploadForm.file.$error.minSize || $ctrl.uploadForm.dragfile.$error.minSize\" class=\"field-error field-error_center\">\n          You try to upload an empty file\n        </p>\n        <p ng-if=\"$ctrl.uploadForm.file.$error.pattern || $ctrl.uploadForm.dragfile.$error.pattern\" class=\"field-error field-error_center\">\n          We could not understand the contents of your file. Make sure it is a jpg, gif or png formatted image.\n        </p>\n        <p ng-if=\"$ctrl.uploadForm.file.$error.save || $ctrl.uploadForm.dragfile.$error.save\" class=\"field-error field-error_center\">\n          Sorry we can`t save Your photo try do change it some later.\n        </p>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"pop-up\" ng-show=\"$ctrl.uploadPreview\">\n    <h3 class=\"pop-up__title\">Photo preview</h3>\n\n    <p class=\"pop-up__notification\">\n      It is how a selected photo will look on the My Info page.\n    </p>\n\n    <div class=\"preview-wrapper\">\n      <div class=\"preview\" ngf-background=\"$ctrl.file\"></div>\n      <div class=\"load-animation\" ng-show=\"$ctrl.animation\">\n        <div class=\"squaresWaveG squaresWaveG_1\"></div>\n        <div class=\"squaresWaveG squaresWaveG_2\"></div>\n        <div class=\"squaresWaveG squaresWaveG_3\"></div>\n        <div class=\"squaresWaveG squaresWaveG_4\"></div>\n        <div class=\"squaresWaveG squaresWaveG_5\"></div>\n      </div>\n    </div>\n\n    <p class=\"pop-up__notification pop-up__notification_light\">\n      By clicking on the Save button your changes will be saved and you will see your photo on the My Info page.\n    </p>\n    <p class=\"pop-up__notification pop-up__notification_light\">\n      By clicking on the Cancel button you will be redirected to the Upload new photo window.\n    </p>\n\n    <div class=\"pop-up-button-wrapper\">\n      <input type=\"button\" value=\"Save\" class=\"btn\"\n             ng-click=\"$ctrl.uploadAva()\">\n      <input type=\"button\" value=\"Cancel\" class=\"btn btn_cancel\"\n             ng-click=\"$ctrl.togglePreview()\">\n    </div>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.togglePreview()\"></button>\n  </div>\n</div>\n\n<!-- deleting photo pop-up -->\n<div class=\"pop-up-wrapper\" ng-if=\"$ctrl.deletePreview\">\n  <div class=\"pop-up\">\n    <h3 class=\"pop-up__title\">Delete Photo</h3>\n\n    <p class=\"pop-up__notification\">\n      Are you sure you want to delete a photo?\n    </p>\n\n    <p ng-if=\"$ctrl.deleteMessage\" class=\"field-error field-error_center\">\n      Sorry we can`t delete your photo. Try later.\n    </p>\n\n    <div class=\"pop-up-button-wrapper\">\n      <input type=\"button\" value=\"Cancel\" class=\"btn\"\n             ng-click=\"$ctrl.toggleDeletePreview()\">\n      <input type=\"button\" value=\"Delete\" class=\"btn btn_cancel\"\n             ng-click=\"$ctrl.deletePhoto()\">\n    </div>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.toggleDeletePreview()\"></button>\n  </div>\n</div>";

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var UserPhotoController = function () {
	  UserPhotoController.$inject = ["userPhotoService", "Constants"];
	  function UserPhotoController(userPhotoService, Constants) {
	    'ngInject';
	
	    _classCallCheck(this, UserPhotoController);
	
	    this.userPhotoService = userPhotoService;
	
	    this.defaultImage = Constants.ava;
	    this.ava = null;
	    this.file = null;
	    this.uploadForm = {};
	
	    this.uploadPreview = false;
	    this.deletePreview = false;
	    this.deleteMessage = false;
	    this.animation = false;
	
	    this.currentPhotoStatus = this.getCurrentPhotoStatus();
	  }
	
	  _createClass(UserPhotoController, [{
	    key: 'toggleSlide',
	    value: function toggleSlide() {
	      this.showLoad = !this.showLoad;
	    }
	  }, {
	    key: 'downloadByDrag',
	    value: function downloadByDrag() {
	      this.uploadForm.file.$setValidity('pattern', true);
	      this.uploadForm.file.$setValidity('minSize', true);
	      this.uploadForm.file.$setValidity('maxSize', true);
	      this.togglePreview();
	    }
	  }, {
	    key: 'downloadBySelect',
	    value: function downloadBySelect() {
	      this.uploadForm.dragfile.$setValidity('pattern', true);
	      this.uploadForm.dragfile.$setValidity('minSize', true);
	      this.uploadForm.dragfile.$setValidity('maxSize', true);
	      this.togglePreview();
	    }
	  }, {
	    key: 'togglePreview',
	    value: function togglePreview() {
	      this.uploadForm.$setValidity('save', true);
	      if (this.uploadForm.$valid) {
	        this.uploadPreview = !this.uploadPreview;
	      }
	    }
	  }, {
	    key: 'toggleAnimation',
	    value: function toggleAnimation() {
	      this.animation = !this.animation;
	    }
	  }, {
	    key: 'successUpload',
	    value: function successUpload(_ref) {
	      var data = _ref.data;
	
	      this.ava = this.file;
	      this.toggleSlide();
	      this.togglePreview();
	      this.toggleAnimation();
	      this.user.photo = data.result;
	      this.currentPhotoStatus = this.getCurrentPhotoStatus();
	    }
	  }, {
	    key: 'errorUpload',
	    value: function errorUpload(_ref2) {
	      var data = _ref2.data;
	
	      this.togglePreview();
	      this.toggleAnimation();
	      this.file = null;
	      this.uploadForm.file.$setValidity(data.error, false);
	    }
	  }, {
	    key: 'uploadAva',
	    value: function uploadAva() {
	      var _this = this;
	
	      this.toggleAnimation();
	      this.userPhotoService.uploadPhoto(this.file).then(function (result) {
	        _this.successUpload(result);
	      }).catch(function (error) {
	        _this.errorUpload(error);
	      });
	    }
	  }, {
	    key: 'getCurrentPhotoStatus',
	    value: function getCurrentPhotoStatus() {
	      if (this.user.photo) {
	        return { button: 'Update Photo', title: 'Update Your Photo' };
	      }
	      return { button: 'Upload Photo', title: 'Upload new photo' };
	    }
	
	    // deleting photo
	
	  }, {
	    key: 'toggleDeletePreview',
	    value: function toggleDeletePreview() {
	      this.deletePreview = !this.deletePreview;
	    }
	  }, {
	    key: 'askToDeletePhoto',
	    value: function askToDeletePhoto() {
	      if (this.ava || this.user.photo) {
	        this.toggleDeletePreview();
	      }
	    }
	  }, {
	    key: 'deletePhoto',
	    value: function deletePhoto() {
	      var _this2 = this;
	
	      this.toggleAnimation();
	      this.userPhotoService.deleteUserPhoto().then(function () {
	        _this2.successDelete();
	      }).catch(function () {
	        _this2.errorDelete();
	      });
	    }
	  }, {
	    key: 'successDelete',
	    value: function successDelete() {
	      this.ava = null;
	      this.toggleDeletePreview();
	      this.toggleAnimation();
	      this.user.photo = '';
	      this.currentPhotoStatus = this.getCurrentPhotoStatus();
	    }
	  }, {
	    key: 'errorDelete',
	    value: function errorDelete() {
	      this.toggleAnimation();
	      this.deleteMessage = !this.deleteMessage;
	    }
	  }]);
	
	  return UserPhotoController;
	}();
	
	exports.default = UserPhotoController;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* global FormData */
	/* global angular */
	
	var UserPhoto = function () {
	  UserPhoto.$inject = ["$http"];
	  function UserPhoto($http) {
	    'ngInject';
	
	    _classCallCheck(this, UserPhoto);
	
	    this.http = $http;
	  }
	
	  _createClass(UserPhoto, [{
	    key: 'uploadPhoto',
	    value: function uploadPhoto(file) {
	      var formData = new FormData();
	      formData.append('file', file);
	      return this.http.post('myinfo/photo', formData, {
	        transformRequest: angular.identity,
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache',
	          'Content-Type': undefined
	        }
	      });
	    }
	
	    // deleting photo
	
	  }, {
	    key: 'deleteUserPhoto',
	    value: function deleteUserPhoto() {
	      return this.http.delete('myinfo/photo', {
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      });
	    }
	  }]);
	
	  return UserPhoto;
	}();
	
	exports.default = UserPhoto;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _logout = __webpack_require__(77);
	
	var _logout2 = _interopRequireDefault(_logout);
	
	var _logout3 = __webpack_require__(78);
	
	var _logout4 = _interopRequireDefault(_logout3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.logout', {
	      controller: _logout2.default
	    });
	  }]).service('Logout', _logout4.default);
	};

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LogoutController = function () {
	  LogoutController.$inject = ["Logout", "$state", "Current", "Talks"];
	  function LogoutController(Logout, $state, Current, Talks) {
	    'ngInject';
	
	    _classCallCheck(this, LogoutController);
	
	    this.service = Logout;
	    this.state = $state;
	    this.userService = Current;
	    this.talksService = Talks;
	    this.logout();
	  }
	
	  _createClass(LogoutController, [{
	    key: 'logout',
	    value: function logout() {
	      var _this = this;
	
	      this.service.logout().then(function () {
	        _this.userService.clear();
	        _this.state.go('header.home', {}, { reload: true });
	      });
	    }
	  }]);
	
	  return LogoutController;
	}();
	
	exports.default = LogoutController;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* global angular */
	/* global FormData */
	
	var Logout = function () {
	  Logout.$inject = ["$window", "$q", "$http"];
	  function Logout($window, $q, $http) {
	    'ngInject';
	
	    _classCallCheck(this, Logout);
	
	    this.q = $q;
	    this.window = $window;
	    this.http = $http;
	  }
	
	  _createClass(Logout, [{
	    key: 'logout',
	    value: function logout() {
	      var _this = this;
	
	      var deferred = this.q.defer();
	
	      this.http.post('/logout', {
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      }).then(function () {
	        _this.window.localStorage.removeItem('userInfo');
	        _this.http.get('/myinfo');
	        deferred.resolve();
	      }, function (error) {
	        deferred.reject(error);
	      });
	
	      return deferred.promise;
	    }
	  }]);
	
	  return Logout;
	}();
	
	exports.default = Logout;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newtalk = __webpack_require__(80);
	
	var _newtalk2 = _interopRequireDefault(_newtalk);
	
	var _newtalkPopup = __webpack_require__(83);
	
	var _newtalkPopup2 = _interopRequireDefault(_newtalkPopup);
	
	var _fillInfoPopup = __webpack_require__(86);
	
	var _fillInfoPopup2 = _interopRequireDefault(_fillInfoPopup);
	
	var _newtalk3 = __webpack_require__(82);
	
	var _newtalk4 = _interopRequireDefault(_newtalk3);
	
	var _newtalk5 = __webpack_require__(81);
	
	var _newtalk6 = _interopRequireDefault(_newtalk5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.tabs.myTalks.newtalk', {
	      template: _newtalk6.default,
	      controller: _newtalk4.default,
	      controllerAs: '$ctrl',
	      resolve: {
	        currentUser: ["Current", function currentUser(Current) {
	          return Current.current;
	        }]
	      },
	      params: { fwdState: null }
	    });
	  }]).component('newtalk', _newtalk2.default).component('newtalkPopup', _newtalkPopup2.default).component('fillInfoPopup', _fillInfoPopup2.default);
	};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newtalk = __webpack_require__(81);
	
	var _newtalk2 = _interopRequireDefault(_newtalk);
	
	var _newtalk3 = __webpack_require__(82);
	
	var _newtalk4 = _interopRequireDefault(_newtalk3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  bindings: {
	    fwdState: '@'
	  },
	  template: _newtalk2.default,
	  controller: _newtalk4.default
	};
	
	exports.default = component;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	module.exports = "<div ng-if=\"!$ctrl.userInfoFilled()\">\n  <fill-info-popup on-close=\"$ctrl.fillInfoPopupCloseCallback()\"\n                   fwd-state=\"$ctrl.stateParams.fwdState\"></fill-info-popup>\n</div>\n<div ng-if=\"$ctrl.userInfoFilled()\">\n  <newtalk-popup on-close=\"$ctrl.popupCloseCallback()\"\n                 on-submit=\"$ctrl.popupSubmitCallback()\"></newtalk>\n</div>";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewtalkController = function () {
	  NewtalkController.$inject = ["currentUser", "$state", "$stateParams"];
	  function NewtalkController(currentUser, $state, $stateParams) {
	    'ngInject';
	
	    var _this = this;
	
	    _classCallCheck(this, NewtalkController);
	
	    var mandatory = ['bio', 'job', 'company'];
	    this.current = currentUser;
	    this.state = $state;
	    this.stateParams = $stateParams;
	
	    this.isEmptyBio = mandatory.every(function (el) {
	      if (_this.current[el]) {
	        return false;
	      }
	
	      return true;
	    });
	  }
	
	  _createClass(NewtalkController, [{
	    key: 'popupCloseCallback',
	    value: function popupCloseCallback() {
	      this.state.go('header.tabs.myTalks');
	    }
	  }, {
	    key: 'popupSubmitCallback',
	    value: function popupSubmitCallback() {
	      this.state.go('header.tabs.myTalks', {}, { reload: true });
	    }
	  }, {
	    key: 'fillInfoPopupCloseCallback',
	    value: function fillInfoPopupCloseCallback() {
	      this.state.go('header.tabs.myTalks');
	    }
	  }, {
	    key: 'userInfoFilled',
	    value: function userInfoFilled() {
	      var _this2 = this;
	
	      var mandatory = ['bio', 'job', 'company'];
	      return mandatory.every(function (el) {
	        return _this2.current[el] !== '';
	      });
	    }
	  }]);
	
	  return NewtalkController;
	}();
	
	exports.default = NewtalkController;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newtalkPopup = __webpack_require__(84);
	
	var _newtalkPopup2 = _interopRequireDefault(_newtalkPopup);
	
	var _newtalkPopup3 = __webpack_require__(85);
	
	var _newtalkPopup4 = _interopRequireDefault(_newtalkPopup3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newtalkComponent = {
	  bindings: {
	    onClose: '&',
	    onSubmit: '&',
	    conferenceId: '<'
	  },
	  template: _newtalkPopup2.default,
	  controller: _newtalkPopup4.default
	};
	
	exports.default = newtalkComponent;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pop-up-wrapper\">\n  <div class=\"pop-up pop-up_big\">\n    <h3 class=\"pop-up__title\">Submit new talk</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.close()\"></button>\n    <form class=\"new-talk\" name=\"$ctrl.talkForm\"\n          novalidate\n          ng-submit=\"$ctrl.submit()\">\n      <label for=\"new-talk-title\" class=\"form-label form-label_required\">\n        title\n      </label>\n      <input type=\"text\" id=\"new-talk-title\" class=\"field field_border\"\n             maxlength=\"250\"\n             ng-required=\"true\"\n             ng-model=\"$ctrl.talk.title\"\n      >\n\n      <label for=\"new-talk-desc\" class=\"form-label form-label_required\">\n        description\n      </label>\n      <textarea id=\"new-talk-desc\"\n                class=\"textarea\"\n                maxlength=\"3000\"\n                ng-required=\"true\"\n                ng-model=\"$ctrl.talk.description\"\n      >\n\n      </textarea>\n\n      <label class=\"form-label form-label_required\">\n        topic\n      </label>\n      <select class=\"new-talk__select\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.talk.topic\"\n              ng-options=\"topic.name as topic.name for topic in $ctrl.topics | orderBy: 'name'\">\n      </select>\n\n      <label class=\"form-label form-label_required\">\n        type\n      </label>\n      <select class=\"new-talk__select\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.talk.type\"\n              ng-options=\"type.name as type.name for type in $ctrl.types | orderBy: 'id'\">\n      </select>\n\n      <label class=\"form-label form-label_required\">\n        language\n      </label>\n      <select class=\"new-talk__select\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.talk.lang\"\n              ng-options=\"lang.name as lang.name for lang in $ctrl.langs | orderBy: 'id'\">\n      </select>\n\n      <label class=\"form-label form-label_required\">\n        level\n      </label>\n      <select class=\"new-talk__select\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.talk.level\"\n              ng-options=\"level.name as level.name for level in $ctrl.levels | orderBy: 'id'\">\n      </select>\n\n      <label class=\"form-label\">\n        file upload\n        <md-icon class=\"icon icon_info\">\n          <md-tooltip md-direction=\"right\" class=\"tooltip\">\n            You can add an attachment of your talk here and insert a link to it in the Additional Info field.<br>\n            Allowed formats are docx, pdf, pptx, ppt, odp and maximum size is 300 Mb.\n          </md-tooltip>\n        </md-icon>\n      </label>\n\n      <label ng-class=\"$ctrl.fileLabelClass\">\n        <span class=\"btn file-upload__button file-upload__button_named\"></span>\n        <span class=\"file-upload__filename\">{{ $ctrl.talk.file.name }}</span>\n\n        <input type=\"file\"\n               class=\"file-upload__uploading\"\n               ng-model=\"$ctrl.talk.file\"\n               ngf-select\n               ngf-max-size=\"300MB\"\n               ngf-min-size=\"1\"\n               ngf-pattern=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/mspowerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/vnd.oasis.opendocument.presentation,application/x-vnd.oasis.opendocument.presentation\"\n               accept=\"application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/mspowerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/pdf,application/vnd.oasis.opendocument.presentation,application/x-vnd.oasis.opendocument.presentation\"\n               name=\"file\">\n      </label>\n      <span class=\"field-error\" ng-show=\"$ctrl.talkForm.$error.pattern\">\n        We could not understand the contents of your file. Make sure it is docx, pdf, pptx, ppt or odp.\n      </span>\n      <span class=\"field-error\" ng-show=\"$ctrl.talkForm.$error.maxSize\">\n        You exceeded the maximum allowed size of 300 MB. Please make another choice.\n      </span>\n\n      <label for=\"new-talk-add-inf\" class=\"form-label\">\n        additional info\n      </label>\n      <textarea id=\"new-talk-add-inf\"\n                class=\"textarea\"\n                maxlength=\"1500\"\n                ng-model=\"$ctrl.talk.addon\">\n      </textarea>\n\n      <button class=\"btn pop-up__button\"\n              ng-disabled=\"$ctrl.buttonsBlocked\">Submit</button>\n    </form>\n  </div>\n</div>\n\n<div class=\"pop-up-wrapper\" ng-show=\"$ctrl.isShownPopup\">\n  <div class=\"pop-up\">\n    <h3 class=\"pop-up__title\">Info</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.isShownPopup = false\"></button>\n    <p class=\"pop-up__notification\">Are you sure you want to leave the window?</p>\n    <p class=\"pop-up__notification pop-up__notification_light pop-up__notification_not-margin\">Click 'Yes' to leave and all your changes will lost.</p>\n    <p class=\"pop-up__notification pop-up__notification_light pop-up__notification_not-margin\">Click 'No' to return and Submit/Update your changes</p>\n    <div class=\"pop-up-button-wrapper\">\n      <button class=\"btn pop-up__button\" ng-click=\"$ctrl.onClose()\">Yes</button>\n      <button class=\"btn btn__cancel pop-up__button\" ng-click=\"$ctrl.isShownPopup = false\">No</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"pop-up-wrapper\" ng-show=\"$ctrl.isShownMandatoryAlert\">\n  <div class=\"pop-up\">\n    <h3 class=\"pop-up__title\">Alert</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.isShownMandatoryAlert = false\"></button>\n    <p class=\"pop-up__notification\">Please fill in all mandatory fields.</p>\n    <input type=\"button\" value=\"ok\" class=\"btn btn_right btn_small\"\n           ng-click=\"$ctrl.isShownMandatoryAlert = false\">\n  </div>\n</div>";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewtalkController = function () {
	  NewtalkController.$inject = ["Talks", "Topic", "Type", "Language", "Level"];
	  function NewtalkController(Talks, Topic, Type, Language, Level) {
	    'ngInject';
	
	    _classCallCheck(this, NewtalkController);
	
	    this.talksService = Talks;
	
	    this.talkForm = {};
	    this.talk = {};
	    this.isShownPopup = false;
	    this.buttonsBlocked = false;
	
	    this.topics = Topic.query();
	    this.types = Type.query();
	    this.langs = Language.query();
	    this.levels = Level.query();
	  }
	
	  _createClass(NewtalkController, [{
	    key: 'close',
	    value: function close() {
	      function isEmptyForm(form) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	          for (var _iterator = Object.values(form)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var value = _step.value;
	
	            if (value && value.length) {
	              return false;
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	
	        return true;
	      }
	
	      if (this.talkForm.$pristine || this.talkForm.$submitted || isEmptyForm(this.talk)) {
	        this.onClose();
	        return;
	      }
	
	      if (this.talkForm.$dirty && !this.talkForm.$submitted) {
	        this.isShownPopup = true;
	      }
	    }
	  }, {
	    key: 'submit',
	    value: function submit() {
	      var _this = this;
	
	      if (this.talkForm.$invalid) {
	        this.isShownMandatoryAlert = true;
	        this.talkForm.$submitted = false;
	        return;
	      }
	
	      this.buttonsBlocked = true; // block the buttons to avoid multiple submit
	
	      this.talk.status = 'New';
	      this.talk.date = Date.now();
	
	      if (this.conferenceId) {
	        // if defined
	        this.talk.conferenceId = this.conferenceId;
	      }
	
	      var formData = new FormData();
	
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = Object.entries(this.talk)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _step2$value = _slicedToArray(_step2.value, 2),
	              key = _step2$value[0],
	              value = _step2$value[1];
	
	          formData.append(key, value);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      this.talksService.add(formData, function () {
	        _this.onSubmit();
	      });
	    }
	  }, {
	    key: 'fileLabelClass',
	    get: function get() {
	      if (this.talkForm.$error.pattern || this.talkForm.$error.maxSize) {
	        return 'file-upload file-upload__label_named file-upload__label_error';
	      }
	      return 'file-upload file-upload__label_named';
	    }
	  }]);
	
	  return NewtalkController;
	}();
	
	exports.default = NewtalkController;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _fillInfoPopup = __webpack_require__(87);
	
	var _fillInfoPopup2 = _interopRequireDefault(_fillInfoPopup);
	
	var _fillInfoPopup3 = __webpack_require__(88);
	
	var _fillInfoPopup4 = _interopRequireDefault(_fillInfoPopup3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  bindings: {
	    onClose: '&',
	    fwdState: '<'
	  },
	  template: _fillInfoPopup2.default,
	  controller: _fillInfoPopup4.default
	};
	
	exports.default = component;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pop-up-wrapper\">\n  <div class=\"pop-up\">\n    <h3 class=\"pop-up__title\">My info not filled</h3>\n    <p class=\"pop-up__notification\">\n      Please fill out all required info on the My Info page before submitting a talk.\n    </p>\n    <button class=\"btn pop-up__button\" ng-click=\"$ctrl.submit()\">OK</button>\n  </div>\n</div>\n";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["$state"];
	  function _class($state) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.state = $state;
	  }
	
	  _createClass(_class, [{
	    key: 'submit',
	    value: function submit() {
	      this.state.go('header.tabs.myInfo', { fwdState: this.fwdState });
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _talks = __webpack_require__(90);
	
	var _talks2 = _interopRequireDefault(_talks);
	
	var _reviewTalkPopup = __webpack_require__(93);
	
	var _reviewTalkPopup2 = _interopRequireDefault(_reviewTalkPopup);
	
	var _userInfoPopup = __webpack_require__(96);
	
	var _userInfoPopup2 = _interopRequireDefault(_userInfoPopup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.talks', {
	      url: '/talks',
	      template: '<talks ng-if="ctrl.resolved"></talks>',
	      resolve: {
	        currentUser: ["Current", function currentUser(Current) {
	          return Current.current;
	        }]
	      },
	      controller: ["Permissions", "currentUser", function Controller(Permissions, currentUser) {
	        Permissions.permitted('ROLE_ORGANISER', currentUser);
	        this.resolved = true;
	      }],
	      controllerAs: 'ctrl'
	    }).state('header.talksReviewTalk', {
	      url: '/talks/:reviewTalkId',
	      template: '<talks review-talk-id="ctrl.reviewTalkId" ng-if="ctrl.resolved"></talks>',
	      resolve: {
	        currentUser: ["Current", function currentUser(Current) {
	          return Current.current;
	        }]
	      },
	      controller: ["Permissions", "currentUser", "$stateParams", function Controller(Permissions, currentUser, $stateParams) {
	        Permissions.permitted('ROLE_ORGANISER', currentUser);
	        this.resolved = true;
	
	        this.reviewTalkId = $stateParams.reviewTalkId;
	      }],
	      controllerAs: 'ctrl'
	    });
	  }]).component('talks', _talks2.default).component('reviewTalkPopup', _reviewTalkPopup2.default).component('userInfoPopup', _userInfoPopup2.default);
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _talks = __webpack_require__(91);
	
	var _talks2 = _interopRequireDefault(_talks);
	
	var _talks3 = __webpack_require__(92);
	
	var _talks4 = _interopRequireDefault(_talks3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  bindings: {
	    reviewTalkId: '<'
	  },
	  template: _talks2.default,
	  controller: _talks4.default
	};
	
	exports.default = component;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"talks-container\">\n  <div class=\"talks\">\n\n    <p>{{$ctrl.user}}</p>\n\n\n    <div class=\"talks__header\">\n      <a  class=\"btn talks__button\">export to excel </a>\n    </div>\n    <div class=\"show-settings\">\n      <button class=\"show-settings__button\" ng-click=\"$ctrl.showSettings()\"></button>\n    </div>\n    <div class=\"my-talk-settings\" ng-show=\"$ctrl.showFilters\">\n      <form class=\"my-talk-settings__filters\">\n        <p class=\"my-talk-settings__title\">filter by:</p>\n        <div class=\"my-talk-settings__select-wrapper\">\n          <label for=\"my-talk-status\" class=\"form-label my-talk-settings__label my-talk-settings__label_status\">Status</label>\n          <select id=\"my-talk-status\" class=\"my-talk-settings__select\"\n                  ng-model=\"$ctrl.filter.status\"\n                  ng-options=\"status for status in $ctrl.statuses\">\n          </select>\n        </div>\n        <div class=\"my-talk-settings__select-wrapper my-talk-settings__select-wrapper_topic\">\n          <label for=\"my-talk-topic\" class=\"form-label my-talk-settings__label \">Topic</label>\n          <select id=\"my-talk-topic\" class=\"my-talk-settings__select my-talk-settings__select_topic\"\n                  ng-model=\"$ctrl.filter.topic\"\n                  ng-options=\"topic.name as topic.name for topic in $ctrl.topics\">\n          </select>\n        </div>\n        <div class=\"my-talk-settings__date-wrapper\">\n          <div class=\"form-label my-talk-settings__date-label\">submitted date</div>\n          <div class=\"calendars-wrapper\">\n            <md-datepicker ng-model=\"$ctrl.filter.fromDate\"\n                           md-placeholder=\"Select date\"\n                           class=\"my-talk-settings__date\"\n                           md-hide-icons=\"triangle\"\n                           md-max-date=\"$ctrl.filter.toDate\">\n            </md-datepicker>\n            <md-datepicker ng-model=\"$ctrl.filter.toDate\"\n                           md-placeholder=\"Select date\"\n                           class=\"my-talk-settings__date\"\n                           md-hide-icons=\"triangle\"\n                           md-min-date=\"$ctrl.filter.fromDate\">\n            </md-datepicker>\n          </div>\n        </div>\n        <div class=\"my-talk-settings__button-wrapper\">\n          <input type=\"button\" class=\"my-talk-settings__button\" value=\"apply\" ng-click=\"$ctrl.filterApply()\">\n          <input type=\"reset\" class=\"my-talk-settings__button\" value=\"reset\" ng-click=\"$ctrl.filterReset()\">\n        </div>\n      </form>\n    </div>\n    <div class=\"data-table\">\n      <div class=\"table-header\">\n        <div class=\"table-header__item table-header__item_check-talk\"><input type=\"checkbox\"></div>\n        <div class=\"table-header__item table-header__item_speaker-talk\">speaker</div>\n        <div class=\"table-header__item table-header__item_title-talk\">title</div>\n        <div class=\"table-header__item table-header__item_topic-talk\">topic</div>\n        <div class=\"table-header__item table-header__item_date-talk\">submitted date</div>\n        <div class=\"table-header__item table-header__item_status-talk\">status</div>\n        <div class=\"table-header__item table-header__item_comments-talk\">organizer comments</div>\n        <div class=\"table-header__item table-header__item_assign-talk\">assigned to</div>\n        <div class=\"table-header__item table-header__scroll-fix\"></div>\n      </div>\n      <div class=\"data-table__inner-wrapper\">\n        <div class=\"data-table__row\" ng-repeat=\"talk in $ctrl.talks\">\n          <div class=\"data-table__column data-table__column_check-talk\"><input type=\"checkbox\"></div>\n          <div class=\"data-table__column data-table__column_speaker-talk\">\n            <a ng-click=\"$ctrl.userInfo(talk.speakerId)\" class=\"link\">{{talk.name}}</a></div>\n          <div class=\"data-table__column data-table__column_title-talk\">\n            <a ng-click=\"$ctrl.review(talk)\" class=\"link\">{{talk.title}}</a>\n          </div>\n          <div class=\"data-table__column data-table__column_topic-talk\">{{talk.topic}}</div>\n          <div class=\"data-table__column data-table__column_date-talk\">{{talk.date | date:\"dd/MM/yyyy\"}}</div>\n          <div class=\"data-table__column data-table__column_status-talk\">{{talk.status}}</div>\n          <div class=\"data-table__column data-table__column_comments-talk\">{{talk.comment}}</div>\n          <div class=\"data-table__column data-table__column_assign-talk\">{{talk.assignee}}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pagination\">\n      <div class=\"pagination__left-side\">\n        <div class=\"pagination__item-wrapper\">\n          <div class=\"pagination__item pagination__item_fast-back\"></div>\n          <div class=\"pagination__item pagination__item_back\"></div>\n          <div class=\"pagination__item pagination__item_current\">1</div>\n          <div class=\"pagination__item pagination__item_forward\"></div>\n          <div class=\"pagination__item pagination__item_fast-forward\"></div>\n        </div>\n        <select class=\"pagination__select\">\n          <option value=\"5\">5</option>\n          <option value=\"10\">10</option>\n          <option value=\"20\">20</option>\n          <option selected value=\"50\">50</option>\n          <option value=\"100\">100</option>\n        </select>\n        <div class=\"pagination__per-page\">\n          Items per page\n        </div>\n      </div>\n      <div class=\"pagination__right-side\">\n        <p class=\"pagination__navi\">1 - 4 of 4 items</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div ng-if=\"$ctrl.showReviewPopup\">\n  <review-talk-popup talk=\"$ctrl.reviewTalkObj\" on-hide-review-popup=\"$ctrl.hideReviewPopup()\"></review-talk-popup>\n</div>\n<div ng-if=\"$ctrl.showUserInfoPopup\">\n  <user-info-popup user=\"$ctrl.userInfoObj\" on-hide-user-info-popup=\"$ctrl.hideUserInfoPopup()\"></user-info-popup>\n</div>\n";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TalksController = function () {
	  TalksController.$inject = ["Current", "Talks", "User", "Topic"];
	  function TalksController(Current, Talks, User, Topic) {
	    'ngInject';
	
	    _classCallCheck(this, TalksController);
	
	    this.current = Current.current;
	
	    this.talksService = Talks;
	    this.userService = User;
	
	    this.topicService = Topic;
	
	    this.unfilteredTalks = Talks.getAll();
	    this.talks = this.unfilteredTalks; // talks list is initially unfiltered
	
	    this.filter = {};
	    this.showFilters = true;
	
	    if (this.reviewTalkId) {
	      // review specific talk right away
	      this.reviewTalkObj = Talks.get(this.reviewTalkId);
	      this.showReviewPopup = true;
	    } else {
	      this.reviewTalkObj = {};
	      this.showReviewPopup = false;
	    }
	
	    this.userInfoObj = {}; // user object to pass to popup controller
	    this.showUserInfoPopup = false;
	
	    this.statuses = Talks.statusStrings;
	    this.topics = Topic.query();
	  }
	
	  _createClass(TalksController, [{
	    key: 'showSettings',
	    value: function showSettings() {
	      this.showFilters = !this.showFilters;
	    }
	  }, {
	    key: 'review',
	    value: function review(talk) {
	      // talk object passed
	      this.reviewTalkObj = talk;
	      this.showReviewPopup = true;
	    }
	  }, {
	    key: 'hideReviewPopup',
	    value: function hideReviewPopup() {
	      this.reviewTalkObj = {};
	      this.showReviewPopup = false;
	    }
	  }, {
	    key: 'userInfo',
	    value: function userInfo(id) {
	      this.userInfoObj = {};
	      this.showUserInfoPopup = false;
	      this.userInfoObj = this.userService.get(id);
	      this.showUserInfoPopup = true;
	    }
	  }, {
	    key: 'hideUserInfoPopup',
	    value: function hideUserInfoPopup() {
	      this.userInfoId = null;
	      this.showUserInfoPopup = false;
	    }
	  }, {
	    key: 'filterReset',
	    value: function filterReset() {
	      this.filter = {};
	      this.talks = this.unfilteredTalks; // point to unfiltered list
	    }
	  }, {
	    key: 'filterApply',
	    value: function filterApply() {
	      var _this = this;
	
	      this.talks = this.unfilteredTalks; // reset previous filters
	
	      function dd(num) {
	        // Double Digit - add leading zero if needed
	        var str = num.toString();
	        if (str.length === 1) {
	          return '0' + str;
	        }
	        return str;
	      }
	
	      function formatCalendarDate(date) {
	        return '' + date.getFullYear() + dd(date.getMonth() + 1) + dd(date.getDate());
	      }
	
	      function formatStoredDate(dateStr) {
	        return '' + dateStr.substr(0, 4) + dateStr.substr(5, 2) + dateStr.substr(8, 2);
	      }
	
	      var fTalks = this.talks.slice(); // copy, filtered talks
	      if (this.filter.status) {
	        fTalks = fTalks.filter(function (talk) {
	          return talk.status === _this.filter.status;
	        });
	      }
	      if (this.filter.topic) {
	        fTalks = fTalks.filter(function (talk) {
	          return talk.topic === _this.filter.topic;
	        });
	      }
	      if (this.filter.fromDate) {
	        fTalks = fTalks.filter(function (talk) {
	          return formatStoredDate(talk.date) >= formatCalendarDate(_this.filter.fromDate);
	        });
	      }
	      if (this.filter.toDate) {
	        fTalks = fTalks.filter(function (talk) {
	          return formatStoredDate(talk.date) <= formatCalendarDate(_this.filter.toDate);
	        });
	      }
	      this.talks = fTalks.slice();
	    }
	  }]);
	
	  return TalksController;
	}();
	
	exports.default = TalksController;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reviewTalkPopup = __webpack_require__(94);
	
	var _reviewTalkPopup2 = _interopRequireDefault(_reviewTalkPopup);
	
	var _reviewTalkPopup3 = __webpack_require__(95);
	
	var _reviewTalkPopup4 = _interopRequireDefault(_reviewTalkPopup3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  bindings: {
	    talk: '<',
	    onHideReviewPopup: '&'
	  },
	  template: _reviewTalkPopup2.default,
	  controller: _reviewTalkPopup4.default
	};
	
	exports.default = component;

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pop-up-wrapper\">\n  <div class=\"pop-up pop-up_big\">\n    <h3 class=\"pop-up__title\">Review talks\n      <button class=\"pop-up__close\" ng-click=\"$ctrl.closeCheck()\"></button>\n    </h3>\n    <form class=\"new-talk\" name=\"$ctrl.form\" novalidate>\n      <label for=\"new-talk-title\" class=\"form-label\">\n        title\n      </label>\n      <input type=\"text\"\n             id=\"new-talk-title\"\n             class=\"field field_border\"\n             disabled\n             ng-model=\"$ctrl.talk.title\">\n\n      <label for=\"new-talk-desc\" class=\"form-label\">\n        description\n      </label>\n      <textarea class=\"textarea new-talk-desc\"\n                disabled\n                ng-model=\"$ctrl.talk.description\">\n\n      </textarea>\n\n      <label class=\"form-label\">\n        topic\n      </label>\n      <input type=\"text\"\n             class=\"field field_border\"\n             disabled\n             ng-model=\"$ctrl.talk.topic\">\n\n      <label class=\"form-label\">\n        type\n      </label>\n      <input type=\"text\"\n             class=\"field field_border\"\n             disabled\n             ng-model=\"$ctrl.talk.type\">\n\n      <label class=\"form-label\">\n        language\n      </label>\n      <input type=\"text\"\n             class=\"field field_border\"\n             disabled\n             ng-model=\"$ctrl.talk.lang\">\n\n      <label class=\"form-label\">\n        level\n      </label>\n      <input type=\"text\"\n             class=\"field field_border\"\n             disabled\n             ng-model=\"$ctrl.talk.level\">\n\n      <label for=\"new-talk-add-inf\" class=\"form-label\">\n        additional info\n      </label>\n      <textarea class=\"textarea\"\n                disabled\n                ng-model=\"$ctrl.talk.addon\">\n      </textarea>\n\n      <div ng-if=\"$ctrl.fileNameObj.fileName\">\n        <span class=\"icon icon_attach\"></span>\n        <a class=\"form-link link\" ng-href=\"/talk/{{ $ctrl.talk.id }}/takeFile\">{{ $ctrl.fileNameObj.fileName }}</a>\n\n      </div>\n\n      <label for=\"comment\" class=\"form-label\">\n        organizer's comments\n      </label>\n      <textarea class=\"textarea\" name=\"comment\"\n                ng-class=\"(!$ctrl.comment && $ctrl.commentRequired) ? 'textarea_required' : ''\"\n                ng-change=\"$ctrl.resetCommentRequired()\"\n                ng-model=\"$ctrl.comment\"\n                maxlength=\"1000\"\n                ng-disabled=\"!$ctrl.statusEditable\">\n      </textarea>\n      <span class=\"field-error\" ng-show=\"(!$ctrl.comment && $ctrl.commentRequired)\">Please specify a rejection reason</span>\n\n      <div class=\"pop-up-button-wrapper pop-up-button-wrapper_wrap\" ng-show=\"$ctrl.statusEditable\">\n        <button class=\"btn pop-up__button pop-up__button_triple\" type=\"button\"\n                ng-click=\"$ctrl.approve()\">Approve</button>\n        <button class=\"btn pop-up__button pop-up__button_triple\" type=\"button\"\n                ng-click=\"$ctrl.reject()\">Reject</button>\n        <button class=\"btn pop-up__button pop-up__button_triple\" type=\"button\"\n                ng-click=\"$ctrl.progress()\">In Progress</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"pop-up-wrapper\" ng-show=\"$ctrl.confirmShown\">\n  <div class=\"pop-up\">\n    <h3 class=\"pop-up__title\">Confirm</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.hideConfirm()\"></button>\n    <p class=\"pop-up__notification\">Are you sure you want to leave the window?</p>\n    <p class=\"pop-up__notification pop-up__notification_light pop-up__notification_not-margin\">Click 'Yes' to leave and all your changes will lost.</p>\n    <p class=\"pop-up__notification pop-up__notification_light pop-up__notification_not-margin\">Click 'No' to return and Submit/Update your changes</p>\n    <div class=\"pop-up-button-wrapper\">\n      <button class=\"btn pop-up__button\" ng-click=\"$ctrl.close()\">Yes</button>\n      <button class=\"btn btn__cancel pop-up__button\" ng-click=\"$ctrl.hideConfirm()\">No</button>\n    </div>\n  </div>\n</div>";

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["Talks", "Current", "TalkFile"];
	  function _class(Talks, Current, TalkFile) {
	    'ngInject';
	
	    var _this = this;
	
	    _classCallCheck(this, _class);
	
	    this.talksService = Talks;
	
	    this.comment = this.talk.comment; // copy prop aside, not to modify the obj itself yet
	
	    this.form = {};
	
	    this.commentRequired = false;
	    this.confirmShown = false;
	
	    Current.current.then(function (res) {
	      _this.reviewer = res.fname + ' ' + res.lname;
	    });
	
	    this.talkFileService = TalkFile;
	    this.fileNameObj = this.talkFileService.getName(this.talk.id);
	  }
	
	  _createClass(_class, [{
	    key: 'approve',
	    value: function approve() {
	      var _this2 = this;
	
	      this.talksService.approve(this.talk.id, this.comment, function () {
	        // success callback
	        _this2.talk.comment = _this2.comment; // modify the obj itself, affect the view
	        _this2.talk.status = _this2.talksService.TALK_STATUS_APPROVED;
	        _this2.talk.assignee = _this2.reviewer;
	        _this2.close();
	      });
	    }
	  }, {
	    key: 'reject',
	    value: function reject() {
	      var _this3 = this;
	
	      if (!this.comment) {
	        // required
	        this.commentRequired = true;
	        return;
	      }
	      this.talksService.reject(this.talk.id, this.comment, function () {
	        _this3.talk.comment = _this3.comment;
	        _this3.talk.status = _this3.talksService.TALK_STATUS_REJECTED;
	        _this3.talk.assignee = _this3.reviewer;
	        _this3.close();
	      });
	    }
	  }, {
	    key: 'progress',
	    value: function progress() {
	      var _this4 = this;
	
	      this.talksService.progress(this.talk.id, this.comment, function () {
	        _this4.talk.comment = _this4.comment;
	        _this4.talk.status = _this4.talksService.TALK_STATUS_PROGRESS;
	        _this4.talk.assignee = _this4.reviewer;
	        _this4.close();
	      });
	    }
	  }, {
	    key: 'closeCheck',
	    value: function closeCheck() {
	      if (this.statusEditable && this.form.comment.$dirty) {
	        // comment modified, but attempting to leave
	        this.showConfirm();
	      } else {
	        this.close();
	      }
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      this.onHideReviewPopup();
	    }
	  }, {
	    key: 'resetCommentRequired',
	    value: function resetCommentRequired() {
	      this.commentRequired = false;
	    }
	  }, {
	    key: 'showConfirm',
	    value: function showConfirm() {
	      this.confirmShown = true;
	    }
	  }, {
	    key: 'hideConfirm',
	    value: function hideConfirm() {
	      this.confirmShown = false;
	    }
	  }, {
	    key: 'statusEditable',
	    get: function get() {
	      // getter, convenient for template inline triggers
	      if (this.talk.status === this.talksService.TALK_STATUS_NEW || this.talk.status === this.talksService.TALK_STATUS_PROGRESS) {
	        return true;
	      }
	      return false;
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _userInfoPopup = __webpack_require__(97);
	
	var _userInfoPopup2 = _interopRequireDefault(_userInfoPopup);
	
	var _userInfoPopup3 = __webpack_require__(98);
	
	var _userInfoPopup4 = _interopRequireDefault(_userInfoPopup3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  bindings: {
	    user: '<',
	    onHideUserInfoPopup: '&'
	  },
	  template: _userInfoPopup2.default,
	  controller: _userInfoPopup4.default
	};
	
	exports.default = component;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pop-up-wrapper\">\n  <div class=\"pop-up pop-up_big\">\n    <h3 class=\"pop-up__title talks-user-info-popup__title\">{{$ctrl.fullName}}</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.close()\"></button>\n\n    <div class=\"talks-user-info-popup__form-wrapper\">\n\n      <!--<user-photo user=\"$ctrl.user\"></user-photo>-->\n      <img class=\"my-info__ava\" src=\"{{$ctrl.ava}}\"/>\n      <form class=\"my-info\" name=\"$ctrl.userInfoForm\">\n        <label for=\"my-info-bio\" class=\"form-label my-info__label my-info__label_bio\">Short Bio</label>\n        <textarea name=\"bio\" id=\"my-info-bio\" class=\"textarea my-info__bio\" maxlength=\"2000\"\n                  ng-model=\"$ctrl.user.bio\"\n                  disabled>{{$ctrl.user.bio}}</textarea>\n        <label class=\"form-label\">Job Title</label>\n        <input type=\"text\"\n               class=\"field field_border\"\n               disabled\n               ng-model=\"$ctrl.user.job\">\n        <label class=\"form-label\">Company</label>\n        <input type=\"text\"\n               class=\"field field_border\"\n               disabled\n               ng-model=\"$ctrl.user.company\">\n        <label class=\"form-label\">Past Conferences</label>\n        <textarea type=\"text\" name=\"past\" id=\"my-info-linkedin-past-conferences\" rows=\"5\"\n                  class=\"textarea\"\n                  disabled\n                  ng-model=\"$ctrl.user.past\">{{$ctrl.user.past}}</textarea>\n        <label class=\"form-label\">Email</label>\n        <input type=\"text\"\n               class=\"field field_border\"\n               disabled\n               ng-model=\"$ctrl.user.mail\">\n        <label class=\"form-label\">LinkedIn</label>\n        <input type=\"text\"\n               class=\"field field_border\"\n               disabled\n               ng-model=\"$ctrl.user.linkedin\">\n        <label class=\"form-label\">twitter</label>\n        <input type=\"text\"\n               class=\"field field_border\"\n               disabled\n               ng-model=\"$ctrl.user.twitter\">\n        <label class=\"form-label\">facebook</label>\n        <input type=\"text\"\n               class=\"field field_border\"\n               disabled\n               ng-model=\"$ctrl.user.facebook\">\n        <label class=\"form-label\">blog</label>\n        <input type=\"text\"\n               class=\"field field_border\"\n               disabled\n               ng-model=\"$ctrl.user.blog\">\n        <label class=\"form-label\">Additional Info</label>\n        <textarea rows=\"5\" class=\"textarea\"\n                  ng-model=\"$ctrl.user.info\"\n                  disabled\n                  maxlength=\"1000\">{{$ctrl.user.info}}</textarea>\n      </form>\n      <button class=\"btn talks-user-info-popup__button\" ng-click=\"$ctrl.close()\">close</button>\n    </div>\n\n  </div>\n</div>";

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["Constants"];
	  function _class(Constants) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.defaultAva = Constants.ava; // default ava path constant
	  }
	
	  _createClass(_class, [{
	    key: 'close',
	    value: function close() {
	      this.onHideUserInfoPopup();
	    }
	  }, {
	    key: 'fullName',
	    get: function get() {
	      if (this.user.fname) {
	        return this.user.fname + ' ' + this.user.lname;
	      }
	      return ''; // empty string instead of direct temporary visible 'undefined undefined'
	    }
	  }, {
	    key: 'ava',
	    get: function get() {
	      return this.user.photo ? this.user.photo : this.defaultAva; // show default ava until link is available
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newPassword = __webpack_require__(100);
	
	var _newPassword2 = _interopRequireDefault(_newPassword);
	
	var _newPassword3 = __webpack_require__(103);
	
	var _newPassword4 = _interopRequireDefault(_newPassword3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.newPassword', {
	      url: '/forgotPassword/:tokenId',
	      template: '<new-password></new-password>'
	    });
	  }]).component('newPassword', _newPassword2.default).service('newPasswordService', _newPassword4.default);
	};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newPassword = __webpack_require__(101);
	
	var _newPassword2 = _interopRequireDefault(_newPassword);
	
	var _newPassword3 = __webpack_require__(102);
	
	var _newPassword4 = _interopRequireDefault(_newPassword3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var newPasswordComponent = {
	  template: _newPassword2.default,
	  controller: _newPassword4.default
	};
	
	exports.default = newPasswordComponent;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"password-wrapper\">\n    <div class=\"password__header\">Create New Password</div>\n    <div class=\"password__block\">\n        <form class=\"password__form\"\n              novalidate\n              name=\"$ctrl.newPasswordForm\"\n              ng-submit=\"$ctrl.newPassword()\"\n        >\n            <label class=\"form-label\">New Password</label>\n            <input class=\"field field_border\"\n                   type=\"password\"\n                   name=\"newPassword\"\n                   required\n                   minlength=\"6\"\n                   maxlength=\"30\"\n                   name=\"newPassword\"\n                   ng-pattern=\"$ctrl.passwordPattern\"\n                   ng-model=\"$ctrl.passwords.newPassword\"\n                   ng-change=\"$ctrl.setPasswordsMatch(true)\"\n                   >\n            <span class=\"field-error\" ng-if=\"$ctrl.newPasswordForm.newPassword.$error.passwords_match && $ctrl.newPasswordForm.$submitted\">\n              Passwords do not match\n            </span>\n            <span class=\"field-error\" ng-if=\"$ctrl.newPasswordForm.newPassword.$error.pattern  && $ctrl.newPasswordForm.$submitted\">\n              Please use at least one non-space character in your password.\n            </span>\n            <span class=\"field-error\" ng-if=\"$ctrl.newPasswordForm.newPassword.$error.minlength  && $ctrl.newPasswordForm.$submitted\">\n              Your password must be at least 6 characters long. Please try another.\n            </span>\n            <span class=\"field-error\" ng-if=\"$ctrl.newPasswordForm.newPassword.$error.required  && $ctrl.newPasswordForm.$submitted\">\n              All fields are mandatory. Please make sure all required fields are filled out.\n            </span>\n\n\n            <label class=\"form-label\">Confirm Password</label>\n            <input class=\"field field_border\"\n                   type=\"password\"\n                   name=\"confirmPassword\"\n                   required\n                   ng-model=\"$ctrl.passwords.confirmPassword\"\n                   ng-change=\"$ctrl.setPasswordsMatch(true)\"\n                  >\n            <span class=\"field-error\" ng-if=\"$ctrl.newPasswordForm.confirmPassword.$error.required  && $ctrl.newPasswordForm.$submitted\">\n              All fields are mandatory. Please make sure all required fields are filled out.\n            </span>\n\n            <input type=\"submit\" class=\"btn password__btn\" value=\"Save\">\n        </form>\n    </div>\n</div>";

/***/ }),
/* 102 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewPasswordController = function () {
	  NewPasswordController.$inject = ["$state", "$stateParams", "newPasswordService", "Current", "Constants"];
	  function NewPasswordController($state, $stateParams, newPasswordService, Current, Constants) {
	    'ngInject';
	
	    _classCallCheck(this, NewPasswordController);
	
	    this.newPasswordService = newPasswordService;
	    this.state = $state;
	    this.currentService = Current;
	    this.token = $stateParams.tokenId;
	    this.newPasswordForm = {};
	    this.passwords = {};
	    this.passwordPattern = Constants.password;
	    this.confirm();
	  }
	
	  _createClass(NewPasswordController, [{
	    key: 'confirm',
	    value: function confirm() {
	      var _this = this;
	
	      this.newPasswordService.passConfirm(this.token).then(null, function () {
	        _this.state.go('header.invalidLink', {}, { reload: true });
	      });
	    }
	  }, {
	    key: 'newPassword',
	    value: function newPassword() {
	      var _this2 = this;
	
	      this.setPasswordsMatch(true);
	
	      if (this.newPasswordForm.$valid && this.checkMatchPassword()) {
	        this.newPasswordService.changePassword(this.passwords, this.token).then(function () {
	          _this2.currentService.getInfo();
	          _this2.state.go('header.home', {}, { reload: true });
	        }, function () {
	          _this2.state.go('header.home', {}, { reload: true });
	        });
	      }
	    }
	  }, {
	    key: 'setPasswordsMatch',
	    value: function setPasswordsMatch(bool) {
	      this.newPasswordForm.newPassword.$setValidity('passwords_match', bool);
	      this.newPasswordForm.confirmPassword.$setValidity('passwords_match', bool);
	    }
	  }, {
	    key: 'checkMatchPassword',
	    value: function checkMatchPassword() {
	      if (this.passwords.newPassword === this.passwords.confirmPassword) {
	        return true;
	      }
	
	      this.setPasswordsMatch(false);
	      return false;
	    }
	  }]);
	
	  return NewPasswordController;
	}();
	
	exports.default = NewPasswordController;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var newPasswordService = function () {
	  newPasswordService.$inject = ["$http"];
	  function newPasswordService($http) {
	    'ngInject';
	
	    _classCallCheck(this, newPasswordService);
	
	    this.http = $http;
	  }
	
	  _createClass(newPasswordService, [{
	    key: 'passConfirm',
	    value: function passConfirm(token) {
	      return this.http.get('/forgotPasswordPage/changePassword/' + token, {
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      });
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword(passwords, token) {
	      return this.http.post('/forgotPasswordPage/changePassword/' + token, passwords, {
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      });
	    }
	  }]);
	
	  return newPasswordService;
	}();
	
	exports.default = newPasswordService;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _registrationConfirm = __webpack_require__(105);
	
	var _registrationConfirm2 = _interopRequireDefault(_registrationConfirm);
	
	var _registrationConfirm3 = __webpack_require__(106);
	
	var _registrationConfirm4 = _interopRequireDefault(_registrationConfirm3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.registrationConfirm', {
	      url: '/registrationConfirm/:token',
	      controller: _registrationConfirm2.default
	    });
	  }]).service('RegistrationConfirmService', _registrationConfirm4.default);
	};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var registrationConfirmController = function () {
	  registrationConfirmController.$inject = ["$state", "$stateParams", "RegistrationConfirmService", "Current"];
	  function registrationConfirmController($state, $stateParams, RegistrationConfirmService, Current) {
	    'ngInject';
	
	    _classCallCheck(this, registrationConfirmController);
	
	    this.state = $state;
	    this.currentService = Current;
	    this.token = $stateParams.token;
	    this.confirmService = RegistrationConfirmService;
	
	    this.confirm();
	  }
	
	  _createClass(registrationConfirmController, [{
	    key: 'confirm',
	    value: function confirm() {
	      var _this = this;
	
	      this.confirmService.registrationConfirm(this.token).then(function () {
	        _this.currentService.getInfo();
	        _this.state.go('header.home', {}, { reload: true });
	      }, function () {
	        _this.state.go('header.invalidLink', {}, { reload: true });
	      });
	    }
	  }]);
	
	  return registrationConfirmController;
	}();
	
	exports.default = registrationConfirmController;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var RegistrationConfirmService = function () {
	  RegistrationConfirmService.$inject = ["$http"];
	  function RegistrationConfirmService($http) {
	    'ngInject';
	
	    _classCallCheck(this, RegistrationConfirmService);
	
	    this.http = $http;
	  }
	
	  _createClass(RegistrationConfirmService, [{
	    key: 'registrationConfirm',
	    value: function registrationConfirm(token) {
	      return this.http.get('/confirmation/registrationConfirm/' + token);
	    }
	  }]);
	
	  return RegistrationConfirmService;
	}();
	
	exports.default = RegistrationConfirmService;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _invalidLink = __webpack_require__(108);
	
	var _invalidLink2 = _interopRequireDefault(_invalidLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.invalidLink', {
	      url: '/invalid-link',
	      template: '<invalid-link></invalid-link>'
	    });
	  }]).component('invalidLink', _invalidLink2.default);
	};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _invalidLink = __webpack_require__(109);
	
	var _invalidLink2 = _interopRequireDefault(_invalidLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var invalidLinkComponent = {
	  template: _invalidLink2.default
	};
	
	exports.default = invalidLinkComponent;

/***/ }),
/* 109 */
/***/ (function(module, exports) {

	module.exports = "<p class=\"link-expired\">This link is expired. Please sent your request once more.</p>";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _newEmailConfirm = __webpack_require__(111);
	
	var _newEmailConfirm2 = _interopRequireDefault(_newEmailConfirm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.emailConfirm', {
	      url: '/newEmailConfirm/:token',
	      onEnter: ["$state", "$stateParams", "Current", "NewEmailConfirmService", function onEnter($state, $stateParams, Current, NewEmailConfirmService) {
	        'ngInject';
	
	        NewEmailConfirmService.emailConfirm($stateParams.token).then(function () {
	          Current.getInfo();
	          $state.go('header.home', {}, { reload: true });
	        }).catch(function () {
	          $state.go('header.invalidLink', {}, { reload: true });
	        });
	      }]
	    });
	  }]).service('NewEmailConfirmService', _newEmailConfirm2.default);
	};

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewEmailConfirmService = function () {
	  NewEmailConfirmService.$inject = ["$http"];
	  function NewEmailConfirmService($http) {
	    'ngInject';
	
	    _classCallCheck(this, NewEmailConfirmService);
	
	    this.http = $http;
	  }
	
	  _createClass(NewEmailConfirmService, [{
	    key: 'emailConfirm',
	    value: function emailConfirm(token) {
	      return this.http.get('/confirmation/newEmailConfirm/' + token);
	    }
	  }]);
	
	  return NewEmailConfirmService;
	}();
	
	exports.default = NewEmailConfirmService;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _manageUsers = __webpack_require__(113);
	
	var _manageUsers2 = _interopRequireDefault(_manageUsers);
	
	var _addUserPopup = __webpack_require__(116);
	
	var _addUserPopup2 = _interopRequireDefault(_addUserPopup);
	
	var _addUser = __webpack_require__(119);
	
	var _addUser2 = _interopRequireDefault(_addUser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.config(["$stateProvider", function ($stateProvider) {
	    'ngInject';
	
	    $stateProvider.state('header.manageUsers', {
	      url: '/manage-users',
	      template: '<manage-users ng-if="ctrl.resolved" users="ctrl.users"></manage-users>',
	      resolve: {
	        currentUser: ["Current", function currentUser(Current) {
	          return Current.current;
	        }],
	        users: ["ManageUsers", function users(ManageUsers) {
	          return ManageUsers.getAll();
	        }]
	      },
	      controller: ["Permissions", "currentUser", "users", function Controller(Permissions, currentUser, users) {
	        Permissions.permitted('ROLE_ADMIN', currentUser);
	        this.resolved = true;
	        this.users = users;
	      }],
	      controllerAs: 'ctrl'
	    });
	  }]).component('manageUsers', _manageUsers2.default).component('addUserPopup', _addUserPopup2.default).service('AddUserService', _addUser2.default);
	};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _manageUsers = __webpack_require__(114);
	
	var _manageUsers2 = _interopRequireDefault(_manageUsers);
	
	var _manageUsers3 = __webpack_require__(115);
	
	var _manageUsers4 = _interopRequireDefault(_manageUsers3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var manageUsersComponent = {
	  bindings: {
	    users: '='
	  },
	  template: _manageUsers2.default,
	  controller: _manageUsers4.default
	};
	
	exports.default = manageUsersComponent;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"tabs-layout\">\n  <div class=\"tabs-wrapper\">\n    <ul class=\"tabs-list\">\n      <li class=\"tabs-list__item\">\n        <a class=\"tabs-list__anchor tabs-list__anchor_active\">\n          Manage Users\n        </a>\n      </li>\n    </ul>\n    <div class=\"tabs-container\">\n      <div class=\"my-talks__header\">\n        <a type=\"button\"  ng-click=\"$ctrl.hideAddUserPopup()\" class=\"btn my-talks__button\">add new user</a>\n        <!--<div ui-view></div>-->\n      </div>\n      <div class=\"data-table\">\n        <div class=\"table-header\">\n          <div class=\"table-header__item table-header__item_role\">role</div>\n          <div class=\"table-header__item table-header__item_name\">name</div>\n          <div class=\"table-header__item table-header__item_email\">email</div>\n          <div class=\"table-header__item table-header__scroll-fix\"></div>\n        </div>\n        <div class=\"data-table__inner-wrapper\">\n          <div class=\"data-table__row\" ng-repeat=\"user in $ctrl.users\">\n            <div class=\"data-table__column data-table__column_role\">{{user.roles | roleFilter }}</div>\n            <div class=\"data-table__column data-table__column_name\">{{user.lname + \" \" + user.fname}}</div>\n            <div class=\"data-table__column data-table__column_email\">{{user.mail}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div ng-if=\"$ctrl.addUserPopup\">\n  <add-user-popup on-update-users=\"$ctrl.updateUsers(newUser)\" on-hide-add-popup=\"$ctrl.hideAddUserPopup()\"></add-user-popup>\n</div>";

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ManageUsersController = function () {
	  function ManageUsersController() {
	    'ngInject';
	
	    _classCallCheck(this, ManageUsersController);
	
	    this.addUserPopup = false;
	  }
	
	  _createClass(ManageUsersController, [{
	    key: 'hideAddUserPopup',
	    value: function hideAddUserPopup() {
	      this.addUserPopup = !this.addUserPopup;
	    }
	  }, {
	    key: 'updateUsers',
	    value: function updateUsers(newUser) {
	      // obj
	      this.newUser = newUser;
	      this.newUser.roles = this.newUser.roleName;
	      this.users.push(newUser);
	      this.users.sort(function (userA, userB) {
	        return userA.lname.localeCompare(userB.lname);
	      });
	    }
	  }]);
	
	  return ManageUsersController;
	}();
	
	exports.default = ManageUsersController;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _addUserPopup = __webpack_require__(117);
	
	var _addUserPopup2 = _interopRequireDefault(_addUserPopup);
	
	var _addUserPopup3 = __webpack_require__(118);
	
	var _addUserPopup4 = _interopRequireDefault(_addUserPopup3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var component = {
	  bindings: {
	    onHideAddPopup: '&',
	    onUpdateUsers: '&'
	  },
	  template: _addUserPopup2.default,
	  controller: _addUserPopup4.default
	};
	
	exports.default = component;

/***/ }),
/* 117 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"pop-up-wrapper\">\n  <div class=\"pop-up pop-up_big\">\n    <h3 class=\"pop-up__title\">add new user</h3>\n    <button class=\"pop-up__close\" ng-click=\"$ctrl.close()\"></button>\n    <form class=\"new-talk\" name=\"$ctrl.userForm\"\n          novalidate\n          ng-submit=\"$ctrl.addUser()\">\n      <label class=\"form-label form-label_required\">\n        role\n      </label>\n      <select class=\"new-talk__select\"\n              name=\"role-name\"\n              ng-required=\"true\"\n              ng-model=\"$ctrl.user.roleName\"\n              ng-options=\"role as (role | roleFilter) for role in $ctrl.roles\">\n      </select>\n\n      <label for=\"add-user-name\" class=\"form-label form-label_required\">first name:</label>\n      <input type=\"text\" id=\"add-user-name\" name=\"fname\"\n             class=\"field field_border\"\n             required\n             maxlength=\"56\"\n             ng-model=\"$ctrl.user.fname\">\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.fname.$error.required\">\n                All fields are mandatory. Please make sure all required fields are filled out</span>\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.fname.$error.maxlength\">\n                Your First Name should not be longer than 56 characters. Please try another</span>\n\n      <label for=\"add-user-surname\" class=\"form-label form-label_required\">last name:</label>\n      <input type=\"text\" id=\"add-user-surname\" name=\"lname\"\n             class=\"field field_border\"\n             required\n             maxlength=\"56\"\n             ng-model=\"$ctrl.user.lname\">\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.lname.$error.required\">\n                All fields are mandatory. Please make sure all required fields are filled out</span>\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.fname.$error.maxlength\">\n                Your Last Name should not be longer than 56 characters. Please try another</span>\n\n      <label for=\"add-user-mail\" class=\"form-label form-label_required\">Email:</label>\n      <input type=\"email\" id=\"add-user-mail\" name=\"mail\"\n             class=\"field field_border\"\n             required\n             ng-model=\"$ctrl.user.mail\"\n             ng-pattern=\"$ctrl.emailPattern\"\n             ng-change=\"$ctrl.resetEmailAlreadyExists()\">\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.mail.$error.required\">\n                All fields are mandatory. Please make sure all required fields are filled out</span>\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && ( $ctrl.userForm.mail.$error.pattern ||\n                                                  $ctrl.userForm.mail.$error.email )\">\n                Please enter a valid email address</span>\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.mail.$error.email_already_exists\">\n                There is an existing account associated with {{$ctrl.user.mail}}</span>\n\n      <label for=\"add-user-password\" class=\"form-label form-label_required\">password:</label>\n      <input type=\"password\" id=\"add-user-password\" name=\"password\"\n             class=\"field field_border\"\n             required\n             minlength=\"6\"\n             maxlength=\"30\"\n             ng-pattern=\"$ctrl.passwordPattern\"\n             ng-model=\"$ctrl.user.password\"\n             ng-change=\"$ctrl.setPasswordsMatch(true)\">\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.password.$error.required\">\n                All fields are mandatory. Please make sure all required fields are filled out</span>\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.password.$error.pattern\">\n                Please use at least one non-space character in your password</span>\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.password.$error.minlength\">\n                Your password must be at least 6 characters long. Please try another</span>\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.password.$error.maxlength\">\n                Your password should not be longer than 30 characters. Please try another</span>\n\n      <label for=\"confirm\" class=\"form-label form-label_required\">confirm password:</label>\n      <input type=\"password\" id=\"confirm\" name=\"confirm\"\n             class=\"field field_border\"\n             required\n             minlength=\"6\"\n             maxlength=\"30\"\n             ng-model=\"$ctrl.user.confirm\"\n             ng-change=\"$ctrl.setPasswordsMatch(true)\">\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.confirm.$error.required\">\n                All fields are mandatory. Please make sure all required fields are filled out</span>\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.confirm.$error.minlength\">\n                Your password must be at least 6 characters long. Please try another</span>\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.$submitted && $ctrl.userForm.confirm.$error.maxlength\">\n                Your password should not be longer than 30 characters. Please try another</span>\n      <span class=\"field-error\"\n            ng-show=\"$ctrl.userForm.confirm.$error.passwords_match\">\n                Passwords do not match</span>\n\n      <input type=\"submit\" class=\"sign-up__button btn\" value=\"save\" ng-disabled=\"$ctrl.formSent\">\n    </form>\n  </div>\n</div>";

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AddUserPopupContropller = function () {
	  AddUserPopupContropller.$inject = ["AddUserService", "Constants"];
	  function AddUserPopupContropller(AddUserService, Constants) {
	    'ngInject';
	
	    _classCallCheck(this, AddUserPopupContropller);
	
	    this.service = AddUserService;
	    this.user = {};
	    this.userForm = {};
	    this.formSent = false;
	    this.passwordPattern = Constants.password;
	    this.emailPattern = Constants.email;
	    this.passwordPattern = Constants.password;
	
	    this.roles = ['ROLE_SPEAKER', 'ROLE_ORGANISER'];
	    this.user.roleName = this.roles[0]; // pre-selected option
	  }
	
	  _createClass(AddUserPopupContropller, [{
	    key: 'close',
	    value: function close() {
	      this.onHideAddPopup();
	    }
	  }, {
	    key: 'addUser',
	    value: function addUser() {
	      var _this = this;
	
	      if (this.userForm.$valid) {
	        if (this.user.password !== this.user.confirm) {
	          this.setPasswordsMatch(false);
	          return;
	        }
	
	        this.formSent = true;
	
	        this.service.addUser(this.user, function () {
	          // success callback
	          _this.userForm.$setPristine();
	          _this.onUpdateUsers({ newUser: _this.user });
	          _this.onHideAddPopup();
	        }, function (error) {
	          // error callback
	          if (error.data.error === 'email_already_exists') {
	            _this.userForm.mail.$setValidity('email_already_exists', false);
	            _this.formSent = false;
	          }
	        });
	      }
	    }
	  }, {
	    key: 'setPasswordsMatch',
	    value: function setPasswordsMatch(bool) {
	      this.userForm.password.$setValidity('passwords_match', bool);
	      this.userForm.confirm.$setValidity('passwords_match', bool);
	    }
	  }, {
	    key: 'resetEmailAlreadyExists',
	    value: function resetEmailAlreadyExists() {
	      this.userForm.mail.$setValidity('email_already_exists', true);
	    }
	  }]);
	
	  return AddUserPopupContropller;
	}();
	
	exports.default = AddUserPopupContropller;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AddUserService = function () {
	  AddUserService.$inject = ["$resource"];
	  function AddUserService($resource) {
	    'ngInject';
	
	    _classCallCheck(this, AddUserService);
	
	    this.resource = $resource('/user/registerByAdmin', {}, {
	      add: {
	        method: 'POST',
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      }
	    });
	  }
	
	  _createClass(AddUserService, [{
	    key: 'addUser',
	    value: function addUser(user, successCallback, errorCallback) {
	      // POST
	      this.resource.save(user, function (result) {
	        successCallback(result);
	      }, function (error) {
	        errorCallback(error);
	      });
	    }
	  }]);
	
	  return AddUserService;
	}();
	
	exports.default = AddUserService;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _current = __webpack_require__(121);
	
	var _current2 = _interopRequireDefault(_current);
	
	var _menus = __webpack_require__(123);
	
	var _menus2 = _interopRequireDefault(_menus);
	
	var _talk = __webpack_require__(125);
	
	var _talk2 = _interopRequireDefault(_talk);
	
	var _localStorage = __webpack_require__(128);
	
	var _localStorage2 = _interopRequireDefault(_localStorage);
	
	var _constants = __webpack_require__(130);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _permissions = __webpack_require__(132);
	
	var _permissions2 = _interopRequireDefault(_permissions);
	
	var _nodeIntercepter = __webpack_require__(134);
	
	var _nodeIntercepter2 = _interopRequireDefault(_nodeIntercepter);
	
	var _user = __webpack_require__(136);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _manageUsers = __webpack_require__(138);
	
	var _manageUsers2 = _interopRequireDefault(_manageUsers);
	
	var _conference = __webpack_require__(140);
	
	var _conference2 = _interopRequireDefault(_conference);
	
	var _topic = __webpack_require__(142);
	
	var _topic2 = _interopRequireDefault(_topic);
	
	var _type = __webpack_require__(144);
	
	var _type2 = _interopRequireDefault(_type);
	
	var _level = __webpack_require__(146);
	
	var _level2 = _interopRequireDefault(_level);
	
	var _language = __webpack_require__(148);
	
	var _language2 = _interopRequireDefault(_language);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* global include_all_modules */
	exports.default = function (app) {
	  (function includeAllModulesGlobalFn(modulesArray, application) {
	        modulesArray.forEach(function executeModuleIncludesFn(moduleFn) {
	          moduleFn(application);
	        });
	      })([_localStorage2.default, _constants2.default, _current2.default, _menus2.default, _talk2.default, _permissions2.default, _nodeIntercepter2.default, _user2.default, _manageUsers2.default, _conference2.default, _topic2.default, _type2.default, _level2.default, _language2.default], app);
	};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _current = __webpack_require__(122);
	
	var _current2 = _interopRequireDefault(_current);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.factory('Current', _current2.default);
	};

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	'use strict';
	
	Current.$inject = ["$resource", "$q", "$rootScope", "LocalStorage"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function Current($resource, $q, $rootScope, LocalStorage) {
	  'ngInject';
	
	  var users = $resource('/myinfo', {}, {
	    getCurrentUser: {
	      method: 'GET',
	      headers: {
	        'Cache-Control': 'no-cache, no-store',
	        Pragma: 'no-cache'
	      }
	    },
	    updateCurrentUser: {
	      method: 'POST',
	      headers: {
	        'Cache-Control': 'no-cache, no-store',
	        Pragma: 'no-cache'
	      }
	    }
	  });
	
	  function getInfo() {
	    var current = $q.defer();
	    users.getCurrentUser({}, function (data) {
	      current.resolve(data);
	    }, function () {
	      LocalStorage.removeItem('userInfo');
	      current.resolve(null);
	    });
	
	    this.current = current.promise;
	  }
	
	  function updateInfo(userInfo) {
	    users.updateCurrentUser(userInfo, function () {}, function () {
	      $rootScope.$broadcast('signInEvent');
	    });
	  }
	
	  function clear() {
	    this.current = null;
	  }
	
	  return {
	    clear: clear,
	    getInfo: getInfo,
	    updateInfo: updateInfo
	  };
	}
	
	exports.default = Current;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _menus = __webpack_require__(124);
	
	var _menus2 = _interopRequireDefault(_menus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.factory('Menus', _menus2.default);
	};

/***/ }),
/* 124 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Menus = function Menus() {
	  var menu = {
	    speaker: [{
	      link: 'home',
	      name: 'Conferences'
	    }, {
	      link: 'tabs.myInfo',
	      name: 'My Info'
	    }, {
	      link: 'tabs.myTalks',
	      name: 'My Talks'
	    }, {
	      link: 'account',
	      name: 'Settings'
	    }],
	    organiser: [{
	      link: 'home',
	      name: 'Conferences'
	    }, {
	      link: 'talks',
	      name: 'Talks'
	    }, {
	      link: 'account',
	      name: 'Settings'
	    }],
	    admin: [{
	      link: 'manageUsers',
	      name: 'Manage Users'
	    }]
	  };
	
	  return {
	    getMenu: function getMenu(role) {
	      var menuArr = [];
	
	      if (!role || role.length === 0) {
	        return false;
	      }
	
	      if (role.indexOf('ROLE_SPEAKER') !== -1) {
	        menuArr = menuArr.concat(menu.speaker);
	      }
	
	      if (role.indexOf('ROLE_ORGANISER') !== -1) {
	        menuArr = menuArr.concat(menu.organiser);
	      }
	
	      if (role.indexOf('ROLE_ADMIN') !== -1) {
	        menuArr = menuArr.concat(menu.admin);
	      }
	
	      return menuArr;
	    }
	  };
	};
	
	exports.default = Menus;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _talk = __webpack_require__(126);
	
	var _talk2 = _interopRequireDefault(_talk);
	
	var _talkFile = __webpack_require__(127);
	
	var _talkFile2 = _interopRequireDefault(_talkFile);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.service('Talks', _talk2.default).service('TalkFile', _talkFile2.default);
	};

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var TalkService = function () {
	  TalkService.$inject = ["$resource", "$log"];
	  function TalkService($resource, $log) {
	    'ngInject';
	
	    _classCallCheck(this, TalkService);
	
	    this.log = $log;
	
	    this.talks = $resource('/talk/:id', {}, {
	      add: {
	        url: '/submitTalk',
	        method: 'POST',
	        transformRequest: angular.identity,
	        headers: {
	          'Content-Type': undefined,
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      },
	      getAll: {
	        url: '/talk',
	        method: 'GET',
	        isArray: true,
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      },
	      get: {
	        url: '/talk/:id',
	        method: 'GET',
	        params: { id: '@id' },
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      },
	      update: {
	        url: '/talk/:id',
	        method: 'PATCH',
	        params: { id: '@id' }
	      }
	    });
	
	    // constant status strings
	    this.TALK_STATUS_NEW = 'New';
	    this.TALK_STATUS_APPROVED = 'Approved';
	    this.TALK_STATUS_REJECTED = 'Rejected';
	    this.TALK_STATUS_PROGRESS = 'In Progress';
	  }
	
	  _createClass(TalkService, [{
	    key: 'getAll',
	    value: function getAll() {
	      return this.talks.getAll();
	    }
	  }, {
	    key: 'add',
	    value: function add(talk, successCallback) {
	      var _this = this;
	
	      // talk object passed
	      this.talks.add(talk, function (res) {
	        successCallback(res);
	      }, function (err) {
	        _this.log.error(err);
	      });
	    }
	  }, {
	    key: 'get',
	    value: function get(id) {
	      return this.talks.get({ id: id });
	    }
	  }, {
	    key: 'update',
	    value: function update(id, talk, successCallback) {
	      var _this2 = this;
	
	      // talk object passed
	      this.talks.update({ id: id }, talk, function (res) {
	        successCallback(res);
	      }, function (err) {
	        _this2.log.error(err);
	      });
	    }
	  }, {
	    key: 'approve',
	    value: function approve(id, comment, successCallback) {
	      var _this3 = this;
	
	      this.talks.update({ id: id }, { status: this.TALK_STATUS_APPROVED, comment: comment }, function (res) {
	        successCallback(res);
	      }, function (err) {
	        _this3.log.error(err);
	      });
	    }
	  }, {
	    key: 'reject',
	    value: function reject(id, comment, successCallback) {
	      var _this4 = this;
	
	      this.talks.update({ id: id }, { status: this.TALK_STATUS_REJECTED, comment: comment }, function (res) {
	        successCallback(res);
	      }, function (err) {
	        _this4.log.error(err);
	      });
	    }
	  }, {
	    key: 'progress',
	    value: function progress(id, comment, successCallback) {
	      var _this5 = this;
	
	      this.talks.update({ id: id }, { status: this.TALK_STATUS_PROGRESS, comment: comment }, function (res) {
	        successCallback(res);
	      }, function (err) {
	        _this5.log.error(err);
	      });
	    }
	  }, {
	    key: 'statusStrings',
	    get: function get() {
	      // return an array of constant status strings
	      return [this.TALK_STATUS_NEW, this.TALK_STATUS_PROGRESS, this.TALK_STATUS_APPROVED, this.TALK_STATUS_REJECTED];
	    }
	  }]);
	
	  return TalkService;
	}();
	
	exports.default = TalkService;

/***/ }),
/* 127 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["$resource", "$log"];
	  function _class($resource, $log) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.log = $log;
	
	    this.res = $resource('talk/:talkId/takeFile', {}, {
	      get: {
	        url: '/talk/:talkId/takeFile',
	        method: 'GET'
	      },
	      save: {
	        url: '/talk/:talkId/uploadFile',
	        method: 'POST',
	        params: { talkId: '@talkId' },
	        transformRequest: angular.identity, // multipart
	        headers: {
	          'Content-Type': undefined // multipart
	        }
	      },
	      delete: {
	        url: '/talk/:talkId/deleteFile',
	        method: 'DELETE',
	        params: { talkId: '@talkId' }
	      }
	    });
	
	    this.resName = $resource('talk/:talkId/takeFileName');
	  }
	
	  _createClass(_class, [{
	    key: 'get',
	    value: function get(talkId) {
	      // talk id
	      return this.res.get({ talkId: talkId });
	    }
	  }, {
	    key: 'save',
	    value: function save(talkId, formData, successCallback) {
	      var _this = this;
	
	      // talk id, multipart form data with file
	      this.res.save({ talkId: talkId }, formData, function (res) {
	        successCallback(res);
	      }, function (err) {
	        _this.log.error(err);
	      });
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(talkId, successCallback) {
	      var _this2 = this;
	
	      this.res.delete({ talkId: talkId }, successCallback, function (res) {
	        successCallback(res);
	      }, function (err) {
	        _this2.log.error(err);
	      });
	    }
	  }, {
	    key: 'getName',
	    value: function getName(talkId) {
	      // talk id
	      return this.resName.get({ talkId: talkId });
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _localStorage = __webpack_require__(129);
	
	var _localStorage2 = _interopRequireDefault(_localStorage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.factory('LocalStorage', _localStorage2.default);
	};

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	'use strict';
	
	LocalStorage.$inject = ["$window"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/* global window */
	
	function LocalStorage($window) {
	  'ngInject';
	
	  function getToken() {
	    var info = $window.localStorage.userInfo;
	    var token = void 0;
	
	    if (info) {
	      info = JSON.parse(info);
	      token = info.token;
	    } else {
	      token = '';
	    }
	
	    return token;
	  }
	
	  function getItem(key) {
	    return $window.localStorage.getItem(key);
	  }
	
	  function setItem(key, value) {
	    $window.localStorage.setItem(key, value);
	  }
	
	  function removeItem(key) {
	    $window.localStorage.removeItem(key);
	  }
	
	  return {
	    getToken: getToken,
	    getItem: getItem,
	    setItem: setItem,
	    removeItem: removeItem
	  };
	}
	
	exports.default = LocalStorage;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(131);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.factory('Constants', _constants2.default);
	};

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function Constants() {
	  // regex validation
	  var email = /^[a-z0-9_!#%&'/=?^`}~$*+{|-]+(\.[a-z0-9_!#%&'/=?^`}~$*+{|-]+)*@[a-z0-9.-]{1,63}\.[a-z]{2,6}$/i;
	  var password = /^\S+\s*$/i;
	
	  // default ava path
	  var ava = 'assets/img/default_ava.jpg';
	
	  return {
	    email: email,
	    password: password,
	    ava: ava
	  };
	}
	
	exports.default = Constants;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _permissions = __webpack_require__(133);
	
	var _permissions2 = _interopRequireDefault(_permissions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.factory('Permissions', _permissions2.default);
	};

/***/ }),
/* 133 */
/***/ (function(module, exports) {

	'use strict';
	
	Permissions.$inject = ["$rootScope", "$location", "$state", "$stateParams", "LocalStorage"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function Permissions($rootScope, $location, $state, $stateParams, LocalStorage) {
	  'ngInject';
	
	  function permitted(role, user) {
	    if (!user || user.roles.indexOf(role) === -1) {
	      LocalStorage.setItem('redirectStateName', $state.current.name);
	      LocalStorage.setItem('redirectStateParams', JSON.stringify($stateParams));
	      $rootScope.$broadcast('signInEvent');
	    }
	  }
	
	  return {
	    permitted: permitted
	  };
	}
	
	exports.default = Permissions;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _nodeIntercepter = __webpack_require__(135);
	
	var _nodeIntercepter2 = _interopRequireDefault(_nodeIntercepter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.factory('tokenInjector', _nodeIntercepter2.default);
	};

/***/ }),
/* 135 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var tokenInjector = function tokenInjector(LocalStorage, $document) {
	  'ngInject';
	
	  var sessionInjector = {
	    request: function request(config) {
	      if ($document[0].cookie.indexOf('XSRF') === -1 && LocalStorage.getToken() && LocalStorage.getToken() !== 'auth') {
	        config.headers.token = LocalStorage.getToken();
	      }
	      return config;
	    }
	  };
	  return sessionInjector;
	};
	tokenInjector.$inject = ["LocalStorage", "$document"];
	
	exports.default = tokenInjector;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _user = __webpack_require__(137);
	
	var _user2 = _interopRequireDefault(_user);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.service('User', _user2.default);
	};

/***/ }),
/* 137 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["$resource"];
	  function _class($resource) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.user = $resource('/user/:id', {}, {
	      get: {
	        method: 'GET',
	        params: { id: '@id' }
	      }
	    });
	  }
	
	  _createClass(_class, [{
	    key: 'get',
	    value: function get(id) {
	      return this.user.get({ id: id });
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _manageUsers = __webpack_require__(139);
	
	var _manageUsers2 = _interopRequireDefault(_manageUsers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.service('ManageUsers', _manageUsers2.default);
	};

/***/ }),
/* 139 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ManageUsersService = function () {
	  ManageUsersService.$inject = ["$resource"];
	  function ManageUsersService($resource) {
	    'ngInject';
	
	    _classCallCheck(this, ManageUsersService);
	
	    this.$resource = $resource;
	    this.getUsers();
	  }
	
	  _createClass(ManageUsersService, [{
	    key: 'getUsers',
	    value: function getUsers() {
	      this.users = this.$resource('/manageUsers/getAllUsersForAdmin', {}, {
	        getAll: {
	          method: 'GET',
	          isArray: true,
	          headers: {
	            'Cache-Control': 'no-cache, no-store',
	            Pragma: 'no-cache'
	          }
	        }
	      });
	    }
	  }, {
	    key: 'getAll',
	    value: function getAll() {
	      return this.users.getAll();
	    }
	  }]);
	
	  return ManageUsersService;
	}();
	
	exports.default = ManageUsersService;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _conference = __webpack_require__(141);
	
	var _conference2 = _interopRequireDefault(_conference);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.service('Conference', _conference2.default);
	};

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["$resource"];
	  function _class($resource) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.res = $resource('/conference');
	
	    this.resUpcoming = $resource('/conference/upcoming', {}, {
	      getAll: {
	        method: 'GET',
	        isArray: true,
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      }
	    });
	
	    this.resPast = $resource('/conference/past', {}, {
	      getAll: {
	        method: 'GET',
	        isArray: true,
	        headers: {
	          'Cache-Control': 'no-cache, no-store',
	          Pragma: 'no-cache'
	        }
	      }
	    });
	  }
	
	  _createClass(_class, [{
	    key: 'getUpcoming',
	    value: function getUpcoming() {
	      return this.resUpcoming.getAll();
	    }
	  }, {
	    key: 'getPast',
	    value: function getPast() {
	      return this.resPast.getAll();
	    }
	  }, {
	    key: 'save',
	    value: function save(confObj, successCallback) {
	      this.res.save(confObj, function (result) {
	        successCallback(result);
	      });
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _topic = __webpack_require__(143);
	
	var _topic2 = _interopRequireDefault(_topic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.service('Topic', _topic2.default);
	};

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["$resource"];
	  function _class($resource) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.res = $resource('/topics');
	    this.resForTalksPage = $resource('/topics');
	  }
	
	  _createClass(_class, [{
	    key: 'query',
	    value: function query() {
	      return this.res.query();
	    }
	  }, {
	    key: 'queryForTalkPage',
	    value: function queryForTalkPage() {
	      return this.resForTalksPage.query();
	    }
	  }, {
	    key: 'save',
	    value: function save(name, successCallback) {
	      return $resource('/topic').save({ name: name }, function () {
	        successCallback();
	      });
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _type = __webpack_require__(145);
	
	var _type2 = _interopRequireDefault(_type);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.service('Type', _type2.default);
	};

/***/ }),
/* 145 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["$resource"];
	  function _class($resource) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.res = $resource('/types');
	    this.resForTalksPage = $resource('/types ');
	  }
	
	  _createClass(_class, [{
	    key: 'query',
	    value: function query() {
	      return this.res.query();
	    }
	  }, {
	    key: 'queryForTalkPage',
	    value: function queryForTalkPage() {
	      return this.resForTalksPage.query();
	    }
	  }, {
	    key: 'save',
	    value: function save(name, successCallback) {
	      return $resource('/type').save({ name: name }, function () {
	        successCallback();
	      });
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _level = __webpack_require__(147);
	
	var _level2 = _interopRequireDefault(_level);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.service('Level', _level2.default);
	};

/***/ }),
/* 147 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["$resource"];
	  function _class($resource) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.res = $resource('/levels');
	    this.resForTalksPage = $resource('/levels');
	  }
	
	  _createClass(_class, [{
	    key: 'query',
	    value: function query() {
	      return this.res.query();
	    }
	  }, {
	    key: 'queryForTalkPage',
	    value: function queryForTalkPage() {
	      return this.resForTalksPage.query();
	    }
	  }, {
	    key: 'save',
	    value: function save(name) {
	      return $resource('/level').save(name);
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _language = __webpack_require__(149);
	
	var _language2 = _interopRequireDefault(_language);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.service('Language', _language2.default);
	};

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _class = function () {
	  _class.$inject = ["$resource"];
	  function _class($resource) {
	    'ngInject';
	
	    _classCallCheck(this, _class);
	
	    this.res = $resource('/languages');
	    this.resForTalksPage = $resource('/languages');
	  }
	
	  _createClass(_class, [{
	    key: 'query',
	    value: function query() {
	      return this.res.query();
	    }
	  }, {
	    key: 'queryForTalkPage',
	    value: function queryForTalkPage() {
	      return this.resForTalksPage.query();
	    }
	  }, {
	    key: 'save',
	    value: function save(name) {
	      return $resource('/lang').save(name);
	    }
	  }]);
	
	  return _class;
	}();
	
	exports.default = _class;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _role = __webpack_require__(151);
	
	var _role2 = _interopRequireDefault(_role);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  (function includeAllModulesGlobalFn(modulesArray, application) {
	        modulesArray.forEach(function executeModuleIncludesFn(moduleFn) {
	          moduleFn(application);
	        });
	      })([_role2.default], app);
	};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _role = __webpack_require__(152);
	
	var _role2 = _interopRequireDefault(_role);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.filter('roleFilter', _role2.default);
	};

/***/ }),
/* 152 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  function roleFilter(input) {
	    if (input.indexOf('ROLE_ADMIN') !== -1) {
	      return 'Admin';
	    }
	
	    if (input.indexOf('ROLE_SPEAKER') !== -1) {
	      return 'Speaker';
	    }
	
	    if (input.indexOf('ROLE_ORGANISER') !== -1) {
	      return 'Organiser';
	    }
	
	    return false; // consistent return
	  }
	
	  return roleFilter;
	};

/***/ }),
/* 153 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (app) {
	  app.run(["$rootScope", function ($rootScope) {
	    'ngInject';
	
	    $rootScope.$on('$stateChangeSuccess', function () {
	      $rootScope.$broadcast('closeDropdown');
	    });
	  }]).config(["$mdThemingProvider", "$mdDateLocaleProvider", "$httpProvider", function ($mdThemingProvider, $mdDateLocaleProvider, $httpProvider) {
	    'ngInject';
	
	    $httpProvider.interceptors.push('tokenInjector');
	    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	    $mdThemingProvider.disableTheming();
	    $mdDateLocaleProvider.formatDate = function (date) {
	      if (!date) {
	        return '';
	      }
	      return date.toLocaleString('es', { day: '2-digit', month: '2-digit', year: 'numeric' });
	    };
	  }]);
	};

/***/ }),
/* 154 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map