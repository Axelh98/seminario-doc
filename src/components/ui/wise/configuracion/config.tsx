import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ConfiguracionComponente() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Título del Capítulo */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Configurar mi WISE
        </h1>
  
        {/* Sección: ¿Qué es WISE? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">¿Como configuro mi WISE?</h2>
          <p className="text-gray-700">
            Nuestro primer paso dentro de WISE será configurar nuestra ubicación. Para ello vamos a estar navegando por el menú de la izquierda. Sino se configura no podremos ver nuestra clase de Seminario
          </p>
          <p className='text-gray-700 mb-4'>Lo bueno de esto es que solo se requiere hacerlo una vez</p>
        </section>
  
        {/* Sección: Acceso a WISE */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acceso a WISE</h2>
          <p className="mb-4">Para configurar su WISE, sigue estos pasos:</p>
                <p className="mb-4 font-bold text-lg">*No olvides tener tu nombre de usuario y contraseña a mano</p>
                <ol className="list-decimal list-inside mb-4">
                <li className="mb-2">Accede a la página de inicio de sesión de WISE <a href="https://wise.churchofjesuschrist.org" className="text-blue-500 hover:underline">aquí</a>.
                </li>
                <li className="mb-2">Introduce tu nombre de usuario y contraseña asociados con tu cuenta LDS. Si no tienes una cuenta, puedes registrarte en la misma página.</li>
                <img className="mb-4 shadow-lg" src="/wise/inicio-sesion.PNG" alt="" />
                <img className="mb-4 shadow-lg" src="/wise/contraseña.PNG" alt="" />
                <li className="mb-2">Si luego de haber agregado el <span className="font-bold">Nombre de usuario</span> y <span className="font-bold">Contraseña</span> tienes la siguiente vista, lo has logrado.</li>
                <img className="mb-4 shadow-lg" src="/wise/primera-vista-wise.PNG" alt="" />
                </ol>
                <p>Si tienes algún problema durante el proceso, no dudes en preguntar.</p>
        </section>
        {/* Link inferior derecho con icono arrow de font awesome */}
        <div className="flex justify-end">
          <Link href="/wise/inicio-sesion">
            <button className="bg-blue-200 text-white px-4 py-2 rounded hover:bg-blue-300 focus:bg-blue-400 active:bg-blue-400 transition duration-200 flex items-center">
              Iniciar Sesión
              <FontAwesomeIcon icon={faArrowRight}/></button>
          </Link>
        </div>
      </div>
    )
}