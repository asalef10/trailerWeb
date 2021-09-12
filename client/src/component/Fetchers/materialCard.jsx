import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
export default function MediaCard({
  title,
  overview,
  imagUrl,
  idMovie,
  sizeWidth = 445,
}) {
  const useStyles = makeStyles({
    root: {
      maxWidth: sizeWidth,
    },
    media: {
      height: 445,
    },
  });
  const classes = useStyles();
  return (
    <Card style={{ backgroundColor: 'black' }} className={classes.root}>
      <CardActionArea>
        <Link to={`/MovieDetails/${idMovie}`}>
          <CardMedia
            className={classes.media}
            image={`https://image.tmdb.org/t/p/w500//${imagUrl}`}
            title={title}
          />
        </Link>
        <CardContent>
          <Typography style={{textAlign:'center'} } color="error" gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          
          <Typography style={{color:'#d7aca9',textAlign:'center'} } variant="body2" color="" component="p">
            {overview}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions></CardActions>
    </Card>
  );
}
