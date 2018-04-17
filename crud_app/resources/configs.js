/**
 * @overview configurations of ccm component for Create/Read/Update/Delete a Modular App
 * @author André Kless <andre.kless@web.de> 2018
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "cloze": {
    "builder": [ "ccm.component", "https://ccmjs.github.io/akless-components/cloze_builder/versions/ccm.cloze_builder-1.6.0.min.js", { "submit_button": false } ],
    "store": [ "ccm.store", { "store": "w2c_cloze", "url": "https://ccm.inf.h-brs.de" } ],
    "url": "https://ccmjs.github.io/akless-components/cloze/versions/ccm.cloze-2.2.0.min.js",
    "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-2.0.1.min.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/log/resources/configs.min.js", "greedy" ] ]
  },
  "pdf_viewer": {
    "builder": [ "ccm.component", "https://ccmjs.github.io/tkless-components/pdf_viewer_builder/versions/ccm.pdf_viewer_builder-1.0.0.min.js" ],
    "store": [ "ccm.store", { "store": "w2c_pdf_viewer", "url": "https://ccm.inf.h-brs.de" } ],
    "url": "https://ccmjs.github.io/tkless-components/pdf_viewer/versions/ccm.pdf_viewer-2.0.0.js"
  },
  "teambuild": {
    "builder": [ "ccm.component", "https://ccmjs.github.io/akless-components/teambuild_builder/versions/ccm.teambuild_builder-2.3.0.min.js" ],
    "store": [ "ccm.store", { "store": "w2c_teambuild", "url": "https://ccm.inf.h-brs.de" } ],
    "url": "https://ccmjs.github.io/akless-components/teambuild/versions/ccm.teambuild-1.0.1.min.js",
    "logger": [ "ccm.instance", "https://ccmjs.github.io/akless-components/log/versions/ccm.log-2.0.1.min.js", [ "ccm.get", "https://ccmjs.github.io/akless-components/log/resources/configs.min.js", "greedy" ] ]
  }
};