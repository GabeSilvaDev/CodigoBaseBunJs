import express from "express";
import os from "os";

const app = express();
const port = 8080;

app.get('/', (req, res) => {

    const response = {
        message: "Olá Mundo!",
        serverTime: new Date().toLocaleString(),
    };

    res.json(response);
});

app.get('/status', (req, res) => {
    const status = {
        serverTime: new Date().toLocaleString(),
        uptime: os.uptime(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        plataform: os.platform(),
        version: os.release(),
        systemType: os.machine(),
    };

    res.json(status);
});

app.listen(port, () => {
    console.log(`Servidor Rodando em localhost:${port}`);
});