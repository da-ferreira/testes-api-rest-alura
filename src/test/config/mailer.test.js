import { describe, expect, it } from '@jest/globals';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const verifyConnection = () =>
  new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        reject(error);
      } else {
        resolve(success);
      }
    });
  });

describe('Mailer tests', () => {
  it('Validate connection to the email sending system', async () => {
    const isConnected = true;

    const connectionTest = await verifyConnection();

    expect(connectionTest).toBe(isConnected);
  });
});
