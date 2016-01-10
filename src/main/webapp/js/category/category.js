//影片实时数据中的票房趋势图
//历史票房趋势图
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
        var lineChart = ec.init(document.getElementById('trend-1')); 
        
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
    


});

//月票房趋势图
function trend_month() {
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
        var lineChart = ec.init(document.getElementById('trend-2')); 
        
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

//本周票房趋势图
function trend_week() {
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
      var lineChart = ec.init(document.getElementById('trend-3')); 
      
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

//热映票房趋势图
function trend_hot() {
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
      var lineChart = ec.init(document.getElementById('trend-4')); 
      
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


