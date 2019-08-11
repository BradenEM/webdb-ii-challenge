const server = require("./server");

const port = process.env.PORT ? process.env.PORT : 4001;

server.listen(port, () => {
  console.log(`\n*** Server running on port ${port} ***\n`);
});
