<template>
	<div class="wraper" ref='wrapper'>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name:'Scroll',
		props:{
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				dafault: false
			}
		},
		data(){
			return {
				scroll: null,
				message:'哈哈哈哈或'
			}
		},
		mounted(){
			// 1. 创建 scroll 对象 
			this.scroll = new BScroll(this.$refs.wrapper, {
				click:true,
				probeType: this.probeType,
				pullUpLoad:this.pullUpLoad
				
			})
			// 2. 监听滚动的位置
			if(this.probeType ===2 || this.probeType === 3){
				this.scroll.on('scroll', (position) => {
					this.$emit('scroll',position)
				})
			}
			
				
			// 3. 监听上拉事件
			if(this.pullUpLoad){
				this.scroll.on('pullingUp', () => {
					this.$emit('pullingUp')
				})
			}
			
		},
		methods:{		

			scrollTo(x, y, time=300){
				this.scroll.scrollTo(x, y, time)
			},
			
			finishPullUp(){
				/*
				 * Better-scroll 在计算有多少区域可以滚动时，是根据 scrollerHeight 属性决定的
				 * 	scrollerHeight 属性是由 Better-scroll 的 content 的子组件的高度决定的
				 *  但是我们首页，在刚开始计算 scrollerHeight 属性时，是没有将图片计算在内的
				 * 所以计算出来是错误的
				 * 后来图片加载完成之后有了新的高度，但 scrollerHeight 是没有重新计算的
				 * 所以滚动出现了问题
				 * 解决问题方式
				 * 	监听每一张图片的加载进度，图片加载完成一次，执行一次 refresh() 重新加载scrollerHeight
				 * 监听图片加载完成 Vue 中 @load='方法'
				 * 原生js中 img.onlaod = function (){}
				 * 调用 scroll 的 refresh
				 * 
				 * 如何将 GoodsListItem 中的时间传入到 home.vue 中
				 * 	因为涉及到非父子组件中的通信，所以我们选择了事件总线 $bus
				 * 	Vue.prototype.$bus = new Vue()
				 *  this.$bus.$emit('事件名称', 参数)
				 * 	this.$bus.$on('事件名称'，回调函数)
				 * 
				 * 对于 refresh 非常频繁的问题，进行防抖
				 * 	防抖函数起作用的过程：
				 * 		如果我们直接执行 refresh ，那么 refresh 函数会执行 30 次
				 * 		可以将 refresh 传入到 debounce 中生成一个新的函数
				 */
				// 在图片加载之后 重新计算滚动的高度
				this.scroll && this.scroll.finishPullUp()
			},
			refresh(){
				// console.log('=++++')
				this.scroll && this.scroll.refresh()
			}
			
		}
		
	}
</script>

<style scoped>
	
</style>
