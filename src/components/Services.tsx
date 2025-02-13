import style from '../css/services.module.css'

export default function Services() {
  return (
    <section className='space-y-16' id='services'>
        <h2 className='text-2xl md:text-5xl text-center text-black w-3/4 mx-auto'
        >Servicios diseñados para que obtengas el <span className="font-bold text-orange-600">mejor resultado</span></h2>
        <div className={`${style.parent} mx-auto  h-[750px] w-3/4`}>
            <div className={`${style.div1} rounded-lg`}>
              <div className={`w-full h-full rounded-lg ${style.overlay} flex items-center flex-col gap-4 px-4 justify-center`}>
                <h3 className='text-center text-2xl font-bold'>Marketing y audiovisual</h3>
                <p className='md:block hidden'>
                  Utilizamos los medios más efectivos y estrategias de marketing personalizadas para destacar tu inmueble
                </p>
              </div>
            </div>
            <div className={`${style.div12} rounded-lg`}>
              <div className={`w-full h-full rounded-lg ${style.overlay} flex items-center flex-col justify-center px-4 gap-4`}>
                <h3 className='text-center text-2xl font-bold'>Asesoramiento integral</h3>
                <p className='md:block hidden'>
                  Estamos a tu lado durante la negociación, al cierre de la venta o alquiler y en la postventa
                </p>
              </div>
            </div>
            <div className={`${style.div14} rounded-lg`}>
              <div className={`w-full h-full rounded-lg ${style.overlay} flex items-center flex-col justify-center px-4 gap-4`}>
                <h3 className='text-center text-2xl font-bold'>Evaluación de clientes</h3>
                <p className='md:block hidden'>
                  Nos aseguramos de que cada potencial comprador o inquilino sea evaluado cuidadosamente
                </p>
              </div>
            </div>
            <div className={`${style.div15} rounded-lg`}>
              <div className={`w-full h-full rounded-lg ${style.overlay} flex items-center flex-col justify-center px-4 gap-4`}>
                <h3 className='text-center text-2xl font-bold'>Acompañamiento legal</h3>
                <p className='md:block hidden'>
                  Utilizamos los medios más efectivos y estrategias de marketing personalizadas para destacar tu inmueble
                </p>
              </div>
            </div>
      </div>
    </section>
  )
}
