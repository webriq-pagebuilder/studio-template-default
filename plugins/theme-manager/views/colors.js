import React from 'react'
import {
    Text,
    Card,
    Stack,
    Select,
    Box,
    Grid,
    Button,
} from '@sanity/ui';
import { BiSave } from 'react-icons/bi';
// import client from '../config'

const styles = {
    whitesmoke: {
      backgroundColor: 'whitesmoke'
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

function Colors(props) {
    const {setStyle, data} = props
    const [change, setChange] = React.useState(false)
 
  const handleChange = (e) => {
    const {name, value} = e.target
    setChange(true)
    setStyle(prevState => ({...prevState, [name]: value}))
  }
    return (
      <Grid gap={4}>        
        <Card style={styles.whitesmoke} padding={3}>
          <Box marginBottom={2} style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
              <Text style={{marginRight: 15}}><strong>Theme Color:</strong></Text>
              {/* <Text>This will reflect in all of your pages with</Text> */}
              <input type="color" min="1" max="100" name="themeColor" onChange={e => handleChange(e)} value={data.themeColor === '' ? '#059669' : data.themeColor} />      
          </Box>   
        </Card>
        {/* <Card style={styles.whitesmoke} padding={3}>
          <Box marginBottom={2} style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
              <Text style={{marginRight: 15}}><strong>Heading Text Color:</strong></Text>
              <input type="color" min="1" max="100" name="headingTextColor" onChange={e => handleChange(e)} value={data.headingTextColor === '' ? '#0D1F3C' : data.headingTextColor} />      
          </Box>         
        </Card>
        <Card style={styles.whitesmoke} padding={3}>
          <Box marginBottom={2} style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
              <Text style={{marginRight: 15}}><strong>Description Text Color:</strong></Text>
              <input type="color" min="1" max="100" name="descriptionTextColor" onChange={e => handleChange(e)} value={data.descriptionTextColor === '' ? '#0D1F3C' : data.descriptionTextColor} />      
          </Box>         
        </Card>
        <Card style={styles.whitesmoke} padding={3}>
          <Box marginBottom={2} style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
              <Text style={{marginRight: 15}}><strong>Primary Button Color:</strong></Text>
              <input type="color" min="1" max="100" name="primaryButtonColor" onChange={e => handleChange(e)} value={data.primaryButtonColor === '' ? '#059669' : data.primaryButtonColor} />      
          </Box>
          <Box marginBottom={2} style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
              <Text style={{marginRight: 15}}><strong>Primary Text Color:</strong></Text>
              <input type="color" min="1" max="100" name="primaryTextColor" onChange={e => handleChange(e)} value={data.primaryTextColor === '' ? '#F5F5F5' : data.primaryTextColor} />      
          </Box> 
        </Card>
        <Card style={styles.whitesmoke} padding={3}>
          <Box marginBottom={2} style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
              <Text style={{marginRight: 15}}><strong>Secondary Button Color:</strong></Text>
              <input type="color" min="1" max="100" name="secondaryButtonColor" onChange={e => handleChange(e)} value={data.secondaryButtonColor === '' ? '#F5F5F5' : data.secondaryButtonColor} />      
          </Box>
          <Box marginBottom={2} style={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
              <Text style={{marginRight: 15}}><strong>Secondary Text Color:</strong></Text>
              <input type="color" min="1" max="100" name="secondaryTextColor" onChange={e => handleChange(e)} value={data.secondaryTextColor === '' ? '#000000' : data.secondaryTextColor} />      
          </Box>  
        </Card> */}
        <Box display="flex" style={{justifyContent: 'flex-start'}}>
          <Button
            fontSize={[2, 2]}
            style={{cursor: 'pointer'}}
            icon={BiSave}
            disabled={!change ? true : false}
            padding="3"
            text="Save"
            mode="default"
            type="button"
            tone="positive"
          />
        </Box>
      </Grid>
    )
}

export default Colors
