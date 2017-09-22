/**
 * @overview unit tests of ccm component to render a predefined content
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ 'tests.js' ] = {
  setup: function ( suite, callback ) {
    suite.ccm.component( '../content/ccm.content.js', function ( component ) {
      suite.component = component;
      callback();
    } );
  },
  fundamental: {
    tests: {
      componentName: function ( suite ) {
        suite.component.instance( function ( instance ) {
          suite.assertSame( 'content', instance.component.name );
        } );
      },
      publicProperties: function ( suite ) {
        suite.component.instance( function ( instance ) {
          suite.assertEquals( [ 'start', 'ccm', 'id', 'index', 'component', 'root', 'element' ], Object.keys( instance ) );
        } );
      }
    }
  },
  render: {
    tests: {
      innerHTMLString: function ( suite ) {
        var inner ='Hello, <b>World</b>!';
        suite.component.start( { inner: inner }, function ( instance ) {
          suite.assertSame( inner, instance.element.innerHTML );
        } );
      },
      customElement: function ( suite ) {
        var script = '<script src="../blank/ccm.blank.js"></script>';
        var tag    = '<ccm-blank></ccm-blank>';
        var div1   = '<div><div id="element">Hello, World!</div></div>';
        var div2   = '<div></div>';
        suite.component.start( { inner: script + tag + tag }, function ( instance ) {
          if ( suite.ccm.helper.isFirefox() )
            suite.assertSame( script + div1 + div1, instance.element.innerHTML );
          else
            suite.assertSame( script + div2 + div2, instance.element.innerHTML );
        } );
      }
    }
  }
};