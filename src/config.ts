// TODO: Add additional config files for non-server settings
//        - These configs only really help when starting the server
//        - Need config file that is used during runtime and can be updated

import * as yaml from 'node-yaml'

let chosenEnv = process.env.NODE_ENV
let configSettings = yaml.readSync('../server.config.yaml')

export const envSettings = (typeof(configSettings.environments[chosenEnv]) != 'undefined')
                    ? configSettings.environments[chosenEnv]
                    : configSettings.environments.development