import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core/styles'
import { purple, blue } from '@material-ui/core/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[800]
        },
        secondary: {
            main: blue[700]
        },
    },
    
})

export default theme;