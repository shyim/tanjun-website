---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Tanjun"
  text: "Documentation"
  tagline: Dockerized Deployment
  actions:
    - theme: brand
      text: Install Tanjun
      link: /install
    - theme: alt
      text: Deploying a Hello World
      link: /deploy-hello-world

features:
  - title: Zero Downtime Deployments
    details: Tanjun uses Kamal Deploy to deploy your applications with zero downtime.
  - title: Buildpack included
    details: Deploying your Node.js, Go or PHP application with zero configuration.
  - title: Convinient CLI
    details: View logs, enter containers and forward to local ports without connecting to the VPS with SSH
---

