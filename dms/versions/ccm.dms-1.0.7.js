/**
 * @overview ccm component for digital makerspace
 * @author André Kless <andre.kless@web.de> 2018-2019
 * @license MIT License
 * @version 1.0.7
 * @changes
 * version 1.0.7 (27.04.2019):
 * - uses ccm.star_rating_result.js v4.0.0
 * - uses ccm.component_manager.js v2.2.6
 * version 1.0.6 (06.02.2019):
 * - navigation bug fix
 * - uses ccm v20.0.0
 * - uses ccm.listing.js v2.0.3
 * - uses ccm.submit.js v7.0.0
 * - uses ccm.component_manager.js v2.2.5
 * version 1.0.5 (13.01.2019):
 * - uses ccm v19.0.0
 * - uses ccm.star_rating_result.js v3.0.1
 * version 1.0.4 (09.01.2019):
 * - uses ccm v18.6.8
 * - uses ccm.component_manager.js v2.2.4
 * - uses ccm.submit.js v6.7.0
 * version 1.0.3 (07.11.2018): removed footer
 * version 1.0.2 (02.11.2018):
 * - uses ccm.component_manager.js v2.2.2
 * - uses ccm.listing.js v2.0.2
 * - uses ccm v18.2.0
 * version 1.0.1 (25.10.2018): update to versions 1.0.0 of resource finder and publish
 * version 1.0.0 (13.09.2018)
 */

( function () {

  const component = {

    name: 'dms', version: [ 1, 0, 7 ],

    ccm: 'https://ccmjs.github.io/ccm/versions/ccm-20.0.0.js',

    config: {
      "html": {
        "main": {
          "id": "main",
          "inner": [
            {
              "id": "header",
              "inner": [
                {
                  "id": "title",
                  "inner": {
                    "tag": "span",
                    "onclick": "%all_components%",
                    "inner": "Digital Makerspace",
                    "entry-point": 1
                  }
                },
                {
                  "id": "menu",
                  "inner": [
                    {
                      "id": "button-browse_apps",
                      "class": "button",
                      "inner": "Browse Apps",
                      "onclick": "%browse_apps%",
                      "title": "Browse Apps",
                      "component": "browseAppsComponent"
                    },
                    {
                      "id": "button-publish_app",
                      "class": "button",
                      "inner": "Publish App",
                      "onclick": "%publish_app%",
                      "title": "Publish App",
                      "component": "publishAppComponent"
                    },
                    {
                      "id": "button-all_components",
                      "class": "button",
                      "inner": "All Components",
                      "onclick": "%all_components%",
                      "title": "All Components",
                      "component": "allComponent"
                    },
                    {
                      "id": "button-publish",
                      "class": "button",
                      "inner": "Publish Component",
                      "onclick": "%publish%",
                      "title": "Publish Component",
                      "component": "publishComponent"
                    },
                    { "id": "user",
                      "onclick": "%user_login%",
                      "title": "User Login",
                      "component": "userLoginComponent"
                    }
                  ]
                }
              ]
            },
            { "id": "content" }
          ]
        },
        "entry": {
          "class": "entry",
          "onclick": "%click%",
          "inner": [
            {
              "class": "left",
              "inner": {
                "tag": "img",
                "src": "%icon%"
              }
            },
            {
              "class": "right",
              "inner": [
                {
                  "class": "title",
                  "inner": "%title%"
                },
                {
                  "class": "developer",
                  "inner": "%developer%"
                },
                {
                  "class": "rating"
                }
              ]
            }
          ]
        }
      },
      "css": [ "ccm.load",
        "https://ccmjs.github.io/akless-components/libs/bootstrap/css/bootstrap.css",
        { "context": "head", "url": "https://ccmjs.github.io/akless-components/libs/bootstrap/css/font-face.css" },
        "https://ccmjs.github.io/akless-components/dms/v1.0.7/default.css"
      ],
      "data": [],
      "entryPointSite": [
        "/digital-maker-space/"
      ],
      "entryPointDetail": [
        "component/"
      ],
      "routes": [
        { path: 'browse-apps', component: 'browseAppsComponent'},
        { path: 'publish-apps', component: 'publishAppComponent'},
        { path: '', component: 'allComponent'},
        { path: 'publish-component', component: 'publishComponent'},
        { path: 'userlogin', component: 'userLoginComponent'},
        { path: 'details', defaultTab: true, menuEntry: 0, component: 'detailTabComponent'},
        { path: 'description', menuEntry: 1, component: 'detailTabComponent'},
        { path: 'rating', menuEntry: 2,  component: 'detailTabComponent'},
        { path: 'discussion', menuEntry: 3, component: 'detailTabComponent'},
        { path: 'demo', menuEntry: 4, component: 'detailTabComponent'},
        { path: 'createapp', menuEntry: 5, component: 'detailTabComponent'}
      ],
      "listing": [ "ccm.component", "https://ccmjs.github.io/akless-components/listing/versions/ccm.listing-2.0.3.js", {
        "root": "name",
        "html.entry": {
          "class": "entry",
          "inner": [
            {
              "class": "left",
              "inner": {
                "tag": "img",
                "src": "%icon%"
              }
            },
            {
              "class": "right",
              "inner": [
                {
                  "class": "title",
                  "inner": "%title%",
                  "title": "%title%"
                },
                {
                  "class": "developer",
                  "inner": "%developer%",
                  "title": "%developer%"
                },
                { "class": "rating" }
              ]
            }
          ]
        },
        "css": [ "ccm.load", "https://ccmjs.github.io/akless-components/dms/resources/listing.css" ],
        "defaults": {
          "icon": "https://ccmjs.github.io/akless-components/dms/v1.0.7/component.png"
        }
      } ],
      "rating": [ "ccm.component", "https://ccmjs.github.io/tkless-components/star_rating_result/versions/ccm.star_rating_result-4.0.0.js", {
        "css": [ "ccm.load",
          { "context": "head", "url": "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" },
          "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css",
          "https://ccmjs.github.io/akless-components/dms/v1.0.7/rating.css"
        ]
      } ],
      "form": [ "ccm.component", "https://ccmjs.github.io/akless-components/submit/versions/ccm.submit-7.0.0.js", {
        "root": "name",
        "inner": {
          "id": "main",
          "class": "container-fluid",
          "inner": [
            {
              "id": "title",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "title-label",
                  "for": "title-input",
                  "class": "control-label required",
                  "inner": "Title"
                },
                {
                  "tag": "span",
                  "id": "title-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "title-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "title-info",
                      "class": "alert alert-info",
                      "inner": "Specify the title of your component."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "text",
                  "id": "title-input",
                  "class": "form-control",
                  "name": "title",
                  "required": true
                }
              ]
            },
            {
              "id": "url",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "url-label",
                  "for": "url-input",
                  "class": "control-label required",
                  "inner": "URL"
                },
                {
                  "tag": "span",
                  "id": "url-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "url-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "url-info",
                      "class": "alert alert-info",
                      "inner": "Enter the URL to the component version file."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "url",
                  "id": "url-input",
                  "class": "form-control",
                  "name": "url",
                  "pattern": ".*/ccm\\.([a-z][a-z0-9_]*)(-(0|[1-9][0-9]*)\\.(0|[1-9][0-9]*)\\.(0|[1-9][0-9]*))(\\.js)$",
                  "placeholder": "https://ccmjs.github.io/digital-maker-space/versions/ccm.dms-1.0.0.js",
                  "title": "The filename of the component must start with 'ccm.' followed by the unique component name and then a '-' followed by the component version number and a '.js' in the end. Example: ccm.dms-1.0.0.js",
                  "required": true
                }
              ]
            },
            {
              "id": "icon",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "icon-label",
                  "for": "icon-input",
                  "class": "control-label",
                  "inner": "Icon"
                },
                {
                  "tag": "span",
                  "id": "icon-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "icon-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "icon-info",
                      "class": "alert alert-info",
                      "inner": "Enter the URL to the component icon. Ideally a 64x64 SVG file. Use a free icon that has no licence restrictions."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "icon",
                  "id": "icon-input",
                  "class": "form-control",
                  "name": "icon",
                  "placeholder": "https://ccmjs.github.io/akless-components/dms/v1.0.7/component.png"
                }
              ]
            },
            {
              "id": "abstract",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "abstract-label",
                  "for": "abstract-input",
                  "class": "control-label",
                  "inner": "Abstract"
                },
                {
                  "tag": "span",
                  "id": "abstract-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "abstract-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "abstract-info",
                      "class": "alert alert-info",
                      "inner": "Enter a short component description."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "text",
                  "id": "abstract-input",
                  "class": "form-control",
                  "name": "abstract"
                }
              ]
            },
            {
              "id": "description",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "description-label",
                  "for": "description-input",
                  "class": "control-label",
                  "inner": "Description"
                },
                {
                  "tag": "span",
                  "id": "description-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "description-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "description-info",
                      "class": "alert alert-info",
                      "inner": "Enter a long description of component."
                    }
                  ]
                },
                {
                  "tag": "textarea",
                  "id": "description-input",
                  "class": "form-control",
                  "name": "description"
                }
              ]
            },
            {
              "id": "website",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "website-label",
                  "for": "website-input",
                  "class": "control-label",
                  "inner": "Webseite"
                },
                {
                  "tag": "span",
                  "id": "website-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "website-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "website-info",
                      "class": "alert alert-info",
                      "inner": "Enter homepage URL of component."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "url",
                  "id": "website-input",
                  "class": "form-control",
                  "name": "website",
                  "placeholder": "https://github.com/ccmjs/digital-maker-space"
                }
              ]
            },
            {
              "id": "developer",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "developer-label",
                  "for": "developer-input",
                  "class": "control-label",
                  "inner": "Developer"
                },
                {
                  "tag": "span",
                  "id": "developer-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "developer-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "developer-info",
                      "class": "alert alert-info",
                      "inner": "Enter the name of the developer who developed the component."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "text",
                  "id": "developer-input",
                  "class": "form-control",
                  "name": "developer"
                }
              ]
            },
            {
              "id": "license",
              "class": "form-group",
              "inner": [
                {
                  "tag": "label",
                  "id": "license-label",
                  "for": "license-input",
                  "class": "control-label required",
                  "inner": "License"
                },
                {
                  "tag": "span",
                  "id": "license-help",
                  "class": "help",
                  "inner": [
                    {
                      "tag": "a",
                      "id": "license-icon",
                      "inner": {
                        "class": "glyphicon glyphicon-info-sign"
                      }
                    },
                    {
                      "id": "license-info",
                      "class": "alert alert-info",
                      "inner": "Components can only be published as free software under MIT license."
                    }
                  ]
                },
                {
                  "tag": "input",
                  "type": "text",
                  "id": "license-input",
                  "class": "form-control",
                  "name": "license",
                  "value": "MIT License",
                  "pattern": "MIT License",
                  "disabled": true,
                  "required": true
                }
              ]
            },
            {
              "tag": "input",
              "type": "submit",
              "id": "button-submit",
              "class": "btn btn-success btn-lg",
              "value": "Publish Component"
            }
          ]
        },
        "css": [ "ccm.load",
          "https://ccmjs.github.io/akless-components/libs/bootstrap/css/bootstrap.css",
          "https://ccmjs.github.io/akless-components/dms/resources/submit.css"
        ],
      } ],
      "component_manager": [ "ccm.component", "https://ccm.ddev.local/akless-components/component_manager/versions/ccm.component_manager-2.2.6.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/component_manager/resources/configs.js", "demo" ] ],
      "resource_finder": [ "ccm.component", "https://ccmjs.github.io/leck-components/resource_finder/dist/ccm.resource_finder-1.0.0.js" ],
      "resource_publish": [ "ccm.component", "https://ccmjs.github.io/leck-components/resource_publish/dist/ccm.resource_publish-1.0.0.js" ],
      //"routing": [ "ccm.component", "https://ccm.ddev.local/dbanduch-components/routing/versions/ccm.routing-1.0.0.js" ],
//    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-8.3.1.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "guest" ] ],
//    "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-4.0.2.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/log/resources/configs.js", "greedy" ] ]
    },

    Instance: function () {

      const self = this;
      let $;

      /**
       * Ensures that the resource finder is only started once
       * @type {boolean}
       */
      let resource_finder_started = false;

      /**
       * Ensures that the resource publish is only started once
       * @type {boolean}
       */
      let resource_publish_started = false;

      this.ready = async () => {

        // set shortcut to help functions
        $ = this.ccm.helper;

        // logging of 'ready' event
        this.logger && this.logger.log( 'ready', $.privatize( this, true ) );

      };

      this.start = async () => {

        // logging of 'start' event
        this.logger && this.logger.log( 'start' );

        // Uppercase the first letter of a string
        const capitalize = (s) => {
          if (typeof s !== 'string') return ''
          return s.charAt(0).toUpperCase() + s.slice(1)
        };

        //self.routing.start();
        let url = window.location.pathname;

        let state = getStateFromUrl(url);

        $.setContent( this.element, $.html( this.html.main, {
          browse_apps: function () {
            getRouteByComponent(this.getAttribute('component'));
          },
          publish_app: function () {
            getRouteByComponent(this.getAttribute('component'));
          },
          all_components: function () {
            if (this.getAttribute('entry-point')) {
              state = getStateFromUrl(self.entryPointSite.toString());
              navigateTo(state);
            } else {
              getRouteByComponent(this.getAttribute('component'));
            }
          },
          publish: function () {
            getRouteByComponent(this.getAttribute('component'));
          },
          user_login: function () {
            let shadowDms = document.querySelector('#' + self.index).shadowRoot;
            const shadowUser = shadowDms.querySelector('#' + self.user.index).shadowRoot;
            const login = shadowUser.querySelector('#logged_out');

            if (login) {
              state = getStateFromUrl(self.entryPointSite.toString());
              navigateTo(state);
            } else {
              getRouteByComponent(this.getAttribute('component'));
            }
          }
        } ) );

        /**
         * content area
         * @type {Element}
         */
        const content_elem = this.element.querySelector( '#content' );

        if ( this.user ) { await this.user.start(); $.setContent( this.element.querySelector( '#user' ), this.user.root ); }

        window.onpopstate = function(event) {
          navigateTo(event.state, true);
        };

        await navigateTo(state);

        /**
         *
         * @param url
         * @returns {{path: string, component: string}}
         */
        function getStateFromUrl(url) {
          let urlArray = url.split('/');
          let path = url, componentDetail = false;

          if (urlArray.length === 3) {
            path = urlArray[2];
          }
          if (urlArray.length === 4 && urlArray[2] === self.entryPointDetail.toString().slice(0, -1)) {
            path = { path: self.entryPointDetail + urlArray[3], component: urlArray[3], isDetail: true };
            componentDetail = true
          }
          if (urlArray.length === 5 && urlArray[2] === self.entryPointDetail.toString().slice(0, -1)) {
            path = { path: self.entryPointDetail + urlArray[3] + '/' + urlArray[4], component: urlArray[3], isDetail: true, tab: urlArray[4] };
            componentDetail = true
          }

          return getRouteByPath(path, componentDetail);
        }

        /**
         *
         * @param path
         * @param componentDetail
         * @returns {{path: string, component: string}}
         */
        function getRouteByPath(path, componentDetail) {
          let route = { path: '', component: '' };

          self.routes.forEach(function(element) {
            if (path === element.path) {
              route = element;
            }
          });
          if(componentDetail) {
            route = path;
          }

          return route;
        }

        /**
         *
         * @param component
         */
        function getRouteByComponent(component) {
          let route = { path: '', component: '' };

          self.routes.forEach(function(element) {
            if (component === element.component) {
              route = element;
            }
          });

          navigateTo(route);
        }

        /**
         *
         * @param {object} state
         * @param {boolean} onpopstate
         * @returns {Promise<void>}
         */
        async function navigateTo(state, onpopstate = false) {
          let elementRef, title, url;

          switch (state.component) {
            case 'browseAppsComponent':
              elementRef = self.element.querySelector('#button-browse_apps');
              title = elementRef.getAttribute('title');
              url = self.entryPointSite + state.path;
              renderBrowseAppsComponent();
              break;
            case 'publishAppComponent':
              elementRef = self.element.querySelector('#button-publish_app');
              title = elementRef.getAttribute('title');
              url = self.entryPointSite + state.path;
              renderPublishAppComponent();
              break;
            case 'allComponent':
              elementRef = self.element.querySelector('#button-all_components');
              title = elementRef.getAttribute('title');
              url = self.entryPointSite;
              renderAllComponents();
              break;
            case 'publishComponent':
              elementRef = self.element.querySelector('#button-publish');
              title = elementRef.getAttribute('title');
              url = self.entryPointSite + state.path;
              await renderPublishComponent();
              break;
            case 'userLoginComponent':
              elementRef = self.element.querySelector('#user');
              title = elementRef.getAttribute('title');
              url = self.entryPointSite + state.path;

              let shadowDms = document.querySelector('#' + self.index).shadowRoot;
              const shadowUser = shadowDms.querySelector('#' + self.user.index).shadowRoot;
              const button = shadowUser.querySelector('#button');

              if (button) {
                button.click();
              }
              await renderUserLoginComponent();
              break;
            default:
              let validateObject = {};

              if (state.isDetail) {
                if (state.tab) {
                  let route = false;
                  self.routes.forEach(function(element) {
                    if (state.tab === element.path) {
                      if (element.defaultTab) {
                        state.defaultTab = element.defaultTab;
                      }
                      route = element;
                    }
                  });

                  if (route) {
                    validateObject = await buildDetailViewWithTabsAndRender({}, state, false, route);
                  } else {
                    validateObject.hit = true;
                  }
                } else {
                  validateObject = await buildDetailViewWithTabsAndRender({}, state, false);
                }

                if (validateObject.hit) {
                  renderNotFoundComponent();
                }
              } else {
                renderNotFoundComponent();
              }

              title = validateObject.title ? validateObject.title : '404 Not Found';
              url = validateObject.url ? validateObject.url : window.location.pathname;

              break;
          }

          document.title = title;
          if (!onpopstate) {
            window.history.pushState(state, title, url);
          }
          changeSelectedMenuEntry(elementRef);
        }

        /** renders browse apps */
        function renderBrowseAppsComponent() {
          // view browse apps already active? => abort
          if ( content_elem.querySelector( '#browse_apps' ) ) return;

          // clear content area
          $.setContent( content_elem, $.html( { id: 'browse_apps' } ) );

          const browse_apps_elem = content_elem.querySelector( '#browse_apps' );
          if (!resource_finder_started) {
            self.resource_finder.start({})
                .then(instance => {
                  self.resource_finder = instance;
                  resource_finder_started = true;
                  $.setContent( browse_apps_elem, self.resource_finder.root );
                });
          }
          else
            $.setContent( browse_apps_elem, self.resource_finder.root );

        }

        /** renders all components view */
        function renderAllComponents() {

          // render all components view already active? => abort
          if ( content_elem.querySelector( '#listing' ) ) return;

          // clear content area
          $.setContent( content_elem, $.html( { id: 'listing' } ) );

          // render listing of all components
          self.listing.start( {
            data: self.data,
            sort: ( a, b ) => {
              const title_x = a.title.toLowerCase();
              const title_y = b.title.toLowerCase();
              const developer_x = ( a.developer || '' ).toLowerCase();
              const developer_y = ( b.developer || '' ).toLowerCase();
              if ( title_x < title_y ) return -1;
              if ( title_x > title_y ) return 1;
              if ( developer_x < developer_y ) return -1;
              if ( developer_x > developer_y ) return 1;
              return 0;
            },
            onrender: ( element, data) => {
              if ( !self.rating ) return;
              self.rating.start( {
                root: element.querySelector( '.rating' ),
                'data.key': data.key
              } );
            },
            onclick: async ( event, element, data ) => {
              changeSelectedMenuEntry();
              await buildDetailViewWithTabsAndRender(data);
            }
          } );

        }

        /** renders publish app */
        function renderPublishAppComponent() {
          // view browse apps already active? => abort
          if ( content_elem.querySelector( '#publish_app' ) ) return;

          // clear content area
          $.setContent( content_elem, $.html( { id: 'publish_app' } ) );

          const publish_app_elem = content_elem.querySelector( '#publish_app' );
          if (!resource_publish_started) {
            self.resource_publish.start({})
                .then(instance => {
                  self.resource_publish = instance;
                  resource_publish_started = true;
                  $.setContent( publish_app_elem, self.resource_publish.root );
                });
          }
          else
            $.setContent( publish_app_elem, self.resource_publish.root );

        }

        /** renders publish component view */
        async function renderPublishComponent() {

          // publish form view already active? => abort
          if ( content_elem.querySelector( '#submit' ) ) return;

          // clear content area
          $.setContent( content_elem, $.html( { id: 'submit' } ) );

          // start ccm instance for publish form
          const instance = await self.form.start( {
            onfinish: async ( instance, dataset ) => {

              /**
               * component version number
               * @type {string[]}
               */
              let version = $.getIndex( dataset.url ).split( '-' );

              /**
               * unique component name
               * @type {string}
               */
              const name = version.shift();

              version = version.join( '.' );

              // add component name and version number
              dataset.key     = name;
              dataset.version = version;
              dataset.license = 'MIT License';  // components can only be published as free software
              dataset.ignore = { demos: [], builder: [] };

              // check if component name already exists
              const existing = await self.data.store.get( name );

              if ( existing ) return alert( 'Component with unique name "' + name + '" already exists.' );

              // make sure that the developer really wants to publish
              if ( !window.confirm( 'Are you sure, you want to publish the Component?' ) ) return;

              // publish component
              await self.data.store.set( dataset ); alert( 'Saved!' ); navigateTo( 'allcomponents' );

            }
          } );

          // set click events for help icons
          [ ...instance.element.querySelectorAll( '.help' ) ].map( help => help.addEventListener( 'click', function () {

            // show help text and hide other help texts
            [ ...instance.element.querySelectorAll( '.help' ) ].map( help => help !== this && help.classList.remove( 'active' ) );
            this.classList.toggle( 'active' );

            // logging of 'help' event
            self.logger && self.logger.log( 'help', { form: 'publish_component', name: this.id.split( '-' )[ 0 ], active: this.classList.contains( 'active' ) } );

          } ) );

        }

        /** renders user login component view */
        async function renderUserLoginComponent() {
          let shadowDms = document.querySelector('#' + self.index).shadowRoot;
          const shadowUser = shadowDms.querySelector('#' + self.user.index).shadowRoot;
          const loginform = shadowUser.querySelector('#loginform');

          if (loginform) {
            loginform.addEventListener('submit', () => {
              //document.querySelector('#button-all_components').click();
              state = getStateFromUrl(self.entryPointSite.toString());
              navigateTo(state);
            });
            loginform.querySelector('#btn-abort').addEventListener('click', () => {
              //document.querySelector('#button-all_components').click();
              state = getStateFromUrl(self.entryPointSite.toString());
              navigateTo(state);
            });
          }
        }

        /**
         * add functions and routing to detailView/Tabs
         * @param {object} [data]
         * @param {object} [state]
         * @param {boolean} [spaEntry]
         * @param {object} [route]
         */
        async function buildDetailViewWithTabsAndRender( data , state = {}, spaEntry = true, route) {
          //if(data.routing && self.entryPointDetail) {
          let title, url, key = data.key, hit = true, divEntries = false,
              disabledTab = true,
              instance = {},
              error = false,
              escapedDataKey,
              check = true,
              newKey,
              convertPatternUnderlined = new RegExp('[_ ]+'),
              convertPatternHyphen = new RegExp('[- ]+');

          if (!key) {
            key = state.component;
          }

          if (key.search('_') !== -1) {
            check = false;
            if (!spaEntry) {
              key = key.replace(convertPatternUnderlined, "-");
              newKey = key;
            }

          }

          await self.component_manager.start( {
            data: {
              store: self.data.store,
              key: key
            }
          }).then((output) => {
            instance = output;
          })
              .catch(async () => {
                if (check) {
                  newKey = key.replace(convertPatternHyphen, "_");
                  state.component = state.component.replace(convertPatternHyphen, "_");
                }

                await self.component_manager.start({
                  data: {
                    store: self.data.store,
                    key: newKey
                  }
                }).then((output) => {
                  instance = output;
                })
                    .catch((err) => {
                      error = err;
                    });
              });

          if (self.entryPointDetail && spaEntry) {
            escapedDataKey = data.key.replace(convertPatternUnderlined, "-");
            state = {path: self.entryPointDetail + escapedDataKey, component: data.key, isDetail: true};
            title = data.title + ' Component';
            url = self.entryPointSite + self.entryPointDetail + escapedDataKey;
            hit = false;

            document.title = title;
            window.history.pushState(state, title, url);

            $.setContent(content_elem, instance.root);
          } else {
            if (!error) {
              const components = await instance.data.store.get();
              components.forEach(function (component) {
                if (component.key === state.component) {
                  hit = false;
                  state.title = component.title;
                  $.setContent(content_elem, instance.root);
                }
              });
            }
          }

          if (!hit) {
            let shadowDms = document.querySelector('#' + self.index).shadowRoot;
            const shadowComponentManager = shadowDms.querySelector('div[id^="' + self.component_manager.index + '"]').shadowRoot;
            const shadowMenu = shadowComponentManager.querySelector('div[id^="' + instance.menu.component.index + '"]').shadowRoot;
            divEntries = shadowMenu.querySelectorAll('div.entry');
          }

          if (route && !error) {
            if (!divEntries[route.menuEntry].classList.contains('disabled')) {
              divEntries[route.menuEntry].click();
              hit = false;
            } else {
              disabledTab = false;
              hit = true;
            }
          }

          if (state.tab && disabledTab) {
            title = capitalize(state.title) + ' Component: ' + capitalize(state.tab);
            url = self.entryPointSite + state.path;
          } else if (!hit) {
            title = capitalize(state.title) + ' Component';
            url = self.entryPointSite + state.path;
          }

          if (divEntries) {
            for (let i = 0; i < divEntries.length; i++) {
              if(!divEntries[i].classList.contains('disabled')) {
                divEntries[i].addEventListener('click', () => {
                  let unformattedSlug = divEntries[i].querySelector('.title').textContent;
                  let slug = unformattedSlug.trim().toLowerCase().replace(' ','');
                  escapedDataKey = state.component.replace(convertPatternUnderlined, "-");

                  if (state.defaultTab) {
                    state = { path: self.entryPointDetail + escapedDataKey, component: escapedDataKey, isDetail: true, tab: slug };
                  } else {
                    state = { path: self.entryPointDetail + escapedDataKey + '/' + slug, component: escapedDataKey, isDetail: true, tab: slug };
                  }

                  navigateTo(state);
                });
              }
            }
          }

          return { hit: hit, title: title, url: url};
        }

        function renderNotFoundComponent() {
          /*const shadow = document.createElement( 'div' );
          shadow.attachShadow( { mode: 'open' } );

          ccm.load(
              {
            url: '//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css',
            context: shadow
          },
          {
            url: '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js',
            context: shadow
          },
          {
            url: '//code.jquery.com/jquery-1.11.1.min.js',
            context: shadow
          }
          );*/

          $.setContent( content_elem, '<div class="container">\n' +
              '    <div class="row">\n' +
              '        <div class="col-md-12">\n' +
              '            <div style="padding: 40px 15px;text-align: center;" class="error-template">\n' +
              '                <h1>Oops!</h1>\n' +
              '                <h2>404 Not Found</h2>\n' +
              '                <div class="error-details">Sorry, an error has occured, Requested page not found!</div>\n' +
              '                <div style="margin-top:15px;margin-bottom:15px;" class="error-actions">' +
              '                   <a href="' + self.entryPointSite + '" style="margin-right:10px; padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px;" class="btn btn-primary btn-lg"><span class="glyphicon glyphicon-home"></span>Take Me Home</a>\n' +
              '                   <a href="' + self.entryPointSite + '" style="margin-right:10px; padding: 10px 16px; font-size: 18px; line-height: 1.33; border-radius: 6px;" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope"></span>Contact Support</a>\n' +
              '                </div>' +
              '            </div>\n' +
              '        </div>\n' +
              '    </div>\n' +
              '</div>');
        }

        /**
         * changes the selected header menu entry
         * @param {Element} [item] - clicked header button
         */
        function changeSelectedMenuEntry( item ) {
          [ ...self.element.querySelectorAll( '#header .button' ) ].map( div => { div.classList.remove( 'active' ); } );
          item && item.classList.add( 'active' );
        }
      };

    }


  };



  let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();