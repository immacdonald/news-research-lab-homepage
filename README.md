# NEWS Research Lab Homepage

The NEWS Research Lab @ William & Mary homepage is a [React](https://react.dev/) single-page application (SPA) website written in [TypeScript](https://www.typescriptlang.org/) built with [Vite](https://vitejs.dev/). Packages and dependencies are managed with [npm](https://www.npmjs.com/). In order to develop and deploy agwagram you will need to have installed `npm` on your system.

## Development

While developing the website it can be ran locally on port `5173` using:

```bash
npm run dev
```


## Building for Production

To build a production version of the website using Docker perform:

```bash
docker-compose up --build
```

This will build and run the website on port `80` locally.