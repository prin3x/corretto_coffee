import React from 'react';
import {Select} from 'antd';

const ItemQuantity = ({countInStock, onChangeOption}) => {
  const {Option} = Select;
  return (
    <div>
      <Select
        defaultValue={1}
        style={{width: 120}}
        onChange={value => onChangeOption(value)}
      >
        {[...Array(countInStock).keys()].map((option, ind) => (
          <Option key={ind} value={+ind + 1}>
            {option + 1}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default ItemQuantity;
