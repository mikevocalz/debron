const work = {
  name: "work",
  title: "Works",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },

{
  title: 'Project Start Date',
  name: 'projectStartDate',
  type: 'date',
   options: {
    dateFormat: 'MM-DD-YYYY',
  }
},
{
  title: 'Project End Date',
  name: 'projectEndDate',
  type: 'date',
   options: {
    dateFormat: 'MM-DD-YYYY',
  }
},
{
  title: 'Type',
  name: 'type',
  type: 'string',
  options: {
    list: [
      { title: '3D', value: '3D' },
      { title: '2D', value: '2D' },
    ],
  },
},
{
  title: '3D Type',
  name: 'threeDtype',
  type: 'string',
  options: {
    list: [
      { title: '3D Animation', value: '3DAnimation' },
        { title: '3D Environment', value: '3DEnvironment' },
        { title: '3D Prop', value: '3DProp' }
    ],
  },
},
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
  title: 'Description', 
  name: 'description',
  type: 'array', 
  of: [{type: 'block'}]
},
   {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ]
    },
     {
      name: 'youtube',
      title: 'Youtube',
      type: 'url',
     
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
}

export default work;