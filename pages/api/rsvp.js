// pages/api/rsvp.js
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, phone, email, allergies } = req.body;

        // Validate the input
        if (!name || !phone || !email) {
            return res.status(400).json({ error: 'All fields are required except allergies' });
        }

        // Define the file path
        const filePath = path.join(process.cwd(), 'data', 'rsvp.json');

        // Read existing data
        let data = [];
        try {
            if (fs.existsSync(filePath)) {
                const fileData = fs.readFileSync(filePath, 'utf8');
                if (fileData) {
                    data = JSON.parse(fileData);
                }
            }
        } catch (error) {
            console.error('Error reading or parsing file:', error);
        }

        // Add new entry
        data.push({ name, phone, email, allergies });

        // Write updated data to file
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

        // Configure nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.example.com', // Replace with your SMTP host
            port: 587, // Replace with your SMTP port
            auth: {
                user: 'your-email@example.com', // Replace with your email
                pass: 'your-email-password' // Replace with your email password
            }
        });

        // Send email
        try {
            await transporter.sendMail({
                from: 'your-email@example.com', // Replace with your email
                to: email,
                subject: 'RSVP Confirmation',
                text: `Thank you for your RSVP, ${name}! We look forward to seeing you.`,
                html: `<p>Thank you for your RSVP, ${name}! We look forward to seeing you.</p>`
            });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Error sending email' });
        }

        return res.status(200).json({ message: 'RSVP submitted successfully' });
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}