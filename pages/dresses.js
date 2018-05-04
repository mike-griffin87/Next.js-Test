import Nav from '../components/navigation.js';
import Link from 'next/link';
import Data from '../data.json';

const DesignerLink = (props) => (
    <li>
        <Link as={`${props.designer.split(' ').join('').toLowerCase()}`} href={`/dress?designer=${props.designer}`}>
            <a>{props.designer}</a>
        </Link>
    </li>
)

const Dresses = () => (
    <div>
        <Nav />
        <h1>Dresses Page</h1>
        <ul>
            {Data.map((d, i) => <DesignerLink key={i} designer={d.designer} />)}
        </ul>
    </div>
);

export default Dresses;