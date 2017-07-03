/**
 * @overview example ccm component for the reuse of two ccm instances
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

( function () {

  var ccm_version = '9.0.0';
  var ccm_url     = '../../../ccm/ccm.js';

  var component_name = 'blank_blank';
  var component_obj  = {

    name: component_name,

    config: {
      instance_a: [ 'ccm.instance', 'https://akless.github.io/ccm-components/blank/ccm.blank.js' ],
      instance_b: [ 'ccm.instance', 'https://akless.github.io/ccm-components/blank/ccm.blank.js' ]
    },

    Instance: function () {

      this.start = function ( callback ) {

        this.element.appendChild( this.instance_a.root );
        this.instance_a.start();

        this.element.appendChild( this.instance_b.root );
        this.instance_b.start();

        if ( callback ) callback();
      };

    }

  };

  var namespace = window.ccm && ccm.components[ component_name ]; if ( namespace ) { if ( namespace.ccm_version ) ccm_version = namespace.ccm_version; if ( namespace.ccm_url ) ccm_url = namespace.ccm_url; }
  if ( !window.ccm || !ccm[ ccm_version ] ) { var tag = document.createElement( 'script' ); document.head.appendChild( tag ); tag.onload = register; tag.src = ccm_url; } else register();
  function register() { ccm[ ccm_version ].component( component_obj ); }
}() );