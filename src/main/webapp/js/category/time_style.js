//影片档期与类型饼状图
function time_pie() {
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
        var pieChart = ec.init(document.getElementById('time-style')); 
        
        option = {
//        	    title : {
//        	        text: '某站点用户访问来源',
//        	        subtext: '纯属虚构',
//        	        x: 'center'
//        	    },
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
        	                  radius : ['50%', '60%'],
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
									{value:12, name:'分手再说我爱你'}
        	                  ]
        	              }
        	          ]
        	};            	                   
        // 为echarts对象加载数据 
        pieChart.setOption(option); 
        
        time_line1();
        
        	                    
    }
);
    
}

function time_line1() {
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
		    var lineChart = ec.init(document.getElementById('time-line1')); 
		    
		    option = {
		    	    title : {
		    	        text: '2015年12月31日-1月6日一周票房趋势',
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
		    time_line2();
		    	                    
		}
		
		);



}

function time_line2() {
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
		    var lineChart = ec.init(document.getElementById('time-line2')); 
		    
		    option = {
		    	    title : {
		    	        text: '2015年12月31日-1月6日一周票房趋势',
		    	        //subtext: '纯属虚构'
		    	    },
		    	    tooltip : {
		    	        trigger: 'axis',
		    	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		    	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		    	        },
		    	        formatter: function (params){
		    	            return params[0].name + '<br/>'
		    	                   + params[0].seriesName + ' : ' + params[0].value + '<br/>'
		    	                   + params[1].seriesName + ' : ' + (params[1].value + params[0].value);
		    	        }
		    	    },
		    	    legend: {
		    	        selectedMode:false,
		    	        data:['Acutal', 'Forecast']
		    	    },
		    	    toolbox: {
		    	        show : true,
		    	        feature : {
		    	            mark : {show: true},
		    	            dataView : {show: true, readOnly: false},
		    	            restore : {show: true},
		    	            saveAsImage : {show: true}
		    	        }
		    	    },
		    	    calculable : true,
		    	    xAxis : [
		    	        {
		    	            type : 'category',
		    	            data : ['Cosco','CMA','APL','OOCL','Wanhai','Zim']
		    	        }
		    	    ],
		    	    yAxis : [
		    	        {
		    	            type : 'value',
		    	            boundaryGap: [0, 0.1]
		    	        }
		    	    ],
		    	    series : [
		    	              {
		    	                  name:'Acutal',
		    	                  type:'bar',
		    	                  stack: 'sum',
		    	                  barCategoryGap: '50%',
		    	                  itemStyle: {
		    	                      normal: {
		    	                          color: 'tomato',
		    	                          barBorderColor: 'tomato',
		    	                          barBorderWidth: 6,
		    	                          barBorderRadius:0,
		    	                          label : {
		    	                              show: true, position: 'insideTop'
		    	                          }
		    	                      }
		    	                  },
		    	                  data:[260, 200, 220, 120, 100, 80]
		    	              },
		    	              {
		    	                  name:'Forecast',
		    	                  type:'bar',
		    	                  stack: 'sum',
		    	                  itemStyle: {
		    	                      normal: {
		    	                          color: '#fff',
		    	                          barBorderColor: 'tomato',
		    	                          barBorderWidth: 6,
		    	                          barBorderRadius:0,
		    	                          label : {
		    	                              show: true, 
		    	                              position: 'top',
		    	                              formatter: function (params) {
		    	                                  for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
		    	                                      if (option.xAxis[0].data[i] == params.name) {
		    	                                          return option.series[0].data[i] + params.value;
		    	                                      }
		    	                                  }
		    	                              },
		    	                              textStyle: {
		    	                                  color: 'tomato'
		    	                              }
		    	                          }
		    	                      }
		    	                  },
		    	                  data:[40, 80, 50, 80,80, 70]
		    	              }
		    	          ]
		    	}; 
		    // 为echarts对象加载数据 
		    lineChart.setOption(option); 
		    	                    
		}
		
		);



}

