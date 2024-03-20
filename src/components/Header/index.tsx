import { Link } from 'react-router-dom';
import './styles.css';

export default function Header() {

    return (

        <header>
            <div className="header-container">
                <Link to="/">
                    <h3>Github API</h3>
                </Link>
            </div>
        </header>
    );

}