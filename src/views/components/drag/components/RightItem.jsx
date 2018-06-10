import React, {Component} from 'react'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'
import '../index.less'

const SortableItem = SortableElement(({color}) => <li style={{backgroundColor:color}}>
 {color}
</li>)
const SortableList = SortableContainer(({items}) => {
  return (
    <ul className='shadow-radius right-item-ul'>
      {items.map((ele, index) => (<SortableItem
          color={ele.color}
          index={index}
          key={`item-${index}`}
                                  />))}
    </ul>
  )
})

class RightItems extends Component {

  state = {
    items: []
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.list !== this.props.list) {
      this.setState({items: nextProps.list})
    }
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    })
  }
  render() {
    return <SortableList
        axis='xy'
        items={this.state.items}
        onSortEnd={this.onSortEnd}
           />

  }
}

export default RightItems