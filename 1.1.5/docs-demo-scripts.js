(function () {
  'use strict';
  angular
      .module('autocompleteDemo', ['ngMaterial'])
      .controller('DemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q, $log) {
    var self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    self.newState = newState;

    function newState(state) {
      alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };

    }
  }
})();

(function () {
  'use strict';
  angular
      .module('autocompleteCustomTemplateDemo', ['ngMaterial'])
      .controller('DemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q, $log) {
    var self = this;

    self.simulateQuery = false;
    self.isDisabled    = false;

    self.repos         = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for repos... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `components` list of key/value pairs
     */
    function loadAll() {
      var repos = [
        {
          'name'      : 'AngularJS',
          'url'       : 'https://github.com/angular/angular.js',
          'watchers'  : '3,623',
          'forks'     : '16,175',
        },
        {
          'name'      : 'Angular',
          'url'       : 'https://github.com/angular/angular',
          'watchers'  : '469',
          'forks'     : '760',
        },
        {
          'name'      : 'AngularJS Material',
          'url'       : 'https://github.com/angular/material',
          'watchers'  : '727',
          'forks'     : '1,241',
        },
        {
          'name'      : 'Angular Material',
          'url'       : 'https://github.com/angular/material2',
          'watchers'  : '727',
          'forks'     : '1,241',
        },
        {
          'name'      : 'Bower Material',
          'url'       : 'https://github.com/angular/bower-material',
          'watchers'  : '42',
          'forks'     : '84',
        },
        {
          'name'      : 'Material Start',
          'url'       : 'https://github.com/angular/material-start',
          'watchers'  : '81',
          'forks'     : '303',
        }
      ];
      return repos.map( function (repo) {
        repo.value = repo.name.toLowerCase();
        return repo;
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(item) {
        return (item.value.indexOf(lowercaseQuery) === 0);
      };

    }
  }
})();

(function () {
  'use strict';
  angular
      .module('autocompleteFloatingLabelDemo', ['ngMaterial', 'ngMessages'])
      .controller('DemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q) {
    var self = this;

    // list of `state` value/display objects
    self.states        = loadAll();
    self.selectedItem  = null;
    self.searchText    = null;
    self.querySearch   = querySearch;

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };

    }
  }
})();

(function () {
  'use strict';
  angular
      .module('autocompleteDemoInsideDialog', ['ngMaterial'])
      .controller('DemoCtrl', DemoCtrl);

  function DemoCtrl($mdDialog) {
    var self = this;

    self.openDialog = function($event) {
      $mdDialog.show({
        controller: DialogCtrl,
        controllerAs: 'ctrl',
        templateUrl: 'dialog.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: $event,
        clickOutsideToClose:true
      })
    }
  }

  function DialogCtrl ($timeout, $q, $scope, $mdDialog) {
    var self = this;

    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;

    // ******************************
    // Template methods
    // ******************************

    self.cancel = function($event) {
      $mdDialog.cancel();
    };
    self.finish = function($event) {
      $mdDialog.hide();
    };

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      return query ? self.states.filter( createFilterFor(query) ) : self.states;
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };

    }
  }
})();

angular.module('bottomSheetDemo1', ['ngMaterial'])
.config(function($mdIconProvider) {
    $mdIconProvider
      .icon('share-arrow', 'img/icons/share-arrow.svg', 24)
      .icon('upload', 'img/icons/upload.svg', 24)
      .icon('copy', 'img/icons/copy.svg', 24)
      .icon('print', 'img/icons/print.svg', 24)
      .icon('hangout', 'img/icons/hangout.svg', 24)
      .icon('mail', 'img/icons/mail.svg', 24)
      .icon('message', 'img/icons/message.svg', 24)
      .icon('copy2', 'img/icons/copy2.svg', 24)
      .icon('facebook', 'img/icons/facebook.svg', 24)
      .icon('twitter', 'img/icons/twitter.svg', 24);
  })
.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet, $mdToast) {
  $scope.alert = '';

  $scope.showListBottomSheet = function() {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'bottom-sheet-list-template.html',
      controller: 'ListBottomSheetCtrl'
    }).then(function(clickedItem) {
      $scope.alert = clickedItem['name'] + ' clicked!';
    }).catch(function(error) {
      // User clicked outside or hit escape
    });
  };

  $scope.showGridBottomSheet = function() {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'bottom-sheet-grid-template.html',
      controller: 'GridBottomSheetCtrl',
      clickOutsideToClose: false
    }).then(function(clickedItem) {
      $mdToast.show(
            $mdToast.simple()
              .textContent(clickedItem['name'] + ' clicked!')
              .position('top right')
              .hideDelay(1500)
          );
    }).catch(function(error) {
      // User clicked outside or hit escape
    });
  };
})

.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {

  $scope.items = [
    { name: 'Share', icon: 'share-arrow' },
    { name: 'Upload', icon: 'upload' },
    { name: 'Copy', icon: 'copy' },
    { name: 'Print this page', icon: 'print' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
.controller('GridBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Hangout', icon: 'hangout' },
    { name: 'Mail', icon: 'mail' },
    { name: 'Message', icon: 'message' },
    { name: 'Copy', icon: 'copy2' },
    { name: 'Facebook', icon: 'facebook' },
    { name: 'Twitter', icon: 'twitter' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
})
.run(function($templateRequest) {

    var urls = [
      'img/icons/share-arrow.svg',
      'img/icons/upload.svg',
      'img/icons/copy.svg',
      'img/icons/print.svg',
      'img/icons/hangout.svg',
      'img/icons/mail.svg',
      'img/icons/message.svg',
      'img/icons/copy2.svg',
      'img/icons/facebook.svg',
      'img/icons/twitter.svg'
    ];

    angular.forEach(urls, function(url) {
      $templateRequest(url);
    });

  });


angular.module('buttonsDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;

  $scope.googleUrl = 'http://google.com';

});


angular.module('cardDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/washedout.png';
})
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
});


angular.module('cardDemo2', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/washedout.png';
});


angular.module('cardDemo3', ['ngMaterial'])

.config(['$mdIconProvider', function($mdIconProvider) {
  $mdIconProvider.icon('md-toggle-arrow', 'img/icons/toggle-arrow.svg', 48);
}])
.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/washedout.png';
});


angular.module('checkboxDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {

  $scope.data = {};
  $scope.data.cb1 = true;
  $scope.data.cb2 = false;
  $scope.data.cb3 = false;
  $scope.data.cb4 = false;
  $scope.data.cb5 = false;

});


angular.module('checkboxDemo3', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.items = [1,2,3,4,5];
  $scope.selected = [1];
  $scope.toggle = function (item, list) {
    var idx = list.indexOf(item);
    if (idx > -1) {
      list.splice(idx, 1);
    }
    else {
      list.push(item);
    }
  };

  $scope.exists = function (item, list) {
    return list.indexOf(item) > -1;
  };

  $scope.isIndeterminate = function() {
    return ($scope.selected.length !== 0 &&
        $scope.selected.length !== $scope.items.length);
  };

  $scope.isChecked = function() {
    return $scope.selected.length === $scope.items.length;
  };

  $scope.toggleAll = function() {
    if ($scope.selected.length === $scope.items.length) {
      $scope.selected = [];
    } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
      $scope.selected = $scope.items.slice(0);
    }
  };
});


angular.module('checkboxDemo2', ['ngMaterial'])

.controller('AppCtrl', function($scope) {

    $scope.items = [1,2,3,4,5];
      $scope.selected = [];

      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }
      };

      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
});

(function () {
  'use strict';
  angular
      .module('chipsDemo', ['ngMaterial', 'ngMessages'])
      .config(['$mdIconProvider', function($mdIconProvider) {
        $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);
      }])
      .controller('BasicDemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q) {
    var self = this;

    self.readonly = false;

    // Lists of fruit names and Vegetable objects
    self.fruitNames = ['Apple', 'Banana', 'Orange'];
    self.roFruitNames = angular.copy(self.fruitNames);
    self.editableFruitNames = angular.copy(self.fruitNames);

    self.tags = [];
    self.vegObjs = [
      {
        'name' : 'Broccoli',
        'type' : 'Brassica'
      },
      {
        'name' : 'Cabbage',
        'type' : 'Brassica'
      },
      {
        'name' : 'Carrot',
        'type' : 'Umbelliferous'
      }
    ];

    self.newVeg = function(chip) {
      return {
        name: chip,
        type: 'unknown'
      };
    };
  }
})();

(function () {
  'use strict';

  // If we do not have CryptoJS defined; import it
  if (typeof CryptoJS == 'undefined') {
    var cryptoSrc = '//cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js';
    var scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', cryptoSrc);
    document.body.appendChild(scriptTag);
  }

  angular
      .module('contactChipsDemo', ['ngMaterial'])
      .controller('ContactChipDemoCtrl', DemoCtrl);

  function DemoCtrl ($q, $timeout) {
    var self = this;
    var pendingSearch, cancelSearch = angular.noop;
    var lastSearch;

    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.asyncContacts = [];
    self.filterSelected = true;

    self.querySearch = querySearch;
    self.delayedQuerySearch = delayedQuerySearch;

    /**
     * Search for contacts; use a random delay to simulate a remote call
     */
    function querySearch (criteria) {
      return criteria ? self.allContacts.filter(createFilterFor(criteria)) : [];
    }

    /**
     * Async search for contacts
     * Also debounce the queries; since the md-contact-chips does not support this
     */
    function delayedQuerySearch(criteria) {
      if ( !pendingSearch || !debounceSearch() )  {
        cancelSearch();

        return pendingSearch = $q(function(resolve, reject) {
          // Simulate async search... (after debouncing)
          cancelSearch = reject;
          $timeout(function() {

            resolve( self.querySearch(criteria) );

            refreshDebounce();
          }, Math.random() * 500, true)
        });
      }

      return pendingSearch;
    }

    function refreshDebounce() {
      lastSearch = 0;
      pendingSearch = null;
      cancelSearch = angular.noop;
    }

    /**
     * Debounce if querying faster than 300ms
     */
    function debounceSearch() {
      var now = new Date().getMilliseconds();
      lastSearch = lastSearch || now;

      return ((now - lastSearch) < 300);
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);
      };

    }

    function loadContacts() {
      var contacts = [
        'Marina Augustine',
        'Oddr Sarno',
        'Nick Giannopoulos',
        'Narayana Garner',
        'Anita Gros',
        'Megan Smith',
        'Tsvetko Metzger',
        'Hector Simek',
        'Some-guy withalongalastaname'
      ];

      return contacts.map(function (c, index) {
        var cParts = c.split(' ');
        var email = cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com';
        var hash = CryptoJS.MD5(email);

        var contact = {
          name: c,
          email: email,
          image: '//www.gravatar.com/avatar/' + hash + '?s=50&d=retro'
        };
        contact._lowername = contact.name.toLowerCase();
        return contact;
      });
    }
  }


})();

(function () {
  'use strict';
  angular
      .module('chipsCustomInputDemo', ['ngMaterial'])
      .controller('CustomInputDemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q) {
    var self = this;

    self.readonly = false;
    self.selectedItem = null;
    self.searchText = null;
    self.querySearch = querySearch;
    self.vegetables = loadVegetables();
    self.selectedVegetables = [];
    self.numberChips = [];
    self.numberChips2 = [];
    self.numberBuffer = '';
    self.autocompleteDemoRequireMatch = true;
    self.transformChip = transformChip;

    /**
     * Return the proper object when the append is called.
     */
    function transformChip(chip) {
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }

      // Otherwise, create a new one
      return { name: chip, type: 'new' }
    }

    /**
     * Search for vegetables.
     */
    function querySearch (query) {
      var results = query ? self.vegetables.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(vegetable) {
        return (vegetable._lowername.indexOf(lowercaseQuery) === 0) ||
            (vegetable._lowertype.indexOf(lowercaseQuery) === 0);
      };

    }

    function loadVegetables() {
      var veggies = [
        {
          'name': 'Broccoli',
          'type': 'Brassica'
        },
        {
          'name': 'Cabbage',
          'type': 'Brassica'
        },
        {
          'name': 'Carrot',
          'type': 'Umbelliferous'
        },
        {
          'name': 'Lettuce',
          'type': 'Composite'
        },
        {
          'name': 'Spinach',
          'type': 'Goosefoot'
        }
      ];

      return veggies.map(function (veg) {
        veg._lowername = veg.name.toLowerCase();
        veg._lowertype = veg.type.toLowerCase();
        return veg;
      });
    }
  }
})();

(function () {
  'use strict';
  angular
      .module('chipsCustomSeparatorDemo', ['ngMaterial'])
      .controller('CustomSeparatorCtrl', DemoCtrl);

  function DemoCtrl ($mdConstant) {
    // Use common key codes found in $mdConstant.KEY_CODE...
    this.keys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA];
    this.tags = [];

    // Any key code can be used to create a custom separator
    var semicolon = 186;
    this.customKeys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, semicolon];
    this.contacts = ['test@example.com'];
  }
})();

(function () {
  'use strict';
  angular
      .module('staticChipsDemo', ['ngMaterial'])
      .controller('DemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q) {
    this.chipText = 'Football';
  }
})();

angular.module('colorsDemo', ['ngMaterial'])
  .config(function ($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('forest')
      .primaryPalette('brown')
      .accentPalette('green');

    $mdIconProvider
      .defaultIconSet('img/icons/sets/social-icons.svg', 24);
  })
  .directive('regularCard', function () {
    return {
      restrict: 'E',
      templateUrl: 'regularCard.tmpl.html',
      scope: {
        name: '@',
      }
    }
  })
  .directive('userCard', function () {
    return {
      restrict: 'E',
      templateUrl: 'userCard.tmpl.html',
      scope: {
        name: '@',
        theme: '@'
      },
      controller: function ($scope) {
        $scope.theme = $scope.theme || 'default';
      }
    }
  });

angular
  .module('colorsThemePickerDemo', ['ngMaterial'])
  .controller('ThemeDemoCtrl', function ($scope, $mdColorPalette) {
    $scope.colors = Object.keys($mdColorPalette); 

    $scope.mdURL = 'https://material.google.com/style/color.html#color-color-palette';
    $scope.primary = 'purple';
    $scope.accent = 'green';

    $scope.isPrimary = true;

    $scope.selectTheme = function (color) {
      if ($scope.isPrimary) {
        $scope.primary = color;

        $scope.isPrimary = false;
      }
      else {
        $scope.accent = color;

        $scope.isPrimary = true;
      }
    };
  })
  .directive('themePreview', function () {
    return {
      restrict: 'E',
      templateUrl: 'themePreview.tmpl.html',
      scope: {
        primary: '=',
        accent: '='
      },
      controller: function ($scope, $mdColors, $mdColorUtil) {
        $scope.getColor = function (color) {
          return $mdColorUtil.rgbaToHex($mdColors.getThemeColor(color))
        };
      }
    }
  })
  .directive('mdJustified', function() {
    return {
      restrict : 'A',
      compile : function(element, attrs)  {
        var layoutDirection = 'layout-'+ (attrs.mdJustified || "row");

        element.removeAttr('md-justified');
        element.addClass(layoutDirection);
        element.addClass("layout-align-space-between-stretch");

        return angular.noop;
      }
    };
  });


angular.module('contentDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {

});

angular.module('datepickerBasicUsage', ['ngMaterial', 'ngMessages']).controller('AppCtrl', function() {
  this.myDate = new Date();
  this.isOpen = false;
});

angular.module('datepickerValidations', ['ngMaterial', 'ngMessages']).controller('AppCtrl', function() {
  this.myDate = new Date();

  this.minDate = new Date(
    this.myDate.getFullYear(),
    this.myDate.getMonth() - 2,
    this.myDate.getDate()
  );

  this.maxDate = new Date(
    this.myDate.getFullYear(),
    this.myDate.getMonth() + 2,
    this.myDate.getDate()
  );

  this.onlyWeekendsPredicate = function(date) {
    var day = date.getDay();
    return day === 0 || day === 6;
  };
});

angular.module('dialogDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope, $mdDialog) {
  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Would you like to delete your debt?')
          .textContent('All of the banks have agreed to forgive you your debts.')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Please do it!')
          .cancel('Sounds like a scam');

    $mdDialog.show(confirm).then(function() {
      $scope.status = 'You decided to get rid of your debt.';
    }, function() {
      $scope.status = 'You decided to keep your debt.';
    });
  };

  $scope.showPrompt = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('What would you name your dog?')
      .textContent('Bowser is a common name.')
      .placeholder('Dog name')
      .ariaLabel('Dog name')
      .initialValue('Buddy')
      .targetEvent(ev)
      .required(true)
      .ok('Okay!')
      .cancel('I\'m a cat person');

    $mdDialog.show(confirm).then(function(result) {
      $scope.status = 'You decided to name your dog ' + result + '.';
    }, function() {
      $scope.status = 'You didn\'t name your dog.';
    });
  };

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  $scope.showTabDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'tabDialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
  };

  $scope.showPrerenderedDialog = function(ev) {
    $mdDialog.show({
      contentElement: '#myDialog',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
});

angular.module('dialogDemo2', ['ngMaterial'])

.controller('AppCtrl', function($scope, $mdDialog) {
  $scope.openFromLeft = function() {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Opening from the left')
        .textContent('Closing to the right!')
        .ariaLabel('Left to right demo')
        .ok('Nice!')
        // You can specify either sting with query selector
        .openFrom('#left')
        // or an element
        .closeTo(angular.element(document.querySelector('#right')))
    );
  };

  $scope.openOffscreen = function() {
    $mdDialog.show(
      $mdDialog.alert()
        .clickOutsideToClose(true)
        .title('Opening from offscreen')
        .textContent('Closing to offscreen')
        .ariaLabel('Offscreen Demo')
        .ok('Amazing!')
        // Or you can specify the rect to do the transition from
        .openFrom({
          top: -50,
          width: 30,
          height: 80
        })
        .closeTo({
          left: 1500
        })
    );
  };
});

angular.module('dialogDemo3', ['ngMaterial'])
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('red')
      .primaryPalette('red');

    $mdThemingProvider.theme('blue')
      .primaryPalette('blue');

  })
.controller('AppCtrl', function($scope, $mdDialog, $interval) {
  $scope.theme = 'red';

  var isThemeRed = true;

  $interval(function () {
    $scope.theme = isThemeRed ? 'blue' : 'red';

    isThemeRed = !isThemeRed;
  }, 2000);

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
});

angular.module('dividerDemo1', ['ngMaterial'])
  .controller('AppCtrl', function($scope) {
    var imagePath = 'img/list/60.jpeg';
    $scope.messages = [{
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face : imagePath,
      what: 'Brunch this weekend?',
      who: 'Min Li Chan',
      when: '3:08PM',
      notes: " I'll be in your neighborhood doing errands"
    }];
  });

(function() {
  'use strict';

  angular.module('fabSpeedDialDemoBasicUsage', ['ngMaterial'])
    .controller('DemoCtrl', function() {
      this.topDirections = ['left', 'up'];
      this.bottomDirections = ['down', 'right'];

      this.isOpen = false;

      this.availableModes = ['md-fling', 'md-scale'];
      this.selectedMode = 'md-fling';

      this.availableDirections = ['up', 'down', 'left', 'right'];
      this.selectedDirection = 'up';
    });
})();

(function() {
  'use strict';

  angular.module('fabSpeedDialDemoMoreOptions', ['ngMaterial'])
    .controller('DemoCtrl', function($scope, $mdDialog, $timeout) {
      var self = this;

      self.hidden = false;
      self.isOpen = false;
      self.hover = false;

      // On opening, add a delayed property which shows tooltips after the speed dial has opened
      // so that they have the proper position; if closing, immediately hide the tooltips
      $scope.$watch('demo.isOpen', function(isOpen) {
        if (isOpen) {
          $timeout(function() {
            $scope.tooltipVisible = self.isOpen;
          }, 600);
        } else {
          $scope.tooltipVisible = self.isOpen;
        }
      });

      self.items = [
        { name: "Twitter", icon: "img/icons/twitter.svg", direction: "bottom" },
        { name: "Facebook", icon: "img/icons/facebook.svg", direction: "top" },
        { name: "Google Hangout", icon: "img/icons/hangout.svg", direction: "bottom" }
      ];

      self.openDialog = function($event, item) {
        // Show the dialog
        $mdDialog.show({
          clickOutsideToClose: true,
          controller: function($mdDialog) {
            // Save the clicked item
            this.item = item;

            // Setup some handlers
            this.close = function() {
              $mdDialog.cancel();
            };
            this.submit = function() {
              $mdDialog.hide();
            };
          },
          controllerAs: 'dialog',
          templateUrl: 'dialog.html',
          targetEvent: $event
        });
      };
    });
})();

(function() {
  'use strict';

  angular.module('fabToolbarBasicUsageDemo', ['ngMaterial'])
    .controller('AppCtrl', function($scope) {
      $scope.isOpen = false;

      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'left'
      };
    });
})();

angular.module('gridListDemo1', ['ngMaterial'])
.controller('AppCtrl', function($scope) {});


angular
  .module('gridListDemoApp', ['ngMaterial'])
  .controller('gridListDemoCtrl', function($scope) {

    this.tiles = buildGridModel({
            icon : "avatar:svg-",
            title: "Svg-",
            background: ""
          });

    function buildGridModel(tileTmpl){
      var it, results = [ ];

      for (var j=0; j<11; j++) {

        it = angular.extend({},tileTmpl);
        it.icon  = it.icon + (j+1);
        it.title = it.title + (j+1);
        it.span  = { row : 1, col : 1 };

        switch(j+1) {
          case 1:
            it.background = "red";
            it.span.row = it.span.col = 2;
            break;

          case 2: it.background = "green";         break;
          case 3: it.background = "darkBlue";      break;
          case 4:
            it.background = "blue";
            it.span.col = 2;
            break;

          case 5:
            it.background = "yellow";
            it.span.row = it.span.col = 2;
            break;

          case 6: it.background = "pink";          break;
          case 7: it.background = "darkBlue";      break;
          case 8: it.background = "purple";        break;
          case 9: it.background = "deepBlue";      break;
          case 10: it.background = "lightPurple";  break;
          case 11: it.background = "yellow";       break;
        }

        results.push(it);
      }
      return results;
    }
  })
  .config( function( $mdIconProvider ){
    $mdIconProvider.iconSet("avatar", 'icons/avatar-icons.svg', 128);
  });


angular.module('gridListDemo1', ['ngMaterial'])
.controller('AppCtrl', function($scope) {
  var COLORS = ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c', '#ff8a80', '#ff5252', '#ff1744', '#d50000', '#f8bbd0', '#f48fb1', '#f06292', '#ec407a', '#e91e63', '#d81b60', '#c2185b', '#ad1457', '#880e4f', '#ff80ab', '#ff4081', '#f50057', '#c51162', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#4a148c', '#ea80fc', '#e040fb', '#d500f9', '#aa00ff', '#ede7f6', '#d1c4e9', '#b39ddb', '#9575cd', '#7e57c2', '#673ab7', '#5e35b1', '#4527a0', '#311b92', '#b388ff', '#7c4dff', '#651fff', '#6200ea', '#c5cae9', '#9fa8da', '#7986cb', '#5c6bc0', '#3f51b5', '#3949ab', '#303f9f', '#283593', '#1a237e', '#8c9eff', '#536dfe', '#3d5afe', '#304ffe', '#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1', '#82b1ff', '#448aff', '#2979ff', '#2962ff', '#b3e5fc', '#81d4fa', '#4fc3f7', '#29b6f6', '#03a9f4', '#039be5', '#0288d1', '#0277bd', '#01579b', '#80d8ff', '#40c4ff', '#00b0ff', '#0091ea', '#e0f7fa', '#b2ebf2', '#80deea', '#4dd0e1', '#26c6da', '#00bcd4', '#00acc1', '#0097a7', '#00838f', '#006064', '#84ffff', '#18ffff', '#00e5ff', '#00b8d4', '#e0f2f1', '#b2dfdb', '#80cbc4', '#4db6ac', '#26a69a', '#009688', '#00897b', '#00796b', '#00695c', '#a7ffeb', '#64ffda', '#1de9b6', '#00bfa5', '#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20', '#b9f6ca', '#69f0ae', '#00e676', '#00c853', '#f1f8e9', '#dcedc8', '#c5e1a5', '#aed581', '#9ccc65', '#8bc34a', '#7cb342', '#689f38', '#558b2f', '#33691e', '#ccff90', '#b2ff59', '#76ff03', '#64dd17', '#f9fbe7', '#f0f4c3', '#e6ee9c', '#dce775', '#d4e157', '#cddc39', '#c0ca33', '#afb42b', '#9e9d24', '#827717', '#f4ff81', '#eeff41', '#c6ff00', '#aeea00', '#fffde7', '#fff9c4', '#fff59d', '#fff176', '#ffee58', '#ffeb3b', '#fdd835', '#fbc02d', '#f9a825', '#f57f17', '#ffff8d', '#ffff00', '#ffea00', '#ffd600', '#fff8e1', '#ffecb3', '#ffe082', '#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffa000', '#ff8f00', '#ff6f00', '#ffe57f', '#ffd740', '#ffc400', '#ffab00', '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100', '#ffd180', '#ffab40', '#ff9100', '#ff6d00', '#fbe9e7', '#ffccbc', '#ffab91', '#ff8a65', '#ff7043', '#ff5722', '#f4511e', '#e64a19', '#d84315', '#bf360c', '#ff9e80', '#ff6e40', '#ff3d00', '#dd2c00', '#d7ccc8', '#bcaaa4', '#795548', '#d7ccc8', '#bcaaa4', '#8d6e63', '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c', '#607d8b', '#546e7a', '#cfd8dc', '#b0bec5', '#78909c'];

  this.colorTiles = (function() {
    var tiles = [];
    for (var i = 0; i < 46; i++) {
      tiles.push({
        color: randomColor(),
        colspan: randomSpan(),
        rowspan: randomSpan()
      });
    }
    return tiles;
  })();


  function randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  function randomSpan() {
    var r = Math.random();
    if (r < 0.8) {
      return 1;
    } else if (r < 0.9) {
      return 2;
    } else {
      return 3;
    }
  }
});


angular
  .module('appDemoFontIconsWithClassnames', ['ngMaterial'])
  .controller('DemoCtrl', function( $scope ) {
      // Create list of font-icon names with color overrides
      var iconData = [
            {name: 'icon-home'        , color: "#777" },
            {name: 'icon-user-plus'   , color: "rgb(89, 226, 168)" },
            {name: 'icon-google-plus2', color: "#A00" },
            {name: 'icon-youtube4'    , color:"#00A" },
             // Use theming to color the font-icon
            {name: 'icon-settings'    , color:"#A00", theme:"md-warn md-hue-5"}
          ];

      // Create a set of sizes...
      $scope.sizes = [
        {size:48,padding:10},
        {size:36,padding:6},
        {size:24,padding:2},
        {size:12,padding:0}
      ];

      $scope.fonts = [].concat(iconData);



  })
  .config(function($mdThemingProvider){
    // Update the theme colors to use themes on font-icons
    $mdThemingProvider.theme('default')
          .primaryPalette("red")
          .accentPalette('green')
          .warnPalette('blue');
  });


angular
  .module('appDemoFontIconsWithLigatures', ['ngMaterial'])
  .controller('DemoCtrl', function( $scope ) {
      // Specify a list of font-icons with ligatures and color overrides
      var iconData = [
            {name: 'accessibility'  , color: "#777" },
            {name: 'question_answer', color: "rgb(89, 226, 168)" },
            {name: 'backup'         , color: "#A00" },
            {name: 'email'          , color: "#00A" }
          ];

      $scope.fonts = [].concat(iconData);

      // Create a set of sizes...
      $scope.sizes = [
        {size:"md-18",padding:0},
        {size:"md-24",padding:2},
        {size:"md-36",padding:6},
        {size:"md-48",padding:10}
      ];

  });


angular.module('appDemoSvgIcons', ['ngMaterial'])
.controller('DemoCtrl', function( $scope ) {

    $scope.insertDriveIconURL = 'img/icons/ic_insert_drive_file_24px.svg';
    $scope.getAndroid = function() {
      return 'img/icons/android.svg';
    };

    /* Returns base64 encoded SVG. */
    $scope.getAndroidEncoded = function() {
      return 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGcgaWQ9ImFuZHJvaWQiPjxwYXRoIGQ9Ik02IDE4YzAgLjU1LjQ1IDEgMSAxaDF2My41YzAgLjgzLjY3IDEuNSAxLjUgMS41czEuNS0uNjcgMS41LTEuNVYxOWgydjMuNWMwIC44My42NyAxLjUgMS41IDEuNXMxLjUtLjY3IDEuNS0xLjVWMTloMWMuNTUgMCAxLS40NSAxLTFWOEg2djEwek0zLjUgOEMyLjY3IDggMiA4LjY3IDIgOS41djdjMCAuODMuNjcgMS41IDEuNSAxLjVTNSAxNy4zMyA1IDE2LjV2LTdDNSA4LjY3IDQuMzMgOCAzLjUgOHptMTcgMGMtLjgzIDAtMS41LjY3LTEuNSAxLjV2N2MwIC44My42NyAxLjUgMS41IDEuNXMxLjUtLjY3IDEuNS0xLjV2LTdjMC0uODMtLjY3LTEuNS0xLjUtMS41em0tNC45Ny01Ljg0bDEuMy0xLjNjLjItLjIuMi0uNTEgMC0uNzEtLjItLjItLjUxLS4yLS43MSAwbC0xLjQ4IDEuNDhDMTMuODUgMS4yMyAxMi45NSAxIDEyIDFjLS45NiAwLTEuODYuMjMtMi42Ni42M0w3Ljg1LjE1Yy0uMi0uMi0uNTEtLjItLjcxIDAtLjIuMi0uMi41MSAwIC43MWwxLjMxIDEuMzFDNi45NyAzLjI2IDYgNS4wMSA2IDdoMTJjMC0xLjk5LS45Ny0zLjc1LTIuNDctNC44NHpNMTAgNUg5VjRoMXYxem01IDBoLTFWNGgxdjF6Ii8+PC9nPjwvc3ZnPg==';
    };

    /* Returns decoded SVG */
    $scope.getCartDecoded = function() {
      return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></g></svg>';
    }
});


angular.module('appSvgIconSets', ['ngMaterial'])
  .controller('DemoCtrl', function($scope) {})
  .config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  }]);


angular.module('appUsingTemplateCache', ['ngMaterial'])
  .controller('DemoCtrl', function($scope) {})
  .config(function($mdIconProvider) {

    // Register icon IDs with sources. Future $mdIcon( <id> ) lookups
    // will load by url and retrieve the data via the $templateRequest

    $mdIconProvider
      .iconSet('core', 'img/icons/sets/core-icons.svg',24)
      .icon('social:cake', 'img/icons/cake.svg',24);

  })
  .run(function($templateRequest) {

    var urls = [
      'img/icons/sets/core-icons.svg',
      'img/icons/cake.svg',
      'img/icons/android.svg'
    ];

    // Pre-fetch icons sources by URL and cache in the $templateCache...
    // subsequent $templateRequest calls will look there first.

    angular.forEach(urls, function(url) {
      $templateRequest(url);
    });

  })
  ;

angular
  .module('inputBasicDemo', ['ngMaterial', 'ngMessages'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode: '94043'
    };

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });
  })
  .config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });

angular.module('inputErrorsApp', ['ngMaterial', 'ngMessages'])

.controller('AppCtrl', function($scope) {
  $scope.project = {
    description: 'Nuclear Missile Defense System',
    rate: 500,
    special: true
  };
});

angular.module('inputErrorsAdvancedApp', ['ngMaterial', 'ngMessages'])

  .controller('AppCtrl', function($scope) {
    $scope.showHints = true;

    $scope.user = {
      name: "",
      email: "",
      social: "123456789",
      phone: "N/A"
    };
  });

angular
  .module('inputIconDemo', ['ngMaterial', 'ngMessages'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Mountain View, CA',
      donation: 19.99
    };
  });


angular.module('listDemo1', ['ngMaterial'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
})
.controller('AppCtrl', function($scope) {
    var imagePath = 'img/list/60.jpeg';

    $scope.phones = [
      {
        type: 'Home',
        number: '(555) 251-1234',
        options: {
          icon: 'communication:phone'
        }
      },
      {
        type: 'Cell',
        number: '(555) 786-9841',
        options: {
          icon: 'communication:phone',
          avatarIcon: true
        }
      },
      {
        type: 'Office',
        number: '(555) 314-1592',
        options: {
          face : imagePath
        }
      },
      {
        type: 'Offset',
        number: '(555) 192-2010',
        options: {
          offset: true,
          actionIcon: 'communication:phone'
        }
      }
    ];
    $scope.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
});

angular.module('listDemo2', ['ngMaterial'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
    .iconSet('device', 'img/icons/sets/device-icons.svg', 24)
    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24)
    .defaultIconSet('img/icons/sets/core-icons.svg', 24);
})
.controller('ListCtrl', function($scope, $mdDialog) {
  $scope.toppings = [
    { name: 'Pepperoni', wanted: true },
    { name: 'Sausage', wanted: false },
    { name: 'Black Olives', wanted: true },
    { name: 'Green Peppers', wanted: false }
  ];

  $scope.settings = [
    { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true },
    { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'device:bluetooth', enabled: false },
  ];

  $scope.messages = [
    {id: 1, title: "Message A", selected: false},
    {id: 2, title: "Message B", selected: true},
    {id: 3, title: "Message C", selected: true},
  ];

  $scope.people = [
    { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
    { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
    { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
  ];

  $scope.goToPerson = function(person, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .textContent('Inspect ' + person)
        .ariaLabel('Person inspect demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

  $scope.navigateTo = function(to, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .textContent('Imagine being taken to ' + to)
        .ariaLabel('Navigation demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

  $scope.doPrimaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Primary Action')
        .textContent('Primary actions can be used for one click actions')
        .ariaLabel('Primary click demo')
        .ok('Awesome!')
        .targetEvent(event)
    );
  };

  $scope.doSecondaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Secondary Action')
        .textContent('Secondary actions can be used for one click actions')
        .ariaLabel('Secondary click demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

});

angular
  .module('menuDemoBasic', ['ngMaterial'])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
      .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
  })
  .controller('BasicDemoCtrl', function DemoCtrl($mdDialog) {
    var originatorEv;

    this.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

    this.notificationsEnabled = true;
    this.toggleNotifications = function() {
      this.notificationsEnabled = !this.notificationsEnabled;
    };

    this.redial = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .targetEvent(originatorEv)
          .clickOutsideToClose(true)
          .parent('body')
          .title('Suddenly, a redial')
          .textContent('You just called a friend; who told you the most amazing story. Have a cookie!')
          .ok('That was easy')
      );

      originatorEv = null;
    };

    this.checkVoicemail = function() {
      // This never happens.
    };
  });

angular
  .module('menuDemoCustomTrigger', ['ngMaterial'])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('call', 'img/icons/sets/communication-icons.svg', 24);
  });

angular
  .module('menuDemoPosition', ['ngMaterial'])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
      .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
  })
  .controller('PositionDemoCtrl', function DemoCtrl($mdDialog) {
    var originatorEv;

    this.menuHref = "http://www.google.com/design/spec/components/menus.html#menus-specs";

    this.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

    this.announceClick = function(index) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('You clicked!')
          .textContent('You clicked the menu item at index ' + index)
          .ok('Nice')
          .targetEvent(originatorEv)
      );
      originatorEv = null;
    };
  });



angular.module('menuDemoWidth', ['ngMaterial']).config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
    .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
}).controller('WidthDemoCtrl', function($mdDialog) {
  var vm = this;

  this.announceClick = function(index) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('You clicked!')
        .textContent('You clicked the menu item at index ' + index)
        .ok('Nice')
    );
  };
});

angular
  .module('menuBarDemoBasic', ['ngMaterial'])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  })
  .filter('keyboardShortcut', function($window) {
    return function(str) {
      if (!str) return;
      var keys = str.split('-');
      var isOSX = /Mac OS X/.test($window.navigator.userAgent);

      var seperator = (!isOSX || keys.length > 2) ? '+' : '';

      var abbreviations = {
        M: isOSX ? '⌘' : 'Ctrl',
        A: isOSX ? 'Option' : 'Alt',
        S: 'Shift'
      };

      return keys.map(function(key, index) {
        var last = index == keys.length - 1;
        return last ? key : abbreviations[key];
      }).join(seperator);
    };
  })
  .controller('DemoBasicCtrl', function DemoCtrl($mdDialog) {
    this.settings = {
      printLayout: true,
      showRuler: true,
      showSpellingSuggestions: true,
      presentationMode: 'edit'
    };

    this.sampleAction = function(name, ev) {
      $mdDialog.show($mdDialog.alert()
        .title(name)
        .textContent('You triggered the "' + name + '" action')
        .ok('Great')
        .targetEvent(ev)
      );
    };
  });


(function() {
  'use strict';

  angular.module('navBarDemoBasicUsage', ['ngMaterial'])
      .controller('AppCtrl', AppCtrl);

  function AppCtrl($scope) {
    $scope.currentNavItem = 'page1';

    $scope.goto = function(page) {
      console.log("Goto " + page);
    }
  }
})();

(function() {
'use strict';

angular.module('panelDemo', ['ngMaterial'])
    .controller('BasicDemoCtrl', BasicDemoCtrl)
    .controller('PanelDialogCtrl', PanelDialogCtrl);


function BasicDemoCtrl($mdPanel) {
  this._mdPanel = $mdPanel;

  this.desserts = [
    'Apple Pie',
    'Donut',
    'Fudge',
    'Cupcake',
    'Ice Cream',
    'Tiramisu'
  ];

  this.selected = {favoriteDessert: 'Donut'};
  this.disableParentScroll = false;
}


BasicDemoCtrl.prototype.showDialog = function() {
  var position = this._mdPanel.newPanelPosition()
      .absolute()
      .center();

  var config = {
    attachTo: angular.element(document.body),
    controller: PanelDialogCtrl,
    controllerAs: 'ctrl',
    disableParentScroll: this.disableParentScroll,
    templateUrl: 'panel.tmpl.html',
    hasBackdrop: true,
    panelClass: 'demo-dialog-example',
    position: position,
    trapFocus: true,
    zIndex: 150,
    clickOutsideToClose: true,
    escapeToClose: true,
    focusOnOpen: true
  };

  this._mdPanel.open(config);
};


BasicDemoCtrl.prototype.showMenu = function(ev) {
  var position = this._mdPanel.newPanelPosition()
      .relativeTo('.demo-menu-open-button')
      .addPanelPosition(this._mdPanel.xPosition.ALIGN_START, this._mdPanel.yPosition.BELOW);

  var config = {
    attachTo: angular.element(document.body),
    controller: PanelMenuCtrl,
    controllerAs: 'ctrl',
    template:
        '<div class="demo-menu-example" ' +
        '     aria-label="Select your favorite dessert." ' +
        '     role="listbox">' +
        '  <div class="demo-menu-item" ' +
        '       ng-class="{selected : dessert == ctrl.favoriteDessert}" ' +
        '       aria-selected="{{dessert == ctrl.favoriteDessert}}" ' +
        '       tabindex="-1" ' +
        '       role="option" ' +
        '       ng-repeat="dessert in ctrl.desserts" ' +
        '       ng-click="ctrl.selectDessert(dessert)"' +
        '       ng-keydown="ctrl.onKeydown($event, dessert)">' +
        '    {{ dessert }} ' +
        '  </div>' +
        '</div>',
    panelClass: 'demo-menu-example',
    position: position,
    locals: {
      'selected': this.selected,
      'desserts': this.desserts
    },
    openFrom: ev,
    clickOutsideToClose: true,
    escapeToClose: true,
    focusOnOpen: false,
    zIndex: 2
  };

  this._mdPanel.open(config);
};


function PanelDialogCtrl(mdPanelRef) {
  this._mdPanelRef = mdPanelRef;
}


PanelDialogCtrl.prototype.closeDialog = function() {
  var panelRef = this._mdPanelRef;

  panelRef && panelRef.close().then(function() {
    angular.element(document.querySelector('.demo-dialog-open-button')).focus();
    panelRef.destroy();
  });
};



function PanelMenuCtrl(mdPanelRef, $timeout) {
  this._mdPanelRef = mdPanelRef;
  this.favoriteDessert = this.selected.favoriteDessert;
  $timeout(function() {
    var selected = document.querySelector('.demo-menu-item.selected');
    if (selected) {
      angular.element(selected).focus();
    } else {
      angular.element(document.querySelectorAll('.demo-menu-item')[0]).focus();
    }
  });
}


PanelMenuCtrl.prototype.selectDessert = function(dessert) {
  this.selected.favoriteDessert = dessert;
  this._mdPanelRef && this._mdPanelRef.close().then(function() {
    angular.element(document.querySelector('.demo-menu-open-button')).focus();
  });
};


PanelMenuCtrl.prototype.onKeydown = function($event, dessert) {
  var handled, els, index, prevIndex, nextIndex;
  switch ($event.which) {
    case 38: // Up Arrow.
      els = document.querySelectorAll('.demo-menu-item');
      index = indexOf(els, document.activeElement);
      prevIndex = (index + els.length - 1) % els.length;
      els[prevIndex].focus();
      handled = true;
      break;

    case 40: // Down Arrow.
      els = document.querySelectorAll('.demo-menu-item');
      index = indexOf(els, document.activeElement);
      nextIndex = (index + 1) % els.length;
      els[nextIndex].focus();
      handled = true;
      break;

    case 13: // Enter.
    case 32: // Space.
      this.selectDessert(dessert);
      handled = true;
      break;

    case 9: // Tab.
      this._mdPanelRef && this._mdPanelRef.close();
  }

  if (handled) {
    $event.preventDefault();
    $event.stopImmediatePropagation();
  }

  function indexOf(nodeList, element) {
    for (var item, i = 0; item = nodeList[i]; i++) {
      if (item === element) {
        return i;
      }
    }
    return -1;
  }
};

})();

(function() {
  'use strict';

  angular
    .module('panelGroupsDemo', ['ngMaterial'])
    .controller('PanelGroupsCtrl', PanelGroupsCtrl)
    .controller('PanelMenuCtrl', PanelMenuCtrl);

  function PanelGroupsCtrl($mdPanel) {
    this.settings = {
      name: 'settings',
      items: [
        'Home',
        'About',
        'Contact'
      ]
    };
    this.favorite = {
      name: 'favorite',
      items: [
        'Add to Favorites'
      ]
    };
    this.more = {
      name: 'more',
      items: [
        'Account',
        'Sign Out'
      ]
    };
    this.tools = {
      name: 'tools',
      items: [
        'Create',
        'Delete'
      ]
    };
    this.code = {
      name: 'code',
      items: [
        'See Source',
        'See Commits'
      ]
    };

    this.menuTemplate = '' +
        '<div class="menu-panel" md-whiteframe="4">' +
        '  <div class="menu-content">' +
        '    <div class="menu-item" ng-repeat="item in ctrl.items">' +
        '      <button class="md-button">' +
        '        <span>{{item}}</span>' +
        '      </button>' +
        '    </div>' +
        '    <md-divider></md-divider>' +
        '    <div class="menu-item">' +
        '      <button class="md-button" ng-click="ctrl.closeMenu()">' +
        '        <span>Close Menu</span>' +
        '      </button>' +
        '    </div>' +
        '  </div>' +
        '</div>';

    $mdPanel.newPanelGroup('toolbar', {
      maxOpen: 2
    });

    $mdPanel.newPanelGroup('menus', {
      maxOpen: 3
    });

    this.showToolbarMenu = function($event, menu) {
      var template = this.menuTemplate;

      var position = $mdPanel.newPanelPosition()
          .relativeTo($event.srcElement)
          .addPanelPosition(
            $mdPanel.xPosition.ALIGN_START,
            $mdPanel.yPosition.BELOW
          );

      var config = {
        id: 'toolbar_' + menu.name,
        attachTo: angular.element(document.body),
        controller: PanelMenuCtrl,
        controllerAs: 'ctrl',
        template: template,
        position: position,
        panelClass: 'menu-panel-container',
        locals: {
          items: menu.items
        },
        openFrom: $event,
        focusOnOpen: false,
        zIndex: 100,
        propagateContainerEvents: true,
        groupName: ['toolbar', 'menus']
      };

      $mdPanel.open(config);
    };

    this.showContentMenu = function($event, menu) {
      var template = this.menuTemplate;

      var position = $mdPanel.newPanelPosition()
          .relativeTo($event.srcElement)
          .addPanelPosition(
            $mdPanel.xPosition.ALIGN_START,
            $mdPanel.yPosition.BELOW
          );

      var config = {
        id: 'content_' + menu.name,
        attachTo: angular.element(document.body),
        controller: PanelMenuCtrl,
        controllerAs: 'ctrl',
        template: template,
        position: position,
        panelClass: 'menu-panel-container',
        locals: {
          items: menu.items
        },
        openFrom: $event,
        focusOnOpen: false,
        zIndex: 100,
        propagateContainerEvents: true,
        groupName: 'menus'
      };

      $mdPanel.open(config);
    };
  }

  function PanelMenuCtrl(mdPanelRef) {
    this.closeMenu = function() {
      mdPanelRef && mdPanelRef.close();
    }
  }
})();

(function() {
'use strict';

angular.module('panelAnimationsDemo', ['ngMaterial'])
    .controller('AnimationCtrl', AnimationCtrl)
    .controller('DialogCtrl', DialogCtrl);


function AnimationCtrl($mdPanel) {
  this._mdPanel = $mdPanel;
  this.openFrom = 'button';
  this.closeTo = 'button';
  this.animationType = 'scale';
  this.duration = 300;
  this.separateDurations = {
    open: this.duration,
    close: this.duration
  };
}


AnimationCtrl.prototype.showDialog = function() {
  var position = this._mdPanel.newPanelPosition()
      .absolute()
      .right()
      .top();

  var animation = this._mdPanel.newPanelAnimation();

  animation.duration(this.duration || this.separateDurations);

  switch(this.openFrom) {
    case 'button':
      animation.openFrom('.animation-target');
      break;
    case 'corner':
      animation.openFrom({top:0, left:0});
      break;
    case 'bottom':
      animation.openFrom({
        top: document.documentElement.clientHeight,
        left: document.documentElement.clientWidth / 2 - 250
      });
  }
  switch(this.closeTo) {
    case 'button':
      animation.closeTo('.animation-target');
      break;
    case 'corner':
      animation.closeTo({top:0, left:0});
      break;
    case 'bottom':
      animation.closeTo({
        top: document.documentElement.clientHeight,
        left: document.documentElement.clientWidth / 2 - 250
      });
  }

  switch(this.animationType) {
    case 'custom':
      animation.withAnimation({
        open: 'demo-dialog-custom-animation-open',
        close: 'demo-dialog-custom-animation-close'
      });
      break;
    case 'slide':
      animation.withAnimation(this._mdPanel.animation.SLIDE);
      break;
    case 'scale':
      animation.withAnimation(this._mdPanel.animation.SCALE);
      break;
    case 'fade':
      animation.withAnimation(this._mdPanel.animation.FADE);
      break;
    case 'none':
      animation = undefined;
      break;
  }

  var config = {
    animation: animation,
    attachTo: angular.element(document.body),
    controller: DialogCtrl,
    controllerAs: 'ctrl',
    templateUrl: 'panel.tmpl.html',
    panelClass: 'demo-dialog-example',
    position: position,
    trapFocus: true,
    zIndex: 150,
    clickOutsideToClose: true,
    clickEscapeToClose: true,
    hasBackdrop: true,
  };

  this._mdPanel.open(config);
};


// Necessary to pass locals to the dialog template.
function DialogCtrl(mdPanelRef) {
  this._mdPanelRef = mdPanelRef;
}

DialogCtrl.prototype.closeDialog = function() {
  this._mdPanelRef && this._mdPanelRef.close();
};

})();

(function() {
  'use strict';

  angular
      .module('panelProviderDemo', ['ngMaterial'])
      .config(PanelProviderConfig)
      .controller('PanelProviderCtrl', PanelProviderCtrl)
      .controller('PanelMenuCtrl', PanelMenuCtrl);

  /**
   * Configuration method that is used to define a preset for the upcoming panel
   * element. Each parameter in the preset is an available parameter in the
   * `$mdPanel.create` and `$mdPanel.open` methods. When the parameters are
   * defined here, they overwrite the default parameters for any panel that the
   * preset is requested for.
   * @param {!MdPanelProvider} $mdPanelProvider Provider method of the MdPanel
   *     API.
   */
  function PanelProviderConfig($mdPanelProvider) {
    $mdPanelProvider.definePreset('demoPreset', {
      attachTo: angular.element(document.body),
      controller: PanelMenuCtrl,
      controllerAs: 'ctrl',
      template: '' +
          '<div class="menu-panel" md-whiteframe="4">' +
          '  <div class="menu-content">' +
          '    <div class="menu-item" ng-repeat="item in ctrl.items">' +
          '      <button class="md-button">' +
          '        <span>{{item}}</span>' +
          '      </button>' +
          '    </div>' +
          '    <md-divider></md-divider>' +
          '    <div class="menu-item">' +
          '      <button class="md-button" ng-click="ctrl.closeMenu()">' +
          '        <span>Close Menu</span>' +
          '      </button>' +
          '    </div>' +
          '  </div>' +
          '</div>',
      panelClass: 'menu-panel-container',
      focusOnOpen: false,
      zIndex: 100,
      propagateContainerEvents: true,
      groupName: 'menus'
    });
  }

  function PanelProviderCtrl($mdPanel) {
    this.navigation = {
      name: 'navigation',
      items: [
        'Home',
        'About',
        'Contact'
      ]
    };
    this.favorites = {
      name: 'favorites',
      items: [
        'Add to Favorites'
      ]
    };
    this.more = {
      name: 'more',
      items: [
        'Account',
        'Sign Out'
      ]
    };

    $mdPanel.newPanelGroup('menus', {
      maxOpen: 2
    });

    this.showMenu = function($event, menu) {
      /**
       * The request to open the panel has two arguments passed into it. The
       * first is a preset name passed in as a string. This will request a
       * cached preset and apply its configuration parameters. The second is an
       * object containing parameters that can only be filled through a
       * controller. These parameters represent configuration needs associated
       * with user interaction, panel position, panel animation, and other
       * miscellaneous needs.
       */
      $mdPanel.open('demoPreset', {
        id: 'menu_' + menu.name,
        position: $mdPanel.newPanelPosition()
            .relativeTo($event.srcElement)
            .addPanelPosition(
              $mdPanel.xPosition.ALIGN_START,
              $mdPanel.yPosition.BELOW
            ),
        locals: {
          items: menu.items
        },
        openFrom: $event
      });
    };
  }

  function PanelMenuCtrl(mdPanelRef) {
    this.closeMenu = function() {
      mdPanelRef && mdPanelRef.close();
    };
  }
})();

angular
  .module('progressCircularDemo1', ['ngMaterial'], function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  })
  .controller('AppCtrl', ['$interval',
    function($interval) {
      var self = this;

      self.activated = true;
      self.determinateValue = 30;

      // Iterate every 100ms, non-stop and increment
      // the Determinate loader.
      $interval(function() {

        self.determinateValue += 1;
        if (self.determinateValue > 100) {
          self.determinateValue = 30;
        }

      }, 100);
    }
  ]);

angular.module('progressLinearDemo1', ['ngMaterial'])
  .config(function($mdThemingProvider) {
  })
  .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
    var self = this, j= 0, counter = 0;

    self.mode = 'query';
    self.activated = true;
    self.determinateValue = 30;
    self.determinateValue2 = 30;

    self.showList = [ ];

    /**
     * Turn off or on the 5 themed loaders
     */
    self.toggleActivation = function() {
        if ( !self.activated ) self.showList = [ ];
        if (  self.activated ) {
          j = counter = 0;
          self.determinateValue = 30;
          self.determinateValue2 = 30;
        }
    };

    $interval(function() {
      self.determinateValue += 1;
      self.determinateValue2 += 1.5;

      if (self.determinateValue > 100) self.determinateValue = 30;
      if (self.determinateValue2 > 100) self.determinateValue2 = 30;

        // Incrementally start animation the five (5) Indeterminate,
        // themed progress circular bars

        if ( (j < 2) && !self.showList[j] && self.activated ) {
          self.showList[j] = true;
        }
        if ( counter++ % 4 === 0 ) j++;

        // Show the indicator in the "Used within Containers" after 200ms delay
        if ( j == 2 ) self.contained = "indeterminate";

    }, 100, 0, true);

    $interval(function() {
      self.mode = (self.mode == 'query' ? 'determinate' : 'query');
    }, 7200, 0, true);
  }]);


angular
  .module('radioDemo1', ['ngMaterial'])
  .controller('AppCtrl', function($scope) {

    $scope.data = {
      group1 : 'Banana',
      group2 : '2',
      group3 : 'avatar-1'
    };

    $scope.avatarData = [{
        id: "avatars:svg-1",
        title: 'avatar 1',
        value: 'avatar-1'
      },{
        id: "avatars:svg-2",
        title: 'avatar 2',
        value: 'avatar-2'
      },{
        id: "avatars:svg-3",
        title: 'avatar 3',
        value: 'avatar-3'
    }];

    $scope.radioData = [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: '3', isDisabled: true },
      { label: '4', value: '4' }
    ];


    $scope.submit = function() {
      alert('submit');
    };

    $scope.addItem = function() {
      var r = Math.ceil(Math.random() * 1000);
      $scope.radioData.push({ label: r, value: r });
    };

    $scope.removeItem = function() {
      $scope.radioData.pop();
    };

  })
  .config(function($mdIconProvider) {
    $mdIconProvider.iconSet("avatars", 'icons/avatar-icons.svg',128);
  });

angular
  .module('radioDemo2', ['ngMaterial'])
  .controller('ContactController', function($scope, $filter) {
    var self = this;

    self.contacts = [{
      'id': 1,
      'fullName': 'Maria Guadalupe',
      'lastName': 'Guadalupe',
      'title': "CEO, Found"
    }, {
      'id': 2,
      'fullName': 'Gabriel García Marquéz',
      'lastName': 'Marquéz',
      'title': "VP Sales & Marketing"
    }, {
      'id': 3,
      'fullName': 'Miguel de Cervantes',
      'lastName': 'Cervantes',
      'title': "Manager, Operations"
    }, {
      'id': 4,
      'fullName': 'Pacorro de Castel',
      'lastName': 'Castel',
      'title': "Security"
    }];
    self.selectedId = 2;
    self.selectedUser = function() {
      return $filter('filter')(self.contacts, { id: self.selectedId })[0].lastName;
    };
  });

(function () {
  'use strict';
  angular
      .module('selectDemoBasic', ['ngMaterial'])
      .controller('AppCtrl', function() {
        this.userState = '';
        this.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) { return { abbrev: state }; });
      });
})();

angular
    .module('selectDemoOptGroups', ['ngMaterial'])
    .controller('SelectOptGroupController', function($scope) {
      $scope.sizes = [
          "small (12-inch)",
          "medium (14-inch)",
          "large (16-inch)",
          "insane (42-inch)"
      ];
      $scope.toppings = [
        { category: 'meat', name: 'Pepperoni' },
        { category: 'meat', name: 'Sausage' },
        { category: 'meat', name: 'Ground Beef' },
        { category: 'meat', name: 'Bacon' },
        { category: 'veg', name: 'Mushrooms' },
        { category: 'veg', name: 'Onion' },
        { category: 'veg', name: 'Green Pepper' },
        { category: 'veg', name: 'Green Olives' }
      ];
      $scope.selectedToppings = [];
      $scope.printSelectedToppings = function printSelectedToppings() {
        var numberOfToppings = this.selectedToppings.length;

        // If there is more than one topping, we add an 'and'
        // to be gramatically correct. If there are 3+ toppings
        // we also add an oxford comma.
        if (numberOfToppings > 1) {
          var needsOxfordComma = numberOfToppings > 2;
          var lastToppingConjunction = (needsOxfordComma ? ',' : '') + ' and ';
          var lastTopping = lastToppingConjunction +
              this.selectedToppings[this.selectedToppings.length - 1];
          return this.selectedToppings.slice(0, -1).join(', ') + lastTopping;
        }

        return this.selectedToppings.join('');
      };
    });

angular.module('selectDemoOptionsAsync', ['ngMaterial'])
.controller('SelectAsyncController', function($timeout, $scope) {
  $scope.user = null;
  $scope.users = null;

  $scope.loadUsers = function() {

    // Use timeout to simulate a 650ms request.
    return $timeout(function() {

      $scope.users =  $scope.users  || [
        { id: 1, name: 'Scooby Doo' },
        { id: 2, name: 'Shaggy Rodgers' },
        { id: 3, name: 'Fred Jones' },
        { id: 4, name: 'Daphne Blake' },
        { id: 5, name: 'Velma Dinkley' }
      ];

    }, 650);
  };
});

angular
    .module('selectDemoSelectHeader', ['ngMaterial'])
    .controller('SelectHeaderController', function($scope, $element) {
      $scope.vegetables = ['Corn' ,'Onions' ,'Kale' ,'Arugula' ,'Peas', 'Zucchini'];
      $scope.searchTerm;
      $scope.clearSearchTerm = function() {
        $scope.searchTerm = '';
      };
      // The md-select directive eats keydown events for some quick select
      // logic. Since we have a search input here, we don't need that logic.
      $element.find('input').on('keydown', function(ev) {
          ev.stopPropagation();
      });
    });

angular
    .module('selectDemoSelectedText', ['ngMaterial'])
    .controller('SelectedTextController', function($scope) {
      $scope.items = [1, 2, 3, 4, 5, 6, 7];
      $scope.selectedItem;
      $scope.getSelectedText = function() {
        if ($scope.selectedItem !== undefined) {
          return "You have selected: Item " + $scope.selectedItem;
        } else {
          return "Please select an item";
        }
      };
    });

angular.module('selectDemoValidation', ['ngMaterial', 'ngMessages'])
.controller('AppCtrl', function($scope) {
  $scope.clearValue = function() {
    $scope.quest = undefined;
    $scope.favoriteColor = undefined;
    $scope.myForm.$setPristine();
  };
  $scope.save = function() {
    if ($scope.myForm.$valid) {
      $scope.myForm.$setSubmitted();
      alert('Form was valid.');
    } else {
      alert('Form was invalid!');
    }
  };
});

angular
  .module('sidenavDemo1', ['ngMaterial'])
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      };
    }
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });

angular
  .module('sidenavDemo2', ['ngMaterial'])
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }
  });


angular.module('sliderDemo1', ['ngMaterial'])
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('device', 'img/icons/sets/device-icons.svg', 24);
  })
.controller('AppCtrl', function($scope) {

  $scope.color = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255)
  };

  $scope.rating1 = 3;
  $scope.rating2 = 2;
  $scope.rating3 = 4;

  $scope.disabled1 = Math.floor(Math.random() * 100);
  $scope.disabled2 = 0;
  $scope.disabled3 = 70;

  $scope.invert = Math.floor(Math.random() * 100);

  $scope.isDisabled = true;
});


angular.module('sliderDemo2', ['ngMaterial'])

.controller('AppCtrl', function($scope) {

  $scope.vol = Math.floor(Math.random() * 100);
  $scope.bass = Math.floor(Math.random() * 100);
  $scope.master = Math.floor(Math.random() * 100);
});


angular.module('subheaderBasicDemo', ['ngMaterial'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('purple');
})
.controller('SubheaderAppCtrl', function($scope) {
    var imagePath = 'img/list/60.jpeg';
    $scope.messages = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];
});

angular.module('demoSwipe', ['ngMaterial'])
  .controller('demoSwipeCtrl', function($scope) {
    $scope.onSwipeLeft = function(ev) {
      alert('You swiped left!!');
    };

    $scope.onSwipeRight = function(ev) {
      alert('You swiped right!!');
    };
    $scope.onSwipeUp = function(ev) {
      alert('You swiped up!!');
    };

    $scope.onSwipeDown = function(ev) {
      alert('You swiped down!!');
    };
  });

angular.module('switchDemo1', ['ngMaterial'])
.controller('SwitchDemoCtrl', function($scope) {
  $scope.data = {
    cb1: true,
    cb4: true,
    cb5: false
  };

  $scope.message = 'false';

  $scope.onChange = function(cbState) {
  	$scope.message = cbState;
  };
});

angular.module('tabsDemoDynamicHeight', ['ngMaterial']);
(function () {
  'use strict';
  angular
      .module('tabsDemoDynamicTabs', ['ngMaterial'])
      .controller('AppCtrl', AppCtrl);

  function AppCtrl ($scope, $log) {
    var tabs = [
        { title: 'Zero (AKA 0, Cero, One - One, -Nineteen + 19, and so forth and so on and continuing into what seems like infinity.)', content: 'Woah...that is a really long title!' },
        { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
        { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
        { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
        { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
        { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
        { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
        { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
        { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
        { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
        { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
        { title: 'Eleven', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
        { title: 'Twelve', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
        { title: 'Thirteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
        { title: 'Fourteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
        { title: 'Fifteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
        { title: 'Sixteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
        { title: 'Seventeen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
        { title: 'Eighteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
        { title: 'Nineteen', content: "If you're still reading this, you should just go check out the API docs for tabs!"},
        { title: 'Twenty', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
      ],
      selected = null,
      previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 0;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });
    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    };
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
  }
})();


(function () {
  'use strict';

  angular
      .module('tabsDemoIconTabs', ['ngMaterial'] )
      .config(function($mdIconProvider) {
        $mdIconProvider
          .iconSet('communication', 'img/icons/sets/communication-icons.svg')
          .icon('favorite', 'img/icons/favorite.svg');
      })
      .controller('AppCtrl', AppCtrl);

  function AppCtrl ( $scope ) {
    $scope.data = {
      selectedIndex: 0,
      secondLocked:  true,
      secondLabel:   "Item Two",
      bottom:        false
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
  }
})();


angular.module('toastDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope, $mdToast) {
  var last = {
      bottom: false,
      top: true,
      left: false,
      right: true
    };

  $scope.toastPosition = angular.extend({},last);

  $scope.getToastPosition = function() {
    sanitizePosition();

    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };

  function sanitizePosition() {
    var current = $scope.toastPosition;

    if ( current.bottom && last.top ) current.top = false;
    if ( current.top && last.bottom ) current.bottom = false;
    if ( current.right && last.left ) current.left = false;
    if ( current.left && last.right ) current.right = false;

    last = angular.extend({},current);
  }

  $scope.showSimpleToast = function() {
    var pinTo = $scope.getToastPosition();

    $mdToast.show(
      $mdToast.simple()
        .textContent('Simple Toast!')
        .position(pinTo )
        .hideDelay(3000)
    );
  };

  $scope.showActionToast = function() {
    var pinTo = $scope.getToastPosition();
    var toast = $mdToast.simple()
      .textContent('Marked as read')
      .action('UNDO')
      .highlightAction(true)
      .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
      .position(pinTo);

    $mdToast.show(toast).then(function(response) {
      if ( response == 'ok' ) {
        alert('You clicked the \'UNDO\' action.');
      }
    });
  };

})

.controller('ToastCtrl', function($scope, $mdToast) {
  $scope.closeToast = function() {
    $mdToast.hide();
  };
});

(function() {

  var isDlgOpen;

  angular
    .module('toastDemo2', ['ngMaterial'])
    .controller('AppCtrl', function($scope, $mdToast) {
      $scope.showCustomToast = function() {
        $mdToast.show({
          hideDelay   : 3000,
          position    : 'top right',
          controller  : 'ToastCtrl',
          templateUrl : 'toast-template.html'
        });
      };
    })
    .controller('ToastCtrl', function($scope, $mdToast, $mdDialog) {

      $scope.closeToast = function() {
        if (isDlgOpen) return;

        $mdToast
          .hide()
          .then(function() {
            isDlgOpen = false;
          });
      };

      $scope.openMoreInfo = function(e) {
        if ( isDlgOpen ) return;
        isDlgOpen = true;

        $mdDialog
          .show($mdDialog
            .alert()
            .title('More info goes here.')
            .textContent('Something witty.')
            .ariaLabel('More info')
            .ok('Got it')
            .targetEvent(e)
          )
          .then(function() {
            isDlgOpen = false;
          });
      };
    });

})();


angular.module('toolbarDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {

});

angular.module('toolbarDemo2', ['ngMaterial'])

.controller('TitleController', function($scope) {
  $scope.title = 'My App Title';
})
.controller('AppCtrl', function($scope) {
  var imagePath = 'img/list/60.jpeg';

  $scope.todos = [];
  for (var i = 0; i < 15; i++) {
    $scope.todos.push({
      face: imagePath,
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      notes: "I'll be in your neighborhood doing errands."
    });
  }
});

angular.module('tooltipDemo', ['ngMaterial'])
    .controller('AppCtrl', AppCtrl);

function AppCtrl($scope) {
  $scope.demo = {
    showTooltip: false,
    tipDirection: 'bottom'
  };

  $scope.demo.delayTooltip = undefined;
  $scope.$watch('demo.delayTooltip', function(val) {
    $scope.demo.delayTooltip = parseInt(val, 10) || 0;
  });
}

(function () {
  'use strict';

    angular
      .module('virtualRepeatDeferredLoadingDemo', ['ngMaterial'])
      .controller('AppCtrl', function($timeout) {

        // In this example, we set up our model using a class.
        // Using a plain object works too. All that matters
        // is that we implement getItemAtIndex and getLength.
        var DynamicItems = function() {
          /**
           * @type {!Object<?Array>} Data pages, keyed by page number (0-index).
           */
          this.loadedPages = {};

          /** @type {number} Total number of items. */
          this.numItems = 0;

          /** @const {number} Number of items to fetch per request. */
          this.PAGE_SIZE = 50;

          this.fetchNumItems_();
        };

        // Required.
        DynamicItems.prototype.getItemAtIndex = function(index) {
          var pageNumber = Math.floor(index / this.PAGE_SIZE);
          var page = this.loadedPages[pageNumber];

          if (page) {
            return page[index % this.PAGE_SIZE];
          } else if (page !== null) {
            this.fetchPage_(pageNumber);
          }
        };

        // Required.
        DynamicItems.prototype.getLength = function() {
          return this.numItems;
        };

        DynamicItems.prototype.fetchPage_ = function(pageNumber) {
          // Set the page to null so we know it is already being fetched.
          this.loadedPages[pageNumber] = null;

          // For demo purposes, we simulate loading more items with a timed
          // promise. In real code, this function would likely contain an
          // $http request.
          $timeout(angular.noop, 300).then(angular.bind(this, function() {
            this.loadedPages[pageNumber] = [];
            var pageOffset = pageNumber * this.PAGE_SIZE;
            for (var i = pageOffset; i < pageOffset + this.PAGE_SIZE; i++) {
              this.loadedPages[pageNumber].push(i);
            }
          }));
        };

        DynamicItems.prototype.fetchNumItems_ = function() {
          // For demo purposes, we simulate loading the item count with a timed
          // promise. In real code, this function would likely contain an
          // $http request.
          $timeout(angular.noop, 300).then(angular.bind(this, function() {
            this.numItems = 50000;
          }));
        };
        
        this.dynamicItems = new DynamicItems();
      });
})();

(function () {
  'use strict';

    angular
      .module('virtualRepeatHorizontalDemo', ['ngMaterial'])
      .controller('AppCtrl', function() {
        this.items = [];
        for (var i = 0; i < 1000; i++) {
          this.items.push(i);
        }
      });

})();

(function () {
  'use strict';

    angular
      .module('virtualRepeatInfiniteScrollDemo', ['ngMaterial'])
      .controller('AppCtrl', function($timeout) {

        // In this example, we set up our model using a plain object.
        // Using a class works too. All that matters is that we implement
        // getItemAtIndex and getLength.
        this.infiniteItems = {
          numLoaded_: 0,
          toLoad_: 0,

          // Required.
          getItemAtIndex: function(index) {
            if (index > this.numLoaded_) {
              this.fetchMoreItems_(index);
              return null;
            }

            return index;
          },

          // Required.
          // For infinite scroll behavior, we always return a slightly higher
          // number than the previously loaded items.
          getLength: function() {
            return this.numLoaded_ + 5;
          },

          fetchMoreItems_: function(index) {
            // For demo purposes, we simulate loading more items with a timed
            // promise. In real code, this function would likely contain an
            // $http request.

            if (this.toLoad_ < index) {
              this.toLoad_ += 20;
              $timeout(angular.noop, 300).then(angular.bind(this, function() {
                this.numLoaded_ = this.toLoad_;
              }));
            }
          }
        };
      });

})();

(function () {
  'use strict';

    angular
      .module('virtualRepeatScrollToDemo', ['ngMaterial'])
      .controller('AppCtrl', function($scope) {
        this.selectedYear = 0;
        this.years = [];
        this.items = [];
        var currentYear = new Date().getFullYear();
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'];
        // Build a list of months over 20 years
        for (var y = currentYear; y >= (currentYear-20); y--) {
          this.years.push(y);
          this.items.push({year: y, text: y, header: true});
          for (var m = 11; m >= 0; m--) {
            this.items.push({year: y, month: m, text: monthNames[m]});
          }
        }
        // Whenever a different year is selected, scroll to that year
        $scope.$watch('ctrl.selectedYear', angular.bind(this, function(yearIndex) {
          var scrollYear = Math.floor(this.topIndex / 13);
          if(scrollYear !== yearIndex) {
            this.topIndex = yearIndex * 13;
          }
        }));
        // The selected year should follow the year that is at the top of the scroll container
        $scope.$watch('ctrl.topIndex', angular.bind(this, function(topIndex) {
          var scrollYear = Math.floor(topIndex / 13);
          this.selectedYear = scrollYear;
        }));
      });

})();

(function () {
  'use strict';

    angular
      .module('virtualRepeatVerticalDemo', ['ngMaterial'])
      .controller('AppCtrl', function() {
        this.items = [];
        for (var i = 0; i < 1000; i++) {
          this.items.push(i);
        }
      });

})();

angular.module('whiteframeBasicUsage', ['ngMaterial']);

angular.module('whiteframeDirectiveUsage', ['ngMaterial']);

angular.module('whiteframeDirectiveUsage', ['ngMaterial'])
    .controller('DemoCtrl', function($interval) {
      this.elevation = 1;
      this.showFrame = 3;
      
      this.nextElevation = function() {
        if (++this.elevation == 25) {
          this.elevation = 1;
        }
      };

      $interval(this.nextElevation.bind(this), 500);
      
      this.toggleFrame = function() {
        this.showFrame = this.showFrame == 3 ? -1 : 3;
      };
    });
