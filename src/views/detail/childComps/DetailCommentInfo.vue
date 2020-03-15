<template>
	<div v-if="Object.keys(detailComment).length !== 0" class="content-info">
		<div class="info-header">
			<div class="info-title">用户评价</div>
			<div class="info-more">
				更多
				<i class="arrow-right"></i>
			</div>
		</div>
		<div class="info-user">
			<div class="user-name">
				<img :src="detailComment.list[0].user.avatar" alt="">
				<span>{{detailComment.list[0].user.uname}}</span>
			</div>
		</div>
		<div class="info-content">
			<p>{{detailComment.list[0].content}}</p>
			<div class="info-other">
				<span class="date">{{detailComment.list[0].created}}</span>
				<span class="style">{{detailComment.list[0].style}}</span>
			</div>
			<div class="info-images">
				<img :src="item" alt="" v-for="(item, index) in detailComment.list[0].images" :key='index'> 
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailCommentInfo',
		props:{
			detailComment:{
				type: Object
			}
		}
		
	}
</script>

<style scoped>
	.content-info{
		padding: 5px 12px;
		color: #333;
		border-bottom: 5px solid #f2f5f8;
	}
	.info-header{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid rgba(0,0,0,.1);
	}
	.info-title{
		float: left;
		font-size: 15px;		
	}
	.info-more{
		float: right;
		font-size: 13px;
		margin-right: 10px;
	}
	.info-user{
		padding: 10px 0 5px;
	}
	.info-user img{
		width: 42px;
		height: 42px;
		border-radius: 50%;
	}
	.info-user span{
		position: relative;
		font-size: 15px;
	  top: -15px;
		margin-left: 15px;
	}
	.info-content{
		 padding: 0 5px 15px;
	}
	.info-content p{
		font-size: 14px;
		line-height: 1.5;
		color:  #777;
	}
	.info-content .info-other {
	  font-size: 12px;
	  color: #999;
	  margin-top: 10px;
	}
	.info-other .date {
	  margin-right: 8px;
	}
	.info-images {
	  margin-top: 10px;
	}
	.info-images img {
	  width: 70px;
	  height: 70px;
	  margin-right: 5px;
	}
	
	
	
</style>
