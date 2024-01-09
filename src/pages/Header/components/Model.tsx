/*
 * @Author: ChuandongHuang chuandong_huang@human-horizons.com
 * @Date: 2024-01-08 13:19:34
 * @LastEditors: ChuandongHuang chuandong_huang@human-horizons.com
 * @LastEditTime: 2024-01-08 14:33:29
 * @Description: 
 */
import { Select } from 'antd'
import { useState } from 'react'


export const Model = () => {
    const options = [
        {label:'高速',value:'pilot'},
        {label:'泊车',value:'parking'},
        {label:'AMP',value:'AMP'},
    ]
    const [defaultModel,setDefaultModel] = useState('pilot')
    const handleChange = (e)=>{
        setDefaultModel(e.target.value)
    }
    return (
        <Select
            bordered={false}
            defaultValue={defaultModel}
            style={{ width: 120 }}
            onChange={handleChange}
            options={options}
        />
    )
}