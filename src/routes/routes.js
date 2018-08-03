//import Navbar from '../app/navbar.jsx';
import Home from '../components/containers/home.jsx';
import Survays from '../components/containers/surveys/Surveys';
import UserPage from '../components/containers/user/UserPage';
import UserSellerPage from '../components/containers/user/UserSellerPage';
//import User from '../app/user.jsx';

export default {
    routes: [
        {
            path: '/seller-page',
            component: UserSellerPage,
            exact: true
        },
        {
            path: '/surveys',
            component: Survays,
            exact: true
        },
        {
            path: '/',
            component: Home,
            exact: true
        },
        {
            path: '/user',
            component: Home,
            exact: true
        },
        {
            path: '/user-page',
            component: UserPage,
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