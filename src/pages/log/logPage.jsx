import React, { useContext, useEffect } from 'react';
import { RecordContext } from '../../contexts/recordlogContext';
import { Spin, Timeline } from 'antd';
const { format } = require('date-fns');

const LogPage = () => {
    const {
        recordState: { records, isLoading },
        getRecords,
    } = useContext(RecordContext);

    useEffect(() => {
        getRecords();
    }, []);

    let body = null;

    const recordTimelines = records.map((red) => ({
        label: format(new Date(red.createAt), 'yyyy-MM-dd HH:mm:ss'),
        children: red.record,
        color: {
            create: 'green',
            update: 'blue',
            delete: 'red',
            auth: 'orange',
        }[red.type] || 'gray',
    }));

    if (isLoading) {
        body = (
            <div className="spinner">
                <Spin size="large" />
            </div>
        )
    } else {
        body = (
            <>
                <Timeline reverse={true} mode={"left"} items={recordTimelines} />
            </>
        )
    }
    return (
        <>
            <h1>Records</h1>
            {body}
        </>
    )
}

export default LogPage
