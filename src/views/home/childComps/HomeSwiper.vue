<template>
	<swiper class="HomeSwiper">
		<swiper-item  > <!-- v-for="{item, index} in banners" :key="index" -->
			<a >  <!-- :href="item.link" -->
				<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg" alt="" @load="imageLoad">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import Swiper from 'components/common/swiper/Swiper'
	import SwiperItem from 'components/common/swiper/SwiperItem'
	export default {
		name:'HomeSwiper',
		props:{
			banners:{
				type: Array,
				default(){
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
		data(){
			return{
				isLoad:true
			}
		},
		methods:{
			imageLoad(){			
				// if(!this.isLoad){
					this.$emit('swiperImageLoad')
					// this.isLoad = true
			}
		}
	}
</script>

<style scoped>
	.HomeSwiper img{
		height: 166.4px;
		width: 320px;
	}
</style>
