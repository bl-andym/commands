'use client';

//import Image from 'next/image';
import styles from './Header.module.scss';
import logo from '../../../public/logo.png'

const Header = () => {
    return (
        <header className={styles.header}>
            {/* <div className={styles.headerLogo}>
                <Image
                    src={logo}
                    alt="Dummy Logo"
                    width={100}
                    height={100}
                />
            </div> */}
            <div className={styles.headerText}>
                <h1>
                    <span className={styles.headerSubtext}>cd ../</span>
                    <span>Command-line-tools</span>
                </h1>
            </div>
        </header>
    );
};

export default Header;
