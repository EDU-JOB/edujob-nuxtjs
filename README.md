# EDUJOB - NUXTJS 

# For tasks

- https://github.com/orgs/EDU-JOB/projects/1

# Main

- Try to keep pages server component;
- Use BEM
- Use FC generic for Component
- Use the same node version (v21.4.0)

# Imports order

- Nuxt components and utils
- Nuxt / Vue3
- Third libraries
- Vue components
- Utils
- Style

# Layouts

- default.vue



# Pages

- Pages are stored in the app folder
- Naming -> JobsPage, JobPage

# Files

 File naming is `kebab-case` 

- User.vue => bad
- user.vue => good

<br />

- loginCard.vue => bad
- LoginCard.vue => bad
- login-card.vue => good

# Components

- Creating component
  ```
  modal
    index.vue
    style.scss

  ```
- Component naming is PascalCase

  ```
    <UserComponent />
  ```
- Component is made without margin

# Plugins

 Plugin naming is camelCase

  ```
    useFetch
  ```

# Variables

 Sass folder -> variables.scss

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
