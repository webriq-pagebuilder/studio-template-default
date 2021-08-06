import React from 'react'
import {
    Select
} from '@sanity/ui'
import {withDocument} from 'part:@sanity/form-builder';
import { FormField } from '@sanity/base/components'
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event"
import sanityClient from 'part:@sanity/base/client'

const StripeAccountSelect = React.forwardRef((props, ref) => {
    const {type, onBlur, onFocus, onChange, value} = props
    const [accounts, setAccounts] = React.useState([])
    const [selected, setSelected] = React.useState()     
    const client = sanityClient.withConfig({apiVersion:  'v1'})

    const query = '*[_id == $id]{...}'

    React.useEffect(() => {
        client.fetch(query, {id: 'stripe-account'})
        .then(data => setAccounts(data?.[0]?.stripeAccounts))
        .catch(err => console.log(err))
        setSelected(value?.accountName)
    }, [props])

    const handleChange = (e) => {      
        setSelected(selected)
        accounts.map(account => {
            if(account.accountName === e.target.value){
                account['_type'] = 'string'    
                onChange(PatchEvent.from(account ? set(account) : unset()))
            }            
        })
    }

    return (
       <FormField title={props.type.title} description={props.type.description}>
            <Select ref={ref} fontSize={2} onChange={(e) => handleChange(e)}
                type={type}
                onBlur={onBlur}
                onFocus={onFocus}
                value={selected}
            >
                {
                    accounts?.map((account) =>
                        <option key={account.stripeSKey} value={account.accountName}>{account.accountName}</option>
                    )
                }             
            </Select>
       </FormField>
    )
})

export default withDocument(StripeAccountSelect)
