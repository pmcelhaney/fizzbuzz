# Changsets Demo using Fizzbuzz

This package was created to demonstrate [Changesets](https://github.com/changesets/changesets)

## Gotchas

It took me a few hours to get this demo set up because of simple settings in Github and npm that I forgot about because it's so rare that I start from scratch.

### Github 

Github returned a `403` error when the Github Action tried to push commits to the repository. That was because I needed to update permissions under `[project] > settings > Actions > General > Workflow permissions`. `GITHUB_TOKEN` needs to have read and write permissions and the box for allowing Github Actions to create pull requests needs to be checked. 

![image](https://user-images.githubusercontent.com/51504/220198157-7e5d95b6-e3ba-4c59-8319-e59cfea06e9c.png)

### npm

When I tried publishing under `@pmcelhaney/changesets` npm complained that I need to pay for a private packages. I don't want the package to be private! To make a package public, you have to publish the first time `npm public --access public`.

