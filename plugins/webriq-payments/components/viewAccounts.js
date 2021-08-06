import React, {useRef, } from 'react'
import {
    Text,
    Card,
    Box,
    Button,
    Stack,
    Tooltip,
    useToast
  } from '@sanity/ui'
  import { GrView } from 'react-icons/gr'
  import { BiKey } from 'react-icons/bi'
  import { FaCcStripe } from 'react-icons/fa'
  import { VscGistSecret, VscListTree, VscTrash } from 'react-icons/vsc'
  import { AiOutlineAppstoreAdd } from 'react-icons/ai'

function ViewAccounts({accounts}) {
    const toast = useToast()
    const TextTooltip = (tooltipText, text) => {
        return (
          <Tooltip
              content={
                <Box padding={2}>
                  <Text muted size={1}>
                    {tooltipText}
                  </Text>
                </Box>
              }
              fallbackPlacements={['right', 'left']}
              placement="top"
              portal
            >
            {<Text size={2}>{tooltipText === 'Public Key' && String(text).length > 60 ? String('.').repeat(25) + String(text).slice(60) : text}</Text>}
            
          </Tooltip>  
        )
      }

    const copyToClipBoard = (text) => {
        navigator.clipboard.writeText(text)
        toast.push({
            status: 'success',
            title: 'Copied to clipboard'
          })
    }
    return (
        <>
        {
        accounts === undefined ?
        <Card padding={4} marginBottom={3} border="1px solid lightgray" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text>No Account Added Yet. Click <strong>Add API Button</strong> make one.</Text>                    
        </Card>
        :
        accounts?.map(account => 
            <Card key={account.stripePkey} padding={4} marginBottom={3} border="1px solid lightgray" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box>
                    <Stack space={2}>  
                    <Box display='flex' style={{alignItems: 'center', marginBottom: 5}}>
                        <FaCcStripe style={{marginRight: 15, fontSize: 20}}/>       
                        <Text  style={{fontSize: 18}} weight='bold'>{account.accountName}</Text>
                    </Box>              
                    <Box display='flex' style={{alignItems: 'center', cursor: 'pointer'}} onClick={() => copyToClipBoard(account.stripePKey)}>
                        <BiKey style={{marginRight: 15, fontSize: 20}}/>
                        {TextTooltip("Public Key", account.stripePKey)}                
                    </Box>            
                    <Box display='flex' style={{alignItems: 'center'}}>
                        <VscGistSecret style={{marginRight: 15, fontSize: 20}}/>          
                        {TextTooltip("Secret Key", '*'.repeat(60))} 
                    </Box>
                    <Box display='flex' style={{alignItems: 'center'}}>
                        <VscListTree style={{marginRight: 15, fontSize: 20}}/>          
                        {TextTooltip("Used In")} 
                    </Box>
                    <Box display='flex' style={{alignItems: 'center'}}>
                        <AiOutlineAppstoreAdd style={{marginRight: 15, fontSize: 20}}/>          
                        {TextTooltip("Products Created")} 
                    </Box>
                    </Stack>
                </Box>
                <Box>
                <Tooltip
                    content={
                        <Box padding={2}>
                        <Text muted size={1}>
                            View Account
                        </Text>
                        </Box>
                    }
                    fallbackPlacements={['right', 'left']}
                    placement="top"
                    portal
                    >
                    <Button mode="bleed" tone="primary" icon={GrView}/>
                </Tooltip>
                {/* <Tooltip
                    content={
                        <Box padding={2}>
                        <Text muted size={1}>
                            Delete Account
                        </Text>
                        </Box>
                    }
                    fallbackPlacements={['right', 'left']}
                    placement="top"
                    portal
                    >
                    <Button mode="bleed" tone="critical" icon={VscTrash}/>
                </Tooltip>*/}
                </Box>
            </Card>    
            )
        }
        </>
    )
}

export default ViewAccounts
