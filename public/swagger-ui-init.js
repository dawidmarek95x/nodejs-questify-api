
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.1",
    "info": {
      "version": "0.1.0",
      "title": "Questify API docs",
      "description": "This is the API documentation for the 'Questify' project. [Backend GitHub repository](https://github.com/dawidmarek95x/nodejs-questify-api)",
      "license": {
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT"
      },
      "contact": {
        "name": "Dawid Marek",
        "email": "dawid.marek95x@gmail.com"
      }
    },
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "servers": [
      {
        "url": "https://questify-api.vercel.app/"
      }
    ],
    "tags": [
      {
        "name": "Auth",
        "description": "Authorization endpoints"
      },
      {
        "name": "Card",
        "description": "Card endpoints"
      }
    ],
    "paths": {
      "/auth/register": {
        "post": {
          "tags": [
            "Auth"
          ],
          "summary": "User registration",
          "parameters": [],
          "requestBody": {
            "description": "Registration's object",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RegistrationRequest"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/RegistrationResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Bad request (invalid request body)",
              "content": {}
            },
            "409": {
              "description": "Provided email already exists",
              "content": {}
            }
          }
        }
      },
      "/auth/login": {
        "post": {
          "tags": [
            "Auth"
          ],
          "summary": "User authentication",
          "parameters": [],
          "requestBody": {
            "description": "Authentication's object",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LoginRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/LoginResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Bad request (invalid request body)",
              "content": {}
            },
            "403": {
              "description": "Email doesn't exist / Password is wrong",
              "content": {}
            }
          }
        }
      },
      "/auth/logout": {
        "post": {
          "tags": [
            "Auth"
          ],
          "summary": "Logout",
          "security": [
            {
              "Bearer": []
            }
          ],
          "parameters": [],
          "responses": {
            "204": {
              "description": "Successful operation",
              "content": {}
            },
            "400": {
              "description": "No token provided",
              "content": {}
            },
            "401": {
              "description": "Unauthorized (invalid access token)",
              "content": {}
            },
            "404": {
              "description": "Invalid user / Invalid session",
              "content": {}
            }
          }
        }
      },
      "/card": {
        "post": {
          "tags": [
            "Card"
          ],
          "summary": "Create card",
          "security": [
            {
              "Bearer": []
            }
          ],
          "parameters": [],
          "requestBody": {
            "description": "Card's object",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CardRequest"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CardResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Bad request (invalid request body)",
              "content": {}
            },
            "404": {
              "description": "Invalid user / Invalid session",
              "content": {}
            }
          }
        },
        "patch": {
          "tags": [
            "Card"
          ],
          "summary": "Edit card",
          "security": [
            {
              "Bearer": []
            }
          ],
          "parameters": [
            {
              "in": "path",
              "name": "cardId",
              "required": true
            }
          ],
          "requestBody": {
            "description": "Card's object",
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/EditCardRequest"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/EditCardResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Bad request (invalid request body or 'cardId')",
              "content": {}
            },
            "404": {
              "description": "Invalid user / Invalid session",
              "content": {}
            }
          }
        },
        "delete": {
          "tags": [
            "Card"
          ],
          "summary": "Delete card",
          "security": [
            {
              "Bearer": []
            }
          ],
          "parameters": [
            {
              "in": "path",
              "name": "cardId",
              "required": true
            }
          ],
          "responses": {
            "204": {
              "description": "Successful operation",
              "content": {}
            },
            "400": {
              "description": "Bad request (invalid request body or 'cardId')",
              "content": {}
            },
            "404": {
              "description": "Invalid user / Invalid session",
              "content": {}
            }
          }
        },
        "get": {
          "tags": [
            "Card"
          ],
          "summary": "Get all user card",
          "security": [
            {
              "Bearer": []
            }
          ],
          "parameters": [],
          "responses": {
            "201": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/GetCardResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Bad request (no token provided)",
              "content": {}
            },
            "404": {
              "description": "Invalid user / Invalid session",
              "content": {}
            }
          }
        }
      },
      "/card/complete": {
        "patch": {
          "tags": [
            "Card"
          ],
          "summary": "Confirm that card is completed",
          "security": [
            {
              "Bearer": []
            }
          ],
          "parameters": [
            {
              "in": "path",
              "name": "cardId",
              "required": true
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CompleteCardResponse"
                  }
                }
              }
            },
            "400": {
              "description": "Bad request (invalid request body or 'cardId')",
              "content": {}
            },
            "404": {
              "description": "Invalid user / Invalid session",
              "content": {}
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "RegistrationRequest": {
          "required": [
            "email",
            "password"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "description": "User's email",
              "format": "email",
              "minimum": 3,
              "maximum": 254
            },
            "password": {
              "type": "string",
              "description": "User's password",
              "example": "qwerty123",
              "minimum": 8,
              "maximum": 100
            }
          }
        },
        "RegistrationResponse": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "description": "User's email",
              "format": "email"
            },
            "id": {
              "type": "string",
              "description": "User's id",
              "example": "507f1f77bcf86cd799439011"
            }
          }
        },
        "LoginRequest": {
          "required": [
            "email",
            "password"
          ],
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "description": "User's email",
              "format": "email"
            },
            "password": {
              "type": "string",
              "description": "User's password",
              "example": "qwerty123"
            }
          }
        },
        "LoginResponse": {
          "type": "object",
          "properties": {
            "accessToken": {
              "type": "string",
              "description": "Session's access token (needed for all requests)",
              "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmMyMDg1YmQwOTM2NTI4MTA3Y2UyNzQiLCJzaWQiOiI1ZmMyZDJmY2UxZDIwNTA2NzAyYmRkMjIiLCJpYXQiOjE2MDY2MDM1MTYsImV4cCI6MTYwNjYwNzExNn0.rJ_QjU4KvA76H96RHsvOBChK0Vjbd0NmqjMxdQVJIXA"
            },
            "refreshToken": {
              "type": "string",
              "description": "Session's refresh token (needed for /auth/refresh)",
              "example": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmMyMDg1YmQwOTM2NTI4MTA3Y2UyNzQiLCJzaWQiOiI1ZmMyZDJmY2UxZDIwNTA2NzAyYmRkMjIiLCJpYXQiOjE2MDY2MDM1MTYsImV4cCI6MTYwNjYwNzExNn0.rJ_QjU4KvA76H96RHsvOBChK0Vjbd0NmqjMxdQVJIXB"
            },
            "sid": {
              "type": "string",
              "description": "Session's id (needed for /auth/refresh)",
              "example": "507f1f77bcf86cd799439010"
            },
            "userData": {
              "type": "object",
              "properties": {
                "email": {
                  "type": "string",
                  "description": "User's email",
                  "format": "email"
                },
                "id": {
                  "type": "string",
                  "description": "User's id",
                  "example": "507f1f77bcf86cd799439011"
                },
                "cards": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "description": "User's card",
                    "properties": {
                      "title": {
                        "type": "string",
                        "description": "Card's title",
                        "example": "Take out the trash"
                      },
                      "difficulty": {
                        "type": "string",
                        "description": "Card's difficulty",
                        "enum": [
                          "Easy",
                          "Normal",
                          "Hard"
                        ]
                      },
                      "date": {
                        "type": "string",
                        "description": "Card's date (deadline, if card is challenge)",
                        "example": "2020-12-31"
                      },
                      "time": {
                        "type": "string",
                        "description": "Card's time (deadline, if card is challenge)",
                        "example": "20:30"
                      },
                      "status": {
                        "type": "string",
                        "description": "Card's status",
                        "enum": [
                          "Incomplete",
                          "Complete"
                        ]
                      },
                      "type": {
                        "type": "string",
                        "description": "Card's type",
                        "enum": [
                          "Task",
                          "Challenge"
                        ]
                      },
                      "_id": {
                        "type": "string",
                        "description": "Card's id",
                        "example": "507f1f77bcf86cd799439013"
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "CardRequest": {
          "required": [
            "title",
            "difficulty",
            "type",
            "date"
          ],
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "description": "Card's title",
              "example": "Take out the trash",
              "minimum": 2,
              "maximum": 100
            },
            "difficulty": {
              "type": "string",
              "description": "Card's difficulty",
              "enum": [
                "Easy",
                "Normal",
                "Hard"
              ]
            },
            "category": {
              "type": "string",
              "description": "Card's category",
              "enum": [
                "Stuff",
                "Family",
                "Health",
                "Learning",
                "Leisure",
                "Work"
              ]
            },
            "date": {
              "type": "string",
              "description": "Card's date (deadline, if card is challenge)",
              "example": "2020-12-31"
            },
            "time": {
              "type": "string",
              "description": "Card's time (deadline, if card is challenge)",
              "example": "20:30"
            },
            "type": {
              "type": "string",
              "description": "Card's type",
              "enum": [
                "Task",
                "Challenge"
              ]
            }
          }
        },
        "CardResponse": {
          "type": "object",
          "properties": {
            "createdCard": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "description": "Card's title",
                  "example": "Take out the trash"
                },
                "difficulty": {
                  "type": "string",
                  "description": "Card's difficulty",
                  "enum": [
                    "Easy",
                    "Normal",
                    "Hard"
                  ]
                },
                "category": {
                  "type": "string",
                  "description": "Card's category",
                  "enum": [
                    "Stuff",
                    "Family",
                    "Health",
                    "Learning",
                    "Leisure",
                    "Work"
                  ]
                },
                "date": {
                  "type": "string",
                  "description": "Card's date (deadline, if card is challenge)",
                  "example": "2020-12-31"
                },
                "time": {
                  "type": "string",
                  "description": "Card's time (deadline, if card is challenge)",
                  "example": "20:30"
                },
                "status": {
                  "type": "string",
                  "description": "Card's status",
                  "enum": [
                    "Incomplete",
                    "Complete"
                  ]
                },
                "type": {
                  "type": "string",
                  "description": "Card's type",
                  "enum": [
                    "Task",
                    "Challenge"
                  ]
                },
                "_id": {
                  "type": "string",
                  "description": "Card's id",
                  "example": "507f1f77bcf86cd799439013"
                }
              }
            }
          }
        },
        "EditCardRequest": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string",
              "description": "Card's title",
              "example": "Take out the trash",
              "minimum": 2,
              "maximum": 100
            },
            "difficulty": {
              "type": "string",
              "description": "Card's difficulty",
              "enum": [
                "Easy",
                "Normal",
                "Hard"
              ]
            },
            "category": {
              "type": "string",
              "description": "Card's category",
              "enum": [
                "Stuff",
                "Family",
                "Health",
                "Learning",
                "Leisure",
                "Work"
              ]
            },
            "date": {
              "type": "string",
              "description": "Card's date (deadline, if card is challenge)",
              "example": "2020-12-31"
            },
            "time": {
              "type": "string",
              "description": "Card's time (deadline, if card is challenge)",
              "example": "20:30"
            },
            "type": {
              "type": "string",
              "description": "Card's type",
              "enum": [
                "Task",
                "Challenge"
              ]
            }
          }
        },
        "EditCardResponse": {
          "type": "object",
          "properties": {
            "editedCard": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "description": "Card's title",
                  "example": "Take out the trash"
                },
                "difficulty": {
                  "type": "string",
                  "description": "Card's difficulty",
                  "enum": [
                    "Easy",
                    "Normal",
                    "Hard"
                  ]
                },
                "category": {
                  "type": "string",
                  "description": "Card's category",
                  "enum": [
                    "Stuff",
                    "Family",
                    "Health",
                    "Learning",
                    "Leisure",
                    "Work"
                  ]
                },
                "date": {
                  "type": "string",
                  "description": "Card's date (deadline, if card is challenge)",
                  "example": "2020-12-31"
                },
                "time": {
                  "type": "string",
                  "description": "Card's time (deadline, if card is challenge)",
                  "example": "20:30"
                },
                "status": {
                  "type": "string",
                  "description": "Card's status",
                  "enum": [
                    "Incomplete",
                    "Complete"
                  ]
                },
                "type": {
                  "type": "string",
                  "description": "Card's type",
                  "enum": [
                    "Task",
                    "Challenge"
                  ]
                }
              }
            }
          }
        },
        "CompleteCardResponse": {
          "type": "object",
          "properties": {
            "editedCard": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "description": "Card's title",
                  "example": "Take out the trash"
                },
                "difficulty": {
                  "type": "string",
                  "description": "Card's difficulty",
                  "enum": [
                    "Easy",
                    "Normal",
                    "Hard"
                  ]
                },
                "category": {
                  "type": "string",
                  "description": "Card's category",
                  "enum": [
                    "Stuff",
                    "Family",
                    "Health",
                    "Learning",
                    "Leisure",
                    "Work"
                  ]
                },
                "date": {
                  "type": "string",
                  "description": "Card's date (deadline, if card is challenge)",
                  "example": "2020-12-31"
                },
                "time": {
                  "type": "string",
                  "description": "Card's time (deadline, if card is challenge)",
                  "example": "20:30"
                },
                "status": {
                  "type": "string",
                  "description": "Card's status",
                  "enum": [
                    "Incomplete",
                    "Complete"
                  ],
                  "example": "Complete"
                },
                "type": {
                  "type": "string",
                  "description": "Card's type",
                  "enum": [
                    "Task",
                    "Challenge"
                  ]
                },
                "_id": {
                  "type": "string",
                  "description": "Card's id",
                  "example": "507f1f77bcf86cd799439013"
                }
              }
            }
          }
        },
        "GetCardResponse": {
          "type": "object",
          "properties": {
            "cards": {
              "type": "array",
              "items": {
                "type": "object",
                "description": "User's card",
                "properties": {
                  "title": {
                    "type": "string",
                    "description": "Card's title",
                    "example": "Take out the trash"
                  },
                  "difficulty": {
                    "type": "string",
                    "description": "Card's difficulty",
                    "enum": [
                      "Easy",
                      "Normal",
                      "Hard"
                    ]
                  },
                  "date": {
                    "type": "string",
                    "description": "Card's date (deadline, if card is challenge)",
                    "example": "2020-12-31"
                  },
                  "time": {
                    "type": "string",
                    "description": "Card's time (deadline, if card is challenge)",
                    "example": "20:30"
                  },
                  "status": {
                    "type": "string",
                    "description": "Card's status",
                    "enum": [
                      "Incomplete",
                      "Complete"
                    ]
                  },
                  "type": {
                    "type": "string",
                    "description": "Card's type",
                    "enum": [
                      "Task",
                      "Challenge"
                    ]
                  },
                  "_id": {
                    "type": "string",
                    "description": "Card's id",
                    "example": "507f1f77bcf86cd799439013"
                  }
                }
              }
            }
          }
        }
      },
      "securitySchemes": {
        "Bearer": {
          "type": "http",
          "scheme": "bearer",
          "bearerFormat": "JWT"
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
