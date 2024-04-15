import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Cadastrar from "./pages/Cadastrar/Cadastrar";
import Consultar from "./pages/Consultar/Consultar";
import Detalhes from "./pages/Detalhes/Detalhes";

function App() {
    return (
        <div className="App font-[Poppins] bg-gradient-to-t to-white from-[#4e5e67] h-screen text-[#afafaf]">
            <BrowserRouter>
                <header className="bg-[#292a2c] shadow-2xl">
                    <Navbar />
                </header>
                <div className="container w-5/6 mx-auto flex justify-center ">
                    <Routes>
                        <Route path="/" element={<Navigate to="/consultar" />}></Route>
                        <Route path="/cadastrar" element={<Cadastrar />}></Route>
                        <Route path="/consultar" element={<Consultar />}></Route>
                        <Route path="/detalhes/:id" element={<Detalhes />}></Route>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
