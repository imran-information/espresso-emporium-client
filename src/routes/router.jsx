import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home"
import AddNewCoffee from "../pages/AddNewCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffees')
            },
            {
                path: '/addNewCoffee',
                element: <AddNewCoffee></AddNewCoffee>
            }
        ]
    }
])

export default router