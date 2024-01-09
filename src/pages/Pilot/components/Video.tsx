
import { useEffect, useState } from 'react'
import { Card } from 'antd';
import { SettingOutlined } from '@ant-design/icons'
import {useHoverUI,setHoverUI} from '@/components/hover'
import '@/assets/style/global.scss'
import './video.scss'

const Video = () => {
    const [topicInfo, setTopicInfo] = useState([
        { label: 'topicName', expand: [{ label: 'xxx', value: 'xxx' }], canvasId: 'video0', ctx: null },
        { label: 'topicName', expand: [{ label: 'xxx', value: 'xxx' }], canvasId: 'video1', ctx: null },
        { label: 'topicName', expand: [{ label: 'xxx', value: 'xxx' }], canvasId: 'video2', ctx: null },
    ])
    useEffect(() => {
        setTopicInfo(
            topicInfo.map((item, index) => {
                const canvas = document.getElementById(`video${index}`) as HTMLCanvasElement
                const ctx = canvas.getContext('2d')
                return {
                    ...item,
                    ctx
                }
            })
        )

    }, []);

    return (
        <div className='video-container pd-m-b flex justify-between over-hiddenv'>
            {topicInfo.map((item, index) => (
                <Card title={item.label} extra={useHoverUI(<SettingOutlined className='cursor-p' twoToneColor="#957ecf" />, setHoverUI())} style={{ width: '30%' }} bordered={false}>
                    <canvas width={500} height={200} id={`video${index}`} />
                </Card>
            ))}

        </div>
    )
}

export default Video