import React, { useState } from 'react';
import { Button, Checkbox, Divider, Grid, Input, InputLabel, FormGroup, FormControlLabel, LinearProgress, ListItemText, MenuItem, Select, Slider, Switch, Typography } from '@material-ui/core';
import quotes from '../../assets/quotes.json';

const defaultComponentProps = {
   numberOfParagraphs: 3,
   avgWordsPerSentence: 8,
   avgSentencesPerParagraph: 4,
   showCharacterNames: true,
   startWithLoremIpsum: true,
   endWithLoremIpsum: true
};
const ITEM_HEIGHT = 108;
const ITEM_PADDING_TOP = 4;
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
      }
   }
};

const LoremGenerator = () => {
   const [personName, setPersonName] = React.useState([...new Set(quotes.items.map(data => data.from))]);
   const [componentProps, setComponentProps] = useState(defaultComponentProps);
   const uniqueNames = [...new Set(quotes.items.map(data => data.from))];

   const handleCharacterChange = (event) => {
      setPersonName(event.target.value);
   };

   const handleComponentPropsChange = event => {
      const { type, name, value, checked } = event.target;
      const { [name]: oldValue, ...others } = componentProps;
      setComponentProps({ [name]: type === 'checkbox' ? checked : parseInt(value, 10), ...others });
   };

   const handleSliderChange = (name, value) => {
      if(name && value){
         const { [name]: oldValue, ...others } = componentProps;
         if(oldValue !== value){
            setComponentProps({ [name]: value, ...others });
         }
      }
   };

   const resetComponentProps = () => {
      setComponentProps(defaultComponentProps);
      setPersonName([...new Set(quotes.items.map(data => data.from))]);
   };

   const refreshOutput = () => {
      setComponentProps({ ...componentProps });
   };

   const return_filtered_output = () => {

      var filtered_output = "";

      for(var num=0;num<componentProps.numberOfParagraphs;num++){ // number of paragraphs

         filtered_output +="<p>";

         if(num===0){ // first quote
            filtered_output += componentProps.startWithLoremIpsum ? "Lorem ipsum odor amet. " : "";
         }
         for(var i=0;i<componentProps.avgSentencesPerParagraph;i++){ // number of sentences/quotes
            var tempItems = quotes.items ? quotes.items : [];

            if(componentProps.avgWordsPerSentence){ // max number of words
               tempItems = tempItems.filter(x => {
                  let tempWords = x.quote ? x.quote.split(" ") : [];
                  return (tempWords.length<=componentProps.avgWordsPerSentence) ? x : false;
               });

            }
            if(personName.length>0){ // specific to characters
                  tempItems = tempItems.filter(r=> {return (personName.includes(r.from)) ? r : false});
            }

            // now finale output, depending on if name is also shown
            if(tempItems.length>0){
               let tempNum = Math.floor(Math.random() * tempItems.length);
               filtered_output += (componentProps.showCharacterNames) ?
               tempItems[tempNum].from+": "+tempItems[tempNum].quote+" "
                  :
               tempItems[tempNum].quote+" ";
            }

         }

         if(num+1===componentProps.numberOfParagraphs){ // last quote
            filtered_output = componentProps.endWithLoremIpsum ? filtered_output+" Yada, yada, yada..." : filtered_output;
         }

         filtered_output +="</p>\r\n";
      }
      return {__html: filtered_output};

   }

   return (
      <Grid
         container
         direction="row"
         justify="space-evenly"
         alignItems="flex-start"
         spacing={2}
      >

         <Grid item xs={5}>
            <InputLabel id="demo-mutiple-checkbox-label">Select Characters</InputLabel>
            <Select
               labelId="demo-mutiple-checkbox-label"
               id="demo-mutiple-checkbox"
               multiple
               value={personName}
               onChange={handleCharacterChange}
               input={<Input style={{maxWidth:300,margin:'auto',display:'block'}}/>}
               renderValue={(selected) => selected.join(', ')}
               MenuProps={MenuProps}
            >
               {uniqueNames.map((item,index) => (
                  <MenuItem key={index} value={item}>
                     <Checkbox checked={personName.indexOf(item) > -1} />
                     <ListItemText primary={item} />
                  </MenuItem>
               ))}
            </Select>

            <Grid
               container
               direction="row"
               justify="space-evenly"
               alignItems="center"
               spacing={2}
               className="ctaButtons"
               style={{marginTop:60}}
            >
            <Button variant="contained" color="secondary" style={{marginRight:10}}
                    type="button"
                    onClick={resetComponentProps}
            >
               Reset Options
            </Button>
            <Button variant="contained" color="default"
                    type="button"
                    onClick={refreshOutput}
            >
               Refresh Output
            </Button>
         </Grid>
         </Grid>
         <Grid item xs={5}>

            <div className="prop">
               <InputLabel id="demo-mutiple-checkbox-label">{`Number of Paragraphs (${componentProps.numberOfParagraphs})`}</InputLabel>
               <Slider
                  color="secondary"
                  value={componentProps.numberOfParagraphs}
                  step={1}
                  min={1}
                  max={10}
                  onChange={(e,v)=>{handleSliderChange("numberOfParagraphs",v)}}
                  valueLabelDisplay="auto"
               />
            </div>
            <div className="prop">
               <InputLabel id="demo-mutiple-checkbox-label">{`Max Words Per Sentence (${componentProps.avgWordsPerSentence})`}</InputLabel>
               <Slider
                  color="secondary"
                  value={componentProps.avgWordsPerSentence}
                  step={1}
                  min={2}
                  max={28}
                  onChange={(e,v)=>{handleSliderChange("avgWordsPerSentence",v)}}
                  valueLabelDisplay="auto"
               />
            </div>
            <div className="prop">
               <InputLabel id="demo-mutiple-checkbox-label">{`Sentences Per Paragraph (${componentProps.avgSentencesPerParagraph})`}</InputLabel>
               <Slider
               color="secondary"
               value={componentProps.avgSentencesPerParagraph}
               step={1}
               min={1}
               max={10}
               onChange={(e,v)=>{handleSliderChange("avgSentencesPerParagraph",v)}}
               valueLabelDisplay="auto"
            />
            </div>
            <FormGroup>
            <FormControlLabel
               control={<Switch checked={componentProps.startWithLoremIpsum} onChange={handleComponentPropsChange} name="startWithLoremIpsum" />}
               label='Start with "Lorem ipsum odor amet"'
            />
            <FormControlLabel
               control={<Switch checked={componentProps.endWithLoremIpsum} onChange={handleComponentPropsChange} name="endWithLoremIpsum" />}
               label='End with "Yada, yada, yada...'
            />
            <FormControlLabel
               control={<Switch checked={componentProps.showCharacterNames} onChange={handleComponentPropsChange} name="showCharacterNames" />}
               label='Show Names with Quotes'
            />
               </FormGroup>
         </Grid>
         <Grid item xs={12}>
            <Typography variant="h5" component="h2" style={{marginTop:10}}>
               Output
            </Typography>
            <Divider/>
            {(quotes.items)
               ?
               <div dangerouslySetInnerHTML={return_filtered_output()} />
               :
               <LinearProgress color="secondary" style={{width:'80%',margin:'40px auto 30px'}} />
            }
         </Grid>
      </Grid>
   );
};

export default LoremGenerator;