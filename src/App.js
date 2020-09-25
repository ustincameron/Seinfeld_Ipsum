import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Divider, Grid, Typography  } from '@material-ui/core';
import BioCard from './components/bioCard';
import LoremGenerator from './components/LoremGenerator';
import SponsoredCard from './components/sponsoredCard';
import TwitCard from './components/twitCard';
import ReactGA from 'react-ga';

const useStyles = makeStyles({
   root: {
      margin:'auto',
      padding:'5%',
   },
   smallCard: {
      minWidth: 200
   },
   bigCard: {
      minWidth: 600,
      margin:'auto auto 20px'
   },
   bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
   },
   title: {
      fontSize: 14,
   },
   tagline: {
      marginBottom: 12,
   },
   version : {
      fontSize:13,
      fontWeight:'bold',
      color:'rgba(0, 0, 0, 0.87)'
   }
});

function App() {
   if (!window.location.hostname.includes("localhost")) { /* Production Only */
      ReactGA.initialize('UA-154880-6');
      ReactGA.pageview(window.location.pathname + window.location.search);
   }

   const classes = useStyles();
   const bull = <span className={classes.bullet}>•</span>;

   return (
    <div className="App">
       <Grid
          className={classes.root +" mobile"}
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          spacing={4}
       >
          <Grid item xs={3}>
       <Card className={classes.smallCard}>
          <CardContent>
             <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
             </Typography>
             <Typography variant="h5" component="h2">
                sein{bull}feld{bull}ip{bull}sum <span className={classes.version}>v2.0</span>
             </Typography>
             <Typography className={classes.tagline} color="textSecondary">
                noun ~ a lorem ipsum generator about nothing.
             </Typography>
             </CardContent>
          </Card>
               <BioCard/>
               <TwitCard/>
               <SponsoredCard/>
          </Grid>
          <Grid item xs={9}>
       <Card className={classes.bigCard}>
          <CardContent>
             <Typography className={classes.title} color="textSecondary" gutterBottom>
                Adjust Settings to get your desired output.
             </Typography>
                <Divider style={{marginTop:5,marginBottom:20}}/>
             <LoremGenerator/>
             </CardContent>
          </Card>
          </Grid>
          </Grid>
    </div>
  );
}

export default App;
