import {useState, useEffect} from 'react'
import {useDocumentOperation} from '@sanity/react-hooks'
import sanityClient from "part:@sanity/base/client";
import {
  useToast
} from '@sanity/ui'
const {SANITY_STUDIO_APP_URL} = process.env
export default function createProductsPublishAction(props) {
  const toast = useToast()
  const {publish} = useDocumentOperation(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)
  const client = sanityClient.withConfig({ apiVersion: "v1" });

  useEffect(() => {   
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false)            
    }
    
  }, [props])

  useEffect(() => {
    const URL = `${SANITY_STUDIO_APP_URL || 'https://dxpstudio.webriq.com'}/api/stripe-account/create-products`;
    const payload = !props.draft ? props?.publish?.sections : props.draft.sections
    async function createProducts (URL, payload) {
      const response = await fetch(URL,
      {
        method: 'POST',
        headers: {},
        mode: 'cors',
        body: JSON.stringify(payload)
      })
      if(response.status !== 200){
          toast.push({
            status: 'error',
            title: 'Error Fetching Data.'
          })
      }
      response.json().then(data => {
        data.message !== undefined && toast.push({
          status: data.message.status !== 200 ? 'error': 'success',
          title: !data.message.statusText ? data.message : data.message.statusText
        })
      })
      .catch(err => console.log('Error: ', err.message))
    }
    (publish.disabled !== "ALREADY_PUBLISHED" && publish.disabled !== "NO_CHANGES") && createProducts(URL, payload)
  }, [isPublishing])

  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
    onHandle: () => {
      // This will update the button text 
      setIsPublishing(true)

      // Perform the publish
      publish.execute()
      
      // Signal that the action is completed
      props.onComplete() 
    }
  }
}