<template>
  <van-cell>
    <!-- <div class="article-container">文章详情</div> -->
    <!-- <div class="article-container">文章详情${{router.params}}</div> -->
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleIndex',
  components: {},
  props: {
    articleId: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
