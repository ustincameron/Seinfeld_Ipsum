import React from 'react';
import {Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
   bio: {
      marginTop:20,
      minWidth: 200
   },
   title: {
      fontSize: 14,
   },
   small: {
      fontSize:14
   },
   sponsored: {
      height:200,
      margin:'auto',
      display:'block'
   }
});
const SponsoredCard = () => {
   const classes = useStyles();

   return(
<Card className={classes.bio}>
   <CardContent>
     <img alt="sponsored" src={process.env.PUBLIC_URL + '/advertise_here.png'} className={classes.sponsored} />
   </CardContent>

   <CardActions disableSpacing>
      <Typography color="textSecondary" className={classes.small}>
         sponsored
      </Typography>
   </CardActions>
</Card>
)
};

export default SponsoredCard;