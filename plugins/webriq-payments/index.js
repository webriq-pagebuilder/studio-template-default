import React from 'react'
import {route} from 'part:@sanity/base/router'
import WebriQPayments from './WebriQPayments'
import WebriQPaymentsIcon from './WebriQPaymentsIcon'

export default {
  title: 'WebriQ Payments',
  name: 'webriq-payments',
  // router: route('/:selectedDocumentId'),
  icon: WebriQPaymentsIcon,
  component: WebriQPayments
}
