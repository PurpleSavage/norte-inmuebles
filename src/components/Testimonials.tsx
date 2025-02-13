import style from '../css/testimonials.module.css'
import Image from 'next/image'
export default function Testimonials() {
  return (
    <section className='h-screen w-full space-y-16' id="testimonials">
        <div className='space-y-4'>
          <h2 className='text-2xl md:text-5xl text-center  text-black'>
              Nuestro <span className='font-bold text-orange-600'>clientes</span>
          </h2>
          <p className='text-bold text-md md:text-xl text-center text-black '
          >Estas son algunas de las experiencias de nuestros clientes</p>
        </div>


        <div className={`${style.wrapper} `}>
          <div className={`${style.item} ${style.item1} space-y-6 py-4 rotate-12 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden bg-red-500'>
                <Image
                  width={50}
                  height={40}
                  alt='phot0 profile sectio ntestimonials'
                  src='/Giorgina.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>K. Giorgina</p>
                <p className='px-2'>Junio 2024</p>
              </div>
            </div>
            <p className='px-2'>
              Gracias a Norte Inmuebles vendí mi departamento en tiempo récord. 
              Se encargaron de todo el proceso, ¡100% recomendados!
            </p>
          </div>


          <div className={`${style.item} ${style.item2} space-y-6 py-4 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden '>
                <Image
                  width={50}
                  height={40}
                  alt='phot0 profile sectio ntestimonials'
                  src='/Charper.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>E. Charper</p>
                <p className='px-2'>Agosto 2024</p>
              </div>
            </div>
            <p className='px-2'>
              Un servicio de primera. Su equipo de marketing hizo que mi propiedad tuviera mucha visibilidad y se vendió rápido.
            </p>
          </div>


          <div className={`${style.item} ${style.item3} space-y-6 py-4 -rotate-12 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden bg-red-500'>
                <Image
                  width={50}
                  height={40}
                  alt='phot0 profile sectio ntestimonials'
                  src='/Donatello.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>E. Donatello</p>
                <p className='px-2'>Septiembre 2024</p>
              </div>
            </div>
            <p className='px-2'>
              Me guiaron desde el primer día hasta la firma del contrato. Sin su ayuda, vender mi casa habría sido un dolor de cabeza.
            </p>
          </div>
          <div className={`${style.item} ${style.item4} space-y-6 py-4 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden bg-red-500'>
                <Image
                  width={50}
                  height={40}
                  alt='phot0 profile sectio ntestimonials'
                  src='/kenet.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>Kenet</p>
                <p className='px-2'>Marzo 2024</p>
              </div>
            </div>
            <p className='px-2'>
              Excelente agencia. No solo promocionaron mi inmueble, sino que también me ayudaron con todos los trámites legales.
            </p>
          </div>



          <div className={`${style.item} ${style.item5} space-y-6 py-4 rotate-12 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden bg-red-500'>
                <Image
                  width={50}
                  height={40}
                  alt='phot0 profile sectio ntestimonials'
                  src='/Henry.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>P. Henry</p>
                <p className='px-2'>Enero 2025</p>
              </div>
            </div>
            <p className='px-2'>
              Muy profesionales y atentos en cada paso. Gracias a ellos, vendí mi departamento sin preocupaciones
            </p>
          </div>



          <div className={`${style.item} ${style.item6} space-y-6 py-4 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden bg-red-500'>
                <Image
                  width={50}
                  height={40}
                  alt='phot0 profile sectio ntestimonials'
                  src='/Lia.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>Y. Lia</p>
                <p className='px-2'>Julio 2024</p>
              </div>
            </div>
            <p className='px-2'>
              Lo mejor de Norte Inmuebles es su transparencia y compromiso. En pocos meses logré vender mi propiedad sin complicaciones.
            </p>
          </div>


          <div className={`${style.item} ${style.item7} space-y-6 py-4 -rotate-12 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden bg-red-500'>
                <Image
                  width={50}
                  height={40}
                  alt='phot0 profile sectio ntestimonials'
                  src='/Mia.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>M. Mia</p>
                <p className='px-2'>Junio 2024</p>
              </div>
            </div>
            <p className='px-2'>
              Nunca imaginé que vender un inmueble fuera tan fácil. Me asesoraron en todo momento y lograron la mejor oferta para mí.
            </p>
          </div>



          <div className={`${style.item} ${style.item8} space-y-6 py-4 shadow-xl`}>
            <div className='flex items-center gap-2 px-2'>
              <div className='rounded-full size-[50px] overflow-hidden bg-red-500'>
                <Image
                  width={50}
                  height={40}
                  alt='phot0 profile sectio ntestimonials'
                  src='/Dustin.jpg'
                  className='rounded-full w-full h-full'
                />
              </div>
              <div className='space-y-1'>
                <p className='px-2 font-bold text-lg'>Dustin</p>
                <p className='px-2'>Mayo 2023</p>
              </div>
            </div>
            <p className='px-2'>
              Gran equipo de profesionales. La publicidad que hicieron de mi propiedad fue excelente y el proceso de venta muy ágil.
            </p>
          </div>
        </div>
    </section>
  )
}
