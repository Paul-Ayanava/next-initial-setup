// config file
const withTM = require('next-transpile-modules')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const envConfig = {
  appEnv: process.env.NODE_ENV || 'localhost'
}

module.exports = withBundleAnalyzer(
  withTM({
    env: {
      API_MOCK: process.env.API_MOCK
    },
    publicRuntimeConfig: {
      ...envConfig
    }
  })
)
