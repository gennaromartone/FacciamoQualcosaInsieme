//import Navbar from '../app/navbar.jsx';
import Home from '../components/containers/home.jsx';
import Survays from '../components/containers/surveys/Surveys'
//import User from '../app/user.jsx';

export default {
    routes: [
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