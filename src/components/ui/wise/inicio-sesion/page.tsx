

export default function InicioSesionComponente() {
    return (

        
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Cómo Iniciar Sesión en WISE</h2>
            <div className="text-gray-700">
                <p className="mb-4">Para iniciar sesión con tu cuenta LDS en la aplicación WISE para maestros de la Iglesia de Jesucristo de los Santos de los Últimos Días, sigue estos pasos:</p>
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
            </div>
          </div>        
        

    );
  };

  