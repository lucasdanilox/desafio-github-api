import './styles.css';

type Props = {
    text: string;
}

export default function Button({ text }: Props) {

    return (

        <div className="container-button">
            <button type="submit" className="button-custom">{text}</button>
        </div>
    );

}