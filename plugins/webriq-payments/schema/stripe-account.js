export default {
    title: 'Stripe Account',
    name: 'stripe-account',
    type: 'object',
    fields: [
        {
            title: 'Stripe Accounts',
            name: 'stripeAccounts',
            type: 'array',
            of: [
                {
                    name: 'accountName',
                    title: 'Account Name',
                    type: 'string'
                },
                {
                    name: 'publishableKey',
                    title: 'Publishable Key',
                    type: 'string',
                    hidden: true
                },
                {
                    name: 'secretKey',
                    title: 'Secret Key',
                    type: 'string',
                    hidden: true
                },
            ]
        }
    ]
}