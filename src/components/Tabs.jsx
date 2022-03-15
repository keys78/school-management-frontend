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
        <div>
            <ul>
                {
                    tabsData.map(({ tab }, idx) => (
                        <li>
                            <a className={`nav-link ${idx === activeTab ? "active" : ""}`} href="#"
                                onClick={() => setActiveTab(idx)}
                            >
                                {tab}
                            </a>
                        </li>
                    ))
                }
            </ul>

            <div>
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