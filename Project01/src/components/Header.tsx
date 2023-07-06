import styles from'./Header.module.css'

import IgLogo from '../assets/ignitelogo.svg';

export function Header(){
    return(
        <header className={styles.header}>  
            <img src={IgLogo} alt="Logo tipo do Ignite"/>
        </header>
    );
}