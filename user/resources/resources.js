/**
 * @overview data-based resources of ccm component for user authentication
 * @author André Kless <andre.kless@web.de> 2019
 * @license The MIT License (MIT)
 */

ccm.files[ 'resources.js' ] = {

  "cfg_local": {
    "css": [ "ccm.load",
      "../libs/bootstrap/css/bootstrap.css",
      { "context": "head", "url": "../libs/bootstrap/css/font-face.css" },
      "../user/resources/default.css"
    ],
    "html": [ "ccm.get", "../user/resources/resources.js", "html" ],
    "logger": [ "ccm.instance", "../log/ccm.log.js", [ "ccm.get", "../log/resources/configs.js", "greedy" ] ]
  },

  "cfg_guest": {
    "title": "Guest Mode: Please enter any username"
  },

  "cfg_pseudo": {
    "realm": "guest",
    "guest": true
  },

  "cfg_cloud": {
    "realm": "cloud",
    "url": "https://ccm2.inf.h-brs.de",
    "title": "Please enter username and password",
    "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ]
  },

  "cfg_hbrsinfkaul": {
    "realm": "hbrsinfkaul"
  },

  "cfg_hbrsinfpseudo": {
    "realm": "hbrsinfpseudo"
  },

  "cfg_lea": {
    "realm": "lea"
  },

  "cfg_compact": {
    "title": "Guest Mode: Please enter any username",
    "html.logged_in": {
      "id": "logged_in",
      "class": "row",
      "style": "float:none",
      "inner": {
        "id": "button",
        "class": "btn btn-default",
        "inner": [
          {
            "tag": "span",
            "id": "user",
            "inner": [
              { "class": "glyphicon glyphicon-user" },
              "%user%&#8196;"
            ]
          },
          {
            "tag": "span",
            "class": "glyphicon glyphicon-log-out",
          },
          "Logout"
        ],
        "onclick": "%click%"
      }
    },
    "html.logged_out": {
      "id": "logged_out",
      "style": "float:none",
      "inner": {
        "id": "button",
        "class": "btn btn-default",
        "inner": [
          {
            "tag": "span",
            "class": "glyphicon glyphicon-log-in"
          },
          "Login"
        ],
        "onclick": "%click%"
      }
    }
  },

  "html": {
    "logged_in": {
      "id": "logged_in",
      "class": "well well-sm",
      "inner": [
        {
          "id": "user",
          "inner": [
            { "class": "glyphicon glyphicon-user" },
            "%user%"
          ]
        },
        {
          "id": "button",
          "class": "btn btn-default btn-xs",
          "inner": [
            {
              "tag": "span",
              "class": "glyphicon glyphicon-log-out"
            },
            "Logout"
          ],
          "onclick": "%click%"
        }
      ]
    },
    "logged_out": {
      "id": "logged_out",
      "class": "well well-sm",
      "inner": {
        "id": "button",
        "class": "btn btn-default btn-xs",
        "inner": [
          {
            "tag": "span",
            "class": "glyphicon glyphicon-log-in"
          },
          "Login"
        ],
        "onclick": "%click%"
      }
    },
    "login": {
      "id": "login-form",
      "class": "container",
      "inner": [
        {
          "id": "loginbox",
          "class": "mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2",
          "inner": {
            "class": "panel panel-info",
            "inner": [
              {
                "class": "panel-heading",
                "inner": {
                  "class": "panel-title",
                  "inner": "%title%"
                }
              },
              {
                "class": "panel-body",
                "inner": [
                  {
                    "tag": "form",
                    "id": "loginform",
                    "class": "form-horizontal",
                    "role": "form",
                    "onsubmit": "%login%",
                    "inner": [
                      {
                        "id": "username-entry",
                        "class": "input-group",
                        "inner": [
                          {
                            "tag": "span",
                            "class": "input-group-addon",
                            "inner": {
                              "tag": "i",
                              "class": "glyphicon glyphicon-user"
                            }
                          },
                          {
                            "tag": "input",
                            "id": "login-username",
                            "type": "text",
                            "class": "form-control",
                            "name": "user",
                            "placeholder": "username",
                            "required": true
                          }
                        ]
                      },
                      {
                        "id": "password-entry",
                        "class": "input-group",
                        "inner": [
                          {
                            "tag": "span",
                            "class": "input-group-addon",
                            "inner": {
                              "tag": "i",
                              "class": "glyphicon glyphicon-lock"
                            }
                          },
                          {
                            "tag": "input",
                            "id": "login-password",
                            "type": "password",
                            "class": "form-control",
                            "name": "token",
                            "placeholder": "password",
                            "required": true
                          }
                        ]
                      },
                      {
                        "class": "form-group",
                        "inner": {
                          "class": "col-sm-12 controls",
                          "inner": [
                            {
                              "tag": "input",
                              "type": "submit",
                              "id": "btn-login",
                              "class": "btn btn-success",
                              "value": "Login"
                            },
                            {
                              "tag": "a",
                              "id": "btn-abort",
                              "class": "btn btn-warning",
                              "onclick": "%abort%",
                              "inner": "Abort"
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }

};