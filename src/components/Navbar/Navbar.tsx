import Link from 'next/link';
import React from 'react';

import styles from './Navbar.module.scss'

interface NavbarProps {
    item: {
        link:string;
        title:string;
    }[]
}

export const Navbar: React.FC<NavbarProps> = ({item})=> {
    return (
        <div className={styles.Navbar}>
            {item.map(el => 
                <Link href={el.link} key={el.link}>
                    <a>{el.title}</a>
                </Link>
            )}
        </div>
    );
};