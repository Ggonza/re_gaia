import {LoginLayout} from "../layouts/login";
import {LoginUsers} from "../pages/login";

const routesLogin = [
    {
        path:"",
        layout: LoginLayout,
        component: LoginUsers,
    },
];
export default routesLogin;