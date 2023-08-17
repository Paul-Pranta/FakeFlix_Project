
import Image from "next/image"
import styles from "@/app/styles/common.module.css"
import Link from "next/link"
const MovieCard = (curEle) => { 

    const {id , type , title, synopsis } = curEle.jawSummary

    return (
        
        <div>

            <div className={styles.card}>
                
                <div className={styles.card_image}>
                    
                    <Image src={curEle.jawSummary.backgroundImage.url} alt={ title} width={260} height={200}/>


                </div>

                <div className={styles.card_data}>

                    <h2 style={{color:"black"}}>{title.substring(0,18)}</h2>

                    <p style={{color:"black"}}>
                        {synopsis.substring(0,90)}...
                    </p>

                    <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>
                    
                    </Link>


                </div>

            </div>

            
           



        </div>



    )
}

export default MovieCard;