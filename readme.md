This is the source code for my website

deployed link: https://my-website-pi-silk.vercel.app/

(below are some documentation for myself)
## pages
- Home
- About
- Tech
- Dev Logs (Posts + Post)
- Music Room (hidden)

## contexts
The project uses two contexts:
- Language Context
- Soundtrack Context

## posts
All the posts are stored under `/src/pages/posts/posts.tsx`.
The image for the postcard is stored in `src/pages/posts-icon/`
Each post's content is stored in `/public/posts/`
`/src/pages/posts/post.tsx` renders the specific post using `ReactMarkdown`
The assets for each posts is stored under `public/assets/posts/{folder for the specific post}/`

## tech
All extra tech assets are stored under `public/assets/tech/`

## musics
All soundtracks are stored under `public/assets/musics/`

## todo
- update the dev log for AllIce in Wonderlands
- add light mod
- update techs and dev log pages whenever needed
