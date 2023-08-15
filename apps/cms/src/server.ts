import express from 'express';
import payload from 'payload';
import path from "path";

import dotenv from "dotenv";
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(process.env.PAYLOAD_PUBLIC_PORT);
}

start();
