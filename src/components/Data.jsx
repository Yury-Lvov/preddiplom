import React, {useState} from 'react'
import './Data.css'

const Data = ({data}) => {
    const [expandedIndices, setExpandedIndices] = useState({})

    const toggleExpand = (index) => {
        setExpandedIndices((prev) => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const renderData = (dataArray, parentIndex, depth = 0) => {
        return dataArray.map((item, index) => {
            const currentIndex = `${parentIndex}-${index}`
            const colorClass = `depth-${depth}`

            const isArray = Array.isArray(item)
            const itemContent = isArray ? `Массив [${item.length}]` : item

            return (
                <div key={currentIndex}>
                    <div className={`data-item ${colorClass}`}
                         onClick={() => isArray && toggleExpand(currentIndex)}>
                        {expandedIndices[currentIndex] ? 'Свернуть' : itemContent}
                    </div>
                    {expandedIndices[currentIndex] && isArray && (
                        <div className="sub-expanded-data">
                            {renderData(item, currentIndex, depth + 1)}
                        </div>
                    )}
                </div>
            )
        })
    }

    return (
        <div className="data-container">
            <div className="data-item" onClick={() => toggleExpand('root')}>
                {`Массив [${data.length}]`}
            </div>
            {expandedIndices['root'] && (
                <div className="expanded-data">
                    {renderData(data, 'root')}
                </div>
            )}
        </div>
    )
}

export default Data
