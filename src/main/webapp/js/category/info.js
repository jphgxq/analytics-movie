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
        	        text: '2016-01-06全国排片统计',
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
        	        data: ['神探夏洛克','唐人街探案','老炮儿','寻龙诀','恶棍天使','一念天堂','小门神','一切都好','诡娃娃','分手再说我爱你']
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
									{value:946, name:'老炮儿'},
									{value:1406, name:'唐人街探案'},
									{value:1764, name:'神探夏洛克'},
									{value:817, name:'寻龙诀'},
									{value:141, name:'恶棍天使'},
									{value:128, name:'一念天堂'},
									{value:92, name:'小门神'},
									{value:32, name:'一切都好'},
									{value:22, name:'诡娃娃'},
									{value:12, name:'分手再说我爱你'},
        	                  ]
        	              }
        	          ]
        	};            	                   
        // 为echarts对象加载数据 
        pieChart.setOption(option);       
        	                    
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
