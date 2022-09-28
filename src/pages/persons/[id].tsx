import Head from "next/head";
import { useRouter } from "next/router";
import { Navbar } from "../../components/Navbar";
import { getPersonAction } from "../../store/actions/persons";
import { wrapper } from "../../store/store";
import { Person } from '../../types/person';
import styles from '../../styles/person.module.scss';

const navbarPersonMocks = [{title: "Persons Page", link: '/persons'}]

const Person = ({person = {} as Person[]}) => {

    console.log(person)

    return (
        <>
            <Navbar item={navbarPersonMocks}/>
            <div className={styles.person}>
                <h1>{person[0].nickname}</h1>
                <img src={person[0].img}/>
            </div>
        </>
    );
};

export default Person;

export const getServerSideProps = wrapper.getServerSideProps((store) => async ( context ) => {

    await store.dispatch(getPersonAction(Number(context.query.id)));
    
    const state = store.getState().persons;

    return {
        props: {
            person: state.person,
        },
    };
});