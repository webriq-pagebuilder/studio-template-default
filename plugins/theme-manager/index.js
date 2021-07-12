import React from 'react'
import {route} from 'part:@sanity/base/router'
import ThemeManager from './ThemeManager'
import ThemeManagerIcon from './ThemeManagerIcon'

export default {
  title: 'Theme Manager',
  name: 'thememanager',
  router: route('/thememanager'),
  icon: ThemeManagerIcon,
  component: ThemeManager
}
