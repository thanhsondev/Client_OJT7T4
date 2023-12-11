import React, { useContext, useEffect } from 'react';
import {RecordContext} from '../../contexts/recordlogContext';
import {Spin, Timeline } from 'antd';
const { format } = require('date-fns');

const LogPage = () => {
    const {
        recordState: {records, isLoading},
        getRecords,
    } = useContext(RecordContext);

    useEffect(() => {
        getRecords();
    }, []);

    let body = null;

    let recordTimelines = [];
    records.map(red => (
        recordTimelines.push(
            {
                label: format(new Date(red.createAt), 'yyyy-MM-dd HH:mm:ss'),
                children: red.record,
            }
        )
    ))
    if (isLoading) {
        body = (
            <div className="spinner">
                <Spin size="large" />
            </div>
        )
    } else {
        body = (
            <>
                <Timeline reverse={true} mode={"left"}  items={recordTimelines} />
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
