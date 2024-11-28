import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home"
import AddNewCoffee from "../pages/AddNewCoffee";
import ViewCoffee from "../components/ViewCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import ErrorPage from "../components/ErrorPage";

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
            },
            {
                path: '/view-coffee/:id',
                element: <ViewCoffee></ViewCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: '/update-coffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router