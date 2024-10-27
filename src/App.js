import './App.css'
import Data from './components/Data'

const App = () => {
    const data1 = [
        1, 2, 3
    ]
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
        'name': 'John',
        'age': 30,
        'isAdmin': false,
        'courses': ['html', 'css', 'js'],
        'wife': null
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
    const data6 = 1
    return (
        <>
            <h1 className="h1">Визуализация данных</h1>
            {/*<Data data={data1}/>*/}
            <Data data={data2}/>
            {/*<Data data={data3}/>*/}
            <Data data={data4}/>
            {/*<Data data={data5}/>*/}
            <Data data={data6}/>
        </>
    )
}

export default App
