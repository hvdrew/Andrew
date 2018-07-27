import { app } from './server';
import { DB } from './lib/db-util';
import { envSettings } from './lib/config';
import { log } from './lib/console-logger';

// TODO: Add types to this file

// Get port from config settings
const PORT:number = envSettings.port;

// Start the connection to MongoDB
DB.connect();

// Spin up the server
app.listen(PORT, () => {
    console.log(log.success(`Listening on port ${PORT} in ${envSettings.name} mode.`));
});