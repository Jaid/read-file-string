# read-file-string


Returns file content as a UTF-8 string. Returns null if file does not exist (or is a directory) instead of throwing an Error.

<a href="https://raw.githubusercontent.com/Jaid/read-file-string/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/read-file-string?style=flat-square&color=success" alt="License"/></a>  
<a href="https://github.com/Jaid/read-file-string/commits"><img src="https://img.shields.io/github/commits-since/Jaid/read-file-string/v1.0.1?style=flat-square&logo=github&color=success" alt="Commits since v1.0.1"/></a> <a href="https://github.com/Jaid/read-file-string/commits"><img src="https://img.shields.io/github/last-commit/Jaid/read-file-string?style=flat-square&logo=github&color=red" alt="Last commit"/></a> <a href="https://github.com/Jaid/read-file-string/issues"><img src="https://img.shields.io/github/issues/Jaid/read-file-string?style=flat-square&logo=github&color=red" alt="Issues"/></a>  
<a href="https://npmjs.com/package/read-file-string"><img src="https://img.shields.io/npm/v/read-file-string?style=flat-square&logo=npm&label=latest%20version&color=success" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/read-file-string/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/read-file-string?style=flat-square&logo=npm&color=red" alt="Dependents"/></a> <a href="https://npmjs.com/package/read-file-string"><img src="https://img.shields.io/npm/dm/read-file-string?style=flat-square&logo=npm&color=red" alt="Downloads"/></a>









## Installation
<a href="https://npmjs.com/package/read-file-string"><img src="https://img.shields.io/badge/npm-read--file--string-C23039?style=flat-square&logo=npm" alt="read-file-string on npm"/></a>
```bash
npm install --save read-file-string@^1.0.1
```
<a href="https://yarnpkg.com/package/read-file-string"><img src="https://img.shields.io/badge/Yarn-read--file--string-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="read-file-string on Yarn"/></a>
```bash
yarn add read-file-string@^1.0.1
```



<a name="module_read-file-string"></a>

## Reference

* [read-file-string](#module_read-file-string)
    * [module.exports(file)](#exp_module_read-file-string--module.exports) ⇒ <code>Promise.&lt;(string\|null)&gt;</code> ⏏
        * [.readFileStringSync(file)](#module_read-file-string--module.exports.readFileStringSync) ⇒ <code>string</code> \| <code>null</code>

<a name="exp_module_read-file-string--module.exports"></a>

### module.exports(file) ⇒ <code>Promise.&lt;(string\|null)&gt;</code> ⏏
**Kind**: Exported function  
**Returns**: <code>Promise.&lt;(string\|null)&gt;</code> - File contents in UTF-8 or null if file could not be read  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Path to a file |

**Example**  
```javascript
import readFileString from "read-file-string"
const result = await readFileString("readme.md")
result === "## Hewwo OwO"
```
<a name="module_read-file-string--module.exports.readFileStringSync"></a>

#### module.exports.readFileStringSync(file) ⇒ <code>string</code> \| <code>null</code>
**Kind**: static method of [<code>module.exports</code>](#exp_module_read-file-string--module.exports)  
**Returns**: <code>string</code> \| <code>null</code> - File contents in UTF-8 or null if file could not be read  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Path to a file |

**Example**  
```javascript
import {readFileStringSync} from "read-file-string"
const result = readFileStringSync("readme.md")
result === "## Hewwo OwO"
```





## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
