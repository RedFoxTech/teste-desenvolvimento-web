import { Box, useTheme } from "@mui/material";
import Header from '../components/Header';
export default function Default({ children }) {
    const theme = useTheme();
    return (
        <>
            <Header />
            <Box sx={{ p: theme.spacing(6, 0, 6) }}>
                {children}
            </Box>
        </>
    )
}
