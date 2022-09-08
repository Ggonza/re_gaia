import {AdminLayout} from "../layouts";
import {Home} from "../pages/admin";

const routesAdmin = [
    {
        path:"/admin",
        layout: AdminLayout,
        component: Home,
    },
];
export default routesAdmin;