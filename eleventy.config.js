const sass = require('sass');
const path = require('path');
const { pagesList } = require('./src/data/pages.js');

const eleventyConfig = (config) => {
  config.addPassthroughCopy({
    public: '/',
  });
  config.addPassthroughCopy('src/scripts');

  config.addTemplateFormats('scss');

  config.addExtension('scss', {
    outputFileExtension: 'css',

    compile: async function (content, inputPath) {
      const parsed = path.parse(inputPath);

      if (parsed.name.startsWith('_')) {
        return;
      }

      const result = sass.compileString(content, {
        loadPaths: [parsed.dir || '.', this.config.dir.includes],
        style: 'compressed',
      });

      return async () => {
        return result.css;
      };
    },
  });

  pagesList.map((page) => {
    config.addCollection(page.id, (collectionApi) => {
      return collectionApi.getFilteredByGlob(`src/content/${page.id}/*.md`);
    });
  });

  config.addFilter('head', (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  config.addFilter('formattedDate', (value) => {
    const date = new Date(value);

    return date.toLocaleString('uk-UA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: 'data',
      includes: 'includes',
      layouts: 'layouts',
    },
  };
};

module.exports = eleventyConfig;
