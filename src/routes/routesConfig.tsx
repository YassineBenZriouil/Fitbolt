import HomeRoutes from '@/modules/home/routes';
import ProfileRoutes from '@/modules/Profile/routes';
import SettingsRoutes from '@/modules/Settings/routes';
import AddFitRoutes from '@/modules/Add/routes';

const Routes = [
    ...HomeRoutes,
    ...ProfileRoutes,
    ...SettingsRoutes,
    ...AddFitRoutes,
];

export default Routes;
