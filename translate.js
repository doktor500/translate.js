var http            = require('http'),
    optimist        = require('optimist'),
    SOURCE_LANG     = 'en',
    TRANSLATED_LANG = 'es',
    ARGS_SEPARATOR  = ' ',
    DATA_SEPARATOR  = /"/;

http.get(url() + query(), parse);

function parse(result) {
  result.setEncoding('binary');
  result.on('data', print);
}

function print(data) {
  console.log(translation(data)); 
  process.exit(0);  
}

function url() {
  return 'http://translate.google.com/translate_a/t?client=t&sl=' + 
          SOURCE_LANG + '&tl=' + 
          TRANSLATED_LANG + '&q=';
}

function query() {
  return optimist.argv._.join(ARGS_SEPARATOR);
}

function translation(data) {
  return data.split(DATA_SEPARATOR)[1];
}