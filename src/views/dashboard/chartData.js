const barChartData = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    top: 15,
    left: '2%',
    right: '2%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
      ],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      name: 'pageA',
      type: 'bar',
      stack: 'vistors',
      barWidth: '60%',
      data: [
        79,
        52,
        200,
        334,
        390,
        330,
        220
      ],
      animationDuration: 4000
    }, {
      name: 'pageB',
      type: 'bar',
      stack: 'vistors',
      barWidth: '60%',
      data: [
        80,
        52,
        200,
        334,
        390,
        330,
        220
      ],
      animationDuration: 4000
    }, {
      name: 'pageC',
      type: 'bar',
      stack: 'vistors',
      barWidth: '60%',
      data: [
        30,
        52,
        200,
        334,
        390,
        330,
        220
      ],
      animationDuration: 4000
    }
  ]
}

const raddarChartData = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  radar: {
    radius: '66%',
    center: [
      '50%', '42%'
    ],
    splitNumber: 8,
    splitArea: {
      areaStyle: {
        color: 'rgba(127,95,132,.3)',
        opacity: 1,
        shadowBlur: 45,
        shadowColor: 'rgba(0,0,0,.5)',
        shadowOffsetX: 0,
        shadowOffsetY: 15
      }
    },
    indicator: [
      {
        name: 'Sales',
        max: 10000
      }, {
        name: 'Administration',
        max: 20000
      }, {
        name: 'Information Techology',
        max: 20000
      }, {
        name: 'Customer Support',
        max: 20000
      }, {
        name: 'Development',
        max: 20000
      }, {
        name: 'Marketing',
        max: 20000
      }
    ]
  },
  legend: {
    left: 'center',
    bottom: '0',
    data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
  },
  series: [
    {
      type: 'radar',
      symbolSize: 0,
      areaStyle: {
        normal: {
          shadowBlur: 13,
          shadowColor: 'rgba(0,0,0,.2)',
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          opacity: 1
        }
      },
      data: [
        {
          value: [
            5000,
            7000,
            12000,
            11000,
            15000,
            14000
          ],
          name: 'Allocated Budget'
        }, {
          value: [
            4000,
            9000,
            15000,
            15000,
            13000,
            11000
          ],
          name: 'Expected Spending'
        }, {
          value: [
            5500,
            11000,
            12000,
            15000,
            12000,
            12000
          ],
          name: 'Actual Spending'
        }
      ],
      animationDuration: 3000
    }
  ]
}

const pieChartData = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    left: 'center',
    bottom: '0',
    data: ['Industries', 'Technology ', 'Forex', 'Gold', 'Forecasts']
  },
  calculable: true,
  series: [
    {
      name: 'WEEKLY WRITE ARTICLES',
      type: 'pie',
      roseType: 'radius',
      radius: [
        15, 95
      ],
      center: [
        '50%', '38%'
      ],
      data: [
        {
          value: 320,
          name: 'Industries'
        }, {
          value: 240,
          name: 'Technology'
        }, {
          value: 149,
          name: 'Forex'
        }, {
          value: 100,
          name: 'Gold'
        }, {
          value: 59,
          name: 'Forecasts'
        }
      ],
      animationEasing: 'cubicInOut',
      animationDuration: 2600
    }
  ]
}

const lineChartData = {
  NewVisits: {
    expectedData: [
      100,
      120,
      161,
      134,
      105,
      160,
      165
    ],
    actualData: [
      120,
      82,
      91,
      154,
      162,
      140,
      145
    ]
  },
  Messages: {
    expectedData: [
      200,
      192,
      120,
      144,
      160,
      130,
      140
    ],
    actualData: [
      180,
      160,
      151,
      106,
      145,
      150,
      130
    ]
  },
  Purchases: {
    expectedData: [
      80,
      100,
      121,
      104,
      105,
      90,
      100
    ],
    actualData: [
      120,
      90,
      100,
      138,
      142,
      130,
      130
    ]
  },
  Shoppings: {
    expectedData: [
      130,
      140,
      141,
      142,
      145,
      150,
      160
    ],
    actualData: [
      120,
      82,
      91,
      154,
      162,
      140,
      130
    ]
  }
}



export {barChartData,raddarChartData,pieChartData,lineChartData}