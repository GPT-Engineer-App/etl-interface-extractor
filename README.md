# etl-interface-extractor

ETL Interface. Enter Field to extract. Select input format: (sql, txt, csv, json). Then the user somehow provides a way to tell us how that field is to be extracted from the data based on the format if sql or csv enter column(s) name, if JSON if Subkey enter path to root key, else enter key if list, if text enter delimiter or regex. Results Preview (Preview of results of parsing input with the extracted data highlighted. 

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/etl-interface-extractor.git
cd etl-interface-extractor
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
