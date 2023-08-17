
import styles from "@/app/styles/navbar.module.css"
import Link from "next/link";

const Nav = () => {


    return (
        <div style={{zIndex:10}}>

             <nav className={styles.navbar}>
                <div >
                    <ul className={styles.navbarList}>
                        <li className={styles.navbarItem}>

                            <Link href="/">
                                Home
                            </Link>

                        </li>
                        <li className={styles.navbarItem}>

                            <Link href="/about">
                                About
                            </Link>

                        </li>
                        <li className={styles.navbarItem}>

                            <Link href="/movie">
                                Movie
                            </Link>

                        </li>
                        <li className={styles.navbarItem}>

                            <Link href="/contact">
                                Contact
                            </Link>

                        </li>

                    </ul>

                </div>

            </nav> 



            

        </div>

    )
}

export default Nav;
