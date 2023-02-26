import { Backdrop, CircularProgress } from '@mui/material';

export const Loader = ({ isLoading }) => (
  <>
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  </>
);
