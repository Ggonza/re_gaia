import routesProfesor from "./routes.profesor";
import routesAdmin from "./routes.admin";
import routesChef from "./routes.chef";
import {Error404} from "../pages/errores";
import {BasicLayout} from "../layouts";
import routesLogin from "./routes.login";


const routes = [
    ...routesAdmin,
    ...routesProfesor,
    ...routesChef,
    ...routesLogin,
    {
        path:"*",
        layout:BasicLayout,
        component: Error404
    }
];
export default routes;