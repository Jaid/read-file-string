# read-file-string


<a href="https://raw.githubusercontent.com/jaid/read-file-string/master/license.txt"><img src="https://img.shields.io/github/license/jaid/read-file-string?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor read-file-string"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/read-file-string/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Fread-file-string%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/read-file-string/commits"><img src="https://img.shields.io/github/commits-since/jaid/read-file-string/v1.0.5?style=flat-square&logo=github" alt="Commits since v1.0.5"/></a> <a href="https://github.com/jaid/read-file-string/commits"><img src="https://img.shields.io/github/last-commit/jaid/read-file-string?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/read-file-string/issues"><img src="https://img.shields.io/github/issues/jaid/read-file-string?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/read-file-string"><img src="https://img.shields.io/npm/v/read-file-string?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/read-file-string/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/read-file-string?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/read-file-string"><img src="https://img.shields.io/npm/dm/read-file-string?style=flat-square&logo=npm" alt="Downloads"/></a>

**Returns file content as a UTF-8 string. Returns null if file does not exist (or is a directory) instead of throwing an Error.**





## Installation

<a href="https://npmjs.com/package/read-file-string"><img src="https://img.shields.io/badge/npm-read--file--string-C23039?style=flat-square&logo=npm" alt="read-file-string on npm"/></a>

```bash
npm install --save read-file-string@^1.0.5
```

<a href="https://yarnpkg.com/package/read-file-string"><img src="https://img.shields.io/badge/Yarn-read--file--string-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="read-file-string on Yarn"/></a>

```bash
yarn add read-file-string@^1.0.5
```

<a href="https://github.com/jaid/read-file-string/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/read--file--string-24282e?style=flat-square&logo=github" alt="@jaid/read-file-string on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/read-file-string@^1.0.5
```



## Example


```javascript
import readFileString from "read-file-string"

readFileString("./doesNotExist.txt").then(result => {

})
```

Variable `result` will be:

```javascript
null
```

















## Development



Setting up:
```bash
git clone git@github.com:jaid/read-file-string.git
cd read-file-string
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/read-file-string/master/license.txt)  
Copyright © 2021, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)
