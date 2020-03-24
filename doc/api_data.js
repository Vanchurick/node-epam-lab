define({ "api": [
  {
    "type": "put",
    "url": "/addnote",
    "title": "add user note",
    "name": "AddNote",
    "group": "Note",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  authorization: {String}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Note",
            "description": "<ul> <li>created note.</li> </ul>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/noteRouter.js",
    "groupTitle": "Note"
  },
  {
    "type": "delete",
    "url": "/note/:id",
    "title": "remove user note",
    "name": "DeleteNote",
    "group": "Note",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  authorization: {String}\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Note's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Notes",
            "description": "<ul> <li>left notes.</li> </ul>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/noteRouter.js",
    "groupTitle": "Note"
  },
  {
    "type": "put",
    "url": "/note/:id",
    "title": "edit user note",
    "name": "EditNote",
    "group": "Note",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Note's unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"checked\": {Boolean},\n      \"text\": {String}\n    }\nYou can add just one parameter for editing if don't need edit both",
          "type": "json"
        }
      ]
    },
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  authorization: {String}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Note",
            "description": "<ul> <li>edited note.</li> </ul>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/noteRouter.js",
    "groupTitle": "Note"
  },
  {
    "type": "get",
    "url": "/me",
    "title": "Get information about user",
    "name": "GetUser",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  authorization: {String}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>info.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/me.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"username\": {String},\n  \"password\": {String}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/login.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "register new user",
    "name": "RegisterUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token.",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<ul> <li>created user.</li> </ul>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/registerUserRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/me",
    "title": "remove user",
    "name": "RemoveUser",
    "group": "User",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  authorization: {String}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/me.js",
    "groupTitle": "User"
  }
] });
