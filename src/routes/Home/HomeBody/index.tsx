import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import './styles.css';

export default function HomeBody({ content_page }: any) {

    return (
        <main>
            <div className="container-sub-title">
                <h1>{content_page = "Desafio Github API"}</h1>
            </div>
            <div className="container-description">
                <h3>DevSuperior - Escola de programação</h3>
                <Link to="/search-profile">
                    <Button text="Começar" />
                </Link>
            </div>
        </main>
    );
}