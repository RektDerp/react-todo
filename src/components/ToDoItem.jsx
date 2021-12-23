import React from 'react';
import { Button, Checkbox } from 'antd';
import { DeleteOutlined } from '@ant-design/icons/lib/icons';
import { useState } from 'react/cjs/react.development';


export const ToDoItem = (props) => {
  const { item, onCheck, onRemove } = props;
  const [className, setClassName] = useState("");
  const onRemoveItem = (e) => {
    e.preventDefault();

    if (onRemove) {
      onRemove(item.id);
    }
  }

  const onCheckItem = () => {
    if (onCheck) {
      onCheck(item.id);
      if(className === ""){
        setClassName("checked");
      }
      else{
        setClassName("");
      }
    }
  }

  return (
    <><li className="todo-item" key={item.id}>
      <Checkbox className={className}
        checked={item.checked}
        onChange={onCheckItem}
      >{item.title}</Checkbox>
      <Button onClick={onRemoveItem} style={{ background: "#ff181d"}}><DeleteOutlined/></Button>
    </li><p class="desc">{item.description}</p></>
  )
}