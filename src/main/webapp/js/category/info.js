//实时排片详情饼状图
$(function () {
	  // 路径配置
    require.config({
        paths: {
            echarts: 'echarts/build/dist'
        }
    });
    
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
        ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        var pieChart = ec.init(document.getElementById('info-pie')); 
        
        option = {
        	    title : {
        	        text: '某站点用户访问来源',
        	        subtext: '纯属虚构',
        	        x: 'center'
        	    },
        	    tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/> {b} : {c} ({d} %)"
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x: 'left',
        	        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        	    },
        	    toolbox: {
        	        show : true,
        	        feature : {
        	            mark : {show: true},
        	            dataView : {show: true, readOnly: false},
        	            magicType : {
        	            	show: true, 
        	            	type: ['pie', 'funnel'],
        	            	option: {
        	            		funnel: {
        	            			x: '25%',
        	            			width: '50%',
        	            			funnelAlign: 'left',
        	            			max: '1548'
        	            		}
        	            	}
        	            },
        	            restore : {show: true},
        	            saveAsImage : {show: true}
        	        }
        	    },
        	    calculable : true,
        	    series : [
        	              {
        	                  name:'访问来源',
        	                  type:'pie',
        	                  radius : ['50%', '70%'],
        	                  data:[
        	                      {value:335, name:'直接访问'},
        	                      {value:310, name:'邮件营销'},
        	                      {value:234, name:'联盟广告'},
        	                      {value:135, name:'视频广告'},
        	                      {value:1548, name:'搜索引擎'}
        	                  ]
        	              }
        	          ]
        	};            	                   
        // 为echarts对象加载数据 
        pieChart.setOption(option); 
        
        var mapChart = ec.init(document.getElementById('map-container')); 
        
        option = {
        	    title : {
        	        text: 'iphone销量',
        	        subtext: '纯属虚构',
        	        x:'center'
        	    },
        	    tooltip : {
        	        trigger: 'item'
        	    },
        	    legend: {
        	        orient: 'vertical',
        	        x:'left',
        	        data:['iphone3','iphone4','iphone5']
        	    },
        	    dataRange: {
        	        min: 0,
        	        max: 2500,
        	        x: 'left',
        	        y: 'bottom',
        	        text:['高','低'],           // 文本，默认为数值文本
        	        calculable : true
        	    },
        	    toolbox: {
        	        show: true,
        	        orient : 'vertical',
        	        x: 'right',
        	        y: 'center',
        	        feature : {
        	            mark : {show: true},
        	            dataView : {show: true, readOnly: false},
        	            restore : {show: true},
        	            saveAsImage : {show: true}
        	        }
        	    },
        	    roamController: {
        	        show: true,
        	        x: 'right',
        	        mapTypeControl: {
        	            'china': true
        	        }
        	    },
        	    series : [
        	        {
        	            name: 'iphone3',
        	            type: 'map',
        	            mapType: 'china',
        	            roam: false,
        	            itemStyle:{
        	                normal:{label:{show:true}},
        	                emphasis:{label:{show:true}}
        	            },
        	            data:[
        	                {name: '北京',value: Math.round(Math.random()*1000)},
        	                {name: '天津',value: Math.round(Math.random()*1000)},
        	                {name: '上海',value: Math.round(Math.random()*1000)},
        	                {name: '重庆',value: Math.round(Math.random()*1000)},
        	                {name: '河北',value: Math.round(Math.random()*1000)},
        	                {name: '河南',value: Math.round(Math.random()*1000)},
        	                {name: '云南',value: Math.round(Math.random()*1000)},
        	                {name: '辽宁',value: Math.round(Math.random()*1000)},
        	                {name: '黑龙江',value: Math.round(Math.random()*1000)},
        	                {name: '湖南',value: Math.round(Math.random()*1000)},
        	                {name: '安徽',value: Math.round(Math.random()*1000)},
        	                {name: '山东',value: Math.round(Math.random()*1000)},
        	                {name: '新疆',value: Math.round(Math.random()*1000)},
        	                {name: '江苏',value: Math.round(Math.random()*1000)},
        	                {name: '浙江',value: Math.round(Math.random()*1000)},
        	                {name: '江西',value: Math.round(Math.random()*1000)},
        	                {name: '湖北',value: Math.round(Math.random()*1000)},
        	                {name: '广西',value: Math.round(Math.random()*1000)},
        	                {name: '甘肃',value: Math.round(Math.random()*1000)},
        	                {name: '山西',value: Math.round(Math.random()*1000)},
        	                {name: '内蒙古',value: Math.round(Math.random()*1000)},
        	                {name: '陕西',value: Math.round(Math.random()*1000)},
        	                {name: '吉林',value: Math.round(Math.random()*1000)},
        	                {name: '福建',value: Math.round(Math.random()*1000)},
        	                {name: '贵州',value: Math.round(Math.random()*1000)},
        	                {name: '广东',value: Math.round(Math.random()*1000)},
        	                {name: '青海',value: Math.round(Math.random()*1000)},
        	                {name: '西藏',value: Math.round(Math.random()*1000)},
        	                {name: '四川',value: Math.round(Math.random()*1000)},
        	                {name: '宁夏',value: Math.round(Math.random()*1000)},
        	                {name: '海南',value: Math.round(Math.random()*1000)},
        	                {name: '台湾',value: Math.round(Math.random()*1000)},
        	                {name: '香港',value: Math.round(Math.random()*1000)},
        	                {name: '澳门',value: Math.round(Math.random()*1000)}
        	            ]
        	        },
        	        {
        	            name: 'iphone4',
        	            type: 'map',
        	            mapType: 'china',
        	            itemStyle:{
        	                normal:{label:{show:true}},
        	                emphasis:{label:{show:true}}
        	            },
        	            data:[
        	                {name: '北京',value: Math.round(Math.random()*1000)},
        	                {name: '天津',value: Math.round(Math.random()*1000)},
        	                {name: '上海',value: Math.round(Math.random()*1000)},
        	                {name: '重庆',value: Math.round(Math.random()*1000)},
        	                {name: '河北',value: Math.round(Math.random()*1000)},
        	                {name: '安徽',value: Math.round(Math.random()*1000)},
        	                {name: '新疆',value: Math.round(Math.random()*1000)},
        	                {name: '浙江',value: Math.round(Math.random()*1000)},
        	                {name: '江西',value: Math.round(Math.random()*1000)},
        	                {name: '山西',value: Math.round(Math.random()*1000)},
        	                {name: '内蒙古',value: Math.round(Math.random()*1000)},
        	                {name: '吉林',value: Math.round(Math.random()*1000)},
        	                {name: '福建',value: Math.round(Math.random()*1000)},
        	                {name: '广东',value: Math.round(Math.random()*1000)},
        	                {name: '西藏',value: Math.round(Math.random()*1000)},
        	                {name: '四川',value: Math.round(Math.random()*1000)},
        	                {name: '宁夏',value: Math.round(Math.random()*1000)},
        	                {name: '香港',value: Math.round(Math.random()*1000)},
        	                {name: '澳门',value: Math.round(Math.random()*1000)}
        	            ]
        	        },
        	        {
        	            name: 'iphone5',
        	            type: 'map',
        	            mapType: 'china',
        	            itemStyle:{
        	                normal:{label:{show:true}},
        	                emphasis:{label:{show:true}}
        	            },
        	            data:[
        	                {name: '北京',value: Math.round(Math.random()*1000)},
        	                {name: '天津',value: Math.round(Math.random()*1000)},
        	                {name: '上海',value: Math.round(Math.random()*1000)},
        	                {name: '广东',value: Math.round(Math.random()*1000)},
        	                {name: '台湾',value: Math.round(Math.random()*1000)},
        	                {name: '香港',value: Math.round(Math.random()*1000)},
        	                {name: '澳门',value: Math.round(Math.random()*1000)}
        	            ]
        	        }
        	    ]
        	};
        // 为echarts对象加载数据 
        mapChart.setOption(option); 
        
        	                    
    }
);
    
});
//排片趋势折线图
function trend_analysis() {
	  // 路径配置
	  require.config({
	      paths: {
	          echarts: 'echarts/build/dist'
	      }
	  });
	  
	  // 使用
	  require(
	      [
	          'echarts',
	          'echarts/chart/line', // 使用柱状图就加载bar模块，按需加载
	          'echarts/chart/map'
	      ],
	  function (ec) {
	      // 基于准备好的dom，初始化echarts图表
	      var lineChart = ec.init(document.getElementById('info-line')); 
	      
	      option = {
	      	    title : {
	      	        text: '某地区',
	      	        //subtext: '纯属虚构'
	      	    },
	      	    tooltip : {
	      	        trigger: 'axis'
	      	    },
	      	    toolbox: {
	      	        show : true,
	      	        feature : {
	      	            mark : {show: true},
	      	            dataView : {show: true, readOnly: false},
	      	            magicType : {show: true, type: ['line', 'bar']},
	      	            restore : {show: true},
	      	            saveAsImage : {show: true}
	      	        }
	      	    },
	      	    calculable : true,
	      	    xAxis : [
	      	        {
	      	            type : 'category',
	      	            boundaryGap : false,
	      	            data : ['2015年12月31日','2015年1月1日','2015年1月2日','2015年1月3日','2015年1月4日','2015年1月5日','2015年1月6日']
	      	        }
	      	    ],
	      	    yAxis : [
	      	        {
	      	            type : 'value',
	      	            axisLabel : {
	      	                formatter: '{value}'
	      	            }
	      	        }
	      	    ],
	      	    series : [
	      	        {
	      	            name:'票房量',
	      	            type:'line',
	      	            data:[11, 11, 15, 13, 12, 13, 10],
	      	            markPoint : {
	      	                data : [
	      	                    {type : 'max', name: '最大值'}
	      	                ]
	      	            },
	      	            markLine : {
	      	                data : [
	      	                    {type : 'average', name: '平均值'}
	      	                ]
	      	            }
	      	        }
	      	    ]
	      	}; 
	      // 为echarts对象加载数据 
	      lineChart.setOption(option); 
	      
	      var mapChart = ec.init(document.getElementById('map-container')); 
	      
	      // 为echarts对象加载数据 
	      mapChart.setOption(option); 
	      
	      	                    
	  }

	  );

	}
