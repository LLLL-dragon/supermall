<template>
	<div class="datailBaseInfo" v-if="Object.keys(goods).length !== 0">
		<div class="info-title">{{goods.title}}</div>
		<div class="price">
			<span class="newPrice">{{goods.newPrice}}</span>
			<s class="oldPrice">{{goods.oldPrice}}</s>
			<span class="discount" v-if="goods.discount">{{goods.discount}}</span>
		</div>
		<div class="info-other" v-if="goods.colums[0]">
			<span>{{goods.colums[0]}}</span>
			<span>{{goods.colums[1]}}</span>
			<span>{{goods.servies[goods.servies.length-1].name}}</span>
		</div>
		<div class="info-sevice">
			<span v-for="index in goods.servies.length-1" 
						:key='index' 
						class="info-sever-item">
				<img src="goods.servies[index-1].icon" alt="">
				<span>{{goods.servies[index-1].name}}</span>	
			</span>		
		</div>
		<div class="shopName">
				<img :src= "shop.log" alt="">
				<span>{{shop.name}}</span>
		</div>
	</div>

</template>

<script>
	export default {
		name:'DetailBaseInfo',
		props:{
			goods:{
				type:Object
				
			},
			shop:{
				type:Object
				
			}
		}
		
	}
</script>

<style scoped>
	.datailBaseInfo{		
		margin-top: 15px;
		padding: 0 8px;
		color: #999;
		border-bottom: 5px solid #f2f5f8;
	}
	/* .datailBaseInfo div{
		margin: 10px;
	} */
	.info-title{
		color: #222;
	}
	.price{
		margin-top: 10px;
	}
	.newPrice{
		font-size: 24px;
		color: var(--color-high-text);
	}
	.oldPrice{
		font-size: 13px;
		margin-left: 5px;
		text-decoration: line-through;
	}
	.discount{
		padding: 2px 5px;
		background-color: var(--color-high-text);
		color: white;
		font-size: 12px;
		margin-left: 5px;
		border-radius: 8px;
	}
	.info-other{
		font-size: 12px;
		display: flex;
		margin-top: 10px;
		line-height: 3px;
		border-bottom: 1px solid rgba(100,100,100,.1);
		justify-content: space-between;
	}
	.info-other span{
		flex: 1;
	}
	.info-sevice{
		font-size: 13px;
		justify-content: space-between;
		display: flex;
		line-height: 60px;
	}
	.info-sever-item {
		flex: 1;
	}
	.info-sever-item img{
		
		width: 10px;
		height: 10px;
	}
	.shopName{
		display: flex;
		justify-content: space-between;
		line-height: 60px;
	}
	.shopName img{
		width: 44px;
		height: 44px;
		position: relative;
		top: 2px;
	}
	.shopName span{
		font-size: 13px;
		color: #333;
	}
</style>
