const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Docker + AWS</title>
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #0f172a;
          color: #e5e7eb;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          background: #020617;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0,0,0,.5);
          max-width: 500px;
          text-align: center;
        }
        h1 {
          margin-top: 0;
          color: #38bdf8;
        }
        p {
          line-height: 1.6;
        }
        .tag {
          display: inline-block;
          margin-top: 20px;
          padding: 6px 14px;
          border-radius: 20px;
          background: #1e293b;
          font-size: 14px;
          color: #7dd3fc;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 Docker + AWS</h1>
        <p>
          Esta aplicación se está ejecutando dentro de un
          <strong>contenedor Docker</strong> y desplegada en
          <strong>AWS Elastic Beanstalk</strong>.
        </p>
        <div class="tag">Node.js · Docker · AWS</div>
      </div>
    </body>
    </html>
  `);
});


app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Escuchando en puerto ${PORT}`);
});
