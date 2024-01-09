/*
 * @Author: ChuandongHuang chuandong_huang@human-horizons.com
 * @Date: 2024-01-09 09:40:42
 * @LastEditors: ChuandongHuang chuandong_huang@human-horizons.com
 * @LastEditTime: 2024-01-09 13:27:03
 * @Description: 
 */
import Video from './components/Video'
import Map from './components/Map'
import './index.scss'
const Pilot = ()=>{
    return(
        <div className='view-container'>
            <Video />
            <Map />
        </div>
    )
}

export default Pilot