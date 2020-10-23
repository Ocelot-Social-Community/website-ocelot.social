import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E24F55'
  },
  loading: {
    color: '#00CD81'
  },
  i18n: {
    locales: () => [{
      code: 'de',
      iso: 'de-DE',
      file: 'de-DE.js',
      name: 'Deutsch'
    }, {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'de'
  },
  content: {
    liveEdit: false
  }
})