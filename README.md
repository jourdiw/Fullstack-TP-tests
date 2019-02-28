[![coverage report](https://gitlab.com/jourdi/fullstack-tp-tests/badges/master/coverage.svg)](https://gitlab.com/jourdi/fullstack-tp-tests/commits/master)

[![pipeline status](https://gitlab.com/jourdi/fullstack-tp-tests/badges/master/pipeline.svg)](https://gitlab.com/jourdi/fullstack-tp-tests/commits/master)

# Tutoriel Vue.js Makina Corpus

Ce projet est utilisé lors de la formation Vue.js

## Instructions de démarrage

```
git clone git@gitlab.com:mdartic/fullstack-tp-tests.git
cd fullstack-tp-tests
npm install
npm run serve
```

## Conseils d'utilisation

Pour éditer le code, et les  fichier `.vue`, il y a l'extension `vetur`
sous Visual Studio Code qui permet de bénéficier d'une coloration syntaxique
et d'intellisense adapté aux Vue.

Ce projet a été bootstrapé avec la cli 3.0 de vue.

Elle est encore en beta, mais permet d'ores et déjà la mise en place
facilitée de projets front modernes, avec l'évolution des dépendances
de tooling.

## Mettre a jour les snapshots
```
npm run test:unit -- --watch
```
Then choose to update the snapshot (u)