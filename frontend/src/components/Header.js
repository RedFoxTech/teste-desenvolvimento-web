import { Container, Typography } from "@mui/material";

export default function Header() {
    return (
        <Container maxWidth={false} component="header" sx={{ bgcolor: 'primary.main', p: 1}}>
            <Typography component="h1" variant="h4" sx={{ flexGrow: 1, color: 'secondary.main' }}>
                Pokedex
            </Typography>
        </Container>
    )
}