import { ref } from 'vue'

interface Sponsors {
  special: Sponsor[]
  platinum: Sponsor[]
  platinum_china: Sponsor[]
  gold: Sponsor[]
  silver: Sponsor[]
  bronze: Sponsor[]
}

interface Sponsor {
  name: string
  img: string
  url: string
}

// shared data across instances so we load only once.
const data = ref()

const dataJson = {
  // 顶级赞数商
  top: [
    {
      name: '驰骋流程+表单+低代码',
      logo: `/sponsor/ccflow.png`,
      img: `/sponsor/ccflow-banner.png`,
      url: 'http://www.ccflow.org/?from=goviewHome',
      class: 'top ccflow',
      message: '流程引擎、表单引擎低代码开发平台'
    },
    {
      name: 'FastBee物联网平台',
      logo: `/sponsor/fb.gif`,
      img: `/sponsor/fb-banner.gif`,
      url: 'https://fastbee.cn/',
      class: 'top fb',
      message: 'FastBee简单易用的开源物联网平台'
    },
    // {
    //   name: '系统数据集成中台',
    //   logo: `/sponsor/qyy.png`,
    //   img: `/sponsor/qyy-banner.png`,
    //   url: 'https://www.qeasy.cloud/',
    //   class: 'top qyy',
    //   message: '轻松、易用、快速、稳定、安全的异构系统数据集成平台'
    // },
    {
      name: '在线知识库管理系统',
      subName: '私有化部署的知识库',
      class: 'ZyplayerDoc',
      logo: `/sponsor/zyplayer.png`,
      img: `/sponsor/zyplayer-banner.png`,
      url: 'http://doc.zyplayer.com/#/integrate/zyplayer-doc?utm=goview',
      message: '私有化部署的文档与知识库管理平台'
    },
    // {
    //   name: '单点数字化校园',
    //   subName: '单点数字化校园',
    //   class: 'dandian',
    //   logo: `/sponsor/dandian.png`,
    //   img: `/sponsor/dandian-banner.png`,
    //   url: 'https://gitee.com/dandiankeji/icampus',
    //   message: '单点数字化校园'
    // },
    {
      // 明道云
      name: 'HAP超级应用平台',
      class: 'mdy',
      logo: `/sponsor/mdy.png`,
      img: `/sponsor/mdy-banner.png`,
      url: 'https://www.mingdao.com?s=utm_71&utm_source=Goview&utm_medium=banner&utm_campaign=IT%E7%BD%91%E7%AB%99&utm_content=IT%E8%B5%8B%E8%83%BD%E4%B8%9A%E5%8A%A1',
      message: '基于工作流引擎和微服务架构，无代码快速构建企业管理系统'
    },
    // {
    //   name: '企业级开源物联网系统',
    //   class: 'shaguo',
    //   logo: `/sponsor/shaguo.png`,
    //   img: `/sponsor/shaguo-banner.png`,
    //   url: 'https://iotdoc.sagoo.cn/',
    //   message: '基于 Golang 开发的企业级开源物联网系统'
    // }, 
    {
      name: '企业级低代码开发平台',
      class: 'yuncheng',
      logo: `/sponsor/yuncheng.png`,
      img: `/sponsor/yuncheng-banner.png`,
      url: 'http://www.yunchengxc.com',
      message: '源代码交付、私有化部署、定制化开发'
    }, 
    {
      name: '开发人员的低代码平台',
      class: 'Diboot',
      logo: `/sponsor/Diboot.png`,
      img: `/sponsor/Diboot-banner.png`,
      url: 'https://www.diboot.com?from=gv',
      message: '匠心打磨，支持任意复杂场景'
    }, 
    {
      name: '可集成的低代码插件',
      class: 'xingyun',
      logo: `/sponsor/xingyun.png`,
      img: `/sponsor/xingyun-banner.png`,
      url: 'https://www.xingyunzuo.cn/?from=goview',
      message: '专为应用系统打造的全栈可视化二开平台'
    }, 
    {
      name: '橙单免费代码生成',
      class: 'chengdan',
      logo: `/sponsor/chengdan.png`,
      img: `/sponsor/chengdan-banner.png`,
      url: '/chengDan/',
      message: '专为应用系统打造的全栈可视化二开平台',
      target: '_self'
    }, 
    // {
    //   name: '...',
    //   class: '',
    //   logo: ``,
    //   img: `logo-with-shadow.png`,
    //   url: '',
    //   style: 'display: none'
    // },
  ],
  platinum: [
    // {
    //   name: '星河千帆',
    //   class: 'xhqf',
    //   logo: `/sponsor/xfkj.png`,
    //   img: `/sponsor/xfkj-banner.png`,
    //   url: 'https://www.tianyancha.com/company/3403947365',
    //   // class: 'xfkj',
    //   message: '政务信息化整体解决方案'
    // },
    // {
    //   name: '多租户管理开发平台',
    //   logo: `/sponsor/iview.png`,
    //   img: `/sponsor/iview-banner.png`,
    //   url: 'https://www.iviewui.com/?utm_source=view_goview_gg',
    //   message: '基于 Vue.js 3的 中后台系统解决方案, 开箱即用，源码交付，高效解决项目难题'
    // },
    // {
    //   name: 'JNPF快速开发平台',
    //   logo: `/sponsor/jnpf.png`,
    //   img: `/sponsor/jnpf-banner.png`,
    //   url: 'https://www.jnpfsoft.com/index.html?from=goview',
    //   message: '基于工作流引擎和微服务架构，无代码快速构建企业管理系统'
    // },
    // {
    //   name: 'Hummingbird物联网平台',
    //   class: 'fengniao',
    //   logo: `/sponsor/fengniao.png`,
    //   img: `/sponsor/fengniao-banner.png`,
    //   url: 'https://doc.hummingbird.winc-link.com',
    //   message: '蜂鸟 & 一个超轻量级物联网平台'
    // }
    {
      name: '...',
      class: '',
      logo: ``,
      img: `logo-with-shadow.png`,
      url: '',
      style: 'display: none'
    },
    {
      name: '...',
      class: '',
      logo: ``,
      img: `logo-with-shadow.png`,
      url: '',
      style: 'display: none'
    },
  ],
  gold: [
    {
      name: 'Vue2 大屏模板',
      logo: `/sponsor/vue2-banner.png`,
      img: `/sponsor/vue2-banner.png`,
      url: 'https://gitee.com/MTrun/big-screen-vue-datav',
      message: 'Vue2 大屏模板'
    },
    {
      name: 'Vue3 大屏模板',
      logo: `/sponsor/vue3-banner.png`,
      img: `/sponsor/vue3-banner.png`,
      url: 'https://gitee.com/MTrun/vue-big-screen-plugin',
      message: 'Vue3 大屏模板'
    },
    {
      name: 'React 大屏模板',
      logo: `/sponsor/react-banner.png`,
      img: `/sponsor/react-banner.png`,
      url: 'https://gitee.com/MTrun/react-big-screen',
      message: 'React 大屏模板'
    },
    {
      name: 'ECharts省份地图数据合集',
      logo: `/sponsor/echarts-banner.png`,
      img: `/sponsor/echarts-banner.png`,
      url: 'https://gitee.com/MTrun/echarts-map-json',
      message: 'ECharts省份地图数据合集'
    }
  ]
}
export function useCooperative() {
  data.value = mapCooperative(dataJson)
  return {
    data
  }
}

function mapCooperative(cooperative: Sponsors, splice = false) {
  return [
    {
      tier: '长期赞助商（一年及以上）',
      size: 'big',
      items: mapImgPath(cooperative['top'], splice)
    },
    {
      tier: '钻石赞助商',
      size: 'big',
      items: mapImgPath(cooperative['platinum'], splice)
    },
    {
      tier: '黄金赞助商',
      size: 'medium',
      items: mapImgPath(cooperative['gold'], splice)
    }
  ]
}

function mapImgPath(cooperative: Sponsor[], splice = false) {
  return cooperative.map(sponsor => ({
    ...sponsor
  }))
}
