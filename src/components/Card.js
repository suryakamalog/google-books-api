import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({name, authors, description, image, link}) {

  return (
    <Card sx={{ width:350,height:350,margin:'1rem',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>
      <CardMedia
        sx={{ height: 140,borderBottom:'1px solid #cccccc' }}
        image={image ? image : "../public/logo192.png"}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {authors}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description ? `${description.trim().slice(0,80)}...` : "No description"}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" color="primary" href={link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}