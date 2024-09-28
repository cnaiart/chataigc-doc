export function fetchReleaseTag(releases) {
  if (releases) {
    const tagLineParagragh = document.querySelector(
      'div.VPHero.has-image.VPHomeHero > div > div.main > p.tagline'
    )
    if (!tagLineParagragh) return
    const docsReleaseTagSpan = document.createElement('samp')
    docsReleaseTagSpan.classList.add('docs-cn-github-release-tag')
    docsReleaseTagSpan.innerText = releases
    tagLineParagragh?.appendChild(docsReleaseTagSpan)
  }
}

/**
 * * 获取当前页面所有参数
 * @param
 * @returns
 */
export const getUrlParams = () => {
  const params = {}
  const queryString = window.location.search.slice(1)
  const pairs = queryString.split('&')
  for (const pair of pairs) {
    const [key, value] = pair.split('=')
    params[key] = decodeURIComponent(value)
  }
  return params
}

export function redirect() {
  // 获取Url顶部的路由参数 'redirect'
  const params = getUrlParams()
  try {
    if ('redirect' in params) {
      // 需要重定向
      // http://localhost:5173?redirect=chengDan
      // http://localhost:5173/chengDan
      location.assign(`${window.location.origin}/${params.redirect}/index.html`)
    }
  } catch (error) {
    console.warn(error)
  }
}
