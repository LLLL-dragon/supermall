<template>
  <div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
	<!-- 	<tab-control :titles="['流行', '新款', '精选']"
								 @tabClick="tabClick"
								 	ref="tabControl"
								 v-show="isTabfixed"></tab-control> -->
		<scroll class="content" 
						ref="scroll" 
						:probe-type = '3'
						 @scroll = "contentScroll"
						 :pull-up-load= 'true'
						 @pullingUp='loadMore'>
			<home-swiper :banners="banners"  @swiperImageLoad = "swiperImageLoad"></home-swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<feature-view></feature-view>
			<tab-control :titles="['流行', '新款', '精选']" 
									 @tabClick="tabClick"
									 ref="tabControl"
									 :class="{fixed: isTabfixed}"
									></tab-control>
			<goods-list :goods='showGoods'></goods-list>	
			
		</scroll>
		<back-top @click.native="backClick" v-show='isShowBackTop'></back-top>
		
	</div>
</template>

<script>
	
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import RecommendView from './childComps/RecommendView.vue'
	import FeatureView from './childComps/FeatureView.vue'
	import BScroll from 'better-scroll'
	
	import NavBar from 'components/common/navbar/NavBar.vue'
	import TabControl from 'components/content/tabControl/TabControl.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import Scroll from 'components/common/scroll/Scroll'
	import BackTop from 'components/content/backTop/BackTop'
	
	import {getHomeMultidata, getHomeGoods} from 'network/home.js'
	import {debounce} from 'common/utils.js'
	
	
  export default{
    name:'Home',
		components:{
			HomeSwiper,
			RecommendView,
			FeatureView,
			BScroll,
			NavBar,
			TabControl,
			GoodsList,
			Scroll,
			BackTop
		},
		data(){
			return {
				banners:[],
				recommends:[],
				goods:{
					'pop': {page:0, list: []},
					'new': {page:0, list: []},
					'sell': {page:0, list: []},
				},
				currentType:'pop',
				isShowBackTop:false,
				tabOffsetTop:0,
				isTabfixed: false,
				saveY : 0
			}
		},
		computed:{
			showGoods(){
				return this.goods[this.currentType].list
			} 	
		},
		created() {
			// 1. 请求多个数据
			this.getHomeMultidata()
			
			// 2. 请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
			
		},	
		mounted() {
			// 1. 监听图片的加载
			const refresh = this.debounce(this.$refs.scroll.refresh,200)
			this.$bus.$on('ItemImageLoad', () => {
				refresh()				
			})
			// 2. 获取 tabContorl的 offsetTop
			// 所有的组件都有一个属性 $el: 用于获取组件的元素
		},
		destroyed() {
			console.log('home destoryed')
		},
		activated() {
			this.$refs.scroll.scrollTo(0, this.saveY, 0)
			this.$refs.scroll.refresh()
		},
		deactivated() {
			this.saveY = this.$refs.scroll.scroll.y
		},
		methods:{
			/*
			 * 事件监听相关的方法
			 */
			tabClick(index){
				switch(index){
					case 0:
						this.currentType = 'pop'
						break;
					case 1:
						this.currentType = 'new'
						break;
					case 2:
						this.currentType = 'sell'
						break;
				}
			},	
			
			loadMore(){
				this.getHomeGoods(this.currentType);
			},
				
			
			debounce(func, delay) {
				let timer = null
			
				return function(...args) {
					if (timer) clearTimeout(timer)
					timer = setTimeout(() => {
						func.apply(this, args)
					}, delay)
				}
			},
			
			contentScroll(position){
				// 判断 BackTop 是否显示				
				this.isShowBackTop = -position.y > 1000
				
				// 2. 决定tabcontrol 是否吸顶(position: fixed)
				// this.isTabfixed = (-position.y) > this.tabOffsetTop
			},
			
			backClick(){
				this.$refs.scroll.scrollTo(0, 0)
				this.$refs.scroll.scroll.scrollTo(0, 0, 500);
				// console.log('按钮被点击了');
			},
			swiperImageLoad(){
			// console.log(this.$refs.tabControl.$el.offsetTop)	
			// this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
			},
		
			/*
			 * 网络请求相关的方法
			 */
			// 1. 请求多个数据
			getHomeMultidata(){
				getHomeMultidata().then(resolve => {
					// this.result = resolve
					this.banners = resolve.data.banner.list;
					this.recommends = resolve.data.recommend.list;
				})
			},
			
			// 2. 请求商品数据
			getHomeGoods(type){
				const page = this.goods[type].page + 1;
				getHomeGoods(type, page).then( resolve => {
					this.goods[type].list.push(...resolve.data.list)
					this.goods[type].page += 1;
					
					this.$refs.scroll.finishPullUp()
					// console.log(resolve)
					
				})
			},
		}		
  }
</script>
<style scoped>
	#home{
		/* 视口 */
		height: 100vh;
		position: relative;
		/* padding-top: 44px; */
	}
	
	.home-nav{
		background-color: var(--color-tint);
		color: white;
	/* 	position: fixed;
		right: 0;
		left: 0;
		top: 0;
		z-index: 9; */
	}
	.tab-control{
	/* 	position: sticky; */
		top: 44px;
		z-index: 9;
	}
	.content{
		position: absolute;
		overflow: hidden;
		top: 44px;
		bottom: 49px;
	}
	.fixed{
		position: fixed;
		right: 0;
		left: 0;
		top: 44px;
	}
	/* .content{
		height: calc(100% - 93px);
		overflow: hidden;
		margin-top: 44px;
	} */
</style>
