//import Navbar from '../app/navbar.jsx';
import Home from '../components/containers/home.jsx';
//import User from '../app/user.jsx';

export default {
    routes: [
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/user',
            component: Home,
            exact: true
        }
    ],
    redirects: [
        {
            from: '/people',
            to: '/user',
            status: 301
        }
    ]
} 