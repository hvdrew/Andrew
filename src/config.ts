import * as yaml from 'node-yaml'

let chosenEnv = process.env.NODE_ENV
let configSettings = yaml.readSync('../server.config.yaml')

export const env = (typeof(configSettings.environments[chosenEnv]) != 'undefined')
                    ? configSettings.environments[chosenEnv]
                    : configSettings.environments.development