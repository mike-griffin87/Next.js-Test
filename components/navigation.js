import Link from 'next/link';

const Navigation = () => (
    <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/dresses"><a>Dresses</a></Link></li>
    </ul>
)

export default Navigation;