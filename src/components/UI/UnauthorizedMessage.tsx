import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const UnauthorizedMessage = () => {
  return (
    <Alert
      severity="info"
      sx={{
        position: 'fixed',
        zIndex: '1',
        right: '0',
        top: '0',
        left: '0',
      }}
    >
      <Typography component="p" sx={{ display: 'inline' }}>
        You are not an authorized user, login to continue?
      </Typography>
      <NavLink to="/login" style={{ textDecoration: 'none' }}>
        <Button
          sx={{ display: 'inline', marginLeft: '20px' }}
          variant="contained"
          size="small"
          color="success"
        >
          Log in
        </Button>
      </NavLink>
    </Alert>
  );
};
