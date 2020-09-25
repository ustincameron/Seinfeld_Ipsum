import React from 'react';
import { Avatar, Card, CardActions, CardContent, IconButton, Link, makeStyles, Typography } from '@material-ui/core';

import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
   bio: {
      marginTop:20,
      minWidth: 200
   },
   title: {
      fontSize: 14,
   },
   tagline: {
      marginBottom: 12,
   },
});
const BioCard = () => {
   const classes = useStyles();

   return(
<Card className={classes.bio}>
   <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
         A One-day Project Created by:
      </Typography>
      <Avatar style={{float:'right'}} alt="Austin Cameron" src={process.env.PUBLIC_URL + '/Austin_Cameron.jpg'} />

      <Typography variant="h5" component="h2">
         Austin Cameron
      </Typography>
      <Typography className={classes.tagline} color="textSecondary">
         @ustinCameron
      </Typography>
   </CardContent>

   <CardActions disableSpacing>
      <Link href="https://Youtube.com/AustinCameron?sub_confirmation=1" target="_blank" rel="noreferrer">
         <IconButton aria-label="Youtube">
            <YouTubeIcon />
         </IconButton>
      </Link>
      <Link href="https://instagram.com/ustinCameron" target="_blank" rel="noreferrer">
         <IconButton aria-label="Instagram">
            <InstagramIcon />
         </IconButton>
      </Link>
      <Link href="https://AustinCameron.com" target="_blank" rel="noreferrer">
         <IconButton aria-label="Website">
            <LanguageIcon />
         </IconButton>
      </Link>
      <Link href="https://twitter.com/ustinCameron" target="_blank" rel="noreferrer">
         <IconButton aria-label="Twitter">
            <TwitterIcon />
         </IconButton>
      </Link>
      <Link href="https://github.com/ustinCameron" target="_blank" rel="noreferrer">
         <IconButton aria-label="Github">
            <GitHubIcon />
         </IconButton>
      </Link>
      <Link href="https://linkedin.com/AustinCameron" target="_blank" rel="noreferrer">
         <IconButton aria-label="LinkedIn">
            <LinkedInIcon />
         </IconButton>
      </Link>
   </CardActions>
</Card>
)
};

export default BioCard;