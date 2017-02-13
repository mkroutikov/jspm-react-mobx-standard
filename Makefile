.PHONY: dist all test start start-dist clean

all: test dist

test:
	npm test

start:
	npm start

start-dist:
	./node_modules/.bin/http-server -c-1 .

dist:
	./node_modules/.bin/html-dist --config html-dist.config.js --input index.html
	./node_modules/.bin/jspm bundle-sfx 'src/app.js - react - react-dom - mobx - mobx-react' \
		dist/bundle.js --minify \
		--globals "{'react': 'React', 'react-dom': 'ReactDOM', 'mobx': 'mobx', 'mobx-react': 'mobxReact'}"

clean:
	rm -rf dist

install:
	rm -rf node_modules jspm_packages
	npm install
	./node_modules/.bin/jspm install
