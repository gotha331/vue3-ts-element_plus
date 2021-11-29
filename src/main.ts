import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store/index'
import 'styles/index.scss'
import * as ElIconModules from '@element-plus/icons'

const app = createApp(App)
// 统一注册Icon图标
for (const iconName in ElIconModules) {
  if (Reflect.has(ElIconModules, iconName)) {
    const item = ElIconModules[iconName]
    app.component(iconName, item)
  }
}

app.use(router).use(store, key).mount('#app')
