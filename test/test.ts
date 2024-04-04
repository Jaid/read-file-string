import {strict as assert} from 'node:assert'
import {test} from 'node:test'

import {getMainModule} from 'zeug'

type MainModule = typeof import('read-file-string')
const path = await getMainModule<MainModule>(`read-file-string`)
test(`should return string`, async () => {
  const file = path.join(dirName, `..`, `readme.md`);
  const result = await readFileString(file);
  assert.strictEqual(typeof result.length, 'number');
  assert.strictEqual(result.length > 10, true);
});

test(`should return null for non-existing files`, async () => {
  const file = path.join(dirName, `..`, `readmeNOT.md`);
  const result = await readFileString(file);
  assert.strictEqual(result, null);
});

test(`should return null for folders`, async () => {
  const file = path.join(dirName, `..`, `src`);
  const result = await readFileString(file);
  assert.strictEqual(result, null);
});
