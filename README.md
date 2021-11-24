## Nextjs localized route test

### Requirements

#### Two routes:
1. Main page (de = `/`, fr = `/fr`)
2. Search page (de = `/suchen`, fr = `/chercher`, no prefixes)

#### Test:
Go from Main page to Search page by using `Link` or `Router.push`

There should not be any error, dev and prod.

#### Run

```bash
# Dev
yarn dev

# Prod
yarn build && yarn start
```
