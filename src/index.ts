import { app } from './server';
import { envSettings } from './lib/config';
import { log } from './lib/console-logger';

// TODO: Add types to this file

const PORT:number = envSettings.port;

app.listen(PORT, () => {
    console.log(log.success(`Listening on port ${PORT} in ${envSettings.name} mode.`));
});