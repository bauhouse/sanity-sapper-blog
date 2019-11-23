export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd9798fc5207104c571ac0f',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-pwvj1woh',
                  apiId: '6f7d7787-7275-45af-87a9-671d93e45bfc'
                },
                {
                  buildHookId: '5dd9798f687d60d4d0f19576',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-mt33x8zz',
                  apiId: 'd2aa784c-cbe8-44e0-b8fb-430b14f305a3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bauhouse/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-mt33x8zz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
