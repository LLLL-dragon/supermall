<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav"></detail-nav-bar>
		<scroll class="detailScroll">
			<detail-swiper :top-images="topImages"></detail-swiper>
			<detail-base-info :goods='goods' :shop='shop'></detail-base-info>
			<detail-goods-info :detail-info='detailInfo'></detail-goods-info>
			<detail-bottom-bar></detail-bottom-bar>
			<detail-param-info :param-info='paramInfo'></detail-param-info>
			<detail-comment-info :detail-comment='detailComment'></detail-comment-info>
			<detail-recommend-info :recommend-info='recommendList'></detail-recommend-info>
		</scroll>

	</div>
</template>

<script>
	import DetailNavBar from './childComps/DetailNavBar.vue'
	import DetailSwiper from './childComps/DetailSwiper'
	import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
	import scroll from 'components/common/scroll/Scroll'
	import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
	import DetailBottomBar from './childComps/DetailBaseInfo.vue'
	import DetailParamInfo from './childComps/DetailParamInfo'
	import DetailCommentInfo from './childComps/DetailCommentInfo'
	import DetailRecommendInfo from './childComps/DetailRecommendInfo.vue'

	import {
		getDetail,
		getRecommend,
		Goods,
		Shop,
		GoodsParam
	} from 'network/detail'

	export default {
		name: 'Detail',
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			scroll,
			DetailGoodsInfo,
			DetailBottomBar,
			DetailParamInfo,
			DetailCommentInfo,
			DetailRecommendInfo,
		},
		data() {
			return {
				iid: {},
				topImages: [],
				goods: {},
				shop: {},
				detailInfo: {},
				paramInfo: {},
				detailComment: {},
				recommendList:[]
			}
		},
		created() {
			// 1. 保存传入的 iid
			this.iid = this.$route.params.iid
			// 2. 根据 iid 请求详细的数据
			getDetail(this.iid).then(resolve => {
				console.log(resolve)
				const data = resolve.result
				// 获取顶部的信息
				this.topImages = data.itemInfo.topImages

				// 2. 获取商品信息
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
				// console.log(this.goods)

				// 3. 获取店铺信息
				this.shop = new Shop(data.shopInfo)
				console.log(this.shop)
				
				// 4. 保存商品的详情数据
				this.detailInfo = data.detailInfo
				// console.log(this.detailInfo)
				
				// 5. 获取参数信息
				this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
				// console.log(this.paramInfo)
				
				// 6.获取评论信息
				this.detailComment = data.rate
				// console.log(this.detailComment)
			})
			getRecommend().then( (resolve, error) => {
				if(error) return 
					this.recommendList = resolve.data.list
				
			})
		},
		methods: {

		}

	}
</script>

<style scoped>
	#detail {
		position: relative;
		z-index: 9;
		background-color: #fff;
		height: 100vh;
	}

	.detail-nav {
		position: relative;
		z-index: 9;
		background-color: #fff;
	}

	.detailScroll {
		height: calc(100% - 44px);
	}
</style>
