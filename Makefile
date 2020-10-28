all:
	make clean
	make build
	make run

clean:
	rm -rf node_modules
	rm -rf *.lock
	rm -rf ios/
	rm -rf android/

build:
	npm install

run:
	expo start -c
