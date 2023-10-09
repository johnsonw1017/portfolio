import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "@fontsource/montserrat";

let theme = createTheme({
    palette: {
        primary: {
            main: '#33658A',
            light: '#86BBD8',
            dark: '#2F4858'
        },
        secondary: {
            main: '#F6AE2D',
            light: '#EFC69B',
        },
        background: {
            default: '#F5F5F5'
        },
    },
    typography: {
        fontFamily: 'Montserrat sans-serif',
    }
});

theme = responsiveFontSizes(theme);

export default theme;