<template>
  <div class="search-container">
    <form class="serach-form" action="/">
      <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        background="#3296fa"
        @focus="isResultShow = false"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 搜索历史记录 -->
    <search-result v-if="isResultShow" :searchText="searchText" />
    <!-- 联想建议 -->
    <search-suggestion
     v-else-if="searchText"
     :search-text="searchText"
     @search="onSearch" />
    <!-- 历史记录 -->
    <search-history
     @search="onSearch"
     v-else
     :search-histories="searchHistories"
     @clear-search-histories="searchHistories = []"
     />
  </div>
</template>

<script>
import SearchResult from './components/search-result'
import SearchSuggestion from './components/search-suggestion'
import SearchHistory from './components/search-history'
import { setItem, getItem } from '@/utils/storage.js'
export default {
  name: 'SearchIndex',
  components: {
    SearchResult,
    SearchSuggestion,
    SearchHistory
  },
  props: {},
  data () {
    return {
      searchText: '',
      isResultShow: false,
      searchHistories: getItem('TOUTIAO_SEARCH_HISTORIES') || [] // 存储搜索记录的历史数据
    }
  },
  computed: {},
  watch: {
    searchHistories (value) {
      // console.log('hahah')
      setItem('TOUTIAO_SEARCH_HISTORIES', value)
    }
  },
  created () {},
  methods: {
    onSearch (val) {
      // console.log(val)
      this.searchText = val
      // 存储搜索历史记录
      // 要求：不要有重复历史记录、最新排在前面
      const index = this.searchHistories.indexOf(val)
      if (index !== -1) {
        this.searchHistories.splice(index, 1)
      }
      this.searchHistories.unshift(val)
      // 渲染搜索结果为 true
      this.isResultShow = true
    },
    onCancel () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
.search-container {
  padding-top: 108px;
  .van-search__action {
    color: #fff;
  }
  .search-form {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
}
</style>
