import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    success: {
      main: '#ADD8E6',
    },
    error: {
      main: '#FF0000',
    },
    info: {
      main: '#808080',
    },
    warning: {
      main: '#FF0000',
    },
  },
});

interface ButtonProps extends MuiButtonProps {
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

const PitchforkButton: React.FC<ButtonProps> = ({ children, color = 'primary', ...props }) => (
  <ThemeProvider theme={buttonTheme}>
    <MuiButton variant="contained" color={color} {...props}>
      {children}
    </MuiButton>
  </ThemeProvider>
);

export default PitchforkButton;