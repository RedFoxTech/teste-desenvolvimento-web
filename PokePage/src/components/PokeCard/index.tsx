import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

interface PokeCardProps {
  name: string;
  imageUrl: string;
  types: any;
}

export function PokeCard(props: PokeCardProps) {
  const typeHandler = () => {
    if(props.types[1]) {
      return props.types[0].type.name + " | " +props.types[1].type.name
    }
    else {
      return props.types[0].type.name
    }
  }

  return (
    <Card sx={{ maxWidth: 345, margin:"1rem", backgroundColor: "#29292E", color: "#fff" }}>
      <CardMedia
        sx={{ height: 215 }}
        image={props.imageUrl}
        title=""
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            {typeHandler()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
