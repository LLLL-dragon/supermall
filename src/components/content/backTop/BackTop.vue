<template>
	<div class="back-top" ref="wrapper">
		<img src="~assets/img/common/top.png" alt="">
	</div>
</template>

<script>
	export default {
		name: 'BackTop',
		
		
		// mounted(){
		// 	this.scroll = new BScroll(this.$refs.wrapper,{
				
		// 	})
		// 	this.scroll.scrollTo(0, 0)
		// }
	}
</script>

<style scoped>
	.back-top{
		position: fixed;
		right: 10px;
		bottom: 55px;
	}
	.back-top img{
		width: 43px;
		height: 43px;
	}
</style>
