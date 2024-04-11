import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Button, ButtonBase, Link, Tooltip } from '@mui/material';

// project imports
import Avatar from '../extended/Avatar';

// ==============================|| CARD SECONDARY ACTION ||============================== //

const CardSecondaryAction = ({ title, link, icon }) => {
  const theme = useTheme();

  return (
    <Tooltip title={title || 'Reference'} placement="left">
      <ButtonBase disableRipple>
        {!icon && (
          <Avatar component={Link} href={link} alt="MUI Logo" size="badge" color="primary" outline>
            <Button>{title}</Button>
          </Avatar>
        )}
        {icon && (
          <Avatar component={Link} href={link} target="_blank" size="badge" color="primary" outline>
            {icon}
          </Avatar>
        )}
      </ButtonBase>
    </Tooltip>
  );
};

CardSecondaryAction.propTypes = {
  icon: PropTypes.node,
  link: PropTypes.string,
  title: PropTypes.string
};

export default CardSecondaryAction;
