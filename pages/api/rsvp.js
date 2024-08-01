// pages/api/rsvp.js
import axios from 'axios';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {name, phone, email, allergies} = req.body;

        // Validate the input
        if (!name || !phone || !email) {
            return res.status(400).json({error: 'All fields are required except allergies'});
        }

        // SheetDB API setup
        const sheetDBUrl = "https://sheetdb.io/api/v1/wpxyohstnzmzw"; // Replace with your SheetDB API URL

        // Send data to Google Sheet via SheetDB
        try {
            await axios.post(sheetDBUrl, {
                data: {
                    name,
                    phone,
                    email,
                    allergies
                }
            });
        } catch (error) {
            console.error('Error sending data to Google Sheet:', error);
            return res.status(500).json({error: 'Error sending data to Google Sheet'});
        }

        // Configure nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Replace with your SMTP host
            port: 465, // Replace with your SMTP port
            auth: {
                user: 'dubemobinnaesiowu@gmail.com', // Replace with your email
                pass: process.env.EMAIL_PASSWORD // Replace with your email password
            }
        });

        // Send email
        try {
            await transporter.sendMail({
                from: 'dubemobinnaesiowu@gmail.com', // Replace with your email
                to: email,
                subject: "Duby's Sip, Paint, and Worship",
                text: `Hey ${name}! Thank you for your RSVP. I can’t wait to spend the day with you.\nSee you soon❤️.`,
                html: `<p>Hey ${name}! Thank you for your RSVP. I can’t wait to spend the day with you.</p><p>See you soon❤️.</p>`
            });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({error: 'Error sending email'});
        }

        return res.status(200).json({message: 'RSVP submitted successfully'});
    } else {
        return res.status(405).json({error: 'Method not allowed'});
    }
}