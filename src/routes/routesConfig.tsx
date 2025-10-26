import HomeRoutes from '@/modules/home/routes';
import ProfileRoutes from '@/modules/Profile/routes';
import SettingsRoutes from '@/modules/Settings/routes';

const Routes = [...HomeRoutes, ...ProfileRoutes, ...SettingsRoutes];

export default Routes;
