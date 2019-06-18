"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");

module.exports = class extends Generator {
  // prompting() {
    // This.log(`${chalk.red("Hello.")}\n`);
  // }


  writing() {
    const pkgJson = {
      devDependencies: {
        "@babel/core": "^7.1.0",
        "@babel/preset-env": "^7.1.0",
        "autoprefixer": "^7.1.1",
        "browser-sync": "^2.11.0",
        "del": "^2.2.0",
        "gulp": "^4.0.0",
        "gulp-babel": "^8.0.0",
        "gulp-concat": "^2.6.1",
        "gulp-css-globbing": "^0.1.8",
        "gulp-cssnano": "^2.1.3",
        "gulp-imagemin": "^2.4.0",
        "gulp-modernizr": "^3.0.0",
        "gulp-notify": "^2.2.0",
        "gulp-plumber": "^1.0.1",
        "gulp-postcss": "^7.0.0",
        "gulp-rename": "^1.2.2",
        "gulp-sass": "^4.0.2",
        "gulp-shell": "^0.6.5",
        "gulp-sourcemaps": "^1.6.0",
        "gulp-strip-debug": "^1.1.0",
        "gulp-svgmin": "^1.2.2",
        "gulp-svgstore": "^6.0.0",
        "gulp-twig": "^0.7.0",
        "gulp-uglify": "^1.5.1",
        "gulp-webp": "2.3",
        "imagemin-pngquant": "^4.2.0"
      },
    };

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

    this.fs.copyTpl(
      [
        `${this.templatePath()}/**/*`,
      ],
      this.destinationPath()
    );
  }

  Install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }

  end() {
    console.log("\n\nEasy life. Now let's go and build templates-drupal-gulp");
  }
};
