const prompt = require('prompt');

prompt.start();

prompt.get(['name', 'email'], (err, res) => {
  console.log('got a response');
  console.log('name: ', res.name);
  console.log('email: ', res.email);
});