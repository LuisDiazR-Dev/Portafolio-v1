# My portfolio as Full Stack Web Developer

Based on the designs of:

- FreeCodeCamp Español
  - <https://github.com/estefaniacn/portafolio-adaptable-bootstrap>
  - <https://estefaniacn.github.io/portafolio-adaptable-bootstrap/>
- MiduDev
  - <https://github.com/midudev/porfolio.dev>
  - <https://porfolio.dev/#experiencia>

## Stack

- React + Vite
- Bootstrap 5.3
- Styled-components: 6.1.8

## Guide to update repository and deploy in [GitHub pages.io](https://pages.github.com/)

- npm create vite@latest
- Config base key in vite.config.js
- npm instal gh-pages
- Config package.json scripts predeploy and deploy
- Save changes, commit and push
- npm run deploy
- change main branch to gh-pages in repository Settings/pages. Source: 'Deploy from a branch'. Branch: select 'gh-pages'
- Advance in the project, ¡Enjoy coding!

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Bootstrap 5.3 + Vite

If you have created the project with `npm create vite@latest` you will find that the Bootstrap 5.3 documentation to install it as a dependency is not so easy to apply.

I did it this way:

- `npm i --save bootstrap @popperjs/core`
- `npm i --save-dev sass`
- Create in src, like this:

```sh
my-project/
├── src/
│   ├── js/
│   │   └── main.js
│   └── scss/
│       └── styles.scss
|   
├── package-lock.json
├── package.json
└── vite.config.js
```

- In the main.js and styled.scss files, apply these instructions indicated in the Bootstrap 5.3 documentation: [see here](https://getbootstrap.com/docs/5.3/getting-started/vite/#import-bootstrap)
- In index.html, there should be main.js and styles.scss, like this:
  
```sh
<head>
<link rel="stylesheet" href="/src/scss/styles.scss">
</head>

<body>
 <div id="root"></div>

<script type="module" src="/src/main.jsx"></script>
<!-- Bootstrap  5.3 JavaScript-->
<script type="module" src="./src/js/main.js"></script>
</body>
```

- Without further ado, you can do something like this:
  
```jsx
import styled from "styled-components"

const NavbarStyled = styled.div`
background-color: #dfdede;
border-radius: 25px;
display: flex;
width: 356px;
margin: auto;
padding: 0 10px;
text-align: center;
justify-content: space-evenly;
align-items: center;
font-size: 0.9rem;

button{
  background-color: transparent;
  padding: 5px;
  transition: all 0.1s ease;

  &:hover{  transform: scale(1.2); /* Cambia el tamaño en un 10% más grande */}
}

a{
  color: #565656;
  &:hover{color: orange;}
}
`
const Navbar = () => {
  return (
    <NavbarStyled>
      <a className="text-decoration-none" href="/experiencia">Experiencia</a>
      <a href="/proyectos">Proyectos</a>
      <a href="/sobreMi">Sobre mí</a>
      <a href="/contacto">Contacto</a>
    </NavbarStyled>
  )
}
export default Navbar
```

- Now you can start adding any Bootstrap components you want to use. Be sure to [check out the complete Vite example project](https://github.com/twbs/examples/tree/main/vite) for how to include additional custom Sass and optimize your build by importing only the parts of Bootstrap’s CSS and JS that you need.

Enjoy!

## Why "Self"?

One of the phrases that marked my life a long time ago was: "...if you want true change, start with your-Self"
