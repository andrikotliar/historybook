const fs = require("fs");
const markdownIt = require("markdown-it");

module.exports = function(config) {

	config.setDataDeepMerge(true);

	config.addPassthroughCopy("./src/styles");
	config.addPassthroughCopy("./src/scripts");
	config.addPassthroughCopy("./src/fonts");
	config.addPassthroughCopy("./src/_redirects");
	config.addPassthroughCopy("./src/**/*.(jpg|png|svg)");
	config.addPassthroughCopy("./src/admin");

	config.addFilter('articleDate', (date) => {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yyyy = date.getFullYear();

    return dd + '.' + mm + '.' + yyyy;
  });

	config.addFilter('isoDate', (date) => {
		return new Date(date).toISOString().substring(0, 10);
	});

  config.addFilter('relativeArticles', (articles, url) => {
		return articles.filter(article => article.url != url).reverse().slice(0,4);
	});

	config.addFilter("head", (array, n) => {
		if( n < 0 ) {
			return array.slice(n);
		}
		return array.slice(0, n);
	});

	config.addFilter("linkFilter", (url) => {
		return url.split('/')[1];
	});

	config.addCollection('tagList', (collection) => {
		const set = new Set();
		for (const item of collection.getAllSorted()) {
			if ('tags' in item.data) {
				const tags = item.data.tags;
				if (typeof tags === 'string') {
					tags = [tags];
				}
				for (const tag of tags) {
					set.add(tag);
				}
			}
		}
		return [...set].sort();
	});

	// collections

	config.addCollection('lessons', (collectionAPI) => {
    return collectionAPI.getFilteredByGlob('src/lessons/*.md');
  });

	config.addCollection('news', (collectionAPI) => {
    return collectionAPI.getFilteredByGlob('src/news/*.md');
  });

	config.addCollection('stories', (collectionAPI) => {
    return collectionAPI.getFilteredByGlob('src/stories/*.md');
  });

  config.addCollection('figures', (collectionAPI) => {
    return collectionAPI.getFilteredByGlob('src/figures/*.md');
  });

  let md = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });

  config.setLibrary("md", md);

  config.setBrowserSyncConfig({
    callbacks: {
     ready: function(err, browserSync) {
      const content_404 = fs.readFileSync('_site/404.html');

      browserSync.addMiddleware("*", (req, res) => {
       res.write(content_404);
       res.end();
     });
    },
  },
  ui: false,
  ghostMode: false
});

  return {
    dir: {
     input: "src",
     includes: "includes",
     layouts: "layouts",
     data: "data"
   },
   markdownTemplateEngine: false,
   htmlTemplateEngine: "njk",
   dataTemplateEngine: "njk",
   passthroughFileCopy: true,
   templateFormats: ['md', 'njk']
 };
};
