import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import work from './schemas/work-schemas'
import authorSchema from './schemas/author-schema'

export default defineConfig({
  name: 'default',
  title: 'Debron Portfolio',
  basePath: '/studio',
  projectId: '73yurfrl',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [work, authorSchema],
  },
})
