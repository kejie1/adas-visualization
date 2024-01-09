/*
 * @Author: ChuandongHuang chuandong_huang@human-horizons.com
 * @Date: 2024-01-08 13:19:43
 * @LastEditors: ChuandongHuang chuandong_huang@human-horizons.com
 * @LastEditTime: 2024-01-09 10:17:18
 * @Description: 
 */
import React, { useImperativeHandle, useState } from 'react';
import { Select, Modal, Tabs, Cascader, Input, Form, Button } from 'antd';
import '@/assets/style/global.scss'
const DataLocalDialog = () => {

    interface Option {
        value?: string | number | null;
        label: React.ReactNode;
        children?: Option[];
        isLeaf?: boolean;
    }

    const optionLists: Option[] = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            isLeaf: false,
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            isLeaf: false,
        },
    ];

    const [options, setOptions] = useState<Option[]>(optionLists);

    const onChange = (value: (string | number)[], selectedOptions: Option[]) => {
        console.log(value, selectedOptions);
    };

    const loadData = (selectedOptions: Option[]) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];

        // load options lazily
        setTimeout(() => {
            targetOption.children = [
                {
                    label: `${targetOption.label} Dynamic 1`,
                    value: 'dynamic1',
                },
                {
                    label: `${targetOption.label} Dynamic 2`,
                    value: 'dynamic2',
                },
            ];
            setOptions([...options]);
        }, 1000);
    };
    return (
        <>
            <Cascader bordered={false} options={options} loadData={loadData} onChange={onChange} changeOnSelect placeholder="请选择数据源" />
        </>
    )
}
const DataCloudDialog = ({onRef}) => {
    // 桶
    const [obsBucket, setObsBucket] = useState('')
    // 路径值
    const [obsKey, setObsKey] = useState('')
    const handleChange = (value: string) => {
        setObsBucket(value);
    };
    type FieldType = {
        obsKey?: string;
        obsBucket?: string;
    };
    const onFinish = (values: any) => {
        form.submit()
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const [form] = Form.useForm();
    useImperativeHandle(onRef,()=>{
        return {
            func:()=>form.submit()
        }
    })
    return (
        <>
            <Form
            form={form}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    name="obsBucket"
                    validateTrigger='onBlur'
                    rules={[{ required: true, message: '请选择桶!' }]}
                >
                    <Select
                        bordered={false}
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                        placeholder="OBS Bucket"
                    />
                </Form.Item>

                <Form.Item<FieldType>
                    name="obsKey"
                    validateTrigger='onBlur'
                    rules={[{ required: true, message: '路径不能为空!' }]}
                >
                    <Input bordered={false} placeholder='请输入路径' />
                </Form.Item>
            </Form>


        </>)
}
export const DataSource = () => {
    // 弹窗状态
    const [isModalOpen, setIsModalOpen] = useState(false);
    // 选中模式
    const [currentModel, setCurrentModel] = useState('')
    const playModel = [
        { label: '采集', value: 'collect' },
        { label: '路试', value: 'roadTest' },
        { label: '车端回放', value: 'localPlay' },
        { label: '采集', value: 'cloudPlay' },
    ]
    const cloudDataRef = React.createRef() 
    const openDataSourceDialog = () => {
        setIsModalOpen(true)
    }
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        // 调用子组件form提交
        try{
            (cloudDataRef.current as {func:()=>void}).func()
        }catch(e){
            setIsModalOpen(false);
        }

    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const setPlayModel = (key: string) => {
        setCurrentModel(key);
    };
    
    return (
        <>
            <div className='cursor-p main-font' onClick={openDataSourceDialog}>请选择数据源</div>
            <Modal centered width={800} title="数据源" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Tabs
                    onChange={setPlayModel}
                    items={playModel.map(item => {
                        return {
                            label: item.label,
                            key: item.value,
                        }
                    })}
                />
                {currentModel === 'localPlay' && <DataLocalDialog />}
                {currentModel === 'cloudPlay' && <DataCloudDialog onRef={cloudDataRef}/>}
            </Modal>
        </>
    )
}
