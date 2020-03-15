<template>
	<div v-if="Object.keys(detailInfo).length !== 0 " class="goods-info">
		<div>{{detailInfo.desc}}</div>
		<div>{{detailInfo.detailImage[0].key}}</div>
		<div class="info-list">			
			<img v-for="(item, index) in detailInfo.detailImage[0].list" :key='index' :src="item" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		name:'detailGoodsInfo',
		props:{
			detailInfo: {
				type: Object
			}
			
		}
	}	
	
	
</script>

<style scoped>
	.goods-info{
		background-color: white;
	}
	.info-list img{
		width: 100%;
	}
</style>
