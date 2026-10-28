# RIDE INDEX

A responsive, searchable static catalog of notable production motorcycles from 1990 through 2026. Built with plain HTML, CSS, and JavaScript; no build step or package installation required.

## Run it

Open `index.html` in a browser, or serve this folder with any static file server. The project can be published on GitHub Pages from the repository's `main` branch and root folder.

## What's included

- Search by model, manufacturer, riding style, year, or engine description.
- Manufacturer, model-year, and category filters; sorting; reset; and progressive loading.
- Responsive layout, keyboard-friendly cards and search shortcut (`/`), and detail dialogs with reference links.
- `bikes.js` holds the sample catalog; `app.js` handles filtering and rendering.

## Coverage and data notes

The initial catalog is a **curated sample**, not a complete global inventory. It contains 40 representative entries from Honda, BMW, Ducati, Kawasaki, KTM, Royal Enfield, Suzuki, Triumph, and Yamaha. It spans the requested 1990–2026 period, but does not contain an entry for every calendar year, brand, market, trim, or model. Model-year and launch-year conventions differ between markets; some entries identify the start of a notable model generation. Engine descriptions are brief identifiers and are not full specifications. Confirm exact year, configuration, and availability with the manufacturer for your country before relying on them.

Each bike detail links to a manufacturer or official brand reference used as a starting point for identification. The set of primary references represented in this sample includes:

- [Honda CB history](https://global.honda/en/CB/history/) and [Honda CBR history](https://global.honda/en/CBR/history/)
- [Honda FireBlade timeline](https://global.honda/en/tech/Hondas_Flagship_Sports_Philosophy/timeline.html)
- [BMW Motorrad R 1300 GS announcement](https://www.press.bmwgroup.com/global/article/detail/T0421776EN/the-new-bmw-r-1300-gs)
- [Kawasaki 2026 lineup announcement](https://content2.kawasaki.com/ContentStorage/KMC/PressReleases/822/8fae5e3f-91c3-48c4-8aa5-56caf9bb7bbb.pdf)
- [Yamaha 2026 motorcycle brochure](https://www.yamaha-motor.eu/content/dam/yme/language-masters/en/eicma-2025/digital-brochures/2026_EICMA_MC_BROCHURE_EN.pdf)
- Official model pages from [Ducati](https://www.ducati.com/ww/en/bikes), [Triumph](https://www.triumphmotorcycles.com/motorcycles), [Suzuki](https://suzukicycles.com/), [KTM](https://www.ktm.com/), and [Royal Enfield](https://www.royalenfield.com/).

This is an editorial browsing aid, not a buying guide or a substitute for a manufacturer's exact technical specification sheet. The photos are remote Unsplash images used as illustrative motorcycle imagery; they are not guaranteed to depict the named make or model. Google Fonts and image hosting require an internet connection; all catalog and filter behavior runs locally in the browser.

## Extend the collection

Add objects to `window.BIKES` in `bikes.js`, with `year`, `make`, `name`, `category`, `engine`, `note`, `source`, and `image` values. Keep model-specific claims tied to a source, and preserve the market/year caveat above as the catalog grows.

## License

The site code and the sample editorial text are provided for reuse. Third-party product names, trademarks, linked source content, and remote photography remain the property of their respective owners. Review image licensing before replacing the illustrative assets with photographs in a public commercial deployment.

