const path = require("path");
const fs = require("fs");
const url = require("url");

const conf = {
  baseDir: "src",
  localDomain: "http://localhost:4200",
  remoteDomain: "http://localhost:8080",
  startPath: "/spa",
};

function fileExists(baseDir, request) {
  if (Array.isArray(baseDir)) {
    baseDir.reverse();
    let i = 0;
    const len = baseDir.length;
    for (; i < len; i++) {
      const uri = url
          .parse(request.url)
          .pathname.replace(conf.startPath + conf.fePath, ""),
        filename = path.join(process.cwd(), baseDir[i], uri);
      let status;
      const index = "/index.html";

      try {
        status = fs.statSync(filename);

        if (status.isDirectory()) {
          status = fs.statSync(filename + index);

          request.url += index;
        }

        return true;
      } catch (err) {}
    }
  }
  return false;
}

const PROXY_CONFIG = {
  "/": {
    target: conf.remoteDomain,
    changeOrigin: true,
    bypass: function (req, res, proxyOptions) {
      console.log("bypass");
      console.log(req.url);
      if (req.url.includes(conf.startPath, 0)) {
        return req.url;
      }
    },
    onError: function (err, req, res) {
      console.log("onError");
    },
    onProxyReq: function (proxyReq, req, res) {
      console.log("onProxyReq");
      if (req.headers && req.headers.referer) {
        // console.log(JSON.stringify(req.headers.referer));
        req.headers.referer = req.headers.referer.replace(
          conf.localDomain + conf.startPath,
          conf.remoteDomain + conf.startPath
        );
      }
    },
    onProxyRes: function (proxyRes, req, res) {
      console.log("onProxyRes");
      // console.log(JSON.stringify(proxyRes.headers));

      if (proxyRes.headers && proxyRes.headers.location) {
        proxyRes.headers.location = proxyRes.headers.location.replace(
          conf.remoteDomain,
          conf.localDomain
        );
      }
    },
  },
};

module.exports = PROXY_CONFIG;
