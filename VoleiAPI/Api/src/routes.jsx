import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Container from './components/container.jsx'
import Brasil from './pages/brasil.jsx'
import EUA from './/pages/eua.jsx'
import Franca from './pages/franca.jsx'
import Japao from './pages/japao.jsx'
import Polonia from './pages/polonia.jsx'
import RepublicaDominicana from './pages/rd.jsx'
import Servia from './pages/servia.jsx'
import Turquia from './pages/turquia.jsx'
function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Container />}></Route>
                    <Route path="/home" element={<Container />}></Route>
                    <Route path="/brasil" element={<Brasil />}></Route>
                    <Route path="/estadosunidos" element={<EUA />}></Route>
                    <Route path="/franca" element={<Franca />}></Route>
                    <Route path="/japao" element={<Japao />}></Route>
                    <Route path="/polonia" element={<Polonia />}></Route>
                    <Route path="/republicadominicana" element={<RepublicaDominicana />}></Route>
                    <Route path="/servia" element={<Servia />}></Route>
                    <Route path="/turquia" element={<Turquia />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
