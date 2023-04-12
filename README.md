<h1 align="center">
  :books: Simple CRUD with Vue.js
</h1>

<p align="center">
  <a href="#trophy-lessons-learned">Lessons Learned</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies--resources">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-setting-up-the-environment">Environment Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-features-implementations">Features</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=000000&color=42b883&label=created%20at&message=Apr%202020" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/studying-vuejs?label=updated%20at&labelColor=000000&color=42b883" alt="Update Date" />

  <img src="https://img.shields.io/github/v/tag/juliolmuller/studying-vuejs?label=latest%20version&labelColor=000000&color=42b883" alt="Latest Version" />

  <img src="https://img.shields.io/static/v1?labelColor=000000&color=42b883&label=PRs&message=welcome" alt="Pull Requests Welcome" />

  <img src="https://img.shields.io/github/license/juliolmuller/studying-vuejs?labelColor=000000&color=42b883" alt="Project License" />
</p>

![Application snapshot](./src/assets/app-overview.jpg)

CRUD application developed during [Cod3r's official Vue.js course](https://www.udemy.com/course/vue-js-completo/), on Udemy.

[Check out the application running!](https://juliolmuller.github.io/studying-vuejs/)

## :trophy: Lessons Learned

- Vue.js 2/3 project structure;
- `LocalStorage` API;
- Styling techniques;
- Configuring Vite project with TypeScript

## :rocket: Technologies & Resources

**Frontend:**
- Vue.js ~~2~~ 3

**Development:**
- Visual Studio Code
- ~~Vue CLI~~Vite & Node.js routines

## :hammer: Setting up the Environment

Make sure to have **Node.js 10+** installed in your machine and its **npm** available in the command line, then use the following routines:

```bash
$ npm install     # Download dependencies
$ npm run dev     # Run development server
$ npm run build   # Build files for production
$ npm run prod    # Run server to preview app in production
```

## :zap: Features Implementations

- [x] Upgrade to Vue 3 and use Composition API;
- [x] Restore saved tasks from browser's local storage;
- [x] Create new tasks;
- [x] Mark existing tasks as completed;
- [x] Delete existing tasks;
- [x] Persist changes to browser's local storage;
- [x] Indicator of tasks completeness;
- [ ] Fix application responsiveness on smaller screens;
