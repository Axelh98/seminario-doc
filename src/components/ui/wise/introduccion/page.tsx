import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import estilos misma carpeta

import "./style.css";

export default function IntroduccionComponente() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Título del Capítulo */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        Introducción a WISE
      </h1>

      {/* Sección: ¿Qué es WISE? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">¿Qué es WISE?</h2>
        <p className="text-gray-700">
          WISE es una herramienta diseñada por la Iglesia de Jesucristo de los
          Santos de los Últimos Días para gestionar la inscripción y el
          seguimiento de estudiantes en los programas de Seminarios e
          Institutos. Su propósito es facilitar la organización y fortalecer el
          aprendizaje de los principios del Evangelio.
        </p>
      </section>

      {/* Sección: Beneficios de usar WISE */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Beneficios de usar WISE</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Acceso rápido a los datos de estudiantes y clases.</li>
          <li>Seguimiento del progreso de los alumnos en tiempo real.</li>
          <li>Facilidad para generar reportes y estadísticas.</li>
          <li>Acceso centralizado a materiales educativos.</li>
        </ul>
      </section>

      {/* Sección: Acceso a WISE */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Acceso a WISE</h2>
        <p className="text-gray-700">
          Para comenzar a usar WISE, inicia sesión con tu cuenta proporcionada
          por la Iglesia. Puedes acceder al sistema desde{" "}
          <a
            href="https://wise.churchofjesuschrist.org"
            className="text-blue-600 hover:underline"
          >
            wise.churchofjesuschrist.org
          </a>
          . Si es tu primera vez, asegúrate de configurar tu perfil y seguir los
          pasos indicados para configurar tu ubicación y asignar clases.
        </p>
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
  );
}
