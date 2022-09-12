import { Link } from 'react-router-dom';
const NAV_LINKS_NAMESPACES = {
    home: 'Home',
    favourites: 'Favourites',
};
const NAV_TITLE = 'GithubSearch';
const NAV_LINKS = [
    {
        linkTo: '/',
        title: NAV_LINKS_NAMESPACES.home,
    },
    {
        linkTo: '/favourites',
        title: NAV_LINKS_NAMESPACES.favourites,
    },
];
function Navigation() {
    return (
        <nav>
            <h3>{NAV_TITLE}</h3>
            <span>
                {NAV_LINKS.map(({ linkTo, title }) => {
                    return (
                        <Link to={linkTo} key={title}>
                            {title}
                        </Link>
                    );
                })}
            </span>
        </nav>
    );
}

export default Navigation;
