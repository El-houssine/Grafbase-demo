import { config, connector, graph } from '@grafbase/sdk' 

//Creating a Standalone Graph Instance
const g = graph.Standalone() 

//Connecting to Contentful
const contentful = connector.GraphQL('Contentful', {
  url: g.env('CONTENTFUL_API_URL'),
  headers: headers => {
    headers.set('Authorization', `Bearer ${g.env('CONTENTFUL_API_TOKEN')}`)
  },
})

//Adding the Contentful Data Source
g.datasource(contentful)

//Extending the ContentfulProperty Type
g.extend('ContentfulProperty', {
  weather: {
    returns: g.float().optional(),
    resolver: 'contentful/property/weather',
  },
})


export default config({
  graph: g,
})
