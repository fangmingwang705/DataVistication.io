$(function () {
    echart_1();
    echart_2();
    echart_3();
    echart_4();
    echart_5();
    echart_6();
    echart_7();
/**
 * 近五年人均收入
 */
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var chartDom = document.getElementById('chart_1');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
        title: {
            text: '近五年人均收入',
            subtext: '国家统计局',
            left: 'center',
            textStyle:{
                color:'#fff'
            }
        },
        //提示框组件
        tooltip: {
            trigger: 'item'//触发类型
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle:{
                color:'#fff'
            }
        },
        series: [
            {
                name: '国民人均可支配收入(元)',
                type: 'pie',
                radius: '50%',
                data: [
                    {value: 23821, name: '2016年'},
                    {value: 25974, name: '2017年'},
                    {value: 28228, name: '2018年'},
                    {value: 30733, name: '2019年'},
                    {value: 32189, name: '2020年'}
                ],
                emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    option && myChart.setOption(option);

        
    }

    function echart_2() {
        var app = {};
        var chartDom = document.getElementById('chart_2');
        var myChart = echarts.init(chartDom);
    var option;

    option = {
        title:{
            text:'近五年全国总GDP（万亿）',
            left:'5%',
            textStyle:{
                color:'#ffffff'
            }
        },
        color:'#3fa7dc',
        tooltip: {
            trigger: "axis",
            axisPointer: {
            type: "shadow"
            }
        },
        xAxis: {
            type: 'category',
            data: ['2016', '2017', '2018', '2019', '2020'],
            axisLine: {
                    lineStyle: {
                    color: "#fff"
                    }
                }
            },
            yAxis: {
                type: 'value',
            axisLine: {
            lineStyle: {
            color: "#fff"
            }
        }
        },
        series: [{
            name:'全国总GDP',
            data: [120, 200, 150, 80, 70],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(0, 255, 247, 1)'
            }
        }]
        };

    option && myChart.setOption(option);
}

    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        var option = {
            title:{
                text:'全国省份收入（亿元）',
                left:'10%',
                textStyle:{
                    color:'#ffffff'
                }
            },
            tooltip: {
//                    show: false //不显示提示标签
                formatter: '{b}:{c}',//提示标签格式
                backgroundColor:"#4695d8",//提示标签背景颜色
                textStyle:{color:"#fff"} //提示标签字体颜色
            },
            series: [{
                type: 'map',
                mapType: 'china',
                /**实现地图的比例缩放 */
                zoom: 1, //当前视角的缩放比例
                roam: true, //是否开启平游或缩放
                scaleLimit: { //滚轮缩放的极限控制
                min: 1,
                max: 2
                },
                label: {
                    normal: {
                        show: true,//显示省份标签
                        textStyle:{color:"#c71585"}//省份标签字体颜色
                    },    
                    emphasis: {//对应的鼠标悬浮效果
                        show: true,
                        textStyle:{color:"#118ae7"}
                    } 
                },
                itemStyle: {
                    normal: {
                        borderWidth: 1,//区域边框宽度
                        borderColor: '#009fe8',//区域边框颜色
                        areaColor:"#0c2134",//区域颜色
                    },
                    emphasis: {
                        borderWidth: .5,
                        borderColor: 'rgba(128, 217, 248, 1)',
                        areaColor:"#118ae7",
                    }
                },
                data:[
                    {name:'广东',value:110760},
                    {name:'江苏', value:102719 },
                    {name:'山东', value:73129 },
                    {name:'浙江', value: 64613},
                    {name:'河南', value: 54997},
                    {name:'四川',value:48598},
                    {name:'福建', value:43903 },
                    {name:'湖北', value:43443 },
                    {name:'湖南', value: 41781},
                    {name:'上海', value: 38700},
                    {name:'安徽',value:38680},
                    {name:'河北', value:36206 },
                    {name:'北京', value:36106 },
                    {name:'陕西', value: 26181},
                    {name:'江西', value: 25691},
                    {name:'辽宁',value:25115},
                    {name:'重庆', value:25002 },
                    {name:'云南', value:24500 },
                    {name:'广西', value: 22156},
                    {name:'贵州', value: 17826},
                    {name:'山西', value: 17651},
                    {name:'内蒙古',value:17360},
                    {name:'天津', value:14083 },
                    {name:'新疆', value:13797 },
                    {name:'黑龙江', value: 13698},
                    {name:'吉林', value: 12311},
                    {name:'甘肃', value:9016 },
                    {name:'海南', value:5532 },
                    {name:'宁夏', value: 3920},
                    {name:'青海', value: 3005},
                    {name:'西藏', value: 1902}
                ]
            }],
        };
        
        myChart.setOption(option);
        myChart.on('mouseover', function (params) {
            var dataIndex = params.dataIndex;
            console.log(params);
        });
    }
/**
 * 国民总收入
 */
    function echart_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));
        var data = [34, 60, 69, 71, 78];
        var titlename = ['2016年', '2017年', '2018年', '2019年', '2020年'];
        var valdata = [406, 505, 664, 702, 793];
        var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
        option = {
            title: {
                text: '国民总收入(万元)',
                x: 'center',
                textStyle: {
                    color: '#FFF'
                },
                left: '6%',
                top: '10%'
            },
            //图标位置
            grid: {
                top: '20%',
                left: '32%'
            },
            xAxis: {
                show: false
            },
            yAxis: [{
                show: true,
                data: titlename,
                inverse: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#fff',
                    formatter: (value, index) => {
                        return [

                            `{lg|${index+1}}  ` + '{title|' + value + '} '
                        ].join('\n')
                    },
                    rich: {
                        lg: {
                            backgroundColor: '#339911',
                            color: '#fff',
                            borderRadius: 15,
                            // padding: 5,
                            align: 'center',
                            width: 15,
                            height: 15
                        },
                    }
                },


            }, {
                show: true,
                inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: '#fff',
                    },
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },

            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: data,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 20,
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}%'
                    }
                },
            }, {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [100, 100, 100, 100, 100],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: 'none',
                        borderColor: '#00c1de',
                        borderWidth: 3,
                        barBorderRadius: 15,
                    }
                }
            }, ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        // window.addEventListener("resize", function () {
        //     myChart.resize();
        // });
    }
    /**
     * 三大产业增加值
     */
    function echart_5(){
        var chartDom = document.getElementById('chart_5');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: '行业GDP(万元)',
                textStyle:{
                    color:'#fff'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2016', '2017', '2018', '2019', '2020' ],
                axisLine:{
                    lineStyle:{
                        color:'#fff'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'#fff'
                    }
                }
            },
            series: [
                {
                    name: '教育',
                    type: 'line',
                    stack: '总量',
                    data: [461, 132, 101, 134, 90]
                },
                {
                    name: '科技',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290]
                },
                {
                    name: '卫生',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190]
                },
                {
                    name: '文化',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390]
                },
                {
                    name: '体育',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290]
                }
            ]
        };

        option && myChart.setOption(option);
	}
    function echart_6(){
        var myChart = echarts.init(document.getElementById('chart_6'));
        var option;
        option = {
            angleAxis: {
                type: 'category',
                data: ['2014', '2015', '2016', '2017', '2018','2019','2020'],
                axisLine:{
                    lineStyle:{
                        color:'#fff',
                        width:1,//这里是为了突出显示加上的
                    }
                } 
            },
            radiusAxis: {
            },
            polar: {
            },
            series: [{
                type: 'bar',
                data: [1, 2, 3, 4, 3, 5, 1],
                coordinateSystem: 'polar',
                name: '第一产业',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            }, {
                type: 'bar',
                data: [2, 4, 6, 1, 3, 2, 1],
                coordinateSystem: 'polar',
                name: '第二产业',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            }, {
                type: 'bar',
                data: [1, 2, 3, 4, 1, 2, 5],
                coordinateSystem: 'polar',
                name: '第三产业',
                stack: 'a',
                emphasis: {
                    focus: 'series'
                }
            }],
            legend: {
                show: true,
                data: ['第一产业', '第二产业', '第三产业'],
                color:"#ffffff",
                textStyle:{
                    icon:"pin",
                    color:"#ffffff"
                }
            }
        };
        myChart.setOption(option);
    }

    function echart_7(){
        var chartDom = document.getElementById('chart_7');
        var myChart = echarts.init(chartDom);
        var option;
        
        option = {
            title:{
                text:'全国居民消费水平（元）',
                left:'5%',
                textStyle:{
                    color:'#fff'
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            
                    type: 'shadow'       
                }
            },
            
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color:'#fff'
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: ['2016', '2017', '2018', '2019', '2020'],
                axisLine:{
                    lineStyle:{
                        color:'#fff'
                    }
                }
            },
            series: [
                {
                    name: '居民消费水平',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [18976, 20938, 23131, 25427, 27702]
                },
                {
                    name: '城镇居民消费水平',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [26795, 28999, 31354, 33671, 36218]
                },
                {
                    name: '农村居民消费水平',
                    type: 'bar',
                    stack: 'total',
                    label: {
                        show: true
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [9249, 10372, 11805, 13538, 14878]
                }
            ]
        };
        
        option && myChart.setOption(option);

    }
});