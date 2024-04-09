import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
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
])

export default routes;