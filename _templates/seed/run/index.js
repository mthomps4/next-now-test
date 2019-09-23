// eslint-disable-next-line
const fs = require('fs');
// eslint-disable-next-line
const childProcess = require('child_process');

const seeds = fs.readdirSync('./seeds/runners');

const seedOptions = seeds.map(e => {
  const name = e.split('.')[0];
  return name;
});

module.exports = {
  prompt: ({ inquirer, _args }) => {
    return inquirer
      .prompt({
        type: 'select',
        name: 'environment',
        message: 'What environment?',
        choices: ['development', 'staging', 'production']
      })
      .then(({ environment }) => {
        return inquirer
          .prompt({
            type: 'select',
            name: 'seedFile',
            message: `Seeds to run in ${environment}`,
            choices: seedOptions
          })
          .then(({ seedFile }) => {
            console.log(`Seeding ${seedFile}...`);

            return { environment, seedFile };
          });
      });
  }
};
