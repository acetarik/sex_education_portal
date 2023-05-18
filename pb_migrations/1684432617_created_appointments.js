migrate((db) => {
  const collection = new Collection({
    "id": "dqkh0kj6oakmr04",
    "created": "2023-05-18 17:56:57.018Z",
    "updated": "2023-05-18 17:56:57.018Z",
    "name": "appointments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lldrbxoh",
        "name": "date_time",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "qzhkvgsp",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "zef0vfzxthd3msf",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "vgidfmuc",
        "name": "consultant",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "zef0vfzxthd3msf",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "xuvrt7vh",
        "name": "reason",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "68yl51or",
        "name": "time_slots",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dqkh0kj6oakmr04");

  return dao.deleteCollection(collection);
})
