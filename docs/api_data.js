define({ "api": [
  {
    "type": "all",
    "url": "v1/status",
    "title": "Check Status",
    "name": "Status",
    "group": "General",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>OK</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/index.js",
    "groupTitle": "General"
  },
  {
    "type": "post",
    "url": "v1/fortnitepy/hit",
    "title": "Add Hit",
    "description": "<p>Add Hit to Database</p>",
    "name": "AddHit",
    "group": "fortnitepy",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Internal Server Error 500": [
          {
            "group": "Internal Server Error 500",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/fortnitepy/hit.route.js",
    "groupTitle": "fortnitepy"
  },
  {
    "type": "get",
    "url": "v1/fortnitepy/hit",
    "title": "Add Hit",
    "description": "<p>Add Hit to Database</p>",
    "name": "AddHit",
    "group": "fortnitepy",
    "version": "1.1.1",
    "error": {
      "fields": {
        "Method Not Allowed 405": [
          {
            "group": "Method Not Allowed 405",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>405</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/fortnitepy/hit.route.js",
    "groupTitle": "fortnitepy"
  },
  {
    "type": "all",
    "url": "v1/fortnitepy/status",
    "title": "Check Status",
    "name": "Status",
    "group": "fortnitepy",
    "version": "1.1.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>fortnitepy OK</p>"
          }
        ]
      }
    },
    "filename": "src/api/routes/v1/fortnitepy/index.js",
    "groupTitle": "fortnitepy"
  }
] });
