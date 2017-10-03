/**
 * @overview configurations of ccm component for rendering a kanban board
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "demo": {
    "css": [ "ccm.load", "https://akless.github.io/ccm-components/kanban_board/resources/default.css" ],
    "data": {
      "store": [ "ccm.store", { "store": "kanban_board", "url": "wss://ccm.inf.h-brs.de" } ],
      "key": "demo"
    },
    "kanban_card": [ "ccm.component", "../kanban_card/ccm.kanban_card.js", {
      "font": [ "ccm.load", { "context": "head", "url": "https://akless.github.io/ccm-components/libs/weblysleekui/font.css" } ],
      "css": [ "ccm.load", "https://akless.github.io/ccm-components/kanban_card/resources/weblysleek.css" ],
      "data": {
        "store": [ "ccm.store", { "store": "kanban_card", "url": "wss://ccm.inf.h-brs.de" } ],
        "permission_settings": { "access": "group" }
      },
      "logger": [ "ccm.instance", "https://akless.github.io/ccm-components/log/versions/ccm.log-1.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/log/resources/configs.min.js", "greedy" ] ]
    } ]
  },
  "local": {
    "css": [ "ccm.load", "../kanban_board/resources/default.css" ],
    "data": {
      "store": [ "ccm.store", "../kanban_board/resources/datasets.js" ],
      "key": "local"
    },
    "kanban_card": [ "ccm.component", "../kanban_card/ccm.kanban_card.js", {
      "font": [ "ccm.load", { "context": "head", "url": "../libs/weblysleekui/font.css" } ],
      "css": [ "ccm.load", "../kanban_card/resources/weblysleek.css" ],
      "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ]
    } ]
  }
};