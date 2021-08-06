import React from 'react'
import { withRouterHOC } from 'part:@sanity/base/router'
import { useDocumentOperation, useEditState } from '@sanity/react-hooks'
import {
  Text,
  Container,
  Box,
  Button,
  Stack,
  useToast
} from '@sanity/ui'
import { GrAdd} from 'react-icons/gr'
import Dialog_Popup from './components/dialog'
import ViewAccounts from './components/viewAccounts'
import { encryptKey } from '../../utils/secureKey'

// Sanity uses CSS modules for styling. We import a stylesheet and get an
// object where the keys matches the class names defined in the CSS file and
// the values are a unique, generated class name. This allows you to write CSS
// with only your components in mind without any conflicting class names.
// See https://github.com/css-modules/css-modules for more info.

const WebriQPayments = () => {
  const {useCallback, useState} = React
  const [open, setOpen] = useState(false)
  const onClose = useCallback(() => setOpen(false), [])
  const onOpen = useCallback(() => setOpen(true), [])
  const [required, setRequired] = React.useState(false)
  const ops = useDocumentOperation('stripe-account', 'array')
  const editState = useEditState('stripe-account')  
  const [stripeAPI, setStripeAPI] = React.useState({})
  const toast = useToast()
  const data = []

  const handleChange = (e) => {
    const { name, value } = e.target
    setStripeAPI(prevState => ({...prevState, [name]: value}))
  }
  // const ciphertText = encryptKey('Key')
  // console.log(ciphertText)
  // console.log(decryptKey(ciphertText))
  const handleSubmit = () => {    
    if(stripeAPI?.accountName === undefined || stripeAPI?.stripePKey === undefined || stripeAPI?.stripePKey === undefined) {
      setRequired(true)
    }else {
      editState?.published?.stripeAccounts?.map(account => {
        data.push(account)
      })
      
      stripeAPI['stripeSKey'] = encryptKey(stripeAPI['stripeSKey'])
      data.push(stripeAPI)      
      ops.patch.execute([
        {
          setIfMissing: {
            documentId: 'stripe-account',        
          },
        },
        {
          set: {
            stripeAccounts: data
          },
        },
      ])    
      ops.publish.execute()
      toast.push({
        status: 'success',
        title: 'Account Added'
      })
      setRequired(false)
      onClose()
    }    
  }

  return (
    <>
      {
        open && Dialog_Popup(onClose, handleChange, handleSubmit, required)
      }
     <Container width={2} padding={2}>
        <Box display="flex" style={{justifyContent: 'space-between', alignItems: 'center'}} marginBottom={3} marginTop={3} padding={2}>         
          <Stack space={4} style={{width: '90%'}}>
            <Text size={3} weight='bold'>WebriQ Payments</Text>
            <Text>You can add a stripe account here by providing your <strong>Publishable Key & Secret Key.</strong> Later can be used in your website to create a products & price in the background.</Text>
          </Stack>
          <Stack space={4} style={{width: '30%'}}>
            <Button icon={GrAdd} text="Add API" mode="ghost" onClick={onOpen} style={{cursor: 'pointer'}} />
            <Text align='center' size={1}>Add your Stripe API by clicking the button above</Text>
          </Stack>          
        </Box>       
        {ViewAccounts({accounts: editState?.published?.stripeAccounts})}
      </Container>
    </> 
  )
}
export default withRouterHOC(WebriQPayments)