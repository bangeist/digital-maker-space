/**
 * @overview ccm component for component manager
 * @author André Kless <andre.kless@web.de> 2018
 * @license MIT License
 * @version 2.0.0
 * @changes
 * version 2.0.0 (21.09.2018):
 * - multiple demos and demo titles
 * - multiple builder and builder titles
 * version 1.0.0 (13.09.2018)
 */

( function () {

  const component = {

    name: 'component_manager',

    version: [ 2, 0, 0 ],

    ccm: 'https://ccmjs.github.io/ccm/versions/ccm-18.0.0.js',

    config: {
      "html": {
        "main": {
          "id": "main",
          "inner": [
            {
              "id": "header",
              "inner": [
                {
                  "id": "header-left",
                  "inner": {
                    "tag": "img",
                    "src": "%icon%"
                  }
                },
                {
                  "id": "header-right",
                  "inner": [
                    {
                      "id": "header-top",
                      "inner": [
                        {
                          "tag": "span",
                          "id": "header-title",
                          "inner": "%title%"
                        },
                        {
                          "tag": "span",
                          "id": "header-version",
                          "inner": "%version%"
                        }
                      ]
                    },
                    {
                      "id": "header-developer",
                      "inner": "%developer%"
                    },
                    {
                      "id": "header-rating"
                    },
                    {
                      "id": "header-abstract",
                      "inner": "%abstract%"
                    }
                  ]
                }
              ]
            },
            { "id": "menu" }
          ]
        }
      },
      "css": [ "ccm.load",
        "https://ccmjs.github.io/akless-components/libs/bootstrap/css/bootstrap.css",
        { "context": "head", "url": "https://ccmjs.github.io/akless-components/libs/bootstrap/css/font-face.css" },
        "https://ccmjs.github.io/akless-components/component_manager/resources/default.css"
      ],
      "menu": {
        "component": [ "ccm.component", "https://ccmjs.github.io/akless-components/menu/versions/ccm.menu-2.2.0.js" ],
        "ignore": {
          "buttons": {
            "data": {
              "entries": [
                {
                  "title": "Details",
                  "content": { "id": "details" }
                },
                {
                  "title": "Rating",
                  "content": {
                    "inner": [
                      {
                        "class": "container-fluid",
                        "inner": [
                          { "tag": "h3", "inner": "Your Rating:" },
                          { "id": "rating" }
                        ]
                      },
                      {
                        "class": "container-fluid",
                        "inner": [
                          { "tag": "h3", "inner": "Rating Results:" },
                          { "id": "rating_result" }
                        ]
                      },
                      { "tag": "p" }
                    ]
                  }
                },
                {
                  "title": "Discussion",
                  "content": { "id": "comment" }
                },
                {
                  "title": "Demo",
                  "content": {
                    "style": "margin: 1em; display: grid; grid-template-columns: 12em auto",
                    "inner": [
                      { "id": "menu", "style": "margin-right: 1em;" },
                      { "id": "demo", "style": "border: 3px double #ccc;" }
                    ]
                  }
                },
                {
                  "title": "Create App",
                  "content": {
                    "style": "margin: 1em; display: grid; grid-template-columns: 12em auto",
                    "inner": [
                      { "id": "menu", "style": "margin-right: 1em;" },
                      { "id": "builder", "style": "border: 3px double #ccc;" }
                    ]
                  }
                }
              ]
            },
            "key": [ "ccm.get", "https://ccmjs.github.io/akless-components/menu/resources/configs.js", "bootstrap" ],
          },
          "list_group": {
            "html": {
              "main": {
                "id": "main",
                "inner": [
                  {
                    "inner": {
                      "class": "list-group",
                      "id": "entries"
                    }
                  }
                ]
              },
              "entry": {
                "tag": "a",
                "class": "entry list-group-item",
                "onclick": "%click%",
                "style": "cursor: pointer",
                "inner": {
                  "class": "title"
                }
              }
            },
            "css": [ "ccm.load",
              "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css",
              { "context": "head", "url": "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/font-face.css" }
            ]
          }
        }
      },
      "details": [ "ccm.component", "https://ccmjs.github.io/akless-components/content/versions/ccm.content-5.0.0.js", {
        "inner": {
          "inner": [
            { "tag": "br" },
            {
              "tag": "table",
              "class": "table table-striped",
              "inner": {
                "tag": "tbody",
                "inner": [
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "Title"
                      },
                      {
                        "tag": "td",
                        "inner": "%title%"
                      }
                    ]
                  },
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "Name"
                      },
                      {
                        "tag": "td",
                        "inner": "%key%"
                      }
                    ]
                  },
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "Version"
                      },
                      {
                        "tag": "td",
                        "inner": "%version%"
                      }
                    ]
                  },
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "URL"
                      },
                      {
                        "tag": "td",
                        "inner": {
                          "tag": "a",
                          "target": "_blank",
                          "href": "%url%",
                          "inner": "%url%"
                        }
                      }
                    ]
                  },
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "Developer"
                      },
                      {
                        "tag": "td",
                        "inner": "%developer%"
                      }
                    ]
                  },
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "Website"
                      },
                      {
                        "tag": "td",
                        "inner": {
                          "tag": "a",
                          "target": "_blank",
                          "href": "%website%",
                          "inner": "%website%"
                        }
                      }
                    ]
                  },
                  {
                    "tag": "tr",
                    "inner": [
                      {
                        "tag": "th",
                        "inner": "License"
                      },
                      {
                        "tag": "td",
                        "inner": "%license%"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        "css": [ "ccm.load",
          "https://ccmjs.github.io/akless-components/libs/bootstrap/css/bootstrap.css",
          { "context": "head", "url": "https://ccmjs.github.io/akless-components/libs/bootstrap/css/font-face.css" }
        ]
      } ],
      "rating": [ "ccm.component", "https://ccmjs.github.io/tkless-components/star_rating/versions/ccm.star_rating-3.0.0.js", {
        "root": "name",
        "data": { "store": [ "ccm.store" ] },
        "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-8.0.0.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "guest" ] ]
      } ],
      "rating_result": [ "ccm.component", "https://ccmjs.github.io/tkless-components/star_rating_result/versions/ccm.star_rating_result-3.0.0.js", {
        "root": "name",
        "data": { "store": [ "ccm.store" ] },
        "detailed": true
      } ],
      "commentary": [ "ccm.component", "https://ccmjs.github.io/tkless-components/comment/versions/ccm.comment-4.0.0.js", {
        "root": "name",
        "data": { "store": [ "ccm.store" ] },
        "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-8.0.0.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "guest" ] ]
      } ],
      "source": {},
      "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-8.0.0.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/user/resources/configs.js", "guest" ] ],
  //  "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-4.0.1.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/log/resources/configs.js", "greedy" ] ],
      "component_icon": "https://ccmjs.github.io/akless-components/dms/resources/component.png"
    },

    Instance: function () {

      let $;

      this.ready = async () => {

        // set shortcut to help functions
        $ = this.ccm.helper;

        // logging of 'ready' event
        this.logger && this.logger.log( 'ready', $.privatize( this, true ) );

      };

      this.start = async () => {

        /**
         * component dataset
         * @type {Object}
         */
        const dataset = await $.dataset( this.data );

        // logging of 'start' event
        this.logger && this.logger.log( 'start', $.clone( dataset ) );

        $.setContent( this.element, $.html( this.html.main, {
          icon: this.component_icon,
          title: dataset.title,
          version: dataset.version,
          developer: dataset.developer,
          abstract:  dataset.abstract
        } ) );

        // no store name for saving apps on server-side? => use component name as default
        if ( this.source.url && !this.source.name ) this.source.name = dataset.key;

        if ( !this.rating && !this.rating_result ) this.menu.ignore.buttons.data.entries[ 1 ].disabled = true;
        if ( !this.commentary                    ) this.menu.ignore.buttons.data.entries[ 2 ].disabled = true;
        if ( !dataset.ignore || !dataset.ignore.  demos || !dataset.ignore.  demos.length ) this.menu.ignore.buttons.data.entries[ 3 ].disabled = true;
        if ( !dataset.ignore || !dataset.ignore.builder || !dataset.ignore.builder.length ) this.menu.ignore.buttons.data.entries[ 4 ].disabled = true;
        await this.menu.component.start( $.integrate( {
          root: 'name',
          selected: 1,
          onclick: async event => {
            switch ( event.nr ) {
              case 1:
                await this.details.start( {
                  root: event.content.querySelector( '#details' ),
                  placeholder: dataset
                } );
                break;
              case 2:
                await this.rating_result.start( {
                  'data.key': dataset.key,
                  root: event.content.querySelector( '#rating_result' )
                } );
                await this.rating.start( {
                  root: event.content.querySelector( '#rating' ),
                  'data.key': dataset.key
                } );
                break;
              case 3:
                await this.commentary.start( {
                  root: event.content.querySelector( '#comment' ),
                  'data.key': dataset.key
                } );
                break;
              case 4:
                await renderDemos.call( this, event.content );
                break;
              case 5:
                await renderBuilder.call( this, event.content );
                break;
            }
          }
        }, this.menu.ignore.buttons ) );

        /**
         * renders demo section
         * @param {Element} element - demo section
         * @this Instance
         * @returns {Promise}
         */
        async function renderDemos( element ) {

          /**
           * ccm component object for creating demo apps
           * @type {Object}
           */
          let demo = await this.ccm.component( dataset.url );

          /**
           * website area for demo menu
           * @type {Element}
           */
          const menu_elem = element.querySelector( '#menu' );

          // render menu for demo selection
          await this.menu.component.start( $.integrate( {
            root: menu_elem,
            data: { entries: dataset.ignore.demos },
            selected: 1,
            onclick: async event => renderDemo( dataset.ignore.demos[ event.nr - 1 ].config )
          }, this.menu.ignore.list_group ) );
          $.prepend( menu_elem, $.html( { tag: 'b', inner: 'Choose Demo:' } ) );

          /**
           * renders a demo
           * @param {Object} config - demo instance configuration
           * @returns {Promise}
           */
          async function renderDemo( config ) {
            const proceed = demo => $.setContent( element.querySelector( '#demo' ), demo.root );
            const result = await demo.start( config, proceed ); result && proceed( result );
          }

        }

        /**
         * renders builder section
         * @param {Element} element
         * @this Instance
         * @returns {Promise}
         */
        async function renderBuilder( element ) {

          /**
           * website area for builder menu
           * @type {Element}
           */
          const menu_elem = element.querySelector( '#menu' );

          // render menu for demo selection
          await this.menu.component.start( $.integrate( {
            root: menu_elem,
            data: { entries: dataset.ignore.builder },
            selected: 1,
            onclick: async event => renderBuilder.call( this, dataset.ignore.builder[ event.nr - 1 ] )
          }, this.menu.ignore.list_group ) );
          $.prepend( menu_elem, $.html( { tag: 'b', inner: 'Choose Builder:' } ) );

          /**
           * renders a demo
           * @param {Object} builder - component url and instance configuration for builder
           * @this Instance
           * @returns {Promise}
           */
          async function renderBuilder( builder ) {

            await this.ccm.start( builder.url, {
              root: element.querySelector( '#builder' ),
              data: { store: [ 'ccm.store', this.source ] },
              app: [ 'ccm.component', dataset.url ],
              key: builder.config
            } );

          }

        }

      };
    }

  };

  let b="ccm."+component.name+(component.version?"-"+component.version.join("."):"")+".js";if(window.ccm&&null===window.ccm.files[b])return window.ccm.files[b]=component;(b=window.ccm&&window.ccm.components[component.name])&&b.ccm&&(component.ccm=b.ccm);"string"===typeof component.ccm&&(component.ccm={url:component.ccm});let c=(component.ccm.url.match(/(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)/)||["latest"])[0];if(window.ccm&&window.ccm[c])window.ccm[c].component(component);else{var a=document.createElement("script");document.head.appendChild(a);component.ccm.integrity&&a.setAttribute("integrity",component.ccm.integrity);component.ccm.crossorigin&&a.setAttribute("crossorigin",component.ccm.crossorigin);a.onload=function(){window.ccm[c].component(component);document.head.removeChild(a)};a.src=component.ccm.url}
} )();