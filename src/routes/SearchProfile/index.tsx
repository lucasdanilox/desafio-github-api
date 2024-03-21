
import { useState } from 'react';
import Button from '../../components/Button';
import './styles.css';
import { BASE_URL_GITHUB } from '../../utils/system';
import axios from 'axios';

type UserData = {
    url: string;
    followers: number;
    location: string;
    name: string;
    avatar_url: string;
};

export default function SearchProfile() {

    const [username, setUserName] = useState("");
    const [userData, setUserData] = useState<UserData>();
    const [userNotfound, setUserNotFound] = useState(false);

    const handleSearch = () => {
        axios.get(`${BASE_URL_GITHUB}/${username}`)
            .then(response => {
                setUserData(response.data);
                setUserNotFound(false);
            })
            .catch(error => {
                setUserNotFound(true);
            });
    };


    function handleInputChange(event: any) {
        const value = event.target.value;
        setUserName(value);
    }


    return (
        <>
            <div className="container-profile-search">
                <div className="profile-search">
                    <main>
                        <h1>Encontre um perfil Github</h1>
                    </main>
                    <div className="form-container">
                        <form>
                            <input
                                className="form-custom"
                                placeholder="Usuário Github"
                                value={username}
                                onChange={handleInputChange}
                            />
                        </form>
                    </div>
                    <div className="button-profile-search">
                        <Button text="Encontrar" onClick={handleSearch} />
                    </div>
                </div>
            </div>
            {
                userData && !userNotfound && (
                    <div className="user-data-container">
                        <div className="user-data">
                            <div>
                                <img className="img-custom" src={userData.avatar_url} alt="Avatar" />
                            </div>
                            <div className="user-info">
                                <div className="info-title">
                                    <h2>Informaçoes</h2>
                                </div>
                                <div className="container-input">
                                    <div className="input-custom"><p><strong>Perfil:</strong> <a href={userData.url}>{userData.url}</a></p></div>
                                    <div className="input-custom"><p><strong>Seguidores:</strong> {userData.followers}</p></div>
                                    <div className="input-custom"><p><strong>Localidade:</strong> {userData.location}</p></div>
                                    <div className="input-custom"><p><strong>Nome:</strong>{userData.name}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {userNotfound && (
                    <h2 className="error-custom">Erro ao buscar usuário</h2>
                )}
        </>
    );
}