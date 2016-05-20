const TRANSLATED_LANG = 'es';
const ARGS_SEPARATOR = ' ';

const translate = require('google-translate-api');
const optimist = require('optimist');

function query() {
  return optimist.argv._.join(ARGS_SEPARATOR);
}
 
translate(query(), { to: TRANSLATED_LANG })
  .then(response => console.log(response.text))
  .catch(error => console.error(error));
