import React from 'react'
import {
    Text,
    TextInput,
    Box,
    Button,
    Dialog
  } from '@sanity/ui'

const Dialog_Popup = (onClose, handleChange, handleSubmit, required) => {
    return (
      <Dialog
          header="Add Stripe Account"
          id="dialog-example"
          onClose={onClose}
          zOffset={1000}
        >
        <Box padding={3}>
          <Text size={2} style={{marginBottom: 10}}>Account Name <span style={{color: 'red'}}>*</span></Text>
          <TextInput
            fontSize={2}
            onChange={(event) =>
              handleChange(event)
            }          
            placeholder="Account Name"
            name="accountName"
          />
         {required && <Text size={1} style={{color: 'red', marginTop: 3}}>Required</Text>}
        </Box>
        <Box padding={3}>
          <Text size={2} style={{marginBottom: 10}}>Stripe Publishable Key <span style={{color: 'red'}}>*</span></Text>
          <TextInput
            fontSize={2}
            onChange={(event) =>
              handleChange(event)
            }
            type="password"
            placeholder="Publishable Key"
            name="stripePKey"
          />
         {required && <Text size={1} style={{color: 'red', marginTop: 3}}>Required</Text>}
        </Box>
        <Box padding={3}>
          <Text size={2} style={{marginBottom: 10}}>Stripe Secret Key <span style={{color: 'red'}}>*</span></Text>
          <TextInput
            fontSize={2}
            onChange={(event) =>
              handleChange(event)
            }
            type="password"
            placeholder="Secret Key"
            name="stripeSKey"
          />
         {required && <Text size={1} style={{color: 'red', marginTop: 3}}>Required</Text>}
        </Box>
        <Box padding={3}>
          <Button text="Add Account" mode="default" style={{cursor: 'pointer', width: '100%'}} tone='positive' onClick={handleSubmit} />
        </Box>
      </Dialog>
    )
}

export default Dialog_Popup
