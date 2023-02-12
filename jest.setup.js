// setup file of jest
import { setConfig } from 'next/config'
import '@testing-library/jest-dom'
import fetch from 'isomorphic-unfetch'

import { publicRuntimeConfig } from './next.config'

setConfig({ publicRuntimeConfig })

global.fetch = fetch

const NOW = 1668885925709 //2022-11-20 00:56:12

global.window = Object.create(window)

global.open = jest.fn()

const sessionStorageMock = (() => {
  let store = {}
  return {
    getItem(key) {
      return store[key] || null
    },
    setItem(key, value) {
      store[key] = value.toString()
    },
    removeItem(key) {
      delete store[key]
    },
    clear() {
      store = {}
    }
  }
})()

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: jest.fn()
})

// Object.defineProperty(window, 'location', {
//     value: {
//         href: 'https://libyard.com',
//         host: 'libyard.com',
//         origin: 'https://libyard.com'
//     }
// })

Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock
})

module.exports = (date) => {
  const now = date ? date.getTime() : NOW
  Date.now = jest.spyOn(Date, 'now').mockImplementation(() => now)
  return now
}
