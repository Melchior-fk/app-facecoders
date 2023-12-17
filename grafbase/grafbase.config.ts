import { graph, config } from '@grafbase/sdk'

const g = graph.Standalone()

const User = g.type('User', {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
})

const Profile = g.type('Profile', {
  username: g.string(),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl : g.url(),
  category: g.string(),
  country: g.string(),
  createdBy: g.ref(User)
})

g.union('UserAndProfile', {User, Profile})



export default config({
  graph: g,
  // Authentication - https://grafbase.com/docs/auth
  auth: {
    // OpenID Connect
    // const oidc = auth.OpenIDConnect({ issuer: g.env('OIDC_ISSUER_URL') })
    // providers: [oidc],
    rules: (rules) => {
      rules.public()
    },
  },
  // Caching - https://grafbase.com/docs/graphql-edge-caching
  // cache: {
  //   rules: [
  //     {
  //       types: ['Query'], // Cache everything for 60 seconds
  //       maxAge: 60,
  //       staleWhileRevalidate: 60
  //     }
  //   ]
  // }
})
