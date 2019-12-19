# read-file-string


Returns file content as a UTF-8 string. Returns null if file does not exist (or is a directory) instead of throwing an Error.

## Installation
<a href='https://npmjs.com/package/read-file-string'><img alt='npm logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/npm.png'/></a>
```bash
npm install --save read-file-string@^0.1.0
```
<a href='https://yarnpkg.com/package/read-file-string'><img alt='Yarn logo' src='https://github.com/Jaid/action-readme/raw/master/images/base-assets/yarn.png'/></a>
```bash
yarn add read-file-string@^0.1.0
```



## Documentation

* [read-file-string](#module_read-file-string)
    * [module.exports(file)](#exp_module_read-file-string--module.exports) ⇒ <code>Promise.&lt;string&gt;</code> ⏏
        * [.readFileStringSync(file)](#module_read-file-string--module.exports.readFileStringSync) ⇒ <code>string</code>

**Kind**: Exported function  
**Returns**: <code>Promise.&lt;string&gt;</code> - File contents in UTF-8 or null if file could not be read  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Path to a file |

**Example**  
```javascript
import readFileString from "read-file-string"
const result = await readFileString("readme.md")
result === "## Hewwo OwO"
```
**Kind**: static method of [<code>module.exports</code>](#exp_module_read-file-string--module.exports)  
**Returns**: <code>string</code> - File contents in UTF-8 or null if file could not be read  

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

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

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
