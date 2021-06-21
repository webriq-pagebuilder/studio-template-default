import React from 'react'
import {withRouterHOC} from 'part:@sanity/base/router'
import {
  TabList,
  TabPanel,
  Tab,
  Card,
  Text,
  Tooltip,
  Box,
  Button,
  Stack,
  Heading,
  Grid,
  Dialog
} from '@sanity/ui'
import Colors from './views/colors';
import Typography from './views/typography';
import { BiImport } from 'react-icons/bi';
import { AiOutlineRedo } from 'react-icons/ai';
// Sanity uses CSS modules for styling. We import a stylesheet and get an
// object where the keys matches the class names defined in the CSS file and
// the values are a unique, generated class name. This allows you to write CSS
// with only your components in mind without any conflicting class names.
// See https://github.com/css-modules/css-modules for more info.

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
    cursor: 'pointer'
  }
}

const ThemeManager = () => {  
  const [id, setId] = React.useState('Typography')
  const [open, setOpen] = React.useState(false)
  const [themeStyle, setThemeStyle] = React.useState({
    headingFontFamily: '',
    headingFontSize: '',

    descriptionFontFamily: '',
    descriptionFontSize: '',

    themeColor: '',
    // headingTextColor: '',
    // descriptionTextColor: '',
    // primaryButtonColor: '',
    // primaryTextColor: '',
    // secondaryButtonColor: '',
    // secondaryTextColor: ''
  })

  const Tabs = [
    'Typography',
    'Colors',    
  ]

  const renderTab = (tab) => {
    switch(tab) {
      case 'Typography':
        return <Typography setStyle={setThemeStyle} data={themeStyle}/>
      case 'Colors':
        return <Colors setStyle={setThemeStyle} data={themeStyle}/>     
      default:
        return <Typography />
    }
  }
  console.log(themeStyle)
  const handleClickOpen = () => {
    setOpen(true)   
  }

  const handleClickProceed = () => {
    setThemeStyle({
      headingFontFamily: 'sans-serif',
      headingFontSize: '36',
      descriptionFontFamily: 'sans-serif',
      descriptionFontSize: '14',
      themeColor: '#059669',
      // headingTextColor: '#0D1F3C',
      // descriptionTextColor: '#0D1F3C',
      // primaryButtonColor: '#059669',
      // primaryTextColor: '#F5F5F5',
      // secondaryButtonColor: '#F5F5F5',
      // secondaryTextColor: '#000000'
    })
    setOpen(false)
  }

  const preview = () => {
    return (
      <Grid columns={2} autuRows="min" style={{display: 'flex', alignItems: 'center', justifyContent: "space-evenly", border: '1px solid lightgray', padding: 25, borderRadius: '15px 15px 15px 15px', backgroundColor: 'whitesmoke'}}>
        <Stack space={3} style={{marginLeft: 5, maxWidth: 400}}>
          <Heading style={{fontSize: `${themeStyle.headingFontSize === '' ? 36 : themeStyle.headingFontSize}px`, lineHeight: 1.2, fontFamily: themeStyle.headingFontFamily === '' ? 'sans-serif' : themeStyle.headingFontFamily, color: themeStyle.headingTextColor === '' ? '#0D1F3C' : themeStyle.headingTextColor}}>
            <strong>Build & Launch without problems</strong>
          </Heading>
          <Text style={{marginTop: 15, fontSize: `${themeStyle.descriptionFontSize === '' ? 14 : themeStyle.descriptionFontSize}px`, lineHeight: 1.2, fontFamily: themeStyle.descriptionFontFamily === '' ? 'sans-serif' : themeStyle.descriptionFontFamily, color: themeStyle.descriptionTextColor === '' ? '#0D1F3C' : themeStyle.descriptionTextColor}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellientesque efficitur nisl sodales egestas lobortis.
          </Text>
          <Box style={{display: 'flex', justifyContent: 'space-evenly', width: 300, marginTop: 10}}>
            <Button style={{width: 130, padding: 5, textAlign: 'center', fontWeight: 'bolder', border: 'none', outline: 'none', borderRadius: '15px 15px 0px 15px', marginRight: 4, backgroundColor: themeStyle.themeColor === '' ? '#059669' : themeStyle.themeColor , color:  '#F5F5F5'}}>Get Started</Button>
            <Button style={{width: 130, padding: 5, textAlign: 'center', fontWeight: 'bolder', border: 'none', outline: 'none', borderRadius: '15px 15px 0px 15px', backgroundColor:'#F5F5F5', color: '#000000'}}>How it works</Button>
          </Box>
        </Stack>
        <Box overflow="hidden">
          <img style={{borderRadius: '15px 15px 0px 15px'}} src="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" height="auto" width="300"/>
        </Box>
      </Grid>
    )
  }
  return (
    <Box padding={5}>
      {
        open && (
          <Dialog
            header="Warning"
            id="dialog-example"
            onClose={() => setOpen(false)}
            zOffset={1000}
          >
            <Box padding={4}>
              <Text>Are you sure you want to change back to default Theme, this will revert all styles from your pages?</Text>
            </Box>
            <Box style={{borderTop: '1px solid lightgray', paddingBottom: 5, padding: 7, display: 'flex', justifyContent: 'space-evenly'}}>
              <Button text="Proceed"
                 mode="default"
                 type="button"
                 style={{cursor: 'pointer'}}
                 tone="positive"
                 onClick={handleClickProceed}
              />
              <Button text="Cancel"
                 mode="default"
                 type="button"
                 style={{cursor: 'pointer'}}
                 tone="critical"
                 onClick={() => setOpen(false)}
              />
            </Box>
          </Dialog>
        )
      }
      <Box>
        <Box display="flex" paddingTop={2} style={{justifyContent: 'flex-end',}}>
        <Tooltip placement="top" content={<Box padding={1}><Text muted size={1}>Import Font Style</Text></Box>}>
          <Button
            fontSize={[2, 2]}
            style={{cursor: 'pointer'}}
            icon={BiImport}
            mode="default"
            padding="3"
            type="button"
            tone="critical"
          />   
          </Tooltip>    
           <Tooltip placement="top" content={<Box padding={1}><Text muted size={1}>Change to Default Theme Design</Text></Box>}>
            <Button
                fontSize={[2, 2]}                
                icon={AiOutlineRedo}               
                padding="3"
                mode="default"
                type="button"
                tone="primary"
                style={{marginLeft: 5, cursor: 'pointer', color: 'white'}}
                onClick={handleClickOpen}
              />   
            </Tooltip>   
        </Box>         
        </Box>
      <Card paddingTop={2} style={styles.transparent}>        
      <TabList>      
        {
          Tabs.map(tab => {
            return (              
              <Tab
                key={tab}
                tone="primary"
                style={styles.spacing}
                aria-controls={`${tab}-panel`}
                id={`${tab}-tab`}
                label={tab}
                onClick={() => setId(tab)}
                selected={id === tab}
                space={2}                
              />                            
            )
          })
        }        
      </TabList>
      <Stack style={{display: 'flex'}}>
        <Stack padding={3} style={{minWidth: 400, border: '1px solid lightgray'}}>
          <Box marginBottom={4}>
            <Text style={{fontSize: 14, marginTop: 28}}>
              <strong>{id}</strong>
            </Text>
          </Box>
          {
            Tabs.map(tab => {   
              return (
                <TabPanel
                  key={tab}
                  aria-labelledby={`${tab}-tab`}
                  hidden={id !== tab}
                  id={`${tab}-panel`}
                  >
                  <Card radius={2} tone="transparent">                
                    {renderTab(tab)}
                  </Card>
                </TabPanel>
              )
            })
          } 
        </Stack>
        <Stack padding={3} style={{ border: '1px solid lightgray', width: '100%'}}>
          <Box marginBottom={4}>
            <Text style={{fontSize: 14, marginTop: 25}}>
              <strong>Choosen Style will reflect below:</strong>
            </Text>
          </Box>
        {preview()} 
        </Stack>  
      </Stack>           
    </Card>
    </Box>
  )
}

export default withRouterHOC(ThemeManager)
