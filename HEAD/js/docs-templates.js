angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/demo.tmpl.html',
    '<docs-demo\n' +
    '    ng-repeat="demo in demos"\n' +
    '    demo-id="{{demo.id}}"\n' +
    '    demo-title="{{demo.label}}"\n' +
    '    demo-module="{{demo.ngModule.module}}">\n' +
    '  <demo-file\n' +
    '      ng-repeat="file in demo.$files"\n' +
    '      name="{{file.name}}"\n' +
    '      contents="file.httpPromise"></demo-file>\n' +
    '</docs-demo>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/docs-demo.tmpl.html',
    '<div class="doc-demo-content doc-content">\n' +
    '  <div flex layout="column" style="z-index:1">\n' +
    '\n' +
    '    <div class="doc-description" ng-bind-html="demoCtrl.demoDescription.contents | toHtml"></div>\n' +
    '\n' +
    '    <div ng-transclude></div>\n' +
    '\n' +
    '    <section class="demo-container md-whiteframe-z1"\n' +
    '      ng-class="{\'show-source\': demoCtrl.$showSource}" >\n' +
    '\n' +
    '      <md-toolbar class="demo-toolbar md-primary">\n' +
    '        <div class="md-toolbar-tools">\n' +
    '          <h3>{{demoCtrl.demoTitle}}</h3>\n' +
    '          <span flex></span>\n' +
    '          <md-button\n' +
    '            class="md-icon-button"\n' +
    '            aria-label="View Source"\n' +
    '            ng-class="{ active: demoCtrl.$showSource }"\n' +
    '            ng-click="demoCtrl.$showSource = !demoCtrl.$showSource">\n' +
    '              <md-tooltip md-autohide>View Source</md-tooltip>\n' +
    '              <md-icon md-svg-src="img/icons/ic_code_24px.svg"></md-icon>\n' +
    '          </md-button>\n' +
    '          <md-button\n' +
    '              ng-hide="{{exampleNotEditable}}"\n' +
    '              hide-sm\n' +
    '              ng-click="demoCtrl.editOnCodepen()"\n' +
    '              aria-label="Edit on CodePen"\n' +
    '              class="md-icon-button">\n' +
    '            <md-tooltip md-autohide>Edit on CodePen</md-tooltip>\n' +
    '            <md-icon md-svg-src="img/icons/codepen-logo.svg"></md-icon>\n' +
    '          </md-button>\n' +
    '        </div>\n' +
    '      </md-toolbar>\n' +
    '\n' +
    '      <!-- Source views -->\n' +
    '      <md-tabs class="demo-source-tabs md-primary" ng-show="demoCtrl.$showSource" style="min-height: 0;">\n' +
    '        <md-tab ng-repeat="file in demoCtrl.orderedFiles" label="{{file.name}}">\n' +
    '          <md-content md-scroll-y class="demo-source-container">\n' +
    '            <hljs class="no-header" code="file.contentsPromise" lang="{{file.fileType}}" should-interpolate="demoCtrl.interpolateCode">\n' +
    '            </hljs>\n' +
    '          </md-content>\n' +
    '        </md-tab>\n' +
    '      </md-tabs>\n' +
    '\n' +
    '      <!-- Live Demos -->\n' +
    '      <demo-include files="demoCtrl.files" module="demoCtrl.demoModule" class="{{demoCtrl.demoId}}">\n' +
    '      </demo-include>\n' +
    '    </section>\n' +
    '\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/getting-started.tmpl.html',
    '<div ng-controller="GuideCtrl" class="doc-content">\n' +
    '  <md-content>\n' +
    '    <p><em>New to Angular.js? Before getting into Angular Material, it might be helpful to\n' +
    '      <a href="https://egghead.io/articles/new-to-angularjs-start-learning-here" target="_blank"\n' +
    '         title="Link opens in a new window">read about the framework</a>.</em></p>\n' +
    '\n' +
    '    <h2>How do I start?</h2>\n' +
    '    <ul style="margin-bottom: 2em;">\n' +
    '      <li><a href="http://codepen.io/collection/AxKKgY/" target="_blank"\n' +
    '             title="Link opens in a new window">Fork a Codepen</a></li>\n' +
    '      <li><a href="https://github.com/angular/material-start" target="_blank"\n' +
    '             title="Link opens in a new window">Clone a Github Starter Project</a></li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <h3>Including Angular Material and its dependencies</h3>\n' +
    '    <ul style="margin-bottom: 2em;">\n' +
    '      <li><a href="https://github.com/angular/material#bower">Using Bower</a></li>\n' +
    '      <li><a href="https://github.com/angular/material#cdn">Using a CDN</a> (example below)</li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <iframe height=\'272\' scrolling=\'no\' data-default-tab="html"\n' +
    '            src=\'//codepen.io/marcysutton/embed/OPbpKm?height=272&theme-id=11083\'\n' +
    '            frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>\n' +
    '      See the Pen <a href=\'http://codepen.io/marcysutton/pen/OPbpKm/\'>Angular Material Dependencies</a>\n' +
    '      on <a href=\'http://codepen.io\'>CodePen</a>.\n' +
    '    </iframe>\n' +
    '\n' +
    '    <md-divider></md-divider>\n' +
    '\n' +
    '    <h2>Contributing to Angular Material</h2>\n' +
    '    <ul style="margin-bottom: 2em;">\n' +
    '      <li>To contribute, fork our GitHub <a href="https://github.com/angular/material">repository</a>.</li>\n' +
    '      <li>Please read our <a href="https://github.com/angular/material#contributing">contributor guidelines</a>.</li>\n' +
    '      <li>For problems,\n' +
    '          <a href="https://github.com/angular/material/issues?q=is%3Aissue+is%3Aopen" target="_blank">\n' +
    '              search the issues\n' +
    '          </a> and/or\n' +
    '          <a href="https://github.com/angular/material/issues/new" target="_blank">\n' +
    '              create a new issue\n' +
    '          </a>.\n' +
    '      </li>\n' +
    '      <li>For questions,\n' +
    '          <a href="https://groups.google.com/forum/#!forum/ngmaterial" target="_blank">\n' +
    '              search the forum\n' +
    '          </a> and/or post a new message.\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '  </md-content>\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/home.tmpl.html',
    '<div ng-controller="HomeCtrl" class="doc-content">\n' +
    '  <md-content>\n' +
    '    <h2 class="md-headline" style="margin-top: 0;">What is Angular Material?</h2>\n' +
    '    <p>The Angular Material project is an implementation of Material Design in Angular.js. This project provides a set of reusable, well-tested, and accessible UI components based on the Material Design system.</p>\n' +
    '    <p>Similar to the\n' +
    '      <a href="http://www.polymer-project.org/">Polymer</a> project\'s\n' +
    '      <a href="http://www.polymer-project.org/docs/elements/paper-elements.html">Paper elements</a> collection, Angular Material is supported internally at Google by the Angular.js, Material Design UX and other product teams.\n' +
    '    </p>\n' +
    '    <ul class="buckets" layout layout-align="center center" layout-wrap>\n' +
    '      <li flex="25" flex-md="50" flex-sm="50" ng-repeat="(index, link) in [\n' +
    '        { href: \'getting-started\', icon: \'school\', text: \'Getting Started\' },\n' +
    '        { href: \'demo\', icon: \'play_circle_fill\', text: \'Demos\' },\n' +
    '        { href: \'CSS/typography\', icon: \'build\', text: \'Customization\' },\n' +
    '        { href: \'api\', icon: \'code\', text: \'API Reference\' }\n' +
    '      ]">\n' +
    '        <md-button\n' +
    '            class="md-primary md-raised"\n' +
    '            ng-href="#/{{link.href}}"\n' +
    '            aria-label="{{link.text}}">\n' +
    '          <md-icon class="block" md-svg-src="img/icons/ic_{{link.icon}}_24px.svg"></md-icon>\n' +
    '          {{link.text}}\n' +
    '        </md-button>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <br/>\n' +
    '    <h2 class="md-headline">What is Material Design?</h2>\n' +
    '    <p>\n' +
    '      Material Design is a specification for a\n' +
    '      unified system of visual, motion, and interaction design that adapts across different devices and different\n' +
    '      screen sizes.\n' +
    '    </p>\n' +
    '    <ul class="buckets" layout layout-align="center center" layout-wrap>\n' +
    '      <li flex="50" flex-md="100" flex-sm="100" ng-repeat="(index, link) in [\n' +
    '        { href: \'https://www.youtube.com/watch?v=Q8TXgCzxEnw\', icon: \'ondemand_video\', text: \'Watch a video about Material Design\' },\n' +
    '        { href: \'http://www.google.com/design/spec/material-design/\', icon: \'launch\', text: \'Learn more about Material Design\' }\n' +
    '      ]">\n' +
    '        <md-button\n' +
    '            class="md-primary md-raised"\n' +
    '            target="_blank"\n' +
    '            aria-label="{{link.text}}"\n' +
    '            ng-href="{{link.href}}">\n' +
    '          <md-icon class="block" md-svg-src="img/icons/ic_{{link.icon}}_24px.svg"></md-icon>\n' +
    '          {{link.text}}\n' +
    '        </md-button>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '\n' +
    '    <br/>\n' +
    '    <md-divider></md-divider>\n' +
    '    <p class="md-caption" style="text-align: center; margin-bottom: 0;">\n' +
    '      These docs were generated from\n' +
    '      (<a ng-href="{{BUILDCONFIG.repository}}/{{menu.version.current.github}}" target="_blank">v{{BUILDCONFIG.version}} - SHA {{BUILDCONFIG.commit.substring(0,7)}}</a>)\n' +
    '      on (<strong>{{BUILDCONFIG.date}}</strong>) GMT.\n' +
    '    </p>\n' +
    '  </md-content>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-alignment.tmpl.html',
    '<div ng-controller="LayoutCtrl" class="layout-content">\n' +
    '\n' +
    '  <p>\n' +
    '    The <code>layout-align</code> attribute takes two words.\n' +
    '    The first word says how the children will be aligned in the layout\'s direction, and the second word says how the children will be aligned perpendicular to the layout\'s direction.</p>\n' +
    '\n' +
    '    <p>Only one word is required for the attribute. For example, <code>layout="row" layout-align="center"</code> would make the elements center horizontally and use the default behavior vertically.</p>\n' +
    '\n' +
    '    <p><code>layout="column" layout-align="center end"</code> would make\n' +
    '    children align along the center vertically and along the end (right) horizontally.</p>\n' +
    '  <table>\n' +
    '    <tr>\n' +
    '      <td>layout-align</td>\n' +
    '      <td>Sets child alignment.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-align-sm</td>\n' +
    '      <td>Sets child alignment on devices less than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-align-gt-sm</td>\n' +
    '      <td>Sets child alignment on devices greater than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-align-md</td>\n' +
    '      <td>Sets child alignment on devices between 600px and 960px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-align-gt-md</td>\n' +
    '      <td>Sets child alignment on devices greater than 960px wide.\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-align-lg</td>\n' +
    '      <td>Sets child alignment on devices between 960px and 1200px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-align-gt-lg</td>\n' +
    '      <td>Sets child alignment on devices greater than 1200px wide.</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '  <p>\n' +
    '   See below for more examples:\n' +
    '  </p>\n' +
    '\n' +
    '  <section class="layout-panel-parent">\n' +
    '    <div ng-panel="layoutDemo">\n' +
    '      <docs-demo demo-title=\'layout="{{layoutDemo.direction}}" layout-align="{{layoutAlign()}}"\' class="small-demo" interpolate-code="true">\n' +
    '        <demo-file name="index.html">\n' +
    '          <div layout="{{layoutDemo.direction}}" layout-align="{{layoutAlign()}}">\n' +
    '            <div>one</div>\n' +
    '            <div>two</div>\n' +
    '            <div>three</div>\n' +
    '          </div>\n' +
    '        </demo-file>\n' +
    '      </docs-demo>\n' +
    '    </div>\n' +
    '  </section>\n' +
    '\n' +
    '  <div layout="column" layout-gt-sm="row" layout-align="space-around">\n' +
    '\n' +
    '    <div>\n' +
    '      <md-subheader>Layout Direction</md-subheader>\n' +
    '      <md-radio-group ng-model="layoutDemo.direction">\n' +
    '        <md-radio-button value="row">row</md-radio-button>\n' +
    '        <md-radio-button value="column">column</md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <md-subheader>Alignment in Layout Direction ({{layoutDemo.direction == \'row\' ? \'horizontal\' : \'vertical\'}})</md-subheader>\n' +
    '      <md-radio-group ng-model="layoutDemo.mainAxis">\n' +
    '        <md-radio-button value="start">start</md-radio-button>\n' +
    '        <md-radio-button value="center">center</md-radio-button>\n' +
    '        <md-radio-button value="end">end</md-radio-button>\n' +
    '        <md-radio-button value="space-around">space-around</md-radio-button>\n' +
    '        <md-radio-button value="space-between">space-between</md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <md-subheader>Alignment in Perpendicular Direction ({{layoutDemo.direction == \'column\' ? \'horizontal\' : \'vertical\'}})</md-subheader>\n' +
    '      <md-radio-group ng-model="layoutDemo.crossAxis">\n' +
    '        <md-radio-button value="start">start</md-radio-button>\n' +
    '        <md-radio-button value="center">center</md-radio-button>\n' +
    '        <md-radio-button value="end">end</md-radio-button>\n' +
    '      </md-radio-group>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-container.tmpl.html',
    '<div ng-controller="LayoutCtrl" class="layout-content">\n' +
    '\n' +
    '  <h3>Overview</h3>\n' +
    '  <p>\n' +
    '    Angular Material\'s responsive CSS layout is built on\n' +
    '    <a href="http://www.w3.org/TR/css3-flexbox/">flexbox</a>.\n' +
    '  </p>\n' +
    '\n' +
    '  <p>\n' +
    '    The layout system is based upon element attributes rather than CSS classes.\n' +
    '    Attributes provide an easy way to set a value (eg <code>layout="row"</code>), and additionally\n' +
    '    helps us separate concerns: attributes define layout, and classes define styling.\n' +
    '  </p>\n' +
    '\n' +
    '  <br/>\n' +
    '  <h3>Layout Attribute</h3>\n' +
    '  <p>\n' +
    '    Use the <code>layout</code> attribute on an element to arrange its children\n' +
    '    horizontally in a row (<code>layout="row"</code>), or vertically in\n' +
    '    a column (<code>layout="column"</code>). \n' +
    '  </p>\n' +
    '\n' +
    '  <hljs lang="html">\n' +
    '    <div layout="row">\n' +
    '      <div>I\'m left.</div>\n' +
    '      <div>I\'m right.</div>\n' +
    '    </div>\n' +
    '    <div layout="column">\n' +
    '      <div>I\'m above.</div>\n' +
    '      <div>I\'m below.</div>\n' +
    '    </div>\n' +
    '  </hljs>\n' +
    '\n' +
    '  <p>\n' +
    '    See <a href="#/layout/options">Layout Options</a> for information on responsive layouts and other options.\n' +
    '  </p>\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-grid.tmpl.html',
    '<div ng-controller="LayoutCtrl" class="layout-content">\n' +
    '\n' +
    '  <p>\n' +
    '    To customize the size and position of elements in a layout, use the\n' +
    '    <code>flex</code>, <code>offset</code>, and <code>flex-order</code> attributes.\n' +
    '  </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Flex Attribute" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row">\n' +
    '        <div flex>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '        <div flex hide-sm>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '  <p>\n' +
    '    Add the <code>flex</code> attribute to a layout\'s child element, and it\n' +
    '    will flex (stretch) to fill the available area.\n' +
    '  </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Flex Percent Values" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-wrap>\n' +
    '        <div flex="33">\n' +
    '          [flex="33"]\n' +
    '        </div>\n' +
    '        <div flex="55">\n' +
    '          [flex="55"]\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '        <div flex="66">\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '        <div flex="33">\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    A layout child\'s <code>flex</code> attribute can be given an integer value from 0-100.\n' +
    '    The element will stretch to the percentage of available space matching the value.\n' +
    '    <br/><br/>\n' +
    '    The <code>flex</code> attribute value is restricted to 33, 66, and multiples\n' +
    '    of five.\n' +
    '    <br/>\n' +
    '    For example: <code>flex="5", flex="20", "flex="33", flex="50", flex="66", flex="75", ...</code>.\n' +
    '  </p>\n' +
    '  <p>\n' +
    '  See the <a href="#/layout/options">layout options page</a> for more information on responsive flex attributes.\n' +
    '  </p>\n' +
    '\n' +
    '  <docs-demo demo-title="Flex Order Attribute" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-margin>\n' +
    '        <div flex flex-order="3">\n' +
    '          [flex-order="3"]\n' +
    '        </div>\n' +
    '        <div flex flex-order="2">\n' +
    '          [flex-order="2"]\n' +
    '        </div>\n' +
    '        <div flex flex-order="1">\n' +
    '          [flex-order="1"]\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '  <p>\n' +
    '    Add the <code>flex-order</code> attribute to a layout child to set its\n' +
    '    position within the layout. Any value from 0-9 is accepted.\n' +
    '  </p>\n' +
    '  <table>\n' +
    '    <tr>\n' +
    '      <td>flex-order</td>\n' +
    '      <td>Sets element order.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-order-sm</td>\n' +
    '      <td>Sets element order on devices less than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-order-gt-sm</td>\n' +
    '      <td>Sets element order on devices greater than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-order-md</td>\n' +
    '      <td>Sets element order on devices between 600px and 960px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-order-gt-md</td>\n' +
    '      <td>Sets element order on devices greater than 960px wide.\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-order-lg</td>\n' +
    '      <td>Sets element order on devices between 960px and 1200px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-order-gt-lg</td>\n' +
    '      <td>Sets element order on devices greater than 1200px wide.</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '\n' +
    '  <docs-demo demo-title="Flex Offset Attribute" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row">\n' +
    '        <div flex offset="33">\n' +
    '          [flex offset="33"]\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          [flex]\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '  <p>\n' +
    '    Add the <code>offset</code> attribute to a layout child to set its\n' +
    '    offset percentage within the layout. Values must be multiples \n' +
    '    of <code>5</code>, or <code>33</code>, <code>34</code>, <code>66</code>, <code>67</code>.\n' +
    '  </p>\n' +
    '  <table>\n' +
    '    <tr>\n' +
    '      <td>offset</td>\n' +
    '      <td>Sets element offset.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>offset-sm</td>\n' +
    '      <td>Sets element offset on devices less than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>offset-gt-sm</td>\n' +
    '      <td>Sets element offset on devices greater than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>offset-md</td>\n' +
    '      <td>Sets element offset on devices between 600px and 960px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>offset-gt-md</td>\n' +
    '      <td>Sets element offset on devices greater than 960px wide.\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>offset-lg</td>\n' +
    '      <td>Sets element offset on devices between 960px and 1200px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>offset-gt-lg</td>\n' +
    '      <td>Sets element offset on devices greater than 1200px wide.</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/layout-options.tmpl.html',
    '<div ng-controller="LayoutCtrl" class="layout-content layout-options">\n' +
    '\n' +
    '  <docs-demo demo-title="Responsive Layout" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-sm="column">\n' +
    '        <div flex>\n' +
    '          I\'m above on mobile, and to the left on larger devices.\n' +
    '        </div>\n' +
    '        <div flex>\n' +
    '          I\'m below on mobile, and to the right on larger devices.\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    See the <a href="#/layout/container">Layout Container</a> page for a basic explanation\n' +
    '    of layout attributes.\n' +
    '    <br/>\n' +
    '    To make your layout change depending upon the device size, there are\n' +
    '    other <code>layout</code> attributes available:\n' +
    '  </p>\n' +
    '\n' +
    '  <table>\n' +
    '    <tr>\n' +
    '      <td>layout</td>\n' +
    '      <td>Sets the default layout on all devices.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-sm</td>\n' +
    '      <td>Sets the layout on devices less than 600px wide (phones).</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-gt-sm</td>\n' +
    '      <td>Sets the layout on devices greater than 600px wide (bigger than phones).</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-md</td>\n' +
    '      <td>Sets the layout on devices between 600px and 960px wide (tablets in portrait).</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-gt-md</td>\n' +
    '      <td>Sets the layout on devices greater than 960px wide (bigger than tablets in portrait).</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-lg</td>\n' +
    '      <td>Sets the layout on devices between 960 and 1200px wide (tablets in landscape).</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>layout-gt-lg</td>\n' +
    '      <td>Sets the layout on devices greater than 1200px wide (computers and large screens).</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '  <br/>\n' +
    '\n' +
    '  <br/>\n' +
    '\n' +
    '  <docs-demo demo-title="Layout Margin, Padding and Fill" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-margin layout-fill layout-padding>\n' +
    '        <div flex>I\'m on the left, and there\'s an empty area around me.</div>\n' +
    '        <div flex>I\'m on the right, and there\'s an empty area around me.</div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    <code>layout-margin</code> adds margin around each <code>flex</code> child. It also adds a margin to the layout container itself.\n' +
    '    <br/>\n' +
    '    <code>layout-padding</code> adds padding inside each <code>flex</code> child. It also adds padding to the layout container itself.\n' +
    '    <br/>\n' +
    '    <code>layout-fill</code> forces the layout element to fill its parent container.\n' +
    '  </p>\n' +
    '\n' +
    '  <br/>\n' +
    '\n' +
    '  <br/>\n' +
    '\n' +
    '  <docs-demo demo-title="Wrap" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row" layout-wrap>\n' +
    '        <div flex="33">[flex=33]</div>\n' +
    '        <div flex="66">[flex=66]</div>\n' +
    '        <div flex="66">[flex=66]</div>\n' +
    '        <div flex="33">[flex=33]</div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '  <p>\n' +
    '    <code>layout-wrap</code> allows <code>flex</code> children to wrap within the container if the elements use more than 100%.\n' +
    '    <br/>\n' +
    '  </p>\n' +
    '\n' +
    '  <br/>\n' +
    '\n' +
    '  <br/>\n' +
    '\n' +
    '  <docs-demo demo-title="Responsive Flex & Offset Attributes" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout="row">\n' +
    '        <div flex="66" flex-sm="33">\n' +
    '          I flex to one-third of the space on mobile, and two-thirds on other devices.\n' +
    '        </div>\n' +
    '        <div flex="33" flex-sm="66">\n' +
    '          I flex to two-thirds of the space on mobile, and one-third on other devices.\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '\n' +
    '  <p>\n' +
    '    See the <a href="#/layout/grid">Layout Grid</a> page for a basic explanation\n' +
    '    of flex and offset attributes.\n' +
    '  </p>\n' +
    '\n' +
    '  <table>\n' +
    '    <tr>\n' +
    '      <td>flex</td>\n' +
    '      <td>Sets flex.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-sm</td>\n' +
    '      <td>Sets flex on devices less than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-gt-sm</td>\n' +
    '      <td>Sets flex on devices greater than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-md</td>\n' +
    '      <td>Sets flex on devices between 600px and 960px wide..</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-gt-md</td>\n' +
    '      <td>Sets flex on devices greater than 960px wide.\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-lg</td>\n' +
    '      <td>Sets flex on devices between 960px and 1200px.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>flex-gt-lg</td>\n' +
    '      <td>Sets flex on devices greater than 1200px wide.</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '\n' +
    '  <br/>\n' +
    '\n' +
    '  <docs-demo demo-title="Hide and Show Attributes" class="small-demo">\n' +
    '    <demo-file name="index.html">\n' +
    '      <div layout layout-align="center center">\n' +
    '        <md-subheader hide-sm>\n' +
    '          I\'m hidden on mobile and shown on larger devices.\n' +
    '        </md-subheader>\n' +
    '        <md-subheader hide-gt-sm>\n' +
    '          I\'m shown on mobile and hidden on larger devices.\n' +
    '        </md-subheader>\n' +
    '      </div>\n' +
    '    </demo-file>\n' +
    '  </docs-demo>\n' +
    '  <br/>\n' +
    '  <table>\n' +
    '    <tr>\n' +
    '      <td>hide</td>\n' +
    '      <td><code>display: none</code></td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-sm</td>\n' +
    '      <td><code>display: none</code> on devices less than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-gt-sm</td>\n' +
    '      <td><code>display: none</code> on devices greater than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-md</td>\n' +
    '      <td><code>display: none</code> on devices between 600px and 960px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-gt-md</td>\n' +
    '      <td><code>display: none</code> on devices greater than 960px wide.\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-lg</td>\n' +
    '      <td><code>display: none</code> on devices between 960px and 1200px.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>hide-gt-lg</td>\n' +
    '      <td><code>display: none</code> on devices greater than 1200px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show</td>\n' +
    '      <td>Negates hide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-sm</td>\n' +
    '      <td>Negates hide on devices less than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-gt-sm</td>\n' +
    '      <td>Negates hide on devices greater than 600px wide.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-md</td>\n' +
    '      <td>Negates hide on devices between 600px and 960px wide..</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-gt-md</td>\n' +
    '      <td>Negates hide on devices greater than 960px wide.\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-lg</td>\n' +
    '      <td>Negates hide on devices between 960px and 1200px.</td>\n' +
    '    </tr>\n' +
    '    <tr>\n' +
    '      <td>show-gt-lg</td>\n' +
    '      <td>Negates hide on devices greater than 1200px wide.</td>\n' +
    '    </tr>\n' +
    '  </table>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/menu-link.tmpl.html',
    '<md-button\n' +
    '    ng-class="{\'active\' : isSelected()}"\n' +
    '    ng-href="{{(section.type === \'version\' ? \'\' : \'#\') + section.url}}"\n' +
    '    ng-click="focusSection()">\n' +
    '  {{section | humanizeDoc}}\n' +
    '  <span class="md-visually-hidden"\n' +
    '    ng-if="isSelected()">\n' +
    '    current page\n' +
    '  </span>\n' +
    '</md-button>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/menu-toggle.tmpl.html',
    '<md-button class="md-button-toggle"\n' +
    '  ng-click="toggle()"\n' +
    '  aria-controls="docs-menu-{{section.name | nospace}}"\n' +
    '  aria-expanded="{{isOpen()}}">\n' +
    '  <div flex layout="row">\n' +
    '    {{section.name}}\n' +
    '    <span flex></span>\n' +
    '    <span aria-hidden="true" class="md-toggle-icon"\n' +
    '    ng-class="{\'toggled\' : isOpen()}">\n' +
    '      <md-icon md-svg-src="md-toggle-arrow"></md-icon>\n' +
    '    </span>\n' +
    '  </div>\n' +
    '  <span class="md-visually-hidden">\n' +
    '    Toggle {{isOpen()? \'expanded\' : \'collapsed\'}}\n' +
    '  </span>\n' +
    '</md-button>\n' +
    '\n' +
    '<ul id="docs-menu-{{section.name | nospace}}" class="menu-toggle-list">\n' +
    '  <li ng-repeat="page in section.pages">\n' +
    '    <menu-link section="page"></menu-link>\n' +
    '  </li>\n' +
    '</ul>\n' +
    '');
}]);

angular.module('docsApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/view-source.tmpl.html',
    '<md-dialog class="view-source-dialog">\n' +
    '\n' +
    '  <md-tabs>\n' +
    '    <md-tab ng-repeat="file in files"\n' +
    '                  active="file === data.selectedFile"\n' +
    '                  ng-click="data.selectedFile = file" >\n' +
    '        <span class="window_label">{{file.viewType}}</span>\n' +
    '    </md-tab>\n' +
    '  </md-tabs>\n' +
    '\n' +
    '  <md-dialog-content md-scroll-y flex>\n' +
    '    <div ng-repeat="file in files">\n' +
    '      <hljs code="file.content"\n' +
    '        lang="{{file.fileType}}"\n' +
    '        ng-show="file === data.selectedFile" >\n' +
    '      </hljs>\n' +
    '    </div>\n' +
    '  </md-dialog-content>\n' +
    '\n' +
    '  <div class="md-actions" layout="horizontal">\n' +
    '    <md-button class="md-primary" ng-click="$hideDialog()">\n' +
    '      Done\n' +
    '    </md-button>\n' +
    '  </div>\n' +
    '</md-dialog>\n' +
    '');
}]);
