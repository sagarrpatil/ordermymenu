import { useRoutes } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
export default function ThemeRoutes() {
  const token = localStorage.getItem("token");
  const routes = token ? [MainRoutes] : [AuthenticationRoutes];
  return useRoutes(routes);
}

