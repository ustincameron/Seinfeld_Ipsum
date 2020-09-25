import React from 'react';
import { Button, Card, CardContent, LinearProgress, makeStyles, Typography} from '@material-ui/core';
import quotes from '../../assets/quotes.json';
const useStyles = makeStyles({
   twit: {
      marginTop:20,
      minWidth: 200
   },
   title: {
      fontSize: 14,
   },
   example: {
      fontSize: 12,
      textAlign: 'center',
   },
   twitButton: {
      textAlign: 'center',
      margin: '5px auto auto'
   },
   twitLink: {
      textDecoration: 'none'
   },
   loadingBar: {
      width:'80%',
      margin:'40px auto 30px'
   },
});
const TwitCard = () => {
   const classes = useStyles();
   const tempNum = Math.floor(Math.random() * quotes.items.length);
   const randTweet = quotes.items[tempNum].from+": "+quotes.items[tempNum].quote;
   return(
<Card className={classes.twit}>
      <CardContent>
         <Typography className={classes.title} color="textSecondary" gutterBottom>
            Tweet a Random Quote
         </Typography>

         <Typography className={classes.example} color="textSecondary" gutterBottom>
            {
               (quotes.items) ? <span data-testid="test-tweet">"{randTweet}"</span> : <LinearProgress color="secondary" className={classes.loadingBar} />
            }
         </Typography>
         <Typography variant="h5" component="h2" className={classes.twitButton}>
            <a target="_blank" rel="noopener noreferrer" className={classes.twitLink} href={"https://twitter.com/intent/tweet?url=https%3A%2F%2FSeinfeldIpsum.com&via=ustinCameron&text="+encodeURIComponent(randTweet)+"%20%7C%20Seinfeld%20Ipsum%20Generator%20&hashtags=SeinfeldIpsum%2CSeinfeld"}>
               <Button variant="contained" color="default" type="button">#SeinfeldIpsum</Button>
            </a>
         </Typography>
      </CardContent>
   </Card>
)
};
export default TwitCard;