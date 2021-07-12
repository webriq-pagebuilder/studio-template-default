import React from 'react'
import {StateLink, withRouterHOC, IntentLink} from 'part:@sanity/base/router'
import Spinner from 'part:@sanity/components/loading/spinner'
import Preview from 'part:@sanity/base/preview'
import client from 'part:@sanity/base/client'
import schema from 'part:@sanity/base/schema'

// Sanity uses CSS modules for styling. We import a stylesheet and get an
// object where the keys matches the class names defined in the CSS file and
// the values are a unique, generated class name. This allows you to write CSS
// with only your components in mind without any conflicting class names.
// See https://github.com/css-modules/css-modules for more info.
import ThemeManager from './ThemeManager.css'

function getDocumentTypeNames() {
  return schema.getTypeNames()
    .map(typeName => schema.get(typeName))
    .filter(type => type.type && type.type.name === 'document')
    .map(type => type.name)
}

class MyTool extends React.Component {
 render() {
   return(
     <h1>Theme Manager</h1>
   )
 }
}

export default withRouterHOC(MyTool)
