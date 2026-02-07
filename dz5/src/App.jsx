import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePages from './HomePages'
import Deteil from './Deteil'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePages />} />
                <Route path="/detail/:id" element={<Deteil />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App