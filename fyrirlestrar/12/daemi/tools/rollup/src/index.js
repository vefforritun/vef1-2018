// sækjum default export, gætum nefnt annað
import foo from './export';

// sækjum named export
import { bar } from './export';

// sækjum named export undir öðru nafni
import { bar as baz } from './export';

console.log('foo', foo);
console.log('bar', bar);
console.log('baz', baz);
