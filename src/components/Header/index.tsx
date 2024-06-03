'use client';

import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <Image
                    src="https://via.placeholder.com/100"
                    alt="Dummy Logo"
                    width={100}
                    height={100}
                />
            </div>
            <div className={styles.headerText}>
                <h1 className={styles.headerTitle}>Command line tools</h1>
                <p className={styles.headerSubtext}>Subtext goes here</p>
            </div>
        </header>
    );
};

export default Header;
