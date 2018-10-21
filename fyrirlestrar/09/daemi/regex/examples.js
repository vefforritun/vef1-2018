/foo/.test('foo bar baz');
/bar/.test('foo baz');

const str = 'The Quick Brown Fox Jumps Over The Lazy Dog';

const re = /quick\s(brown).+?(jumps)/ig;
const result = re.exec(str);

console.log(result);

const match = str.match(/quick\s(brown).+?(jumps)/ig);

console.log(match);

const replace = 'foo bar er ekki fooz baz'.replace(/foo/g, 'lol');

console.log(replace);
