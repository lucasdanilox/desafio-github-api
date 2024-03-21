import './styles.css';

type Props = {
    text: string;
    onClick: () => void;
}

export default function Button({ text, onClick }: Props) {

    return (

        <div className="container-button">
            <button onClick={onClick} className="button-custom">{text}</button>
        </div>
    );

}