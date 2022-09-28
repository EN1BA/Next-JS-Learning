import Head from "next/head";
import Link from "next/link";
import { useMemo } from "react";
import { Navbar } from "../components/Navbar";
import { PersonsCard } from "../components/Person";
import { getPersonsAction } from "../store/actions/persons";
import { wrapper } from "../store/store";

import styles from '../styles/persons.module.scss'
import { Person } from "../types/person";

const navbarPersonsMocks = [{title: "Main Page", link: '/'}]

const Persons = ({persons = {} as Person[]}) => {

    return (
        <>
            <Head>
                <title>NextJS Persons</title>
                <meta name="keywords" content="nextjs learn next js react typescript breaking bad"/>
            </Head>
            <Navbar item={navbarPersonsMocks}/>       
            <div className={styles.persons}>
                {persons.map(el => 
                    <PersonsCard id={el.char_id} name={el.name} img={el.img}/>
                )}
            </div>
        </>
    );
};

export default Persons;

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {

    await store.dispatch(getPersonsAction());
    
    const state = store.getState().persons;

    return {
        props: {
            persons: state.persons,
        },
    };
});