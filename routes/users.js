var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var json = [
      {
        "id": 1,
        "username": "john_doe",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "age": 30,
        "isVerified": true,
        "address": {
          "street": "123 Main St",
          "city": "Anytown",
          "state": "CA",
          "postalCode": "12345"
        },
        "hobbies": ["Reading", "Hiking", "Cooking"],
        "createdAt": "2022-01-15T14:30:00Z"
      },
      {
        "id": 2,
        "username": "jane_smith",
        "firstName": "Jane",
        "lastName": "Smith",
        "email": "jane.smith@example.com",
        "age": 28,
        "isVerified": false,
        "address": {
          "street": "456 Elm St",
          "city": "Another City",
          "state": "NY",
          "postalCode": "54321"
        },
        "hobbies": ["Painting", "Traveling"],
        "createdAt": "2022-02-20T10:45:00Z"
      },
      {
        "id": 3,
        "username": "alice_johnson",
        "firstName": "Alice",
        "lastName": "Johnson",
        "email": "alice.johnson@example.com",
        "age": 35,
        "isVerified": true,
        "address": {
          "street": "789 Oak St",
          "city": "Sometown",
          "state": "TX",
          "postalCode": "67890"
        },
        "hobbies": ["Swimming", "Photography", "Gardening"],
        "createdAt": "2022-03-25T09:15:00Z"
      },
      {
        "id": 4,
        "username": "bob_brown",
        "firstName": "Bob",
        "lastName": "Brown",
        "email": "bob.brown@example.com",
        "age": 40,
        "isVerified": false,
        "address": {
          "street": "101 Pine St",
          "city": "Someplace",
          "state": "FL",
          "postalCode": "11111"
        },
        "hobbies": ["Cycling", "Movies"],
        "createdAt": "2022-04-10T16:20:00Z"
      },
      {
        "id": 5,
        "username": "eva_wilson",
        "firstName": "Eva",
        "lastName": "Wilson",
        "email": "eva.wilson@example.com",
        "age": 27,
        "isVerified": true,
        "address": {
          "street": "222 Cedar St",
          "city": "Another Town",
          "state": "WA",
          "postalCode": "55555"
        },
        "hobbies": ["Singing", "Dancing"],
        "createdAt": "2022-05-05T08:10:00Z"
      },
      {
        "id": 6,
        "username": "michael_jackson",
        "firstName": "Michael",
        "lastName": "Jackson",
        "email": "michael.jackson@example.com",
        "age": 45,
        "isVerified": false,
        "address": {
          "street": "333 Broadway St",
          "city": "Metropolis",
          "state": "IL",
          "postalCode": "77777"
        },
        "hobbies": ["Music", "Dancing", "Moonwalking"],
        "createdAt": "2022-06-15T14:50:00Z"
      },
      {
        "id": 7,
        "username": "susan_smith",
        "firstName": "Susan",
        "lastName": "Smith",
        "email": "susan.smith@example.com",
        "age": 32,
        "isVerified": true,
        "address": {
          "street": "444 Oakwood Dr",
          "city": "Woodsville",
          "state": "NH",
          "postalCode": "99999"
        },
        "hobbies": ["Cooking", "Reading"],
        "createdAt": "2022-07-20T11:55:00Z"
      },
      {
        "id": 8,
        "username": "david_wilson",
        "firstName": "David",
        "lastName": "Wilson",
        "email": "david.wilson@example.com",
        "age": 38,
        "isVerified": false,
        "address": {
          "street": "555 Maple Ave",
          "city": "Maplewood",
          "state": "NJ",
          "postalCode": "44444"
        },
        "hobbies": ["Golf", "Traveling"],
        "createdAt": "2022-08-10T18:30:00Z"
      },
      {
        "id": 9,
        "username": "emily_jones",
        "firstName": "Emily",
        "lastName": "Jones",
        "email": "emily.jones@example.com",
        "age": 29,
        "isVerified": true,
        "address": {
          "street": "777 Pine Ave",
          "city": "Pineville",
          "state": "LA",
          "postalCode": "33333"
        },
        "hobbies": ["Biking", "Photography"],
        "createdAt": "2022-09-05T08:45:00Z"
      },
      {
        "id": 10,
        "username": "chris_smith",
        "firstName": "Chris",
        "lastName": "Smith",
        "email": "chris.smith@example.com",
        "age": 33,
        "isVerified": false,
        "address": {
          "street": "666 Elmwood Rd",
          "city": "Elmwood",
          "state": "OK",
          "postalCode": "22222"
        },
        "hobbies": ["Fishing", "Hiking"],
        "createdAt": "2022-10-15T15:15:00Z"
      },
      {
        "id": 11,
        "username": "laura_johnson",
        "firstName": "Laura",
        "lastName": "Johnson",
        "email": "laura.johnson@example.com",
        "age": 31,
        "isVerified": true,
        "address": {
          "street": "888 Willow Ln",
          "city": "Willowville",
          "state": "KS",
          "postalCode": "11111"
        },
        "hobbies": ["Yoga", "Reading", "Traveling"],
        "createdAt": "2022-11-20T09:25:00Z"
      },
      {
        "id": 12,
        "username": "mark_davis",
        "firstName": "Mark",
        "lastName": "Davis",
        "email": "mark.davis@example.com",
        "age": 42,
        "isVerified": false,
        "address": {
          "street": "999 Oak Ave",
          "city": "Oakland",
          "state": "CA",
          "postalCode": "55555"
        },
        "hobbies": ["Basketball", "Movies"],
        "createdAt": "2022-12-10T12:00:00Z"
      },
      {
        "id": 13,
        "username": "sarah_jones",
        "firstName": "Sarah",
        "lastName": "Jones",
        "email": "sarah.jones@example.com",
        "age": 34,
        "isVerified": true,
        "address": {
          "street": "111 Cedar Rd",
          "city": "Cedarville",
          "state": "OH",
          "postalCode": "44444"
        },
        "hobbies": ["Gardening", "Painting"],
        "createdAt": "2023-01-05T08:20:00Z"
      }
    ];

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json(json)
});
router.put('/', (req, res) => {
  res.send('Got a PUT request at /user');
});
module.exports = router;
// INSERT INTO userData (name, address, phone, email, verified) VALUES ('ravi', 'Highway 37', '088090990' ,'email@email.email', 0)
//SELECT * FROM customers
