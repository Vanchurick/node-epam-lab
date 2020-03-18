const http = require("http");

const getRequestInfo = require("./getRequestInfo");
const writeRequests = require("./writeRequests");
const getAllRequests = require("./getAllRequests");
const parseUrl = require("./parseUrl");

http
  .createServer((req, resp) => {
    const requestInfo = getRequestInfo(req);
    writeRequests(requestInfo);

    let response = { status: "ok" };

    if (req.method === "GET" && req.url.includes("/requests")) {
      let range = null;
      if (req.url.includes("from") && req.url.includes("to")) {
        range = parseUrl(req.url);
      }

      response = getAllRequests(range);
    }

    resp.writeHead(200, { "Content-type": "application/json" });
    resp.end(JSON.stringify(response));
  })
  .listen(8801);
