// در فایل theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#38bdf8', // رنگ اصلی
        },
        secondary: {
            main: '#22c55e', // رنگ ثانویه
        },
        dark: {
            main: '#1C2434', // رنگ ثانویه
        },
    },
    typography: {
        fontFamily: 'Dana',
    },
});

export default theme;
