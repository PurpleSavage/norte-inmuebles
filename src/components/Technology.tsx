import Image from "next/image"
import style from '../css/technology.module.css'
export default function Technology() {
  return (
    <section className="flex justify-center items-center relative h-screen   w-full" id="tech">
        <video width="800" height="800"  autoPlay loop muted  className="">
            <source src="/pulse-1.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
        </video>
        <div className='absolute  flex items-center justify-center top-0 left-0 right-0 bottom-0 z-10'>
            <div className={`${style.meteorContainer}   -rotate-90`}>
              <div className={`${style.meteor}`}></div>
              <div className={`${style.meteor}`}></div>
              <div className={`${style.meteor}`}></div>
              <div className={`${style.meteor}`}></div>
              <div className={`${style.meteor} hidden md:block`}></div>
            </div>
        </div>
        <div className="absolute z-30 bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center gap-8">
            <h2 className="text-black text-2xl md:text-5xl w-1/2 text-center ">Tecnología{' '}
              <span className="font-bold text-orange-600">a tu servicio</span>
            </h2>
            <div className="relative ">
              <div className={`absolute -left-10  md:-left-52 md:top-10 bg-slate-200 border-white border rounded-md p-4 ${style.card}`}>
                <p className="text-black  text-xs md:text-base">Marketing, tecnología y estrategia </p>
              </div>
              <div className={`absolute w-[100px] md:w-auto -right-5 md:-right-52 top-44 md:top-20 bg-slate-200 border-white border rounded-md p-4 ${style.card}`}>
                <p className="text-black text-xs md:text-base">Marketing inmobiliario 4.0</p>
              </div>
              <Image
                src="/vr-glasses.png"
                priority={true}
                width={280}
                height={300}
                alt="virtual reallity glasses image"
              />
              
              <div className={`absolute bottom-2   bg-slate-200 border-white border rounded-md p-4 ${style.card}`}>
                <p className="text-black text-xs md:text-base">Poder digital</p>
              </div>

            </div>
            <p className="text-center w-3/4 text-black text-md md:text-xl">
              Combinamos lo mejor de la tecnología moderna con estrategias de marketing efectivas 
              para que tu propiedad alcance a los compradores o inquilinos ideales
            </p>
        </div>
    </section>
  )
}
