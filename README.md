# Kaeshikka Chettri — Personal Website

A responsive, self-contained personal portfolio for GitHub Pages. All four supplied photos and the original résumé are included. No framework, installation, build process, API keys, or external font service is needed.

## Preview

Unzip the folder and double-click `index.html`. Alternatively run `python3 -m http.server 8000` from this folder and visit http://localhost:8000.

## Publish on GitHub Pages

1. Create a public GitHub repository. For a main personal site, name it `YOUR-USERNAME.github.io`, replacing YOUR-USERNAME with your actual GitHub username. A normal repository name also works.
2. Upload the **contents** of this folder to the repository. `index.html`, `styles.css`, `script.js`, `.nojekyll`, and `assets/` must be at the repository root, not inside another `kaeshikka-website` folder. Upload the extracted files, not the ZIP.
3. Commit the files to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/(root)**, then **Save**.
6. Wait for GitHub's Pages deployment to finish. Your published link appears in Settings → Pages.

Main repository URL: `https://YOUR-USERNAME.github.io/`
Other repository URL: `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

All asset paths are relative, so both URL formats work.

GitHub's guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Edit your website

- **Text, work history, qualifications, email:** edit `index.html`. Each section has a named ID such as `about`, `experience`, or `research`.
- **Colours:** edit the variables at the start of `styles.css`.
- **Photos:** replace the files in `assets/` with images of the same filenames, or change their paths in `index.html`. Update the descriptive alt text too.
- **Résumé:** replace `assets/Kaeshikka-Chettri-Resume.pdf` with the updated PDF using that exact filename.
- **Interactions:** `script.js` controls the mobile menu, photo viewer, current navigation indicator, and footer year.

The site includes the original résumé unchanged. Its download contains the phone number and referee contact details from your supplied PDF. Replace that PDF with a public-facing version if you prefer. The webpage itself displays your email and city, with no referee contact details.

## Included files

- `index.html` — complete page content and metadata
- `styles.css` — desktop, mobile, accessibility and print styling
- `script.js` — lightweight interactions
- `.nojekyll` — static hosting marker
- `assets/favicon.svg` — initials favicon
- `assets/portrait.jpeg` — main portrait (1.jpeg)
- `assets/flowers.jpeg` — photo(1).jpeg
- `assets/reading.jpeg` — 2.jpeg
- `assets/moment.jpeg` — 3.jpeg
- `assets/Kaeshikka-Chettri-Resume.pdf` — supplied résumé

The email link opens the visitor's email application. This is a static portfolio, with no appointment booking, contact form backend, analytics, or external data services. Core content and links work without JavaScript; photos then open as ordinary image links.

Content is based on the supplied résumé. The page's visual layout is original, with a section-based professional portfolio structure inspired by the reference website. No claims of publications or additional qualifications have been added.
