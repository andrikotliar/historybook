# HistoryBook

The history teacher's blog in Ukrainian language. The teacher publishes developments of lessons, Ukrainian education news, and novels.

## Development

To start the dev server run the command:

```bash
npm install
npm run dev
```

To build the project run the command:

```bash
npm run build
```

This command creates the `dist` folder in the project's root and builds the static pages.

## How it works

All articles are plain markdown files in the `content` folder. The `config.ts` file in this directory defines schemas for all collections. I use the `PageId` enum to store my collection names.

There are several additional config files in the `config` directory:

- `pages.ts` - the file contains the configuration of each page:
  - `id` - it helps search articles in a particular folder and is present in an individual article page URL;
  - `title` and `description` - page metadata, are in the `title` tag and `<meta content="description">` respectively. Also, the title appears in the page header;
  - `emoji` - page title prefix in the form of emoji, appears only in the title on the home page;
  - `shortTitle` - lowercased short description of the page, appears in the "more" link on the home page;
  - `navigationTitles` - titles display in prev/next links at the bottom of each article. It has two options `prev` and `next` titles.
  - `coverImage` - path to the image in the `public` folder, appears on an individual articles page at the top of a page;
  - `categories` - optional, describes page categories:
    - `key` - the same as `id` for a page;
    - `filter` - condition for filtering articles on the [categories page](https://github.com/andrikotliar/historybook-astro/blob/main/src/pages/%5BpageId%5D/%5BcategoryKey%5D/index.astro);
    - `pageTitle` - appears in the `title` tag and cover.
    - `linkTitle` - this title is used in the [list of categories](https://github.com/andrikotliar/historybook-astro/blob/main/src/components/categories/Categories.astro);

  The file exports two variables `pagesMapper` and `pagesArray`. The first one is used to get a page config directly via a page ID. The second one is used to loop over all page configs. For example, the home page loops over configs to show 8 latest articles of each section. Also the `pagesArray` uses to [dynamically](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes) build [root pages](https://github.com/andrikotliar/historybook/blob/main/src/pages/%5BpageId%5D/%5B...page%5D/index.astro) of the website
- `header-menu.ts` - the header navigation;
- `meta.ts` - default metadata used across the project:
  - default title;
  - default description;
  - author name;
  - default open graph image.

## Tech Stack

- [Astro](https://github.com/withastro/astro)
- TypeScript
- Markdown
- Decap CMS

