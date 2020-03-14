import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Link href="/eu">
                <a title="Eu Countries">Eu Countries page</a>
            </Link>
            <p>Home page</p>
        </div>
    );
}