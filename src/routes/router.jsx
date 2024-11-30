import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home"
import AddNewCoffee from "../pages/AddNewCoffee";
import ViewCoffee from "../components/ViewCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import ErrorPage from "../components/ErrorPage";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Users from "../components/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://espresso-emporium-server-henna.vercel.app/coffees')
            },
            {
                path: '/addNewCoffee',
                element: <AddNewCoffee></AddNewCoffee>
            },
            {
                path: '/view-coffee/:id',
                element: <ViewCoffee></ViewCoffee>,
                loader: ({ params }) => fetch(`https://espresso-emporium-server-henna.vercel.app/coffees/${params.id}`)
            },
            {
                path: '/update-coffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(`https://espresso-emporium-server-henna.vercel.app/coffees/${params.id}`)
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('https://espresso-emporium-server-henna.vercel.app/users')
            }
        ]
    }
])

export default router