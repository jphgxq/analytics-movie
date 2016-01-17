//主页全国排片统计饼状图
$(function () {
	$.ajax({
		type: "POST",
		url: "getRealTimeTicket.action",
		dataype: "json",
		success: function(data){
			$('#realtimeticketstable').empty();
			var html = '';
			$.each(data.tickets, function(index, ticket){
				index+=1;
				if(index<=10){
					html += '<tr><td>'+index+'</td><td>'+ticket['name']+'</td><td>'+ticket['real_time_tickets']+'</td><td>'+ticket['ticket_percent']+'</td><td>'+ticket['sum_tickets']+'</td><td>'+ticket['display_percent']+'</td><td>'+ticket['days']+'</td><td style="color: red">NEW</td></tr>';
				}else{
					return false;
				}
			});
			$('#realtimeticketstable').html(html);
		}
	});
	
	var myDate = new Date();
	$('#landingpage-title').html('KeyData票房数据      ' + myDate.toLocaleString());
	
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
        var pieChart = ec.init(document.getElementById('movie-statistic')); 
        
        option = {
//        	    title : {
//        	        text: '2016-1-5全国排片统计',
//        	        //subtext: '纯属虚构'
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
        	            			funnelAlign: 'center',
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
        	            	  name:'排片数据',
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