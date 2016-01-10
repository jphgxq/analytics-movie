//影片实时数据的电影评论部分
//电影评论数的折线图
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
		        'echarts/chart/line', // 使用柱状图就加载bar模块，按需加载
		        'echarts/chart/map'
		    ],
		function (ec) {
		    // 基于准备好的dom，初始化echarts图表
		    var lineChart = ec.init(document.getElementById('comment-num')); 
		    
		    option = {
		    		title : {
	        	    	text: '电影评论数',
	        	        subtext: '纯属虚构'
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
		    	            data : ['周一','周二','周三','周四','周五','周六','周日']
		    	        }
		    	    ],
		    	    yAxis : [
		    	        {
		    	            type : 'value',
		    	            axisLabel : {
		    	                formatter: '{value} °C'
		    	            }
		    	        }
		    	    ],
		    	    series : [
		    	              {
		    	                  name:'最高气温',
		    	                  type:'line',
		    	                  data:[11, 11, 15, 13, 12, 13, 10],
		    	                  markPoint : {
		    	                      data : [
		    	                          {type : 'max', name: '最大值'},
		    	                          {type : 'min', name: '最小值'}
		    	                      ]
		    	                  },
		    	                  markLine : {
		    	                      data : [
		    	                          {type : 'average', name: '平均值'}
		    	                      ]
		    	                  }
		    	              },
		    	              {
		    	                  name:'最低气温',
		    	                  type:'line',
		    	                  data:[1, -2, 2, 5, 3, 2, 0],
		    	                  markPoint : {
		    	                      data : [
		    	                          {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
		    	                      ]
		    	                  },
		    	                  markLine : {
		    	                      data : [
		    	                          {type : 'average', name : '平均值'}
		    	                      ]
		    	                  }
		    	              }
		    	          ]
		    	}; 
		    // 为echarts对象加载数据 
		    lineChart.setOption(option); 
		    network_people();
		    	                    
		}
		
		);



});
//网络水军占比
function network_people() {
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
        var pieChart = ec.init(document.getElementById('network-people')); 
        
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
        	                  radius : ['50%', '60%'],
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
        
        comment_level();
        
        	                    
    }
);
    
}
//评价体系
function comment_level() {
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
	        'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
	        'echarts/chart/map'
	    ],
	function (ec) {
	    // 基于准备好的dom，初始化echarts图表
	    var lineChart = ec.init(document.getElementById('comment-level')); 
	    
	    option = {
	    		title : {
        	    	text: '地方商户内容发布及反馈日间分布情况一周末',
        	        subtext: '纯属虚构',
        	        x:'center'
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
	    	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
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
	    	            type:'bar',
	    	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
	    	            markPoint : {
	    	                data : [
	    	                    {type : 'max', name: '最大值'},
	    	                    {type : 'min', name: '最小值'}
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
	    	                    
	}
	
	);



}