- Attempt to move initializeDB outside of default api calls
- Create script for start-server-and-test
-- Run `yarn dev` (with test env) along side `yarn test` to get an API up and running
-- Use Wait for Port package (CBall)
-- "ci": "CI=true CYPRESS_BASE_URL=http://localhost:5002 PORT=5002 start-server-and-test ci:start http://localhost:5002 test:all"

Nice to look into...
- Pooling for Postgres


Try
-   const app = next({ dev: true });
-- Pass app to supertest

- try to export server for supertest

- server.js
-- try to build route for /api/users manaully

- server.js
-- if the above works -- loop over /api/*

Look at Apollo Micro

```
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
```