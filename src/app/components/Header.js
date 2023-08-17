


import styles from "@/app/styles/navbar.module.css"

import Nav from "@/app/components/Nav";


import Link from "next/link";
import Image from "next/image";


const Header = () => {

    return (


        <header className={styles.main_header}>

            <div className={styles.navbar_brand}>

                <Link href="/">
                    <Image src="/logo.gif" alt="this is my logo" width={60} height={60} />

                    <h3>FakeFlix</h3>
                </Link>

                

            </div>

            <Nav />


        </header>

    );

};


export default Header;