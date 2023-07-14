# General Coding Assessment - Node

This Project created for only for General Coding Assessment - Node

### Prerequisite

- Node.js(https://nodejs.org/en)
- mysql and xampp(https://www.mysql.com/ , https://www.apachefriends.org/download.html)

### Setting up

- First run the commands in sql.txt file in Helpers folder
- If you setup password for mysql then add password in db.ts file(for now it's blank)
- Run `node_modules/typescript/bin/tsc` for initial run
- Run `npm run dev`

### Test APIs

- Install postman in your computer(https://www.postman.com/downloads/)
- To test GET /user/:id API add below curl to postman
  curl --location --request GET 'http://localhost:3000/user/1'
- To test POST /user API add below curl to postman
  curl --location --request POST 'http://localhost:3000/user' \
   --header 'Content-Type: application/json' \
   --data-raw '{
  "id":3,
  "name":"Jimmy"
  }'
