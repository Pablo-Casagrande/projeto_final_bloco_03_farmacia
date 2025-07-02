
function Home() {
    return (
        <>
            <div className="bg-cyan-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-6 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            Aqui voce encontra Medicamentos e Cosmeticos!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Cadastrar produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://media.discordapp.net/attachments/1356053907838730460/1389941380595318874/home.png?ex=68667348&is=686521c8&hm=bb3a087c657cc552a96e51b8512996df6779940e43ca3e85b1e8b2565ee9d3a2&=&format=webp&quality=lossless&width=759&height=763"
                            alt="Imagem Página Home"
                            className='w-2/2'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home