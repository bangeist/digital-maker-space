/**
 * @overview configurations of ccm component for rendering fill-in-the-blank analytics
 * @author André Kless <andre.kless@web.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {

  "localhost": {
    "css": [ "ccm.load",
      "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/bootstrap.css",
      { "context": "head", "url": "https://ccmjs.github.io/tkless-components/libs/bootstrap/css/font-face.css" },
      "../cloze_analytics/resources/default.css"
    ],
    "store": [ "ccm.store", { "url": "http://localhost:8080", "store": "cloze_results" } ],
    "sections": {
      "results": "Show Results"
    },
    "menu": [ "ccm.instance", "../menu/ccm.menu.js", [ "ccm.get", "../menu/resources/configs.js", "bootstrap" ] ],
    "table": [ "ccm.component", "https://ccmjs.github.io/tkless-components/table/ccm.table.js" ],
    "user": [ "ccm.instance", "https://ccmjs.github.io/akless-components/user/versions/ccm.user-4.0.1.js", { "realm": "guest", "guest": "teacher", "logged_in": true } ],
    "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ],
    "onfinish": { "log": true, "restart": true }
  }

};