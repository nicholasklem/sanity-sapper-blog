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
                  buildHookId: '5d934985d5cd19c91cefafb2',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-t1azvkx3',
                  apiId: '950c6948-5f6a-49cf-bc43-74486072523b'
                },
                {
                  buildHookId: '5d9349850359939de8553fdd',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-uf8f1n4p',
                  apiId: 'c29a94f6-7618-4e57-a90c-d775f28be340'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholasklem/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-uf8f1n4p.netlify.com', category: 'apps'}
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
