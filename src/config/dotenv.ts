import { config } from 'dotenv'

function loadEnv(enviroment: string) {
  const config: Record<string, string> = {
    development: '.env.development',
    production: '.env.production',
    testing: '.env.testing',
    staging: '.env.staging'
  }

  if (config[enviroment]) {
    return config[enviroment]
  }

  return '.env'
}

config({
  path: loadEnv(process.env.NODE_ENV as string)
})
