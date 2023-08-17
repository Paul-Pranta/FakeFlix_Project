
import mainstyles from "@/app/styles/mainsection.module.css"
import styles from "@/app/styles/common.module.css"

import Link from "next/link"
import Image from "next/image"




const Mainsection = ({ title, imgUrl }) => {


    return (


        <main className={mainstyles.main_section}>

            <div className={styles.container}>

                <div className={styles.grid_two_section}>

                    <div className={mainstyles.main_content}>

                        <h1>
                            {title}
                        </h1>

                        <p>

                            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.Save your favourites easily and always have something to watch.
                            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                            Send children on adventures with their favourite characters in a space made just for them—free with your membership.

                        </p>


                        <Link href="/movie" >

                            <button className={[mainstyles.changeToRed]}>
                                Explore Movie
                            </button>

                        </Link>


                    </div>

                    <div className={mainstyles.main_image}>

                        <Image src={imgUrl} alt="Watching FakeFlix" width={500} height={500} />



                    </div>



                </div>

            </div>


            <div className={mainstyles['custom-shape-divider-bottom-1690751744']}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={mainstyles['shape-fill']}></path>
                </svg>
            </div>


        </main >

    )
}

export default Mainsection;