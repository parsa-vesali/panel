// در فایل theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#38bdf8', // رنگ اصلی
        },
        secondary: {
            main: '#dc004e', // رنگ ثانویه
        },
    },
    typography: {
        fontFamily: 'Dana',
    },
});

export default theme;
