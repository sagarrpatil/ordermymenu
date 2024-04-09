// material-ui
import { useTheme } from '@mui/material/styles';
import LogoH from '../assets/images/logoH.png'
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logoH.png';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Order My Menu" width="100" />
     *
     */
    <img src={LogoH} width={"150px"}/>
  );
};

export default Logo;
