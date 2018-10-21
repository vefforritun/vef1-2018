var dirty = 'strengur með   bilum og \t   tab af\nhandahófi og\t rugl';

console.log(dirty);

// finna einn eða fleiri whitespace staf saman og skipta út fyrir eitt bil
var clean = dirty.replace(/\s+/g, ' ');

console.log(clean);
