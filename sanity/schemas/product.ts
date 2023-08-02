import { defineField, defineType } from 'sanity'


export default {
    name: 'product',
    type: 'document',
    title: 'Products',
    fields: [
        defineField({
            name: 'productName',
            title: 'Product Name',
            type: 'string',
        }),
        defineField({
            name: 'productSlug',
            title: 'Product Slug',
            type: 'slug',
            options: {
                source: 'productName',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
        }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type: 'image'}],
        }),
        defineField({
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'sizes',
            title: 'Sizes',
            type: 'array',
            of: [{ type: 'string'}],
        }),
        defineField({
            name: 'colors',
            title: 'Colors',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'sku',
            title: 'SKU',
            type: 'string',
        }),
        defineField({
            name: 'currency',
            title: 'Currency',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'SEO Description And Keywords',
            type: 'string',
        }),
       
        defineField({
            name: 'buttonUrl',
            title: 'Button URL',
            type: 'string',
        }),
    ],
}