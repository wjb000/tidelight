import { createServer } from "node:http";
import { WebSocketServer } from "ws";

const PORT = 8787;
const server = createServer((_req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("tidelight host");
});
const wss = new WebSocketServer({ server, path: "/ws" });

wss.on("connection", (socket) => {
  socket.on("message", (data) => {
    for (const client of wss.clients) {
      if (client !== socket && client.readyState === 1) client.send(String(data));
    }
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`tidelight relay on ws://127.0.0.1:${PORT}/ws`);
});
