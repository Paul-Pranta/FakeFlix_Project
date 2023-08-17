

import styles from "@/app/contact/contact.module.css"
import { FaEnvelope ,FaSmileWink,FaRegWindowRestore} from "react-icons/fa";
import Link from "next/link";

const ContactCard = () => {

    return (

        <div className={styles.section}>

            <div className={styles.container}>

                <div className={styles.grid}>

                    <div className={styles.grid_card}>

                        <i><FaEnvelope /></i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected</p>
                        <p className={styles.last_para}>response time: 69 hours</p>

                        <Link href="/">Send Email <span>&#x2192;</span></Link>



                    </div>


                    <div className={styles.grid_card}>

                        <i><FaSmileWink /></i>
                        <h2>Live Chat</h2>
                        <p>Weekdays: 9 AM - 6 PM ET</p>
                        <p className={styles.last_para}>Weekends: 9 AM - 5 PM ET</p>

                        <Link href="/">Chat Now <span>&#x2192;</span></Link>



                    </div>



                    <div className={styles.grid_card}>

                        <i><FaRegWindowRestore /></i>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expected</p>
                        <p className={styles.last_para}>response time: 70 hours</p>

                        <Link href="/" className={ styles.anchorLink}> Ask The Community <span>&#x2192;</span></Link>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default ContactCard;