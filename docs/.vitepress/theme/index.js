import DefaultTheme from 'vitepress/theme'
import ComposeGenerator from '../../components/ComposeGenerator.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ComposeGenerator', ComposeGenerator)
  },
}
