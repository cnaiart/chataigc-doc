import { h } from 'vue'// 从 'vue' 包中导入 h 函数，它是创建虚拟 DOM 的一个辅助函数
import Theme from 'vitepress/theme' // 导入 VitePress 的默认主题
import HomeSponsors from './components/HomeSponsors.vue' // 导入自定义组件 HomeSponsors，用于首页赞助商展示
import AsideSponsors from './components/AsideSponsors.vue' // 导入自定义组件 AsideSponsors，用于侧边栏赞助商展示
import SvgImage from './components/SvgImage.vue'// 导入自定义组件 SvgImage，用于显示 SVG 图片
import LayoutBottom from './components/LayoutBottom.vue'// 导入自定义组件 LayoutBottom，用于页面底部布局
import SidebarNavBefore from './components/SidebarNavBefore.vue'// 导入自定义组件 SidebarNavBefore，用于侧边栏导航上方的内容
import './styles/vars.css' // 导入自定义的 CSS 变量文件
import './custom.css' // 导入自定义的 CSS 样式文件


// 导出默认配置，扩展 VitePress 的默认主题
export default {
  ...Theme,
   // 自定义布局，返回一个使用 h 函数创建的 VNode
    
  Layout() {
    return h(Theme.Layout, null, {   // 使用 Theme.Layout 作为布局组件，并传递插槽内容
      'home-features-after': () => h(HomeSponsors),    // 在首页特性部分之后插入 HomeSponsors 组件
      'aside-ads-before': () => h(AsideSponsors),  // 在侧边栏广告之前插入 AsideSponsors 组件
      'layout-bottom': () => h(LayoutBottom), // 在页面底部插入 LayoutBottom 组件
      'sidebar-nav-before': () => h(SidebarNavBefore)       // 在侧边栏导航之前插入 SidebarNavBefore 组件

    })
  },
  enhanceApp({ app }) {
    app.component('SvgImage', SvgImage)
  }
}
