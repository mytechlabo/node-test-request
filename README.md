# node-test-request

## Step by step

```sh
$ sudo npm i -g pm2
$ node index.js
$ pm2 start index.js
$ pm2 start index.js -i 4

$ sudo npm i -g autocannon
$ curl http://localhost:3030/test
$ autocannon http://localhost:3030/test
> 111k requests in 10.02s, 25.4 MB read
> 116k requests in 11.02s, 26.4 MB read
> 114k requests in 11.02s, 26.1 MB read

$ npm i helmet
$ autocannon http://localhost:3030/test
> 88k requests in 10.03s, 69.3 MB read
> 90k requests in 10.02s, 70.4 MB read
> 105k requests in 11.02s, 82.7 MB read

$ npm i morgan
$ autocannon http://localhost:3030/test
> 51k requests in 11.02s, 11.6 MB read
> 60k requests in 10.02s, 13.7 MB read
> 76k requests in 11.02s, 17.3 MB read

more...
> 48k requests in 11.02s, 38 MB read
> 57k requests in 10.02s, 44.4 MB read
> 61k requests in 10.02s, 48.2 MB read
```