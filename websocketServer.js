const WebSocket = require('ws');
const server = new WebSocket.Server({port:4000});

server.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', (message) => {
        console.log('Received:', message);
        ws.send('Message received');
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
})