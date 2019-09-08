const path = require('path');
jest.setTimeout(30000);
require('dotenv').config({ path: path.resolve(process.cwd(), '.env/.env.test.local') });
