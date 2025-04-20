import './App.css'
import DataVisualizer from './components/DataVisualizer'

const App = () => {
    const data1 = [1, 2, 3]
    const data2 = [
        1, 2, 3,
        [1, 2, 3],
        [4, 5, 6]
    ]
    const data3 = [
        1, 2, 3,
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9, [10, 11, [12, 13]]],
        [7, 8, 9, 12312, 1, 23, 1, 23, 2, 2]
    ]
    const data4 = {
        name: 'John',
        age: 30,
        isAdmin: false,
        courses: ['html', 'css', 'js'],
        wife: null
    }
    const data5 = {
        name: 'John',
        age: 30,
        courses: ['HTML', 'CSS', 'JavaScript'],
        details: {
            isAdmin: false,
            address: {
                city: 'New York',
                zip: '10001'
            }
        }
    }
    const data6 = 'dasdadas'

    const allDatas = [
        data1, data2, data3, data4,
        data5
        , data6
    ]

    return (
        <>
            <h1 className="h1">Визуализация данных</h1>

            {allDatas.map((data, index) => (
                <div key={index}>
                    <DataVisualizer data={data} />
                </div>
            ))}
        </>
    )
}

export default App

