import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  profile : g.relation(() => Profile),
})

const Profile = g.model('Profile', {
  username: g.string().length({min: 3}),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl : g.url(),
  category: g.string().search(),
  country: g.string(),
  createdBy: g.relation(() => User)
})


export default config({
  schema: g

})
