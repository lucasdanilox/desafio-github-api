
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
    const [userData, setUserData] = useState<UserData | null>(null);




    const handleSearch = () => {
        axios.get(`${BASE_URL_GITHUB}/${username}`)
            .then(response => {
                console.log(response.data);
                setUserData(response.data);
            });
    };


    function handleInputChange(event: any) {
        const value = event.target.value;
        setUserName(value);
    }


    return (
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
    );

}