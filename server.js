const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    console.log(querystring.parse(url.parse(req.url)));

    const resWriteEnd = (file, contentType) => {
        fs.readFile(file, function (err, data) {
            res.writeHead(200, { "Content-Type": contentType });
            res.write(data);
            res.end();
        });
    };
    switch (page) {
        case "/":
            resWriteEnd("index.html", "text/html");
            break;
        case "/api":
            let coinSide;
            if (params["student"] == "flip") {
                coinSide = Math.random() <= 0.5 ? "heads" : "tails";
                if (coinSide == "heads") {
                    coinPath = "https://imgur.com/a/8XnsueE";
                } else {
                    coinPath = "https://imgur.com/a/qKi37rq";
                }
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            const objToJson = {
                flipResult: coinSide,
                coinImage: coinPath,
            };
            res.end(JSON.stringify(objToJson));
            break;

        case "/css/style.css":
            fs.readFile("css/style.css", function (err, data) {
                res.write(data);
                res.end();
            });
            break;
        case "/js/main.js":
            resWriteEnd("js/main.js", "text/javascript");
            break;
        default:
            figlet("404!!", function (err, data) {
                if (err) {
                    console.log("Something went wrong...");
                    console.dir(err);
                    return;
                }
                res.write(data);
                res.end();
            });
            break;
    }
});

server.listen(8001);
