import {AdminLayout} from "../layouts";
import {HomeAdmin, MgmtWorkers, MgmtStudents,MgmtProduction,MgmtResiduals} from "../pages/admin";

const routesAdmin = [
    {
        path: "/admin",
        layout: AdminLayout,
        component: HomeAdmin,
    },
    {
        path: "/admin/userManagement/Students",
        layout: AdminLayout,
        component: MgmtStudents,
    },
    {
        path: "/admin/userManagement/Workers",
        layout: AdminLayout,
        component: MgmtWorkers,
    },
    {
        path: "/admin/management/residuals",
        layout: AdminLayout,
        component: MgmtResiduals,
    },
    {
        path: "/admin/management/kitchen",
        layout: AdminLayout,
        component: MgmtProduction,
    },

];
export default routesAdmin;