# github-issues-ui

The **github-issues-ui** is an UI that connects to the github issues API. See https://github.com/no-donut-for-you/github-issues-api

### Up and running

#### Installing all dependencies:
```bash
$ cd github-issues-api
```

```bash
$ npm install
```

#### Starting the github-issues-api server:
```bash
$ cd ../github-issues-api
```

```bash
$ bundle install
```

```bash
$ rails s
```

#### Starting the github-issues-ui server:
```bash
$ cd github-issues-api
```

```bash
$ npm start
```

You can access the Github issues UI on the port **8080**. http://localhost:8080/issues

## Using Docker

First, you need to install [Docker](https://docs.docker.com).

The **github-issues-ui** has the **github-issues-api** as a dependency. For this reason, both projects should be placed in the same dir to run it using Docker.

#### Example:

```
+-- github-issues
|   +-- github-issues-api
|   +-- github-issues-ui
```

### Up and running

#### Starting server:

```bash
$ cd github-issues-ui
```

```bash
$ make run-app
```

or 

```bash
$ docker-compose up github-issues-ui
```
