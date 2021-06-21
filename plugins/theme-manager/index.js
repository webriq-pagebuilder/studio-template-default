import {route} from 'part:@sanity/base/router'
import ThemeManager from './ThemeManager'
import ThemeManagerIcon from './ThemeManagerIcon'

export default {
  title: 'Theme Manager',
  name: 'theme-manager',
  router: route('/theme-manager'),
  icon: ThemeManagerIcon,
  component: ThemeManager
}
