<template>
	<div class="goodsItem" @click="itemClick">
		<img :src="this.goodsItem.show.img" alt="" @load ='imageLoad'>
		<div class="goodsInfo">
			<p>{{this.goodsItem.title}}</p>
			<span class="price">{{this.goodsItem.price}}</span>
			<span class="collect">{{this.goodsItem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "GoodsListItem",
		props: {
			goodsItem: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		methods:{
			imageLoad(){
				this.$bus.$emit('ItemImageLoad')
			},
			itemClick(){
				this.$router.push('/detail/' + this.goodsItem.iid)
			}
		}
	}
</script>

<style scoped>
	.goodsItem {
		padding-bottom: 40px;
		/* 相对定位 相对于直接父元素 */
		position: relative;
		width: 48%;
	}

	.goodsItem img {
		width: 100%;
		/* 向 div 元素添加圆角边框： */
		border-radius: 5px;
	}

	.goodsInfo {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		/* overflow 属性规定当内容溢出元素框时发生的事情。 */
		 /* 内容会被修剪，并且其余内容是不可见的。 */
		overflow: hidden;
		text-align: center;
	}

	.goodsInfo p {
		overflow: hidden;
		/* 显示省略符号来代表被修剪的文本。 */
		text-overflow: ellipsis;
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		margin-bottom: 3px;
	}
	.goodsInfo .price{
		color: var(--color-high-text);
		margin-right: 20px;
	}
	.collect{
		/* 相对父元素定位 */
		position: relative;
		
	}
	/* 在每个 .price .collect 元素的内容之前插入新内容： */
	.goodsInfo .collect::before{
		/* 插入的内容 */
		content: '';
		position: absolute;
		left: -15px;
		top: -1px;
		width: 14px;
		height: 14px;
		background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
	}
</style>
