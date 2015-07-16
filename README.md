# buster-amd-static-bug

This repository is a reduced test case for a bug in [Buster.JS](http://busterjs.org/)

## To reproduce

* clone this repository
* `npm install`

Verify that everything works with buster-server

```bash
# start server
buster-server

# capture a browser at http://localhost:1111/capture

# run tests
buster-test
```

Show the bug with buster-static

```bash
buster-static
```

Point a browser to [http://localhost:8282](http://localhost:8282)

* Observe that all the files are loaded
* Observe that no tests are reported as being run