import {AdminLayout} from "../layouts";
import {HomeAdmin,MgmtWorkers,MgmtStudents} from "../pages/admin";

const routesAdmin = [
    {
        path:"/admin",
        layout: AdminLayout,
        component: HomeAdmin,
    },
    {
        path:"/admin/userManagement/Students",
        layout: AdminLayout,
        component: MgmtStudents,
    },

];
export default routesAdmin;