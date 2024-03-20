
import Button from '../../components/Button';
import './styles.css';

export default function SearchProfile() {

    return (
        <div className="container-profile-search">
            <div className="profile-search">
                <main>
                    <h1>Encontre um perfil Github</h1>
                </main>
                <div className="form-container">
                    <form>
                        <input className="form-custom" placeholder="Usuário Github">
                        </input>
                    </form>
                </div>
                <div className="button-profile-search">
                    <Button text="Encontrar" />
                </div>
            </div>
        </div>
    );

}