import { Pagination } from '@mui/material';
// import usePagination from '@mui/material/usePagination/usePagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Wrap } from './MuiPagibnation.styled';

const theme = createTheme({
  palette: {
    primary: { main: '#ff6b08', contrastText: '#ffffff' },
  },
});

export const MuiPagination = ({ count, page, onChange }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <Pagination
          color="primary"
          shape="rounded"
          count={count}
          page={page}
          onChange={onChange}
        />
      </Wrap>
    </ThemeProvider>
  );
};
