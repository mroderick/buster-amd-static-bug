# buster-amd-static-bug

This repository is a reduced test case for [a bug in Buster.JS](https://github.com/busterjs/buster/issues/455)

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

# 1 test, 1 assertion, 1 runtime ... OK
```

Show the bug with buster-static

```bash
buster-static
```

Point a browser to [http://localhost:8282](http://localhost:8282)

Observe that all the necessary files are loaded:
![2015-07-16 at 09 30](https://cloud.githubusercontent.com/assets/20321/8717613/5ea39e0a-2b9d-11e5-953e-63b447257bc9.png)

Observe no test results are recorded in the browser
![2015-07-16 at 09 30](https://cloud.githubusercontent.com/assets/20321/8717603/4d610d94-2b9d-11e5-8889-7eb0107ca34d.png)
