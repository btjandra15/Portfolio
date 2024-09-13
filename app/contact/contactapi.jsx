import nodemailer from 'nodemailer';

export default async function handler(req, res){
    if(req.method === "POST"){
        const { firstName, lastName, email, phone, service, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                password: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: email,
            to: "btjandra15@gmail.com",
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            text: `
                First Name: ${firstName}
                Last Name: ${lastName}
                email: ${email}
                Phone: ${phone}
                Service: ${service}
                Message: ${message}
            `
        }

        try{
            await transporter.sendMail(mailOptions);
            res.status(200).json({message: "Message send successfully"});
        }catch(error){
            res.status(500).json({error: "Failed to send message"});
        }
    }else{
        res.status(405).json({message: "Method not allowed"});
    }
};