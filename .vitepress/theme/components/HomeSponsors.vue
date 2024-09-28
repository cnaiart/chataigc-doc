<script setup lang="ts">
import { VPHomeSponsors } from 'vitepress/theme'
import { useCooperative } from '../composables/cooperative'

const { data } = useCooperative()

const filterTopData = params => {
  const cpParams = Object.assign(params)
  return params[0].items.shift()
}

const filterData = params => {
  const cpParams = Object.assign(params)
  params[1].items.shift()
  return params
}
</script>

<template>
  <div style="width: 1152px; margin: 50px auto 0">
    <p align="center">
      <a
        href="https://ai.goviewlink.com/saas/"
        target="_blank"
        style="display: inline-block;"
      >
        <img src="/GoViewPro_banner.png" alt="go-view" style="border-radius: 10px"/>
      </a>
    </p>
  </div>
  <!-- 首页底部的合作伙伴声明 -->
  <VPHomeSponsors
    message="如需广告合作, 请 [权益 | 商业合作] 联系作者"
    actionText="查看合作伙伴"
    actionLink="./cooperative/"
    :data="data"
  ></VPHomeSponsors>
</template>

<style>
/* 图片 */
.vp-sponsor-grid-image {
  filter: grayscale(0);
}

.vp-sponsor-section .vp-sponsor-grid.big .vp-sponsor-grid-item {
  width: calc((100% - 4px * 2) / 2) !important;
}

/* 长期赞助商 */
.vp-sponsor-section:first-child .vp-sponsor-grid.big .vp-sponsor-grid-item {
  position: relative;
  width: calc((100% - 4px * 2) / 2) !important;
}

/* 不可点击 */
.vp-sponsor-section .vp-sponsor-grid.big .vp-sponsor-grid-link[href='null'] {
  pointer-events: none;
  cursor: not-allowed;
}

.vp-sponsor-grid.big .vp-sponsor-grid-image {
  max-width: 100% !important;
  max-height: 70px !important;
}

.vp-sponsor-section:nth-child(2) .vp-sponsor-grid-link {
  height: 140px;
}

.vp-sponsor-section:nth-child(2) .vp-sponsor-grid-image {
  max-height: 55px !important;
}

.vp-sponsor-grid.medium .vp-sponsor-grid-image {
  max-width: 180px !important;
  max-height: 50px;
}

@media (max-width: 500px) {
  .vp-sponsor-section:first-child .vp-sponsor-grid.big .vp-sponsor-grid-item {
    position: relative;
    width: calc((100% - 4px * 2)) !important;
  }
  .vp-sponsor-section:nth-child(2) .vp-sponsor-grid-image {
    max-height: 35px !important;
  }
  .vp-sponsor-section:nth-child(2) .vp-sponsor-grid-link {
    height: 100px;
  }
}
</style>
