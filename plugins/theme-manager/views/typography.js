import React from 'react'
import {
    Text,
    Card,
    Stack,
    Select,
    Box,
    Button,
    Grid,
} from '@sanity/ui';
import { BiSave } from 'react-icons/bi';

const styles = {
    transparent: {
      backgroundColor: 'transparent'
    },
    borderBottom: {
      borderBottom: '1px solid #DDE0E7',   
      paddingTop: '10px'
    },
    spacing: {
      marginRight: '7px',
      cursor: 'pointer',
    },
  }

function Typography(props) {
  const {setStyle, data} = props
  const [change, setChange] = React.useState(false)
  const fontFamilies = [
    'cursive',
    'fantasy',
    'inherit',
    'initial',
    'monospace',
    'revert',
    'sans-serif',
    'serif',
    'unset',
  ]
  const handleChange = (e) => {
    const {name, value} = e.target
    setChange(true)
    setStyle(prevState => ({...prevState, [name]: value}))
  }
    return (
        <Grid gap={4}>          
          <Stack padding={5} space={5} style={{backgroundColor: 'whitesmoke'}}>
            <Card style={styles.transparent}>
              <Box marginBottom={2}>
                  <Text><strong>Heading Font Family</strong></Text>
              </Box>
              <Stack>
                  <Select
                    fontSize={2}
                    padding={2}
                    space={2}
                    onChange={e => handleChange(e)}
                    name="headingFontFamily"
                    value={data.headingFontFamily === '' ? 'sans-serif' : data.headingFontFamily}
                    >
                      {fontFamilies.map(fontFamily => 
                      <option value={fontFamily} key={fontFamily}>{fontFamily.charAt(0).toUpperCase() + fontFamily.slice(1)}</option>  
                      )}
                  </Select>
              </Stack>
            </Card>
            <Card style={styles.transparent}>
              <Box marginBottom={2} style={{display: 'flex', justifyContent: 'space-between'}}>
                <Text><strong>Heading Font Size: </strong></Text>
                <Text><i style={{fontSize: 12}}>{data.headingFontSize === '' ? '36' : data.headingFontSize}px</i></Text>
              </Box>
              <Stack marginBottom={20}>
                <input type="range" min="1" max="100" name="headingFontSize" onChange={e => handleChange(e)} value={data.headingFontSize === '' ? '35' : data.headingFontSize} style={{outline: 'none'}} />              
              </Stack>
            </Card>     
          </Stack>  
          
          <Stack padding={5} space={5} style={{backgroundColor: 'whitesmoke'}}>
            <Card style={styles.transparent}>
            <Box marginBottom={2}>
                <Text><strong>Description Font Family</strong></Text>
            </Box>
            <Stack>
                <Select
                  fontSize={2}
                  padding={2}
                  space={2}
                  onChange={e => handleChange(e)}
                  name="descriptionFontFamily"
                  value={data.descriptionFontFamily === '' ? 'sans-serif' : data.descriptionFontFamily}
                  >
                    {fontFamilies.map(fontFamily => 
                    <option value={fontFamily} key={fontFamily}>{fontFamily.charAt(0).toUpperCase() + fontFamily.slice(1)}</option>  
                    )}
                </Select>
            </Stack>
          </Card>
          <Card style={styles.transparent}>
            <Box marginBottom={2} style={{display: 'flex', justifyContent: 'space-between'}}>
                <Text><strong>Description Font Size: </strong></Text>
                <Text><i style={{fontSize: 12}}>{data.descriptionFontSize === '' ? '14' : data.descriptionFontSize}px</i></Text>
            </Box>
            <Stack marginBottom={20}>
              <input type="range" min="1" max="100" name="descriptionFontSize" onChange={e => handleChange(e)} value={data.descriptionFontSize === '' ? '14' : data.descriptionFontSize} style={{outline: 'none'}} />              
            </Stack>
          </Card>
          </Stack>
          <Box display="flex" paddingBottom={5} style={{justifyContent: 'flex-start'}}>            
          <Button
              fontSize={[2, 2]}                
              icon={BiSave}               
              padding="3"
              disabled={!change ? true : false}
              text="Save"
              mode="default"
              type="button"
              tone="positive"
              style={{marginLeft: 5}, change ? {cursor: 'pointer'} : {cursor: 'not-allowed'}}
            />            
          </Box>                 
        </Grid>
    )
}

export default Typography
