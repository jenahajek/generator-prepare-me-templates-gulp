# Scaffold templates and Gulp
> Scaffold base for developing templates with Gulp.

Get base for developing static templates with Gulp. It includes:
- folder structure with fundamental files. Number of files in minimal, so the starter is unopinionated.
- Gulp with tasks for:
  - Styles
    - compiling SCSS to CSS
    - prefixing vendor CSS
    - minification
  - Scripts
    - converting ES6 to ES5
    - concatenation and minification
    - deleting forgotten console logs
    - copying third party scripts
  - Modernizr
    - generating custom modernizr build
  - Markup
    - converting Twig to HTML
  - Images
    - optimization (JPG, PNG, GIF, SVG)
    - conversion to WebP
  - SVG
    - optimizing SVG
    - making SVGSprite
  - Fonts
    - copying fonts
  - Favicon
    - copying favicon
  - Watch
    - watching for changes
  - Serve
    - spining local webserver
    - injecting changes automatically
    - browser synchronization
- Gulp has config settings to easily adjust paths if needed.

This package is built on [Yeoman Generator](https://app.gitbook.com/@proofreason/s/knowledge-base/praxe/untitled/yeoman-scaffold-app), read more about it in knowledge base.

## Installation
1. Install CLI tool for running Yeoman.
```bash
npm install -g yo
```

2. Install generator itself.
```bash
npm install -g git+ssh://git@git.proofreason.com:jan.hajek/scaffold-templates-gulp.git
```

3. Then use it to scaffold base for next project. You can choose from those options:

| Command                        | Description                         |
| ------------------------------ | ----------------------------------- |
| `yo scaffold-templates-gulp` | Scaffold the project and setup Gulp |


