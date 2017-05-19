const API_BASE = 'https://api.nutritionix.com/v1_1/search/'
const appKey = '105450dabfa9aba34c9ace6b9248ef91'
const appId = 'fc3e322d'

const get = params => {
  const url = [API_BASE, params, `?fields=item_name&appId=${appId}&appKey=${appKey}`].join('')
  return window.fetch(url).then(r => r.json())
}

export { get }