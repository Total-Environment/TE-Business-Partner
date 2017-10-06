$(function () {
    $('#bubblechart').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Temperature & Depth'
        },

        subtitle: {
            text: ''
        },

        xAxis: {
			min:0,
			max:10,
            gridLineWidth: 1,
            title: {
                text: 'Depth'
            },
            labels: {
                format: '{value}'
            },
            /* plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                
                zIndex: 3
            }] */
        },

        yAxis: {
			min:0,
			max:5,
            startOnTick: true,
            endOnTick: true,
            title: {
                text: 'Temperature'
            },
            labels: {
                format: '{value}'
            },
            maxPadding: 0.1,
           /*  plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 50,
                
                zIndex: 3
            }] */
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.leadname}</h3></th></tr>' +
                '<tr><th>Temperature:</th><td>{point.x}</td></tr>' +
                '<tr><th>Depth:</th><td>{point.y}</td></tr>' +
                '<tr><th>Duration:</th><td>{point.z}days</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },
        exporting: { enabled: false },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
credits:{enabled:false},
		legend:{enabled:false},
        series: [{
            data: [
                { x: 1, y: 2, z: 5, name: 'Ma', leadname: 'Manjunath' },
                { x: 2, y: 4, z: 1, name: 'Sr', leadname: 'Srikanth' },
				{ x: 6, y: 1, z: 2, name: 'As', leadname: 'Aswin' },
				{ x: 8, y: 3, z: 6, name: 'Ka', leadname: 'Karthick' },
				{ x: 9, y: 2, z: 6, name: 'Ku', leadname: 'Kumar' }
				
				
                
            ]
        }]

    });
	
	
	
	
	 $('#stackedchartsales').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Actual vs Target Sales '
        },
		
        xAxis: {
			 
            categories: ['AFHW', 'ATR', 'LTF', 'WoYM', 'VGG', 'PoaRR', 'TMD', 'SFTW', 'TMFT'],
			title:{
				text:'Product'
			}
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Value'
            }
			
        },
        exporting: { enabled: false },
		credits:{enabled:false},
		legend:{enabled:false},
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent',
				 dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || '#ffffff',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }	
            }
        },

        series: [{
            name: 'Total Sales',
            data: [90, 50, 40, 74, 23,12,41],
			color:'#e7e7e7'
			
        },  {
            name: 'Actual Sales',
            data: [{ y: 55, color: '#c94c28' }, { y: 64, color: '#a7a9ac' }, { y: 20, color: '#63b3de' }, { y: 40, color: '#00b1ca' }, { y: 10, color: '#435401' }, { y: 50, color: '#9b2827' }, { y: 38, color: '#92946b' }, { y: 18, color: '#4e291b' }, { y: 10, color: '#99ca3c' }]
        }]
    
    });
	
	 $('#stackedchartcoll').highcharts({
	     chart: {
	         type: 'column'
	     },
	     title: {
	         text: 'Actual vs Target Collection '
	     },
		
	     xAxis: {
			 
	         categories: ['AFHW', 'ATR', 'LTF', 'WoYM', 'VGG','PoaRR','TMD','SFTW','TMFT'],
			title:{
				text:'Projects'
			}
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Value'
            }
			
        },
        exporting: { enabled: false },
		credits:{enabled:false},
		legend:{enabled:false},
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent',
				 dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || '#ffffff',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }	
            }
        },

        series: [{
            name: 'Total Collection',
            data: [90, 50, 40, 74, 23,12,41,20,10],
			color:'#e7e7e7'
			
        },  {
            name: 'Actual Collection',
            data: [{ y: 55, color: '#c94c28' }, { y: 64, color: '#a7a9ac' }, { y: 20, color: '#63b3de' }, { y: 40, color: '#00b1ca' }, { y: 10, color: '#435401' }, { y: 50, color: '#9b2827' }, { y: 38, color: '#92946b' }, { y: 18, color: '#4e291b' }, { y: 10, color: '#99ca3c' }]
        }]
    
    });
	
	
	
	
		
      
});

	