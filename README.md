## Automating tedious parts with Makefile

Created Makefile to run:

* `make clean` - removes `dist/` directory
* `make` - to test and build
* `make start` - to develop with hot reloading
* `make test` - to test
* `make install` - to (re) install everything a-fresh

On a clean repository you can now do this:
```
make install
make
make start
```
