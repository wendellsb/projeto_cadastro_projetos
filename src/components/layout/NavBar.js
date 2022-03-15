import {Link} from 'react-router-dom' 
import style from './NavBar.module.css'
function NavBar() {
    return (
        <ul className={style.lista}>
            <li className={style.item}>
                <Link to="/">Início</Link>
            </li>
            <li className={style.item}>
                <Link to="/empresa">Empresa</Link>
            </li>
            <li className={style.item}>
                <Link to="/contato">Contato</Link>
            </li>
            <li className={style.item}>
                <Link to="/novoprojeto">Novo Projeto</Link>
            </li>
        </ul>
    )
}

export default NavBar