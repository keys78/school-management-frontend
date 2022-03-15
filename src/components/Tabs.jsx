import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Tabs = ({ children, active = 0 }) => {
    const [activeTab, setActiveTab] = useState(active)
    const [tabsData, setATabsData] = useState([])

    useEffect(() => {
        let data = [];

        React.Children.forEach(children, element => {
            if (!React.isValidElement(element)) return;

            const { props: { tab, children } } = element;
            data.push({ tab, children });
        })
        setATabsData(data)
    }, [children])

    return (
        <div className='custom-tab'>
            <ul className='flex items-center gap-8'>
                {
                    tabsData.map(({ tab }, idx) => (
                        <li >
                            <button className={`nav-link ${idx === activeTab ? "active" : ""}`}
                                onClick={() => setActiveTab(idx)}
                            >
                                {tab}
                            </button>
                        </li>
                    ))
                }
            </ul>

            <div className='tab-content'>
                {tabsData[activeTab] && tabsData[activeTab].children}
            </div>
        </div>
    )
}

const TabPane = ({ children }) => {
    return { children }
}

Tabs.TabPane = TabPane

export default Tabs;