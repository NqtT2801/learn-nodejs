﻿## Installation

project requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
cd learn-nodejs
npm i
npm start
```

## Features
- Get all Posts 
  http://localhost/posts (method: Get)

- Get one Post
  http://localhost/posts/:postId (method: Get)
- Create new Post
  http://localhost/posts/ (method: Post)
  body example : {"title": "title 1", "description": "des 1"}
- Update Post
  http://localhost/posts/:postId (method: Patch)
  body example : {"title": "title 1", "description": "des 1"}
- Delete Post  
  http://localhost/posts/:postId (method: Delete)
