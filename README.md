[![Website](https://img.shields.io/website?url=https%3A%2F%2Fchum-bucket.site&logo=astro)][website]
[![License](https://img.shields.io/github/license/jiashun-wang/BYR-Navi)][license]
[![Last Commit](https://img.shields.io/github/last-commit/jiashun-wang/BYR-Navi?logo=github)][commit]

# <img height="32" src="https://chum-bucket.site/images/logo-chum.svg" alt="Icon" /> 垃圾桶学术导航
A Light-Weight and Configurable Academic Navigation Website

> **Attribution:** This project is modified from [BYR-Navi][upstream] and migrated from Jekyll to [Astro][astro].
> The navigation content is adapted from [海之霸科研导航][source] (`https://chum-bucket.site/`).
> Maintained by **Chum-Bucket团队**.

## :triangular_ruler: Design Philosophy
This project is an [Astro][astro]-powered static website, built on the [Fomantic UI][fomantic] web framework.
It focuses on physical oceanography, marine meteorology and scientific computing resources.

Site identity and metadata live in `src/data/site.ts`, while the content of every navigation page is driven by the JSON files in `src/data/`.

## :book: A Tiny Tutorial
Before you start, you should have some basic understanding of the following:

- <img height="16" src="https://unpkg.com/simple-icons/icons/html5.svg" alt="Icon" /> HTML
- <img height="16" src="https://unpkg.com/simple-icons/icons/css3.svg" alt="Icon" /> CSS
- <img height="16" src="https://unpkg.com/simple-icons/icons/javascript.svg" alt="Icon" /> JavaScript
- <img height="16" src="https://unpkg.com/simple-icons/icons/jquery.svg" alt="Icon" /> jQuery
- JSON

### Quick Start

1. Install [Node.js][node] (v22.12 or newer).

2. Clone the project from GitHub.

```sh
git clone https://github.com/jiashun-wang/BYR-Navi.git
```

3. Change into the project directory.

```sh
cd BYR-Navi
```

4. Install dependencies.

```sh
npm install
```

5. Start the development server.

```sh
npm run dev
```

6. Now browse to [http://localhost:4321][localhost-4321].

### Configuration

- `src/data/site.ts` — site title, description, logo, author, attribution, update interval, etc.
- `src/data/scenes.json` — switchable scenes, their categories and links on the home page. Each scene is exposed as `/#<scene-id>` (e.g. `/#tech`).
- `src/data/menu_items.json` — top menu items.
- `src/data/search_services.json` — search engines, shortcuts and URL templates.
- `src/data/banner.json` — announcement banner and advertisement.
- `src/data/analytics.json` — Google Analytics / Matomo settings (still inherited from the upstream project).
- `src/data/built_with.json`, `src/data/powered_by.json` — footer credits.
- `src/data/style.json` — optional site-wide style switches (e.g. memorial grayscale mode).

### Project Structure

```text
src/
├── components/       # header, footer, sidebar, search box, ...
├── data/             # site configuration and page content
├── layouts/          # shared HTML document layout
└── pages/            # routes: /, /customize/, /analytics/, /donate/, /search/, 404
public/
├── assets/css/       # stylesheets
├── assets/js/        # client-side scripts
└── images/           # logos and masthead backgrounds
```

## :construction: Deployment

### Build

```sh
npm run build
```

Astro generates the static site to the `dist/` directory by default. You can transfer the contents of this directory to almost any hosting provider to get your site live.

## :warning: Upstream Resources
The inherited `src/data/analytics.json` still points to the upstream BYR-Navi Google Analytics / Matomo properties, and the QR codes on `/donate/` belong to the original BYR-Navi author. Replace or remove them before deploying this fork publicly.

## :rocket: Powered by
- <img height="16" src="https://unpkg.com/simple-icons/icons/astro.svg" alt="Icon" /> [Astro][astro]
- [Fomantic UI][fomantic]
- <img height="16" src="https://unpkg.com/simple-icons/icons/jquery.svg" alt="Icon" /> [jQuery][jquery]
- <img height="16" src="https://unpkg.com/simple-icons/icons/shieldsdotio.svg" alt="Icon" /> [Shields.io][shields]
- [Day.js][day]
- [CountUp.js][countup]
- [jQuery.countdown][countdown]
- [JavaScript Cookie][js-cookie]
- [url.js][js-url]
- [UNPKG][unpkg]
- [Hitokoto][hitokoto]
- <img height="16" src="https://unpkg.com/simple-icons/icons/apacheecharts.svg" alt="Icon" /> [ECharts][echarts]
- <img height="16" src="https://unpkg.com/simple-icons/icons/matomo.svg" alt="Icon" /> [Matomo][matomo]
- <img height="16" src="https://unpkg.com/simple-icons/icons/letsencrypt.svg" alt="Icon" /> [Let&rsquo;s Encrypt][letsencrypt]

## :copyright: License
[MIT License][license]. The original BYR-Navi project is also MIT licensed.

[website]: https://chum-bucket.site/ "Website"
[source]: https://chum-bucket.site/ "海之霸科研导航"
[upstream]: https://github.com/BYR-Navi/BYR-Navi "BYR-Navi"
[license]: https://github.com/jiashun-wang/BYR-Navi/blob/master/LICENSE "License"
[commit]: https://github.com/jiashun-wang/BYR-Navi/commits/master "Last Commit"

[astro]: https://astro.build/ "Astro"
[fomantic]: https://fomantic-ui.com/ "Fomantic UI"
[jquery]: https://jquery.com/ "jQuery"
[shields]: https://shields.io/ "Shields.io"
[day]: https://github.com/iamkun/dayjs "Day.js"
[countup]: https://inorganik.github.io/countUp.js/ "CountUp.js"
[countdown]: https://hilios.github.io/jQuery.countdown/ "The Final Countdown plugin for jQuery"
[js-cookie]: https://github.com/js-cookie/js-cookie "JavaScript Cookie"
[js-url]: https://github.com/websanova/js-url "url.js"
[unpkg]: https://unpkg.com/ "UNPKG"
[hitokoto]: https://hitokoto.cn/api "Hitokoto"
[echarts]: https://echarts.apache.org/ "ECharts"
[matomo]: https://matomo.org/ "Matomo"
[node]: https://nodejs.org/ "Node.js"
[localhost-4321]: http://localhost:4321 "Local Host (Port: 4321)"
[letsencrypt]: https://letsencrypt.org/ "Let&rsquo;s Encrypt"
