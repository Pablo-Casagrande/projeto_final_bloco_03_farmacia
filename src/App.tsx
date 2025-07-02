import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DeletarCategoria from './componentes/categoria/deletarcategoria/DeletarCategoria';
import FormCategoria from './componentes/categoria/formcategoria/FormCategoria';
import ListarCategorias from './componentes/categoria/listacategoria/ListaCategoria';
import Footer from './componentes/footer/Footer';
import Navbar from './componentes/navbar/Navbar';
import Home from './pages/home/Home';




function App() {
	return (
		<>
			
				<BrowserRouter>
					<Navbar />
					<div className="min-h-[80vh]">
						<Routes>
            {/* Definição das rotas do app, cada caminho renderiza um componente */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
					</div>
					<Footer />
				</BrowserRouter>
			
		</>
	)
}
export default App