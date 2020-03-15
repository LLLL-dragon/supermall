<template>
	<div >
		<img v-for="(item, index) in recommendList" :key='index' :src="item.img" alt="">
	</div>
</template>

<script>
	export default{
		name:'DetailRecommendInfo',
		props:{
			recommendList:{
				type:Array
			}
		}
	}
</script>

<style>
</style>
