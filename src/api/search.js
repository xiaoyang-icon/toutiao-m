// 获取展示数据模块
import request from '@/utils/request.js'

export const getSearchSuggestion = q => {
  return request({
    methods: 'GET',
    url: '/app/v1_0/suggestion',
    params: {
      q
    }
  })
}

export const getSearchResult = params => {
  return request({
    methods: 'GET',
    url: '/app/v1_0/search',
    params
  })
}
