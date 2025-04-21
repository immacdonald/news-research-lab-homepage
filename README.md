# NEWS Research Lab Homepage

Visit the site [here](https://newsresearch.lab.wm.edu/)!

The NEWS Research Lab @ William & Mary homepage is a [React](https://react.dev/) single-page application (SPA) website written in [TypeScript](https://www.typescriptlang.org/) built with [Vite](https://vitejs.dev/). Packages and dependencies are managed with [npm](https://www.npmjs.com/). In order to develop and deploy this website you will need to have installed `npm` on your system.

### Development

#### Getting Started

To develop the project locally first ensure you have an up-to-date version of [npm](https://www.npmjs.com/) installed.

Clone the website locally with:

```bash
git clone https://code.wm.edu/data-science/news-lab/news-research-lab-homepage
```

After cloning the repository, from the top-level directory of the website run:

```bash
npm install
npm run dev
```

The website is then accessible at `http://localhost:5173/`.

#### Project Structure

On the top level of the project are all the configuration files related to Vite, TypeScript, the [package.json](package.json), and utilities related to linting and formatting. The [src](src/) folder contains the contents of the React app.

The main file of the React app is [index.tsx](src/index.tsx), which contains the contexts for persistent data, URL routing, responsive styling, and the application itself. [App.tsx](src/App.tsx) contains the actual routing (done with [react-router-dom](https://reactrouter.com/en/main)).

#### Linting & Formatting

For the frontend, linting is done with [ESLint](https://eslint.org/) while code formatting is done with [Prettier](https://prettier.io/) and [Stylelint](https://stylelint.io/). The setup uses [phantom-config](https://www.npmjs.com/package/phantom-config) for the base configuration. Linting and formatting can be triggered by executing `npm run format`.

#### Versioning

This repository uses [semantic versioning](https://docs.npmjs.com/about-semantic-versioning) to track changes. To update the version use `npm version` followed be either `patch`, `minor`, or `major` accordingly.

### Deployment

Deploying the website utilizes both [Docker](https://www.docker.com/) and [nginx](https://nginx.org/). nginx is used for serving/proxying the files. To build a production version of the website locally using Docker perform:

```bash
docker-compose up --build
```

This will build and run the website on port `80` locally.

The production release of this website is hosted through W&M IT. Deployment is done using a GitHub Action that is automatically invoked upon the `main` branch being updated.
