import React,{Component} from 'react'
import { Table ,Checkbox  } from 'antd'
const CheckboxGroup = Checkbox.Group

const data= [
  {
    'name': '范杰',
    'email': 't.hee@zjok.bf',
    'address': '山西省 晋城市 阳城县',
    'date': '2006-08-30'
  },
  {
    'name': '段强',
    'email': 's.turg@oxbxcgofx.biz',
    'address': '江西省 景德镇市 昌江区',
    'date': '2015-05-15'
  },
  {
    'name': '姜超',
    'email': 't.uhlmwtv@hbbsngg.tr',
    'address': '内蒙古自治区 锡林郭勒盟 正镶白旗',
    'date': '1986-12-21'
  },
  {
    'name': '曾杰',
    'email': 'r.biitopmqg@qubxsk.中国',
    'address': '广西壮族自治区 贵港市 平南县',
    'date': '1991-12-10'
  },
  {
    'name': '陆芳',
    'email': 's.mjzxwuzb@sxbguagfpd.li',
    'address': '广东省 江门市 蓬江区',
    'date': '2002-12-08'
  }
]

class FixedTable extends Component {
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
        width: '20%'
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

  changeColumnsChecked(){
    let newData= []
    this.state.columns.forEach(ele=>{
      if(this.state.checked.indexOf(ele.dataIndex)>-1){
        newData.push(ele)
      }
    })
    this.setState({columnsChecked:newData})
  }

  onChange(checkedValues){
    // 最少选中一个
    this.setState({checked:checkedValues},()=>{
      this.changeColumnsChecked()
    })

  }


  render() {
    const options = [
      { label: 'name', value: 'name' },
      { label: 'date', value: 'date' },
      { label: 'email', value: 'email' },
      { label: 'address', value: 'address' }
    ]
    return (
      <div className='shadow-radius'>
          <div style={{paddingTop:20}}>
              <h2>
                  <span>
                    固定顺序列 : &nbsp;&nbsp;&nbsp;
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
              style={{minHeight:360}}
          />
      </div>
    )
  }
}

export default FixedTable