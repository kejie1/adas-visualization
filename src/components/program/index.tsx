/*
 * @Author: ChuandongHuang chuandong_huang@human-horizons.com
 * @Date: 2024-01-09 13:40:40
 * @LastEditors: ChuandongHuang chuandong_huang@human-horizons.com
 * @LastEditTime: 2024-01-09 14:19:54
 * @Description: 
 */
import { useEffect, useRef } from "react"

const Program = ()=>{
    const programRef = useRef(null)
    useEffect(()=>{
        const width = Number(document.getElementById('program')?.clientWidth)
        programRef.current.width = width
        programRef.current.height = 100
        const ctx = programRef.current.getContext('2d')
        const arr = [] // 每帧速度
        for (let index = 0; index < width; index++) {
            arr[index] = Math.random() * 100
        }
        ctx.lineWidth = 2
        ctx.strokeStyle = '#957ECF'
        arr.forEach((item, i) => {
            i == 0 ? ctx.moveTo(width * i, item) : ctx.lineTo(width * i, item)
        })
        ctx.stroke()
        ctx.translate(0, 100) // 转换坐标原点
        })
    return(
        <div id="program" className="program-container">
            <canvas ref={programRef}></canvas>
        </div>
    )
}
export default Program