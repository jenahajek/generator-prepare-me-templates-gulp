// -------------------------------------
//   Config
// -------------------------------------
//  1 - Source root
//  2 - Distribution root
//  3 - set paths of assets
//  4 - set names for generated assets

var src = "./frontend-src/"; // 1
var dist = "./frontend-dist/"; // 2

module.exports = {
  paths: {
    // 3
    styles: {
      src: src + "scss/**/*.scss",
      dest: dist + "css",
    },
    scripts: {
      src: src + "js/modules/**/*.js",
      vendor: src + "js/vendor/**/*.js",
      docs: src + 'js/docs/**/*.js',
      dest: dist + "js",
      vendorDest: dist + "js/vendor",
      docsDest : dist + 'js/docs'
    },
    images: {
      src: src + "img/**/*",
      dest: dist + "img",
    },
    svg: {
      src: src + "svg/*.svg",
      docs: src + 'svg/docs/*.svg',
      dest: dist + "svg",
    },
    favicon: {
      src: src + "favicon/**/*",
      dest: dist + "favicon",
    },
    fonts: {
      src: src + "fonts/**/*",
      dest: dist + "fonts",
    },
    styleguide : {
      templates:  [ // what gets compiled
                    src + 'twig/styleguide/00-knowledge-base/[^_]*.twig',
                    src + 'twig/styleguide/01-guidelines/[^_]*.twig',
                    src + 'twig/styleguide/02-design-patterns/[^_]*.twig',
                    src + 'twig/styleguide/03-components/[^_]*.twig',
                    src + 'twig/styleguide/03-implementation-patterns/[^_]*.twig',
                    src + 'twig/styleguide/05-templates/[^_]*.twig',
                    src + 'twig/styleguide/[^_]*.twig'
                  ],
      src:  [ // what watch is looking at
              src + 'twig/**/*.twig',
            ],
      dest: dist
    },
    markup: {
      templates: [
        // what gets compiled
        src + "twig/[^_]*.twig",
        src + "twig/templates/[^_]*.twig",
      ],
      src: src + "twig/**/*.twig", // what watch is looking at
      dest: dist,
    },
    dist: dist, // used by clean task
  },
  names: {
    // 4
    js: {
      app: "generatedByGulp.js",
      vendor: "vendor.js",
      docs: 'docs.js'
    },
    svgSprite: "svgSprite.svg",
    svgSpriteDocs: 'svgSpriteDocs.svg'
  },
};
