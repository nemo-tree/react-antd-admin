import React,{Component} from 'react'
import { Table ,Checkbox  } from 'antd'
const CheckboxGroup = Checkbox.Group

const data= [
  {
    'name': '龙明',
    'email': 'x.lpvc@fkyejfw.mt',
    'address': '江苏省 南通市 港闸区',
    'date': '1980-02-29'
  },
  {
    'name': '傅勇',
    'email': 'c.kymaby@hhtahqoguz.aw',
    'address': '天津 天津市 河东区',
    'date': '1984-09-05'
  },
  {
    'name': '杜艳',
    'email': 't.sdolw@abhbuict.ph',
    'address': '江西省 赣州市 上犹县',
    'date': '2005-01-20'
  },
  {
    'name': '姚艳',
    'email': 'b.wzndiez@bgzi.cn',
    'address': '江西省 赣州市 信丰县',
    'date': '2013-03-10'
  },
  {
    'name': '杜丽',
    'email': 'x.obqgkmwp@tsyq.中国',
    'address': '香港特别行政区 九龙 深水埗区',
    'date': '1970-03-04'
  }
]


class SortedTable extends Component {
  state = {
    data,
    columns :[
      {
        title: 'Name',
        dataIndex: 'name',
        width: '20%'
      }, {
        title: 'Date',
        dataIndex: 'date',
        width: '20%',
      }, {
        title: 'Email',
        dataIndex: 'email'
      },{
        title:'Address',
        dataIndex: 'address'
      }
    ],
    columnsChecked:[],
    checked:['name','date','email','address']
  }
  componentWillMount(){
    this.changeColumnsChecked()
  }


  onChange(checkedValues){
    // 最少选中一个
    this.setState({checked:checkedValues},()=>{
      this.changeColumnsChecked()
    })

  }

  changeColumnsChecked(){
    let newData= []
    this.state.checked.forEach(ele=>{
      this.state.columns.forEach(ele2=>{
        if(ele2.dataIndex===ele){
          newData.push(ele2)
        }
      })
    })
    this.setState({columnsChecked:newData})
  }

  render() {
    const options = [
      { label: 'name', value: 'name' },
      { label: 'date', value: 'date' },
      { label: 'email', value: 'email' },
      { label: 'address', value: 'address' }
    ]
    return (
      <div
          className='shadow-radius'
          style={{marginTop:20}}
      >
          <div style={{paddingTop:20}}>
              <h2>
                  <span>
                    自定义顺序列 : &nbsp;&nbsp;&nbsp;
                  </span>
                <CheckboxGroup
                    defaultValue={this.state.checked}
                    onChange={this.onChange.bind(this)}
                    options={options}
                />
              </h2>
            <br/>
          </div>
          <Table
              bordered
              columns={this.state.columnsChecked}
              dataSource={this.state.data}
              pagination={false}
              rowKey={row => row.date}
          />
      </div>
    )
  }
}

export default SortedTable