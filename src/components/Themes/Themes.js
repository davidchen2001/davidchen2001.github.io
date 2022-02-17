import { createTheme } from "@mui/material"

export const fontFamily = createTheme({
    typography: {
      fontFamily: [
        'Nunito',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    body1: {
      fontSize: 17
    },
    bold: {
      fontWeight: 500
    }
});

export const darkTheme = {
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    background: '#999',
}

export const lightTheme = {
    body: '#fafafa',
    text: '#363537',
    toggleBorder: '#FFF',
    background: '#363537',
}