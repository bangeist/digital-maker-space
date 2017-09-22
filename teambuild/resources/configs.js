/**
 * @overview configurations of ccm component for realtime team building
 * @author André Kless <andre.kless@web.de> 2017
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {
  "demo": {
    "data": {
      "store": [ "ccm.store", { "store": "teambuild", "url": "wss://ccm.inf.h-brs.de" } ],
      "key": "demo"
    },
    "user": [ "ccm.instance", "https://akless.github.io/ccm-components/user/versions/ccm.user-1.2.0.min.js", { "logged_in": true, "sign_on": "demo" } ],
    "logger": [ "ccm.instance", "https://akless.github.io/ccm-components/log/versions/ccm.log-1.0.0.min.js", [ "ccm.get", "https://akless.github.io/ccm-components/log/resources/log_configs.min.js", "greedy" ] ]
  },
  "local": {
    "data": {
      "store": [ "ccm.store", { "store": "teambuild", "url": "wss://ccm.inf.h-brs.de" } ],
      "key": "demo"
    },
    "user": [ "ccm.instance", "../user/ccm.user.js", { "logged_in": true, "sign_on": "demo" } ],
    "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ]
  }
};