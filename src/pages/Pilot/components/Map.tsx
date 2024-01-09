/*
 * @Author: ChuandongHuang chuandong_huang@human-horizons.com
 * @Date: 2024-01-09 09:41:14
 * @LastEditors: ChuandongHuang chuandong_huang@human-horizons.com
 * @LastEditTime: 2024-01-09 13:34:45
 * @Description: 
 */
import { SettingOutlined } from '@ant-design/icons'
import {useHoverUI,setHoverUI} from '@/components/hover'
import { Card } from 'antd';
import '@/assets/style/global.scss'
import './map.scss'
import { useEffect, useRef } from 'react';
const Map = ()=>{
    const mapRef = useRef(null)
    useEffect(()=>{
        mapRef.current.height = document.getElementById('map-container').clientHeight - 32
        mapRef.current.width = document.getElementById('map-container').clientWidth - 32
    })
    return(
            <div id='map-container' className="map-container pd-m-lf over-hidden">
                <Card title='3D' extra={useHoverUI(<SettingOutlined className='cursor-p over-hidden' twoToneColor="#957ecf" />, setHoverUI())} style={{ width: '100%' }} bordered={false}>
                    <canvas ref={mapRef} width={1700} height={400}  />
                </Card>
            </div>
    )
}

export default Map