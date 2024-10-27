# Image

As you seen in the Hello World example, we didn't provide any Docker Image. This is because we are automatically detecting the language and try to build a docker image for you.

This works for:
- JavaScript/TypeScript (Node, Bun)
- Go
- PHP

You can a further influence the behavior. If you don't want to use our automatic detection, you can provide your own Docker Image by creating a `Dockerfile` in your project root, or if you want to have it somewhere else stored, you can pass the path to the Dockerfile in the `image` property of the `.tanjun.yml`.

## JavaScript

When a project contains a `package.json`, we will automatically detect that this is a JavaScript/TypeScript project.

When the `package.json` contains as dev dependency `@types/bun` we assume, that this project uses Bun, and we will use Bun instead of Node.js to run your code.
If this is not the case, you can still force using Bun by setting `runtime` to `bun` inside your `package.json`

```json
{
    "name": "my-project",
    //...
    "tanjun": {
        "runtime": "bun"
    }
}
```

The Node.js version is detected by `engines` in `package.json`. If you don't provide it, we will use the latest LTS version.

Further based on the existing lock file, we will install all dependencies using that package manager. NPM is here as fallback, so if you have a `pnpm-lock.yaml` or `yarn.lock`, we will use those to install your dependencies, instead of using `npm`.

The start command is determined by:
- `npm run start` if that is defined in the `package.json`.
- `main` if that is defined in the `package.json`.
- `node/bun index.js` if there is a file called `index.js`.
- `node/bun index.mjs` if there is a file called `index.mjs`.
- `node/bun index.ts` if there is a file called `index.ts`.
- `node/bun index.mts` if there is a file called `index.mts`.

Tanjun expects by default that the application is running at port 3000.

## Go

When a project contains a `go.mod`, we will automatically detect that this is a Go project.

We build the application and run it and expect that the port is 3000.

## PHP

When a project contains a `composer.json`, we will automatically detect that this is a PHP project.

It runs automatically installs all dependencies using composer. 
The PHP extensions are determined by `require` in `composer.json` and `composer.lock`, so when a package requires `ext-openssl`, the build pack will automatically install that for you.

