/*
 * @Author: ChuandongHuang chuandong_huang@human-horizons.com
 * @Date: 2024-01-08 13:20:02
 * @LastEditors: ChuandongHuang chuandong_huang@human-horizons.com
 * @LastEditTime: 2024-01-09 09:37:04
 * @Description: 
 */
import React from "react"
import { CollectIcon, RawIcon, VideoIcon, MapIcon, ChartsIcon } from "@/icons/Icon"
import '@/assets/style/global.scss'
import './index.scss'
import { useState } from "react"
type IconList = {
    id:number,
    label: string;
    active: boolean;
    element: JSX.Element;
}
const Left = () => {
    const [activeId, setActiveId] = useState(null);
    const [iconList,setIconList] = useState<Array<IconList>>([
        { id:0,label: 'Collect', active: false, element: <CollectIcon /> },
        { id:1,label: 'Charts', active: false, element: <ChartsIcon /> },
        { id:2,label: 'Map', active: false, element: <MapIcon /> },
        { id:3,label: 'Video', active: false, element: <VideoIcon /> },
        { id:4,label: 'Raw', active: false, element: <RawIcon /> },
    ])
    const changeActive = (id:number)=>{
        setIconList((prevIconList) => {
            return prevIconList.map((item) => {
                if (item.id === id) {
                    const newColor = item.active ? '#957ECF' : '#747474';
                    const updatedElement = React.cloneElement(item.element, { style: { color: newColor } });
                    return { ...item, active: !item.active, element: updatedElement };
                }
                return item;
            });
        });
         setActiveId((prevActiveId) => (prevActiveId === id ? null : id));
    }
    return (
        <div className="left-container pd-m-tb">
            <img width="30px" height="30px" src="/images/black.png" />
            <ul>
                {iconList.map((item,index) => (
                    <li key={index} className="cursor-p main-font" onClick={()=>{changeActive(item.id)}}>
                        {item.element}
                        <span style={{ color:!item.active ? '#957ECF' : '#747474' }}>{item.label}</span>
                    </li>
                ))}
            </ul>
            <div>
                Version
            </div>
        </div>

    )
}

export default Left