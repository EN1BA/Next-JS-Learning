import React from 'react';

import styles from './Main.module.scss'

export const Main: React.FC = () => {
    return (
        <div className={styles.Main}>
            <h1>Breaking Bad</h1>
            <img src='https://api.hvg.hu/Img/981ba3b7-9144-4244-a8b1-39094b1840d5/93b09988-8966-4a5e-b158-6a2d4ded03b3.jpg'/>
        </div>
    );
};