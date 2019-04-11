require("dotenv").config();

const server = require("./api/server");

const PORT = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.send("<h1>Hello from the Server</h1>");
});

server.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
