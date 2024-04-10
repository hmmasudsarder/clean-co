import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
])

export default routes;