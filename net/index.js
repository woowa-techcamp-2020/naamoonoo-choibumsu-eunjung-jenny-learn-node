const { createServer } = require("net");
const fs = require("fs");

const server = createServer((socket) => {
  socket.on("data", (data) => {
    fs.readFile("./public/index.html", (err, data) => {
      const response = [
        "HTTP/1.1 200 OK",
        "Content-Type: text/html",
        "Status: 200",
        "",
        "",
        data,
        "",
        "",
      ].join("\r\n");
      socket.write(response);
      socket.destroy();
    });
  });
});

server.listen(3000, () => {
  console.log(`listening on 3000`);
});
