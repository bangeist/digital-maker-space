/**
 * @overview <i>ccm</i> component for rendering a kanban card
 * @author André Kless <andre.kless@web.de> 2016-2017
 * @license The MIT License (MIT)
 * @version latest (1.0.0)
 * TODO: declarative way
 * TODO: docu comments
 * TODO: logging
 * TODO: unit tests
 */

( function () {

  var ccm_version = '9.0.0';
  var ccm_url     = 'https://akless.github.io/ccm/ccm.min.js';

  var component_name = 'kanban_card';
  var component_obj  = {

    name: component_name,

    config: {

      html_templates: {
        "main": {
          "id": "main",
          "inner": [
            {
              "id": "header",
              "inner": [
                {
                  "id": "title",
                  "class": "entry",
                  "inner": [
                    { "id": "status" },
                    {
                      "class": "value",
                      "inner": "%title%",
                      "contenteditable": true,
                      "oninput": "%input_title%"
                    }
                  ]
                },
                {
                  "id": "owner",
                  "class": "entry",
                  "inner": [
                    {
                      "class": "value",
                      "inner": "%owner%",
                      "contenteditable": true,
                      "onfocus": "%focus_owner%"
                    },
                    { "class": "fa fa-user" }
                  ]
                }
              ]
            },
            {
              "id": "content",
              "inner": {
                "id": "summary",
                "class": "entry",
                "inner": {
                  "class": "value",
                  "inner": "%summary%",
                  "contenteditable": true,
                  "oninput": "%input_summary%"
                }
              }
            },
            {
              "id": "footer",
              "inner": [
                {
                  "id": "priority",
                  "class": "entry",
                  "inner": {
                    "class": "value",
                    "inner": "%priority%",
                    "contenteditable": true,
                    "onfocus": "%focus_priority%"
                  }
                },
                {
                  "id": "deadline",
                  "class": "entry",
                  "inner": [
                    {
                      "class": "value",
                      "inner": "%deadline%",
                      "contenteditable": true,
                      "onfocus": "%focus_deadline%"
                    },
                    { "class": "fa fa-calendar-check-o" }
                  ]
                }
              ]
            }
          ]
        }
      },
      css_layout: [ 'ccm.load',  'layouts/default.css' ],
      data: {
        store: [ 'ccm.store', { /*local: 'https://akless.github.io/ccm-components/kanban_card/kanban_card_datastore.min.js',*/ store: 'kanban_cards', url: 'wss://ccm.inf.h-brs.de' } ],
        key: 'homework',
        permission_settings: {
          access: 'group'
        }
      },
      icons: [ 'ccm.load', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css', { url: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css', context: document.head } ],
      members: [ 'John', 'Jane' ],
      priorities: [ 'A', 'B', 'C' ],
      user: [ 'ccm.instance', 'https://akless.github.io/ccm-components/user/ccm.user.min.js' ]

    },

    Instance: function () {

      var self = this;
      var my;           // contains privatized instance members

      this.init = function ( callback ) {

        // listen to datastore change event => update own content
        self.data.store.onchange = function ( dataset ) {

          if ( !my ) return; my.dataset = dataset;

          Object.keys( my.dataset ).map( refresh );

          function refresh( prop ) {

            var elem = self.element.querySelector( '#' + prop + ' .value' );
            if ( elem && elem.innerHTML !== my.dataset[ prop ] ) elem.innerHTML = my.dataset[ prop ];

          }

        };

        callback();
      };

      this.ready = function ( callback ) {

        // privatize all possible instance members
        my = self.ccm.helper.privatize( self );

        callback();
      };

      this.start = function ( callback ) {

        self.ccm.helper.dataset( my.data, function ( dataset ) {

          var restored;
          my.dataset = dataset;

          self.ccm.helper.setContent( self.element, self.ccm.helper.html( my.html_templates.main, self.ccm.helper.integrate( {

            title:    '',
            owner:    '',
            summary:  '',
            priority: '',
            deadline: '',

            input_title:    function () { empty ( this ); update( 'title', this.innerHTML ); },
            focus_owner:    function () { select( this, true ); },
            input_summary:  function () { empty ( this ); update( 'summary', this.innerHTML ); },
            focus_priority: function () { select( this, false ); },
            focus_deadline: function () { input ( this ); }

          }, self.ccm.helper.clone( my.dataset ), true ) ) );

          empty( self.element.querySelector( '#title .value' ) );
          empty( self.element.querySelector( '#summary .value' ) );

          if ( callback ) callback();

          function empty( elem ) {

            if ( elem.innerHTML.trim().replace( /<br>|<div>|<\/div>/g, '' ) === '' ) elem.innerHTML = '';

          }

          function update( prop, value ) {

            if ( self.user ) self.user.login( proceed ); else proceed();

            function proceed() {

              status();
              my.dataset[ prop ] = value.trim();
              if ( self.user && !my.dataset._ ) my.dataset._ = self.ccm.helper.integrate( { creator: self.user.data().user, group: self.ccm.helper.transformStringArray( my.members ) }, my.data.permission_settings );
              my.data.store.set( my.dataset, status );

              function status( finished ) {

                self.ccm.helper.setContent( self.element.querySelector( '#status' ), finished ? '' : self.ccm.helper.loading( self ) );

              }

            }

          }

          function select( elem, owner_or_prio ) {

            restored = false;

            var entries = [ { tag: 'option' } ];

            my[ owner_or_prio ? 'members' : 'priorities' ].map( function ( entry ) {

              entries.push( { tag: 'option', inner: entry, selected: entry === my.dataset[ owner_or_prio ? 'owner' : 'priority' ] || '' } );

            } );

            elem.parentNode.replaceChild( self.ccm.helper.protect( self.ccm.helper.html( { tag: 'select', inner: entries, onchange: onChange, onblur: onBlur } ) ), elem );

            self.element.querySelector( 'select' ).focus();

            function onChange() {

              elem.innerHTML = this.value;
              restore( 'select', elem );
              update( owner_or_prio ? 'owner' : 'priority', this.value );

            }

            function onBlur() {

              restore( 'select', elem );

            }

          }

          function input( elem ) {

            restored = false;

            elem.parentNode.replaceChild( self.ccm.helper.protect( self.ccm.helper.html( { tag: 'input', type: 'date', value: my.dataset.deadline || '', oninput: onInput, onblur: onBlur } ) ), elem );

            self.element.querySelector( 'input' ).focus();

            function onInput() {

              elem.innerHTML = this.value;
              restore( 'input', elem );
              update( 'deadline', this.value );

            }

            function onBlur() {

              restore( 'input', elem );

            }

          }

          function restore( tag, elem ) {

            if ( restored ) return;

            var select = self.element.querySelector( tag );
            var parent = select.parentNode;

            restored = true;
            parent.replaceChild( elem, select );

          }

        } );

      };

    }

  };

  var namespace = window.ccm && ccm.components[ component_name ]; if ( namespace ) { if ( namespace.ccm_version ) ccm_version = namespace.ccm_version; if ( namespace.ccm_url ) ccm_url = namespace.ccm_url; }
  if ( !window.ccm || !ccm[ ccm_version ] ) { var tag = document.createElement( 'script' ); document.head.appendChild( tag ); tag.onload = register; tag.src = ccm_url; } else register();
  function register() { ccm[ ccm_version ].component( component_obj ); }
}() );