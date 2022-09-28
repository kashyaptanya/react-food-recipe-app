import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Recipe = ({ recipes }) => {

  const [expanded, setExpanded] = React.useState(null);

  const handleExpandClick = (index) => {
    console.log(index)
    recipes.forEach((recip, index1) => {
      if (index === index1) {
        if(expanded === index){
          setExpanded(null)
        } else {
        setExpanded(index);
        }
      }
    })
  };

  return (
    <div className="row">
      {
        recipes.map((recipe, index2) => (
          <div className="col-md-4 tittle" key={index2}>
            <Card sx={{ maxWidth: 300 }} className="cardd">
              <CardHeader title={recipe.recipe.label} />
              <CardMedia component="img" height="194" image={recipe.recipe.image} />
              <CardActions disableSpacing>
                <div className="n"><i className="fa-sharp fa-solid fa-utensils cook"></i>Ingredient</div>
                <IconButton aria-label="share">
                </IconButton>
                <ExpandMore expand={expanded === index2} onClick={() => handleExpandClick(index2)} aria-expanded={expanded === index2} aria-label="show more">
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded === index2} timeout="auto" unmountOnExit>
                <CardContent>
                  {
                    recipe.recipe.ingredientLines.map((ingredient, index) => (
                      <Typography paragraph key={index}>{ingredient} </Typography>
                    ))
                  }
                </CardContent>
              </Collapse>
            </Card>

          </div>
        )
        )
      }
    </div>
  )

}
export default Recipe