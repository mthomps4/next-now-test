const { execSync } = require('child_process');

console.log('✅  Installing dependencies...');
execSync('yarn');

console.log('✅  Creating Databases...');
execSync('createdb --owner=postgres next_now_test_dev');
execSync('createdb --owner=postgres next_now_test_test');

// TODO: User seeds (DEV)

console.log('\n\n🚀  Done! Run `now dev` to start the app!');
