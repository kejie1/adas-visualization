import CloudView from '@/pages/Pilot/index'
import './index.scss'
import '@/assets/style/global.scss'
import { useState } from 'react';
import { Tabs } from 'antd';
import Program from '@/components/program';
const Top = () => {
    const [tabsVal, setTabVal] = useState('birdView')
    const tabs = [
        { label: 'BirdView', value: 'birdView' },
        { label: 'RawData', value: 'rawData' },
    ]
    const setPlayModel = (key: string) => {
        setTabVal(key)
    }
    return (
        <div className='main-container'>
            <Tabs
            defaultActiveKey='tabsVal'
                type="card"
                size='small'
                onChange={setPlayModel}
                items={tabs.map(item => {
                    return {
                        label: item.label,
                        key: item.value,
                    }
                })}
            />
            <div className='container'>
                {tabsVal === 'birdView' && <CloudView />}
                {tabsVal === 'rawData' && <CloudView />}
            </div>
                <Program />
        </div>
    )
}

export default Top