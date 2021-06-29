
//

// import express from 'express';
// import next from 'next';
// import proxy from 'http-proxy-middleware';

// const express = require('express')
// const next = require('next')
// const { createProxyMiddleware } = require("http-proxy-middleware")

// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//     const server = express();

//     server.use(
//         '/api',
//         createProxyMiddleware({
//             target: process.env.API_HOST,
//             changeOrigin: true,
//         }),
//     );

//     server.all('*', (req, res) => handle(req, res));

//     server.listen(port, err => {
//         if (err) throw err;
//         console.log(`> Ready on http://localhost:${port}`);
//     });
// });

// "proxy": "http://localhost:3000"

// "scripts": {
//     "dev": "NODE_ENV=development node -r esm server.js",
//     "build": "NODE_ENV=production next build",
//     "start": "NODE_ENV=production node -r esm server.js"
// },


//

// const express = require('express')
// const next = require('next')
// const { createProxyMiddleware } = require("http-proxy-middleware")

// const port = process.env.PORT || 3000
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// const apiPaths = {
//     '/api': {
//         target: 'http://localhost:3080',
//         pathRewrite: {
//             '^/api': '/api'
//         },
//         changeOrigin: true
//     }
// }

// const isDevelopment = process.env.NODE_ENV !== 'production'

// app.prepare().then(() => {
//     const server = express()

//     if (isDevelopment) {
//         server.use('/api', createProxyMiddleware(apiPaths['/api']));
//     }

//     server.all('*', (req, res) => {
//         return handle(req, res)
//     })

//     server.listen(port, (err) => {
//         if (err) throw err
//         console.log(`> Ready on http://localhost:${port}`)
//     })
// }).catch(err => {
//     console.log('Error:::::', err)
// })

// "scripts": {
//     "dev": "next dev",
//     "build": "next build",
//     "start": "next start"
//   },

// "scripts": {
//   "dev": "NODE_ENV='development' node server.js",
//   "build": "next build && next export",
//   "start": "next start"
// },

//

const express = require('express')
const next = require('next')

const devProxy = {
    '/api': {
        target: 'https://swapi.co/api/',
        pathRewrite: { '^/api': '/' },
        changeOrigin: true,
    },
}

const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({
    dir: '.', // base directory where everything is, could move to src later
    dev,
})

const handle = app.getRequestHandler()

let server
app
    .prepare()
    .then(() => {
        server = express()
        // Set up the proxy.
        if (dev && devProxy) {
            const { createProxyMiddleware } = require('http-proxy-middleware')
            Object.keys(devProxy).forEach(function (context) {
                server.use(context, createProxyMiddleware(devProxy[context]))
            })
        }
        // Default catch-all handler to allow Next.js to handle all other routes
        server.all('*', (req, res) => handle(req, res))

        server.listen(port, (err) => {
            if (err) {
                throw err
            }
            console.log(`> Ready on port ${port} [${env}]`)
        })
    })
    .catch((err) => {
        console.log('An error occurred, unable to start the server')
        console.log(err)
    })

    // "scripts": {
    //     "dev": "cross-env NODE_ENV=development PORT=3000 node server.js",
    //     "build": "next build",
    //     "prod": "cross-env NODE_ENV=production PORT=3000 node server.js"
    //   }