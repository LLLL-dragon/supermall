<template>
	<div class="goods">
		<goods-list-item v-for="item in goods" :goodsItem="item"></goods-list-item>
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem.vue'
	export default {
		name:"CoodsList",
		components:{
			GoodsListItem
		},
		props:{
			goods:{
				type:Array,
				default(){
					return[]
				}
			}
		}
	}
</script>

<style scoped>
	.goods{
		/* 弹性布局 使用该属性后 子元素的float、clear和vertical-align属性将失效 */
		display: flex;
		/* 规定灵活的项目在必要的时候拆行或拆列。 */
		 flex-wrap: wrap;
		 /* 在弹性盒对象的 <div> 元素中的各项周围留有空白： */
		 justify-content: space-around;
		 
		 padding: 2px;

	}
</style>
