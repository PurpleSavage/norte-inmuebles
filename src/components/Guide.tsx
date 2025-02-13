import style from '../css/guide.module.css'

export default function Guide() {
  return (
    <section className={` flex flex-col items-center gap-16`} id='guide'>
        <h2 className={`text-5xl  text-center hidden md:flex w-1/2  items-center justify-center text-black ${style.block}`}>
            <span className="block w-[45%] font-bold">
                Vende o alquila
            </span>
            <span className=" w-[10%] flex items-center gap-2 text-orange-600">
                <span className="text-lg">en</span> 5
            </span>
            <span className="block w-[45%] font-bold">
                simples pasos
            </span>
        </h2>
        <h2 className={`text-2xl block md:hidden w-3/4 mx-auto text-center text-black ${style.block}`}>
            Vendo o alquila en 5 <span className='font-bold text-orange-600'>simples pasos</span>
        </h2>
        <div className=" bg-slate-100 shadow-xl rounded-lg p-6 w-full md:w-1/2 space-y-16">
            <div className={`flex ${style.block}`}> 
                <div className="w-1/2 space-y-4 border-r border-black">
                    <p className="text-4xl md:text-6xl  text-black">01</p>
                    <p className="text-black">
                        Sabemos que tu inmueble es especial.
                        Déjanos mostrarle al mundo con nuestras estrategias personalizadas.
                    </p>
                </div>
                <div className="w-1/2 flex items-center">
                    <p className="text-black text-end w-full text-xl md:text-3xl font-bold">
                        Publica ru propiedad con nosotros
                    </p>
                </div> 
            </div>

            <div className={`flex ${style.block}`}>
                <div className="w-1/2  border-r border-black flex items-center">
                    <p className="text-black text-xl md:text-3xl font-bold">
                        Evaluación y preparación
                    </p>
                </div>
                <div className="w-1/2  space-y-4">
                    <p className="text-4xl md:text-6xl text-end text-black">02</p> 
                    <p className="text-black text-end">
                    Realizamos un análisis detallado para garantizar que tu propiedad esté lista para el mercado.
                    </p>
                </div>
            </div>


            <div className={`flex ${style.block}`}>
                <div className="w-1/2 space-y-4 text-black border-r border-black">
                    <p className="text-4xl md:text-6xl  text-black">03</p>
                    <p className="text-black">
                        Desde anuncios online hasta presentaciones profesionales, utilizamos estrategias avanzadas
                        para destacar tu inmueble.
                    </p>
                </div>
                <div className="w-1/2 flex items-center">
                    <p className="text-black text-end w-full text-xl md:text-3xl font-bold">
                        Marketing Efectivo
                    </p>
                </div>
            </div>


            <div className={`flex ${style.block}`}>
                <div className="w-1/2 border-r border-black flex items-center">
                    <p className="text-black text-xl md:text-3xl font-bold">
                        Negociación y cierre
                    </p>
                </div>
                <div className="w-1/2 space-y-4">
                    <p className="text-4xl md:text-6xl  text-black text-end">04</p> 
                    <p className="text-black text-end">
                        Nos encargamos de todos los detalles para que obtengas la mejor oferta.
                    </p>
                </div>
            </div>


            <div className={`flex ${style.block}`}>
                <div className="w-1/2 space-y-4 text-black border-r border-black">
                    <p className="text-4xl md:text-6xl  text-black">05</p>
                    <p className="text-black">
                        Seguimos a tu lado para asegurarnos de que todo salga perfecto.
                    </p>
                </div>
                <div className="w-1/2 flex items-center ">
                    
                    <p className="text-black text-end  w-full text-xl md:text-3xl font-bold">
                        Post-venta y soporte
                    </p>
                </div>
            </div>
        </div>
    </section> 
  )
}
