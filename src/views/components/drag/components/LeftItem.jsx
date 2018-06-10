import React, {Component} from 'react'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'
import '../index.less'

class LeftItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
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

  shouldCancelStart = e => {
    // 如果是a标签，终止拖动，并关闭当前行
    if (e.target.tagName.toLowerCase() === 'a') {

      const index = e
        .target
        .getAttribute('data-index')

      const result = this
        .state
        .items
        .filter((ele, i) => i != index)
      this.setState({items: result})

      return true
    } else {
      return false
    }

  }

  render() {
    const SortableItem = SortableElement(({text, color, sortIndex}) => {
      return (
        <li className='drap-list'>
          <span>{text}</span>
          <a
              className='close'
              data-index={sortIndex}
              style={{
            background: color
          }}
          >关闭</a>
        </li>
      )
    })
    const SortableList = SortableContainer(({items}) => {
      return (
        <ul className='shadow-radius left-item-ul'>
          {items.map((ele, index) => (<SortableItem
              color={ele.color}
              index={index}
              key={`item-${index}`}
              sortIndex={index}
              text={ele.name}
                                      />))}
        </ul>
      )
    })

    return <SortableList
        items={this.state.items}
        onSortEnd={this.onSortEnd}
        shouldCancelStart={this.shouldCancelStart}
           />

  }
}

export default LeftItem