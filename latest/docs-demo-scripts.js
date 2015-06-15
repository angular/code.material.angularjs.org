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
          'name'      : 'Angular 1',
          'url'       : 'https://github.com/angular/angular.js',
          'watchers'  : '3,623',
          'forks'     : '16,175',
        },
        {
          'name'      : 'Angular 2',
          'url'       : 'https://github.com/angular/angular',
          'watchers'  : '469',
          'forks'     : '760',
        },
        {
          'name'      : 'Angular Material',
          'url'       : 'https://github.com/angular/material',
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
      var results = query ? self.states.filter( createFilterFor(query) ) : [];
      return results;
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


angular.module('buttonsDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;

  $scope.googleUrl = 'http://google.com';

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
.controller('BottomSheetExample', function($scope, $timeout, $mdBottomSheet) {
  $scope.alert = '';

  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'bottom-sheet-list-template.html',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };

  $scope.showGridBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      templateUrl: 'bottom-sheet-grid-template.html',
      controller: 'GridBottomSheetCtrl',
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
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
.run(function($http, $templateCache) {

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
      $http.get(url, {cache: $templateCache});
    });

  });


angular.module('checkboxDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {

    $scope.items = [1,2,3,4,5];
      $scope.selected = [];

      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) list.splice(idx, 1);
        else list.push(item);
      };

      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
});

(function () {
  'use strict';
  angular
      .module('chipsDemo', ['ngMaterial'])
      .controller('BasicDemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q) {
    var self = this;

    self.readonly = false;

    // Lists of fruit names and Vegetable objects
    self.fruitNames = ['Apple', 'Banana', 'Orange'];
    self.roFruitNames = angular.copy(self.fruitNames);
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


angular.module('cardDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {
  $scope.imagePath = 'img/washedout.png';
});

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
      .module('contactChipsDemo', ['ngMaterial'])
      .controller('ContactChipDemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q) {
    var self = this;

    self.querySearch = querySearch;
    self.allContacts = loadContacts();
    self.contacts = [self.allContacts[0]];
    self.filterSelected = true;

    /**
     * Search for contacts.
     */
    function querySearch (query) {
      var results = query ?
          self.allContacts.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(contact) {
        return (contact._lowername.indexOf(lowercaseQuery) != -1);;
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
        var contact = {
          name: c,
          email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase() + '@example.com',
          image: 'http://lorempixel.com/50/50/people?' + index
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
      .module('staticChipsDemo', ['ngMaterial'])
      .controller('DemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q) {
    this.chipText = 'Football';
  }
})();


angular.module('contentDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {

});

angular.module('dialogDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope, $mdDialog) {
  $scope.alert = '';

  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.body))
        .title('This is an alert title')
        .content('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .parent(angular.element(document.body))
      .title('Would you like to delete your debt?')
      .content('All of the banks have agreed to forgive you your debts.')
      .ariaLabel('Lucky day')
      .ok('Please do it!')
      .cancel('Sounds like a scam')
      .targetEvent(ev);

    $mdDialog.show(confirm).then(function() {
      $scope.alert = 'You decided to get rid of your debt.';
    }, function() {
      $scope.alert = 'You decided to keep your debt.';
    });
  };

  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.alert = 'You cancelled the dialog.';
    });
  };
});

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
.controller('AppCtrl', function($scope) {});


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

(function() {
  'use strict';

  angular.module('fabSpeedDialBasicUsageDemo', ['ngMaterial'])
    .controller('AppCtrl', function($scope) {
      $scope.demo = {
        topDirections: ['left', 'up'],
        bottomDirections: ['down', 'right'],

        isOpen: false,

        availableModes: ['md-fling', 'md-scale'],
        selectedMode: 'md-fling',

        availableDirections: ['up', 'down', 'left', 'right'],
        selectedDirection: 'up'
      };
    });
})();


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
        {size:21,padding:2},
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

(function() {
  'use strict';

  angular.module('fabToolbarBasicUsageDemo', ['ngMaterial'])
    .controller('AppCtrl', function($scope) {
      $scope.isOpen = false;

      $scope.demo = {
        isOpen: false,
        count: 0,
        selectedAlignment: 'md-left'
      };
    });
})();

angular.module('appDemoSvgIcons', ['ngMaterial'])
.controller('DemoCtrl', function( $scope ) {

    $scope.insertDriveIconURL = 'img/icons/ic_insert_drive_file_24px.svg';
    $scope.getAndroid = function() {
      return 'img/icons/android.svg';
    }
});


angular.module('appSvgIconSets', ['ngMaterial'])
  .controller('DemoCtrl', function($scope) {})
  .config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
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


angular.module('listDemo1', ['ngMaterial'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
})
.controller('AppCtrl', function($scope) {
    var imagePath = 'img/list/60.jpeg';

    $scope.phones = [
      { type: 'Home', number: '(555) 251-1234' },
      { type: 'Cell', number: '(555) 786-9841' },
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
        .content('Inspect ' + person)
        .ariaLabel('Person inspect demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

  $scope.navigateTo = function(to, event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Navigating')
        .content('Imagine being taken to ' + to)
        .ariaLabel('Navigation demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

  $scope.doSecondaryAction = function(event) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Secondary Action')
        .content('Secondary actions can be used for one click actions')
        .ariaLabel('Secondary click demo')
        .ok('Neat!')
        .targetEvent(event)
    );
  };

});

angular
  .module('inputBasicDemo', ['ngMaterial', 'ngMessages'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '' ,
      company: 'Google' ,
      address: '1600 Amphitheatre Pkwy' ,
      city: 'Mountain View' ,
      state: 'CA' ,
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode : '94043'
    };
  })
  .config( function($mdThemingProvider){

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
        .primaryPalette('yellow')
        .dark();

  });

angular.module('inputErrorsApp', ['ngMaterial', 'ngMessages'])

.controller('AppCtrl', function($scope) {
  $scope.project = {
    description: 'Nuclear Missile Defense System',
    rate: 500
  };
});

angular
  .module('inputIconDemo', ['ngMaterial', 'ngMessages'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Mountain View, CA'
    };
  });


angular.module('appUsingTemplateCache', ['ngMaterial'])
  .controller('DemoCtrl', function($scope) {})
  .config(function($mdIconProvider) {

    // Register icon IDs with sources. Future $mdIcon( <id> ) lookups
    // will load by url and retrieve the data via the $http and $templateCache

    $mdIconProvider
      .iconSet('core', 'img/icons/sets/core-icons.svg',24)
      .icon('social:cake', 'img/icons/cake.svg',24);

  })
  .run(function($http, $templateCache) {

    var urls = [
      'img/icons/sets/core-icons.svg',
      'img/icons/cake.svg',
      'img/icons/android.svg'
    ];

    // Pre-fetch icons sources by URL and cache in the $templateCache...
    // subsequent $http calls will look there first.

    angular.forEach(urls, function(url) {
      $http.get(url, {cache: $templateCache});
    });

  })
  ;

angular.module('menuDemoBasic', ['ngMaterial'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
    .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
})
.controller('BasicDemoCtrl', DemoCtrl);

function DemoCtrl($mdDialog) {
  var vm = this;
  vm.notificationsEnabled = true;
  vm.toggleNotifications = function() {
    vm.notificationsEnabled = !vm.notificationsEnabled;
  };

  vm.redial = function(e) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('Suddenly, a redial')
        .content('You just called someone back. They told you the most amazing story that has ever been told. Have a cookie.')
        .ok('That was easy')
    );
  };

  vm.checkVoicemail = function() {
    // This never happens.
  };
}

angular.module('menuDemoPosition', ['ngMaterial'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
    .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
})
.controller('PositionDemoCtrl', DemoCtrl);

function DemoCtrl($mdDialog) {
  var vm = this;

  this.announceClick = function(index) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('You clicked!')
        .content('You clicked the menu item at index ' + index)
        .ok('Nice')
    );
  };
}



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

angular.module('menuDemoWidth', ['ngMaterial'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
    .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
})
.controller('WidthDemoCtrl', DemoCtrl);

function DemoCtrl($mdDialog) {
  var vm = this;

  this.announceClick = function(index) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('You clicked!')
        .content('You clicked the menu item at index ' + index)
        .ok('Nice')
    );
  };
}


angular.module('selectDemoOptionsAsync', ['ngMaterial'])
.controller('SelectAsyncController', function($timeout, $scope) {

  $scope.loadUsers = function() {
    // Use timeout to simulate a 650ms request.
    $scope.users = [];
    return $timeout(function() {
      $scope.users = [
        { id: 1, name: 'Scooby Doo' },
        { id: 2, name: 'Shaggy Rodgers' },
        { id: 3, name: 'Fred Jones' },
        { id: 4, name: 'Daphne Blake' },
        { id: 5, name: 'Velma Dinkley' },
      ];
    }, 650);
  };
});

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
    });

angular.module('selectDemoValidation', ['ngMaterial', 'ngMessages'])
.controller('AppCtrl', function($scope) {
  $scope.clearValue = function() {
    $scope.myModel = undefined;
  };
  $scope.save = function() {
    alert('Form was valid!');
  };
});

angular.module('progressLinearDemo1', ['ngMaterial'])
  .config(function($mdThemingProvider) {
  })
  .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
    $scope.mode = 'query';
    $scope.determinateValue = 30;
    $scope.determinateValue2 = 30;

    $interval(function() {
      $scope.determinateValue += 1;
      $scope.determinateValue2 += 1.5;
      if ($scope.determinateValue > 100) {
        $scope.determinateValue = 30;
        $scope.determinateValue2 = 30;
      }
    }, 100, 0, true);

    $interval(function() {
      $scope.mode = ($scope.mode == 'query' ? 'determinate' : 'query');
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


angular.module('sliderDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {

  $scope.color = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255)
  };

  $scope.rating1 = 3;
  $scope.rating2 = 2;
  $scope.rating3 = 4;

  $scope.disabled1 = 0;
  $scope.disabled2 = 70;

});

angular.module('progressCircularDemo1', ['ngMaterial'])
  .controller('AppCtrl', ['$scope', '$interval',
    function($scope, $interval) {
      $scope.mode = 'query';
      $scope.determinateValue = 30;

      $interval(function() {
        $scope.determinateValue += 1;
        if ($scope.determinateValue > 100) {
          $scope.determinateValue = 30;
        }
      }, 100, 0, true);
    }
  ]);


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

angular.module('switchDemo1', ['ngMaterial'])
.controller('SwitchDemoCtrl', function($scope) {
  $scope.data = {
    cb1: true,
    cb4: true,
    cb5: false
  };

  $scope.onChange = function(cbState) {
  	$scope.message = "The switch is now: " + cbState;
  };
});

angular.module('demoSwipe', ['ngMaterial'])
  .controller('demoSwipeCtrl', function($scope) {
    $scope.onSwipeLeft = function(ev) {
      alert('You swiped left!!');
    };

    $scope.onSwipeRight = function(ev) {
      alert('You swiped right!!');
    };
  });

(function () {
  'use strict';
  angular
      .module('tabsDemoDynamicTabs', ['ngMaterial'])
      .controller('AppCtrl', AppCtrl);

  function AppCtrl ($scope, $log) {
    var tabs = [
          { title: 'One', content: "Tabs will become paginated if there isn't enough room for them."},
          { title: 'Two', content: "You can swipe left and right on a mobile device to change tabs."},
          { title: 'Three', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
          { title: 'Four', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
          { title: 'Five', content: "If you remove a tab, it will try to select a new one."},
          { title: 'Six', content: "There's an ink bar that follows the selected tab, you can turn it off if you want."},
          { title: 'Seven', content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab."},
          { title: 'Eight', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!"},
          { title: 'Nine', content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs."},
          { title: 'Ten', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 2;
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


angular
  .module('sidenavDemo1', ['ngMaterial'])
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },300);

      return debounceFn;
    }

  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });

(function () {
  'use strict';
  angular.module('tabsDemo1', ['ngMaterial'] ).controller('AppCtrl', AppCtrl);
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

angular.module('tooltipDemo1', ['ngMaterial'])
.controller('AppCtrl', function($scope) {
  $scope.demo = {};
});


angular.module('toastDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope, $mdToast, $animate) {

  $scope.toastPosition = {
    bottom: false,
    top: true,
    left: false,
    right: true
  };

  $scope.getToastPosition = function() {
    return Object.keys($scope.toastPosition)
      .filter(function(pos) { return $scope.toastPosition[pos]; })
      .join(' ');
  };

  $scope.showCustomToast = function() {
    $mdToast.show({
      controller: 'ToastCtrl',
      templateUrl: 'toast-template.html',
      hideDelay: 6000,
      position: $scope.getToastPosition()
    });
  };

  $scope.showSimpleToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .content('Simple Toast!')
        .position($scope.getToastPosition())
        .hideDelay(3000)
    );
  };

  $scope.showActionToast = function() {
    var toast = $mdToast.simple()
          .content('Action Toast!')
          .action('OK')
          .highlightAction(false)
          .position($scope.getToastPosition());

    $mdToast.show(toast).then(function() {
      alert('You clicked \'OK\'.');
    });
  };

})

.controller('ToastCtrl', function($scope, $mdToast) {
  $scope.closeToast = function() {
    $mdToast.hide();
  };
});


angular.module('toolbarDemo1', ['ngMaterial'])

.controller('AppCtrl', function($scope) {

});

var app = angular.module('toolbarDemo2', ['ngMaterial']);

app.controller('AppCtrl', function($scope) {
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

angular.module('whiteframeBasicUsage', ['ngMaterial']);
