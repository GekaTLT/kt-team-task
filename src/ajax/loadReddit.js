import axios from 'axios'
let afterKey = []
let beforeKey = []

export default function (amountElem, pageMoveTo, sortItems) {
  let params = {
    params: {
      limit: amountElem
    }
  }
  pageMoveToGo(params, pageMoveTo)
  return axios
    .get(`https://www.reddit.com/r/worldnews/${getSortItems(sortItems)}.json`, params)
    .then(response => {
      if (response.data.data.after) {
        afterKey.push(response.data.data.after)
      }
      if (response.data.data.before) {
        beforeKey.push(response.data.data.before)
      }
      return {
        newsArray: response.data.data.children,
        numberOfPages: afterKey.length
      }
    })
}

function pageMoveToGo (params, data) {
  if (!data) {
    afterKey = []
    beforeKey = []
  }
  if (data === 'next') {
    params.params.after = afterKey[afterKey.length - 1]
    params.params.count = 1
  }
  if (data === 'pre') {
    params.params.before = beforeKey[beforeKey.length - 1]
    afterKey.splice(-1, 1)
    beforeKey.splice(-1, 1)
  }
  if (data.page) {
    params.params.before = beforeKey[--data.page]
    afterKey = afterKey.slice(0, ++data.page)
    beforeKey = beforeKey.slice(0, --data.page)
  }
}

function getSortItems (str) {
  if (str === 'new' || str === 'controversial' || str === 'top' || str === 'rising') {
    return str
  } else {
    return 'hot'
  }
}
