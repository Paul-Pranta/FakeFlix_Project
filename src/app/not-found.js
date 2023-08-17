

import styles from "@/app/styles/notfound.module.css"
import Image from "next/image"


const NotFound = () => {

    return (
        <div className={styles.main}>

            <h1>404</h1>

            <h2>The page you are trying to reach cannot be found. Don't worry, though  we're here to help you get back on track! You can start by navigating to our homepage using the menu above  </h2>

            <div className={styles.frame}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={styles.caps}><Image src="http://ademilter.com/caps.png" alt="nothing" height={300} width={600} /></div>
            <canvas id={styles.canvas}>


            </canvas>





        </div>

    )

}


export default NotFound;