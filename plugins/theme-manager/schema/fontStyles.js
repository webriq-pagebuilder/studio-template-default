export default {
    title: 'Font Styles',
    name: 'fontStyles',
    type: 'object',
    fields: [
        {
            title: 'Add Font Family',
            name: 'fontFamilyCollection',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ]
        }
    ]
}