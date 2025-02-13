'use client'
import style from '../css/main.module.css'
import { FaInstagram,FaFacebook,FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";


export default function Main() {
  return (
    <main className={`${style.main} h-[700px] md:rounded-lg relative `}>
       <div className='absolute flex flex-col top-0 bottom-0 left-0 right-0 z-10'>
            <div className='flex items-center w-full px-2 md:px-10 py-4'>
                <span className='font-bold tracking-widest md:block hidden' >Norte Inmubles</span>
                <nav className='grow flex items-center justify-center '>
                    <ul className='flex md:w-1/2 w-full py-2 justify-evenly
                     items-center gap-4 border border-slate-400/50 rounded-xl' style={{ backdropFilter: 'blur(8px)' }}>
                        <li className='cursor-pointer hover:text-orange-700'>
                            <Link to="services" smooth={false} duration={800} >Servicios</Link>
                        </li>
                        <li className='cursor-pointer hover:text-orange-700'>
                            <Link to="guide" smooth={false} duration={800}>Guía</Link>
                        </li>
                        <li className='cursor-pointer hover:text-orange-700'>
                            <Link to="tech" smooth={false} duration={800}>Tecnología</Link>
                        </li>
                        <li className='cursor-pointer hover:text-orange-700'>
                            <Link to="testimonials" smooth={false} duration={800}>Clientes</Link>
                        </li>
                    </ul>
                </nav>
                <div className='w-[90px] hidden md:flex justify-evenly items-center h-[20px] rounded-lg border border-slate-400/50' style={{ backdropFilter: 'blur(8px)' }}>
                    {
                        [1,2,3].map((_,index)=>(
                            <div key={index} className='size-2 rounded-full border border-slate-400/50' 
                            style={{ backdropFilter: 'blur(8px)' }}></div>
                        ))
                    }
                </div>
            </div>
            <div className='w-full grow  justify-center flex flex-col px-10 gap-4'>
                <h1 className={`text-4xl  md:text-7xl md:w-[800px] font-bold ${style.degraded}`}>Hacemos toda la gestión por ti</h1>
                <p className={` text-base md:text-2xl ${style.degraded} font-semibold`}> 
                    Desde tomar las fotos hasta que firmes el contrato. Nos encargamos de todo
                </p>
            </div>

            <div className='px-10 md:hidden block'>
                <div className='flex py-1 mb-4 justify-evenly border border-slate-400/50 rounded-xl' style={{ backdropFilter: 'blur(8px)' }}>
                    <button className='rounded-full p-1 border border-slate-400/50' style={{ backdropFilter: 'blur(8px)' }}>
                        <FaInstagram size={15}/>
                    </button>
                    <button className='rounded-full p-1 border border-slate-400/50' style={{ backdropFilter: 'blur(8px)' }}>
                        <FaFacebook size={15}/>
                    </button>
                    <button className='rounded-full p-1 border border-slate-400/50' style={{ backdropFilter: 'blur(8px)' }}>
                        <FaWhatsapp size={15}/>
                    </button>
                </div>
            </div>

            <div className='md:flex hidden '>
                <div className={`flex items-center justify-evenly py-6 border-x  border-slate-400/50 border-t rounded-tr-lg
                  w-1/3 ${style.glassEffect} rounded-bl-lg`} >
                    <button className='rounded-full p-2 border border-slate-400/50' style={{ backdropFilter: 'blur(8px)' }}>
                        <FaInstagram size={18}/>
                    </button>
                    <button className='rounded-full p-2 border border-slate-400/50' style={{ backdropFilter: 'blur(8px)' }}>
                        <FaFacebook size={18}/>
                    </button>
                    <button className='rounded-full p-2 border border-slate-400/50' style={{ backdropFilter: 'blur(8px)' }}>
                        <FaWhatsapp size={18}/>
                    </button> 
                </div>
                <div className='grow'>

                </div>
                <div className={`flex items-center justify-center  w-1/3 rounded-tl-lg ${style.glassEffect} rounded-br-lg`}>
                    <p className='font-medium text-xl  text-center'
                    >Tenemos las mejores estrategias para promocionar tus operaciones</p>
                </div>
            </div>
       </div>
       <div className={`h-full w-full ${style.overlay} md:rounded-lg `}></div>
    </main>
  )
}
