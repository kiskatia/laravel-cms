import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '../js/i18n'

Vue.use(Vuetify)

const theme = {
  primary: '#4CAF50',
  secondary: '#9C27b0',
  accent: '#9C27b0',
  info: '#00CAE3',
}

const opts = {
    lang: {
        t: (key, ...params) => i18n.t(key, params),
    },
    theme: {
        themes: {
            dark: theme,
            light: theme,
        },
    },
}

export default new Vuetify(opts)