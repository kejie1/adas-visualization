/*
 * @Author: ChuandongHuang chuandong_huang@human-horizons.com
 * @Date: 2024-01-08 13:18:49
 * @LastEditors: ChuandongHuang chuandong_huang@human-horizons.com
 * @LastEditTime: 2024-01-09 09:31:42
 * @Description: 
 */
import {Model} from './components/Model'
import {DataSource} from './components/DataSource'
import './index.scss'
const Top = ()=>{
    return(
        <div className='top-container'>
            <Model />
            <DataSource />
            <div></div>
        </div>
    )
}

export default Top