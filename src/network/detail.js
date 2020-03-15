import{ request} from './request.js'

export function getDetail(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}

export function getRecommend(){
	return request({
		url:'/recommend'
	})
}

export class Goods{
	constructor(itemInfo, colums, servies) {
	    this.title = itemInfo.title
			this.desc = itemInfo.desc
			this.newPrice = itemInfo.price
			this.oldPrice = itemInfo.oldPrice
			this.discount = itemInfo.discountDesc
			this.colums = colums
			this.servies = servies
			this.realPrice = itemInfo.lowNowPrice
	}
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Shop{
	constructor(shopInfo) {
		this.log = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.scroe = shopInfo.scroe;
		this.goodsCount = shopInfo.cGoos		
	}
}

