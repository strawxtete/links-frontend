import Link from 'next/link';
import styles from './frontend.module.css';

export default function Frontend() {    
    return (
        <div className={styles.frontend}>
            <h2>React js</h2>
            <p>React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>

            <Link href='htps://react.dev' target='_blank'>React</Link>
        </div>
    );
}