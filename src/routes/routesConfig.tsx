import HomeRoutes from '@/modules/home/routes';
import ProfileRoutes from '@/modules/Profile/routes';
import SettingsRoutes from '@/modules/Settings/routes';
import AddFitRoutes from '@/modules/Add/routes';
import SignUpRoutes from '@/modules/Auth/signup/routes';
import LoginRoutes from '@/modules/Auth/login/routes';

const Routes = [
    ...HomeRoutes,
    ...ProfileRoutes,
    ...SettingsRoutes,
    ...AddFitRoutes,
    ...SignUpRoutes,
    ...LoginRoutes,
];

export default Routes;
