import { graph, auth, config } from '@grafbase/sdk'
const g = graph.Standalone()


const User = g.type('User', {
  name: g.string(),
  email: g.email(),
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
  schema: g

})
