import Alert from '@mui/material/Alert';
import { FC } from 'react';

type Props = {
  message: string;
};

export const AuthErrorMessage: FC<Props> = ({ message }) => {
  return (
    <Alert
      severity="error"
      sx={{
        maxWidth: '387px',
        marginBottom: '20px',
      }}
    >
      {message}
    </Alert>
  );
};
