const app = getApp()
var api = require('../../utils/api.js')
Page({
    data: {
    	medalModal:false,//勋章详情
		medalList:[
			{
				imgUrl:'../../images/medal1.png',
				name:'运动星人'
			},
			{
				imgUrl:'../../images/medal2.png',
				name:'脂肪克星人'
			},
			{
				imgUrl:'../../images/medal3.png',
				name:'头号玩家'
			},
			{
				imgUrl:'../../images/medal4.png',
				name:'霹雳娇娃'
			},
			{
				imgUrl:'../../images/medal4.png',
				name:'霹雳娇娃'
			},
			{
				imgUrl:'../../images/medal4.png',
				name:'霹雳娇娃'
			},
		]
    },
    onLoad: function(res) {
		
    },
	openMedal:function(){
		this.setData({
			medalModal:true
		})
	},
	closeMedal:function(){
		this.setData({
			medalModal:false
		})
	}
})