

import React from "react";
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css"
import ContactForm from "../components/ContactForm";


const Contact = () => { 

  return (
    <div>
      <h1>Contact Us</h1>

      <ContactCard />

      <section className={styles.contact_section}>

        <h2>We would love to hear <span>from you</span></h2>

        <ContactForm/>

      </section>


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.977365801376!2d77.52973952463289!3d13.03711266343952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d3c0e5eb72b%3A0x6c68444a56211b08!2sPlatinum%20City%2C%20Industrial%20Area%2CStage%201%2C%20Yeswanthpur%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1691177300127!5m2!1sen!2sin" width={100} height={400} style={{ border: 0 }} className={styles.mapping } allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


    </div>
    )



}

export default Contact