
'use client'


import styles from "@/app/contact/contact.module.css";
import { useState } from "react";
import { Cuprum } from 'next/font/google'

const cuprum = Cuprum({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const ContactForm = () => {
    const [status, setStatus] = useState()
    const [user, setUser] = useState({

        username: "",
        email: "",
        phone: "",
        message: ""
    })

    function handleChange(e) {

        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async(e)=> { 
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                headers: { "Content_Type": "application/json" },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
                
            })

            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus("success");
            }
            else { 
                setStatus("error");
            }
        } catch (e) { 
            console.log("Client-side fetch error:", error);
        }

    }

    return (

        <form className={styles.contact_form} onSubmit={handleSubmit}>

            <div className={styles.input_field}>

                <label htmlFor="username" className={styles.label}>
                    Username:
                    <input type="text" name="username" id="username" placeholder="Your name" className={cuprum.className}
                        value={user.username}
                        onChange={handleChange}
                        autoComplete="off"
                        required/>

                </label>

            </div>

            <div className={styles.input_field}>

                <label htmlFor="email" className={styles.label}>
                    Email:
                    <input type="email" name="email" id="email" placeholder="Your email" className={cuprum.className}
                        value={user.email}
                        onChange={handleChange}
                        autoComplete="off"
                        required/>

                </label>

            </div>

            <div className={styles.input_field}>

                <label htmlFor="phone" className={styles.label}>
                    Phone:
                    <input type="text" name="phone" id="phone" placeholder="Your conatct" className={cuprum.className}
                        value={user.phone}
                        onChange={handleChange}
                        autoComplete="off"
                        required/>

                </label>

            </div>

            <div className={styles.input_field}>

                <label htmlFor="message" className={styles.label}>
                    Message:
                    <textarea name="message" id="message" placeholder="Your message" className={cuprum.className} rows={5}
                        value={user.message}
                        onChange={handleChange}
                        autoComplete="off"
                        required/>

                </label>

            </div>

            <div>
                {status === 'success' && <p className={styles.success_msg}>Glad to have your message 😊</p>}
                {status === 'error' && <p className={ styles.error_msg}>Some error have occured while submitting 😞</p> }
                <button type="submit" className={cuprum.className}>Submit response</button>
            </div>


        </form>


    )


}

export default ContactForm