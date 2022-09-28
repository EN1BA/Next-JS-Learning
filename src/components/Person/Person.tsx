import Link from 'next/link';
import styles from './Person.module.scss';

interface PersonProps {
    id:number;
    name:string;
    img:string;
}

export const PersonsCard: React.FC<PersonProps> = ({id, name, img})=> {
    return (
        <div className={styles.person} key={id}>
            <img src={img}/>
            <Link href={`/persons/${id}`}>
                <a>{name}</a>
            </Link>
        </div>
    );
};