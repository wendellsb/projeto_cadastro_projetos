import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <FaLinkedinIn />
                </li>
                <li className={styles.item}>
                    <FaGithub />
                </li>
                <li className={styles.item}>
                    <FaInstagram />
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer