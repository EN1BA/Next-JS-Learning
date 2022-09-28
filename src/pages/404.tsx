import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/error.module.scss';

export default function Error() {
    return (
        <>
            <Head>
                <title>ERROR</title>
                <meta name="keywords" content="nextjs learn next js react typescript breaking bad" />
            </Head>
            <div className={styles.error}>
                    <h1>
                        ERROR
                    </h1>
                    <h1>
                        PAGE NOT FOUND
                    </h1>
                    <img src='https://www.looper.com/img/gallery/the-most-unexpected-things-to-happen-in-breaking-bad/l-intro-1642110378.jpg' />
                    <Link href='/'>
                        <a>Return to main page</a>
                    </Link>
            </div>
        </>
    )
};