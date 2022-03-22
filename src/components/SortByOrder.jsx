import React, { useState, useEffect }  from 'react';
import SelectBox from './SelectBox';
import axios from 'axios';


const SortByOrder = ({tableData, setData, url}) => {
    const [defaultData, setDefaultData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            };

            try {
                const { data } = await axios.get(url, config);
                setDefaultData(data);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, []);

    const options = [
        { option: 'Default' },
        { option: 'Ascending' },
        { option: 'Descending' },
    ]

    const onClick = (val) => {
        let sortedTableData = []

        const defaultSort = val.option === "Default"
        const SortByAscendingOrder = val.option === "Ascending"
        const SortByDescendingOrder = val.option === "Descending"

        SortByAscendingOrder && sortedTableData.push(...tableData.sort((a, b) => ( a.firstName.localeCompare(b.firstName) )))
        SortByDescendingOrder && sortedTableData.push(...tableData.sort((a, b) => ( b.firstName.localeCompare(a.firstName) )))
        defaultSort && sortedTableData.push(...defaultData)

        setData(sortedTableData)
        
    }

    return (
        <div>
            <SelectBox options={options} onClick={onClick} newSelected={'Default'} label={'Sort'} />
        </div>
    );
};

export default SortByOrder;