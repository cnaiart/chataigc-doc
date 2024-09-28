<script setup lang="ts">
import { computed, toRaw } from 'vue'
import { VPDocAsideSponsors } from 'vitepress/theme'
import { useSponsor } from '../composables/sponsor'
import { useCooperative } from '../composables/cooperative'

const { data: cooperativeData } = useCooperative()
const { data: sponsorData } = useSponsor()

// 广告
const slogan = {
  name: '致敬所有的美好',
  img: '/go-view-tip.svg',
  extra: '欢迎更多小伙伴参与建设！'
}

const sponsorList = [
  ...toRaw(cooperativeData.value)[0].items.filter(v => v.aside !== false),
  ...toRaw(cooperativeData.value)[1].items.filter(v => v.aside !== false)
]

// 底部
const sponsors = computed(() => {
  return (
    sponsorData?.value.map(sponsor => {
      return {
        size: sponsor.size === 'big' ? 'mini' : 'xmini',
        items: sponsor.items
      }
    }) ?? []
  )
})
</script>

<template>
  <!-- 广告 -->
  <a
    v-for="(item, index) in sponsorList"
    class="go-view-tip sponsor-style"
    :class="[item.url === 'null' && 'un-link', item.class]"
    :style="item.style"
    :key="index"
    :href="item.url"
    :target="item?.target || '_blank'"
  >
    <img width="22" height="22" :src="item.logo" />
    <span>
      <p class="heading">{{ item.subName || item.name }}</p>
    </span>
  </a>
  <!-- slogan -->
  <!-- <div
    class="go-view-tip slogan-style"
    style="margin-top: 1rem; margin-bottom: 1rem"
  >
    <img width="22" height="22" :src="slogan.img" />
    <span>
      <p class="extra-info">&nbsp;</p>
      <p class="heading">{{ slogan.name }}</p>
      <p class="extra-info">{{ slogan.extra }}</p>
    </span>
  </div> -->
  <div
    class="wwads-cn wwads-vertical wwads-sticky"
    data-id="336"
    style="max-width: 226px; border-radius: 10px; margin: 0 0 10px"
  ></div>
  <!-- 诗句 -->
  <div class="VPDocAsideSponsors" v-if="sponsorData">
    <div class="VPSponsors vp-sponsor aside">
      <section
        class="vp-sponsor-section"
        v-for="(item, index) in sponsors"
        :key="index"
      >
        <div
          class="VPSponsorsGrid vp-sponsor-grid"
          :class="[item.size === 'mini' ? 'mini' : 'xmini']"
          :data-vp-grid="item.size === 'mini' ? 1 : 2"
        >
          <div
            v-for="(iitem, ii) in item.items"
            :key="ii"
            class="vp-sponsor-grid-item vp-sponsor-grid-item-pd"
            style="color: var(--vp-c-text-2)"
          >
            <p>{{ iitem.name }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.go-view-tip {
  border-radius: 14px;
  padding-left: 2.5rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  position: relative;
  font-size: 0.9rem;
  line-height: 1.1rem;
  filter: grayscale(100%);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-bg-alt);
  transition: border-color 0.5s;
}
/* 广告的样式 */
.sponsor-style {
  display: flex;
  width: 100%;
  padding: 0.8rem;
  padding-left: 3.7rem;
  padding-right: 0.8rem;
  margin-bottom: 0.5rem;
  color: #5dc7d1;
  border: 1px solid #68a9d1 !important;
}

.slogan-style {
  display: flex;
  width: 100%;
  padding-left: 3.7rem;
  padding-right: 0;
}
.sponsor-style .extra-info {
  opacity: 1;
}

.sponsor-style.un-link {
  pointer-events: none;
}

.sponsor-style.xhqf p {
  padding-left: 10px;
}
.sponsor-style.xfkj p {
  padding-left: 10px;
}
.sponsor-style.qyy p {
  padding-left: 10px;
}
.sponsor-style.ccflow {
  padding-right: 0;
}
.sponsor-style.ZyplayerDoc {
  padding-right: 3px;
}
.sponsor-style.ZyplayerDoc p {
  padding-left: 8px;
}
.sponsor-style.dandian p {
  padding-left: 12px;
}
.sponsor-style.ccflow p {
  margin-left: -10px;
}
.sponsor-style.mdy img {
  scale: 1.3;
}
.sponsor-style.mdy p {
  margin-left: 4px;
}

.sponsor-style.shaguo {
  padding-left: 3.5rem;
}

.sponsor-style.shaguo p {
  margin-left: -10px;
}
.sponsor-style.Diboot {
  padding-left: 3.5rem;
}

.sponsor-style.Diboot p {
  margin-left: -10px;
}

.sponsor-style.yuncheng {
  padding-right: 0;
}
.sponsor-style.yuncheng p {
  margin-left: -10px;
}

.sponsor-style.fengniao {
  padding-right: 0;
}

.sponsor-style.fengniao p {
  margin-left: -12px;
  font-size: 14px;
}
.sponsor-style.xingyun {
  padding-right: 0;
}

.sponsor-style.xingyun p {
}

.go-view-tip.sponsor-style .heading {
  background-image: linear-gradient(
    120deg,
    #54b6d0 16%,
    var(--vp-c-brand-light),
    var(--vp-c-brand-light)
  ) !important;
}
/* 原hover */
.go-view-tip {
  filter: grayscale(0%);
  border: 1px solid var(--vp-c-brand-light);
}
.go-view-tip img {
  position: absolute;
  left: 0.8rem;
  transition: transform 0.5s;
  height: 28px;
  width: auto;
}
.go-view-tip:hover img {
  transform: scale(1.2);
}

/* 原hover */
.go-view-tip .heading {
  background-image: linear-gradient(
    120deg,
    #54b6d0 16%,
    var(--vp-c-brand-light),
    var(--vp-c-brand-light)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.go-view-tip .extra-info {
  color: var(--vp-c-text-1);
  opacity: 0;
  font-size: 0.7rem;
  padding-left: 0.1rem;
  transition: opacity 0.5s;
}
.go-view-tip:hover .extra-info {
  opacity: 0.9;
}
.vp-sponsor-grid-item-pd {
  padding: 10px 20px;
  cursor: default;
}
.dark .aside .vp-sponsor-grid-item-pd:hover {
  background-color: var(--vp-c-bg-mute) !important;
}
</style>
