//app/server/server.js
import express from 'express'
import httpProxy from 'http-proxy'

const PORT = 8080
const app = express()
const targetUrl = 'http://localhost:5000'
const proxy = httpProxy.createProxyServer({
  target: targetUrl
})

app.use((req, res) => {
  const HTML = `
  <!DOCTYPE html>
  <html>
      <head>
          <meta charset="utf-8" />
          <title>React Tutorial</title>
      </head>
      <body>
          <div id="app"></div>
          <script src="http://localhost:8081/static/bundle.js"></script>
      </body>
  </html>
  `
  res.end(HTML)
})

app.use('./api', (req, res) => {
  proxy.web(req, res, { target: `${targetUrl}/api` });
})

app.listen(PORT, error => {
  if(error) {
    console.error(error);
  } else {
    console.info(`==> Listening on port ${PORT}.`)
  }
})
