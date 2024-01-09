import {Popover,List} from 'antd'
import { useState,useMemo } from 'react';
export const useHoverUI = (button, content) => {
    const [arrow, setArrow] = useState('Show');
    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
            return false;
        }

        if (arrow === 'Show') {
            return true;
        }

        return {
            pointAtCenter: true,
        };
    }, [arrow]);
    return (
        <Popover placement="bottomLeft" content={content} arrow={mergedArrow}>
            {button}
        </Popover>
    )
}
export const setHoverUI = (data = [
    '删除面板',
    '全屏'
]) => {
    return (
        <List
            size="small"
            dataSource={data}
            renderItem={(item:React.ReactNode) => <List.Item className='cursor'>{item}</List.Item>}
        />
    )
}