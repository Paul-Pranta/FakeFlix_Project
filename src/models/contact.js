

import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamp: true,
    })
// here mongoose.models.Contact is to find if there any already existed model named as Contact the as for or condition second one will be ignored
 
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default  Contact;