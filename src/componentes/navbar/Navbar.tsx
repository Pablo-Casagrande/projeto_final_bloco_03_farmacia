import { Link } from 'react-router-dom';
import {  User, ShoppingCart, MagnifyingGlass } from '@phosphor-icons/react';

function Navbar() {
  return (
    <div className="w-full bg-cyan-900 text-white py-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 gap-4">
        
        
        <Link to="/home" className="flex items-center gap-2">
          <img
            src="https://media.discordapp.net/attachments/1356053907838730460/1389941379785953351/favicon.png?ex=68667348&is=686521c8&hm=8be146738546de594ec00341544bb2ed24c1eb422bd55a1f2bc45298d69551fe&=&format=webp&quality=lossless&width=144&height=144"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="font-bold text-lg">FARMÁCIA</span>
        </Link>

        
        <div className="flex items-center bg-white rounded-full px-2 py-1 w-[250px]">
          <input
            type="text"
            placeholder="Procurar"
            className="flex-1 outline-none px-2 text-black text-sm"
          />
          <button className="bg-cyan-400 hover:bg-cyan-500 rounded-full p-2 transition-colors">
            <MagnifyingGlass size={16} weight="bold" />
          </button>
        </div>

        
        <div className="flex items-center gap-6">
          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
          <Link to="/cadastrarcategoria" className="hover:underline">
            Cadastrar Categoria
          </Link>
          <User size={24} />
          <ShoppingCart size={24} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;