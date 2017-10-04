# The Happy Feet Website
The new [Happy Feet website](https://happyfeet.us) is a completely static website generated using [Jekyll](https://jekyllrb.com/).

[![Build Status](https://travis-ci.org/lovelldies/happyfeet.svg?branch=gh-pages)](https://travis-ci.org/lovelldies/happyfeet)

### Before we begin
Make sure to pull all the changes from the github repo, as there might be multiple branches running on multiple machines.
```sh
git pull
```

### Testing on a local server
```sh
jekyll serve -w -I
```
- `-w` watches for changes and rebuilds
- `-I` does only incremental rebuilds

Run above command gets the website running at http://localhost:4000/happyfeet/
*At times, changes may not show up (eg: changes to the `_config.yml` file) with incremental builds. In cases like these, run the above command without the `-w` and `-I` flags.*

### Push to staging server on Github
We are using Github to stage our website, as Github automatically builds Jekyll pages, and version controls the code.
```sh
git add .
git commit -m "Commit message"
git push
```
The github version, which we use for staging, is here: https://lovelldies.github.io/happyfeet/

### Accelerated Mobile Pages (AMP)
AMP pages (which are automatically created on running the `serve` or `build` commands) are available in an `amp` folder inside the `_site` folder, for all the pages that have `amp: true` set in the YAML front matter block. The AMP content can be viewed via `http://localhost:4000/happyfeet/amp/category-name/page` or ` `https://happyfeet.us/amp/category-name/page` on the live website.

[AMP validation](https://www.ampproject.org/docs/guides/validate) can be done by adding `#development=1` to the end of the URL and checking the developer console in the browser for errors.


### Deploying to Firebase
The live website is hosted on [Firebase](https://firebase.google.com/). Before deploying we need to build the website.
```sh
jekyll build JEKYLL_ENV=production --config _config.yml,_config_live.yml
```
- Certain parts of the code like, Google Analytics & Disqus are disabled on the local server. `JEKYLL_ENV=production` sets the production flag and enables these lines on code on building. This is automatically set on Github pages.
- The `baseurl` is set to `""` in `_config_live.yml` as our live website runs directly on the `https://happyfeet.us/` domain, without the trailing `happyfeet` which we have on the local server and github pages.

We can test the website locally if required, before deploying it to the firebase hosting server, by running:
```sh
firebase serve
```

Then push our freshly built website to the live URL by running:
```sh
firebase deploy
```

This local version of the server can be viewed at http://localhost:5000/ . The `firebase.json` file has `"public": "_site"`. The `_site` folder is generated by Jekyll via the `build` or `serve` command.