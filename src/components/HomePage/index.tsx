
type Props = {
    content_page: string;
}

export default function Init({ content_page }: Props) {

    return (
        <main>
            <div>
                <h1>{content_page}</h1>
            </div>
        </main>
    );
}