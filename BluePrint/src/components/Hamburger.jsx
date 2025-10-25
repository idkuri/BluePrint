import React from 'react';
import styles from './Hamburger.module.css';

const Hamburger = ({ type = 'spin', isActive = false, onClick }) => {
    const typeClass = type ? styles[`hamburger${type.charAt(0).toUpperCase() + type.slice(1)}`] : '';
    
    return (
        <button 
            className={`${styles.hamburger} ${typeClass} ${isActive ? styles.isActive : ''}`}
            type="button"
            onClick={onClick}
        >
            <span className={styles.hamburgerBox}>
                <span className={styles.hamburgerInner}/>
            </span>
        </button>  
    );
};

export default Hamburger;