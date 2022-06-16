import {Link} from 'react-router-dom';

function MainNav(){
return <header>
    <div>React Meet ups</div>

    <nav>
        <ul>
            <li> <Link to='/'>All Meet Ups</Link> </li>
            <li> <Link to='/new-meetup'>New Meetup</Link> </li>
            <li> <Link to='/favorites'>Favorites</Link> </li>
        </ul>
    </nav>
</header>
}
export default MainNav;