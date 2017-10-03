/**
 * @overview configurations of ccm component for rendering a realtime kanban board
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "demo": {
    "css": [ "ccm.load", "https://akless.github.io/ccm-components/kanban_board/resources/default.css" ],
    "data": {
      "store": [ "ccm.store", "https://akless.github.io/ccm-components/kanban_board/resources/datasets.min.js" ],
      "key": "demo"
    }
  },
  "local": {
    "css": [ "ccm.load", "../kanban_board/resources/default.css" ],
    "data": {
      "store": [ "ccm.store", { "store": "kanban_board", "url": "wss://ccm.inf.h-brs.de" } ],
      "key": "local"
    }
  }
};