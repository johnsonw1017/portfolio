import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        peach: {
            main: '#EFC69B',
            contrastText: '#000000'
        },
        hunyellow: {
            main: '#F6AE2D',
            contrastText: '#000000'
        },
        charcoal: {
            main: '#2F4858',
            contrastText: '#FFFFFF'
        },
        lapis: {
            main: '#33658A',
            contrastText: '#FFFFFF'
        },
        caroline_blue: {
            main: '#86BBD8',
            contrastText: '#000000'
        },
        white_background: {
            main: '#F5F5F5'
        },
        white: {
            main: '#FFFFFF'
        },
        black: {
            main: '#000000'
        },
    },
    typography: {
        fontFamily: 'Montserrat',
    }
});

theme = responsiveFontSizes(theme);

export default theme;