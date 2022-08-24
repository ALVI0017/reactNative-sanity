import { LinkIcon } from '@sanity/icons'

export default {
    title: 'Image View',
    name: 'imageView',
    type: 'document',
    icon: LinkIcon,
    fields: [
        {
            title: 'Image',
            name: 'image',
            type: 'image',
        },
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string',
        },
    ],

}
