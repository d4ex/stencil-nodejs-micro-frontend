// const stencil = require('./dist/hydrate');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3001;

async function run() {
  app.use('/build/', express.static(path.join(__dirname, 'www/build')));
  app.use('/assets/', express.static(path.join(__dirname, 'www/assets')));
  // app.use(serverRenderer);

  app.listen(port, () =>
    console.log(`server started at http://localhost:${port}/`)
  );
}

run();
