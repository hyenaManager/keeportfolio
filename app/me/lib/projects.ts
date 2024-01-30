
export const projects = [
    {
        name:"yokeplay",
        description:`TSNmovie web app(yokeplay) is an app where the user can create their own page and post video clips,
        movies and series with episodes. The user can react the post(like giving likes and comments)`,
        image:"/yokeplay-icon.png",
        gitRepo:"https://github.com/sui-kee/TSNmovie",
        buildWith:["react","nextjs","zustand","tailwind","next-auth","react-query","prisma","postgresql"],
        link:"https://yokeplay.vercel.app",
    },
    {
        name:"g-song",
        description:`song lyric web app where the user can add song audio with lyric. And also listen and search existing 
        songs by tiltle or lyric.`,
        image:"/gsong.png",
        gitRepo:"https://github.com/sui-kee/Isong",
        buildWith:["react","nextjs","zustand","shadcn ui","tailwind","react-query","prisma","postgresql","firebase"],
        link:"https://songlyrics-omega.vercel.app",
    },
    {
        name:"jajaliken-movie",
        description:`Simple movie recommendation app . Fetch movieDB api and render movie and names by its genre.`,
        image:"/vite-icon.svg",
        gitRepo:"https://github.com/sui-kee/jaja-liken-movies-website",
        buildWith:["react","vite","react-router-dom","framer-motion","tailwind css"],
        link:"https://jajaliken.vercel.app",
    },
]