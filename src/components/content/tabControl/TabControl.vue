<template>
	<div class="tab-control">
		<div v-for="(item, index) in titles" class="tab-control-item" 
		@click="itemClick(index)" :class="{active:index === currentIndex}">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:"TabControl",
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex = index
				this.$emit('tabClick', index)
			}
		}
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		text-align: center;
		font-size: 15px;		
		height: 44px;
		line-height: 44px;
		background-color:white;
		position: sticky;
		top: 44px;
		/* z-index 属性设置元素的堆叠顺序。
		拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。 */
		z-index: 9;
	}
	.tab-control-item{
		flex: 1;
	}
	.active{
		color:var(--color-high-text);
	}
	.active span{
		padding: 5px;
		border-bottom: 3px solid var(--color-tint);
	}
	
</style>
