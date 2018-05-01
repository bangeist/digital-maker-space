/**
 * @overview configurations of ccm component for Create/Read/Update/Delete a ccm-based app
 * @author André Kless <andre.kless@web.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "local": {
    "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ]
  },
  "localhost": {
    "store": [ "ccm.store", { "store": "cloze", "url": "http://localhost:8080" } ],
    "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ]
  },
  "demo": {
    "builder": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze_builder/versions/ccm.cloze_builder-2.1.3.js", { "submit_button": false } ],
    "store": [ "ccm.store", { "store": "cloze", "url": "https://ccm2.inf.h-brs.de" } ],
    "url": "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-4.0.0.js",
    "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-3.1.0.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/log/resources/configs.js", "greedy" ] ]
  }
};