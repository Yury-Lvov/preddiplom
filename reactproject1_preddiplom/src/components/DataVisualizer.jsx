import React, { useState } from 'react'
import '../App.css'

const DataVisualizer = ({ data, parentIndex = 'root', depth = 0 }) => {
    const [expandedIndices, setExpandedIndices] = useState({})

    const toggleExpand = (index) => {
        setExpandedIndices((prev) => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    if (data === null || (typeof data !== 'object' && !Array.isArray(data))) {
        return <div className="data-item">{String(data)}</div> // Преобразуем примитив в строку
    }

    const isExpanded = expandedIndices[parentIndex]
    const isArray = Array.isArray(data)
    const dataLength = isArray ? data.length : Object.keys(data).length

    const renderData = (data, parentIndex, depth) => {
        if (isArray) {
            return data.map((item, index) => {
                const currentIndex = `${parentIndex}-${index}`
                const colorClass = `depth-${depth}`
                const itemContent = Array.isArray(item) ? `Массив ${item.length}` : item

                return (
                    <div key={currentIndex}>
                        <div className={`data-item ${colorClass}`}
                            onClick={() => Array.isArray(item) && toggleExpand(currentIndex)}>
                            {expandedIndices[currentIndex] ? 'Свернуть' : itemContent}
                        </div>
                        {expandedIndices[currentIndex] && Array.isArray(item) && (
                            <div className="sub-expanded-data">
                                {renderData(item, currentIndex, depth + 1)}
                            </div>
                        )}
                    </div>
                )
            })
        } else {
            return Object.entries(data).map(([key, value]) => {
                const isValueArray = Array.isArray(value)
                const isValueObject = typeof value === 'object' && value !== null
                const colorClass = `depth-${depth}`

                return (
                    <div key={key}>
                        <div className={`data-item ${colorClass}`}
                            onClick={() => (isValueArray || isValueObject) && toggleExpand(key)}>
                            {`${key}: ${isValueArray ? `Массив ${value.length}` : isValueObject ? `Объект ${Object.keys(value).length}` : value}`}
                        </div>
                        {expandedIndices[key] && (
                            <div className="sub-expanded-data">
                                {isValueArray ? renderData(value, key, depth + 1) : isValueObject && renderData(value, key, depth + 1)}
                            </div>
                        )}
                    </div>
                )
            })
        }
    }

    return (
        <div>
            <div className={`data-item ${depth === 0 ? 'root-depth' : ''}`}
                onClick={() => toggleExpand(parentIndex)}>
                {isArray ? `Массив ${dataLength}` : `Объект ${dataLength}`}
            </div>
            {isExpanded && renderData(data, parentIndex, depth)}
        </div>
    )
}

export default DataVisualizer
