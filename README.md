# General Coding Assessment - Node

This Project created for only for General Coding Assessment - Node

### Prerequisite

- Node.js(https://nodejs.org/en)
- mysql and xampp(https://www.mysql.com/ , https://www.apachefriends.org/download.html)

### Setting up

- first run the commands in sql.txt file in Helpers folder.
- if you setup password for mysql then please add password in db.ts file(for now it's blank)
- run `node_modules/typescript/bin/tsc` for initial run
- run `npm run dev`

### Test APIs

- install postman in your computer(https://www.postman.com/downloads/)
- to test GET /user/:id API add below curl to postman
  curl --location --request GET 'http://localhost:3000/user/1'
- to test POST /user API add below curl to postman
  curl --location --request POST 'http://localhost:3000/user' \
   --header 'Content-Type: application/json' \
   --data-raw '{
  "id":3,
  "name":"Jimmy"
  }'
