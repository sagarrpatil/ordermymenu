import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  if(localStorage.getItem("token")){
    return useRoutes([MainRoutes]);
  }else{
    return useRoutes([AuthenticationRoutes]);
  }
}
