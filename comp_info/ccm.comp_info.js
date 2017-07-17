/**
 * @overview <i>ccm</i> component for rendering component informations
 * @author André Kless <andre.kless@web.de> 2017
 * @author Tea Kless <tea.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

( function () {

  var ccm_version = '9.0.0';
  var ccm_url     = 'https://akless.github.io/ccm/ccm.min.js';

  var component_name = 'comp_info';
  var component_obj  = {

    name: component_name,

    config: {

      html_templates: {
        "main": {
          "id": "main",
          "class": "container",
          "inner": [
            {
              "tag": "header",
              "class": "media",
              "inner": [
                {
                  "class": "media-left",
                  "tag": "section",
                  "id": "logo",
                  "inner":
                    {
                      "tag": "a",
                      "inner":
                        {
                          "tag": "img",
                          "src": "%logo%"
                        }
                    }
                },
                {
                  "class": "media-body",
                  "tag": "section",
                  "id": "trailer",
                  "inner": [
                    {
                      "tag": "h4",
                      "id": "title",
                      "class": "media-heading",
                      "inner": "%title%"
                    },
                    {
                      "tag": "a",
                      "href": "%link_to_developer%",
                      "id": "developer",
                      "inner": [
                          "%developer%",
                        {
                          "tag":"span",
                          "class": "glyphicon glyphicon-chevron-right"
                        }
                      ]

                    }
                  ]
                }
              ]
            },
            {
              "tag": "hr"
            },
            {
              "class": "navigation text-center",
              "inner": {
                "class": "btn-group",
                "inner":[
                  {
                    "tag": "button",
                    "typ": "button",
                    "class": "btn btn-primary",
                    "inner": "Information",
                    "onclick": "%info%"
                  },
                  {
                    "tag": "button",
                    "typ": "button",
                    "class": "btn btn-primary",
                    "inner": "Preview",
                    "onclick": "%preview%"
                  },
                  {
                    "tag": "button",
                    "typ": "button",
                    "class": "btn btn-primary",
                    "inner": "Demo",
                    "onclick": "%demo%"
                  }
                ]
              }
            },
            {
              "id": "info",
              "inner": [
                {
                  "tag": "h2",
                  "inner": "Information"
                },
                {
                  "tag": "hr"
                },
                {
                  "tag": "p",
                  "class": "lead",
                  "inner": "%abstract%"
                },
                {
                  "tag": "h4",
                  "inner": "Description"
                },
                {
                  "tag": "p",
                  "inner": "description"
                },
                {
                  "tag": "h4",
                  "inner": "Details"
                },
                {
                  "tag": "table",
                  "class": "table table-striped",
                  "inner": {
                    "tag": "tbody",
                    "class": "col-md-12",
                    "inner": [
                      {
                        "tag": "tr",
                        "inner": [
                          {
                            "tag": "th",
                            "inner": "Component name"
                          },
                          {
                            "tag": "td",
                            "inner": "%name%"
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
                              "href": "%url%",
                              "inner": "%u%"
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
                            "inner": "LICENSE"
                          },
                          {
                            "tag": "td",
                            "inner": "%license%"
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "class": "text-right",
                  "inner": {
                    "tag": "a",
                    "href": "#main",
                    "inner": {
                      "tag": "span",
                      "class": "label label-default",
                      "inner": "back to top",
                      "onclick": "%top%"
                    }
                  }
                }
              ]
            },
            {
              "id": "prev",
              "inner": [
                {
                  "tag": "h3",
                  "inner": "Preview"
                },
                {
                  "tag": "hr"
                },
                {
                  "class": "row",
                  "inner": [
                    {
                      "class": "col-xs-6 col-md-3",
                      "inner":{
                        "tag": "a",
                        "class": "thumbnail",
                        "href": "https://placeholder.com",
                        "inner":{
                          "tag": "img",
                          "src": "http://via.placeholder.com/650x850"
                        }
                      }
                    },
                    {
                      "class": "col-xs-6 col-md-3",
                      "inner":{
                        "tag": "a",
                        "class": "thumbnail",
                        "href": "https://placeholder.com",
                        "inner":{
                          "tag": "img",
                          "src": "http://via.placeholder.com/650x850"
                        }
                      }
                    },
                    {
                      "class": "col-xs-6 col-md-3",
                      "inner":{
                        "tag": "a",
                        "class": "thumbnail",
                        "href": "https://placeholder.com",
                        "inner":{
                          "tag": "img",
                          "src": "http://via.placeholder.com/650x850"
                        }
                      }
                    }
                  ]

                },
                {
                  "class": "text-right",
                  "inner": {
                    "tag": "a",
                    "href": "#main",
                    "inner": {
                      "tag": "span",
                      "class": "label label-default",
                      "inner": "back to top",
                      "onclick": "%to%"
                    }
                  }
                }
              ]
            },
            {
              "id": "demo",
              "inner":[
                {
                  "tag": "h3",
                  "inner": "Live demo with demo data"
                },
                {
                  "tag": "hr"
                },
                {
                  "id": "demo_section"
                },
                {
                  "class": "text-right",
                  "inner": {
                    "tag": "a",
                    "href": "#main",
                    "inner": {
                      "tag": "span",
                      "class": "label label-default",
                      "inner": "back to top",
                      "onclick": "%t%"
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      data: { store: [ 'ccm.store' ] },
      placeholder: {
        name: 'Name',
        url: 'URL',
        developer: 'Developer',
        licence: 'Licence'
      },
      bootstrap: [ 'ccm.load', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css', { context: 'head', url: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css' } ]

  //  compact: true

    },

    Instance: function () {

      var self = this;
      var my;           // contains privatized instance members

      this.ready = function ( callback ) {

        // privatize all possible instance members
        my = self.ccm.helper.privatize( self );

        callback();
      };

      this.start = function ( callback ) {

        self.ccm.helper.dataset( my.data, function ( dataset ) {

          var main_templ = self.ccm.helper.clone( my.html_templates.main );

          if ( my.compact ) main_templ = main_templ.inner[ 0 ];

          var main_elem = self.ccm.helper.html( main_templ, {
            logo: dataset.logo,
            title: dataset.title,
            link_to_developer: dataset.link,
            developer: dataset.developer,
            abstract: dataset.abstract,
            name: dataset.name,
            version: dataset.version,
            url: dataset.url,
            u: dataset.url,
            license: dataset.license,
            info: function () {
              self.element.querySelector( '#info' ).scrollIntoView();
            },
            preview: function () {
              self.element.querySelector( '#prev' ).scrollIntoView();
            },
            demo: function () {
              self.element.querySelector( '#demo' ).scrollIntoView();
            },
            top: function () {
              self.element.querySelector( '#main' ).scrollIntoView();
            },
            to: function () {
              self.element.querySelector( '#main' ).scrollIntoView();
            },
            t: function () {
              self.element.querySelector( '#main' ).scrollIntoView();
            }

          } );

          if ( my.compact ) { self.ccm.helper.setContent( self.element, main_elem ); if ( callback ) callback(); return; }

          self.ccm.start( dataset.url, dataset.demo, function ( instance ) {

            self.ccm.helper.setContent( main_elem.querySelector( '#demo_section' ), instance.root );

            self.ccm.helper.setContent( self.element, main_elem );

            if ( callback ) callback();

          } );

        } );

      };

    }

  };

  var namespace = window.ccm && ccm.components[ component_name ]; if ( namespace ) { if ( namespace.ccm_version ) ccm_version = namespace.ccm_version; if ( namespace.ccm_url ) ccm_url = namespace.ccm_url; }
  if ( !window.ccm || !ccm[ ccm_version ] ) { var tag = document.createElement( 'script' ); document.head.appendChild( tag ); tag.onload = register; tag.src = ccm_url; } else register();
  function register() { ccm[ ccm_version ].component( component_obj ); }
}() );