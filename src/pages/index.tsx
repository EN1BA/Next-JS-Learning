import Head from "next/head";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";

const navbarMocks = [{ title: 'Persons' , link : '/persons'}]

const Index = () => {
    return (
        <>
            <Head>
                <title>NextJS Learn</title>
                <meta name="keywords" content="nextjs learn next js react typescript breaking bad"/>
            </Head>           
            <div>
                <Navbar item={navbarMocks}/>
                <Main/>
            </div>
        </>
    );
};

export default Index;