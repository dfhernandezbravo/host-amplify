import Image from 'next/image';
import accessibilities from './assets';

export interface Sizes {
  'xx-small': number;
  'x-small': number;
  small: number;
  medium: number;
  large: number;
  'x-large': number;
  'xx-large': number;
}

const sizes: Sizes = {
  'xx-small': 20,
  'x-small': 25,
  small: 30,
  medium: 35,
  large: 40,
  'x-large': 45,
  'xx-large': 50,
};

interface Props {
  fontSize: keyof Sizes;
}

const ModalContent = ({ fontSize }: Props) => (
  <div className="flex flex-col gap-3 overflow-scroll">
    <h4 className="font-bold">¿Qué es?</h4>
    <p>
      La accesibilidad busca que todas las personas que son usuarias de un sitio
      web puedan navegar e interactuar, sin importar si es que tienen o no algún
      grado de discapacidad.
    </p>
    <p>
      En <strong>Easy.cl</strong> nos hemos preocupado de que nuestros términos
      y condiciones cumplan con los requisitos mínimos recomendados por el
      Servicio Nacional de la Discapacidad (Senadis) basados en los estándares
      entregados por el consorcio de la World Wide Web en sus Pautas de
      Accesibilidad para el Contenido Web (WCAG) 2.0.
    </p>
    <h4 className="flex items-center gap-3 font-bold">
      <span>Tamaño de letras</span>
      <span className="flex gap-2">
        <Image
          width={sizes[fontSize]}
          height={sizes[fontSize]}
          src={accessibilities[0].src}
          alt={accessibilities[0].alt}
        />
        <Image
          width={sizes[fontSize]}
          height={sizes[fontSize]}
          src={accessibilities[1].src}
          alt={accessibilities[1].alt}
        />
      </span>
    </h4>
    <p>
      La fuente de esta página tiene dimensiones relativas, así las personas
      podrán controlar los tamaños con los controles habilitados.
    </p>
    <h4 className="flex items-center gap-3 font-bold">
      <span>Contraste</span>
      <span className="flex gap-2">
        <Image
          width={sizes[fontSize]}
          height={sizes[fontSize]}
          src={accessibilities[2].src}
          alt={accessibilities[2].alt}
        />
      </span>
    </h4>
    <p>
      Habilitamos una opción con mayor contraste para mejorar la legibilidad de
      los textos en las personas que puedan necesitarlo.
    </p>
    <h4 className="flex items-center gap-3 font-bold">Lectores de pantalla</h4>
    <p>
      Nos preocupamos de habilitar el uso de los lectores de pantalla e
      integramos elementos de navegación del teclado para que las personas
      puedan utilizarlo mediante un lector de pantalla. Para poder utilizarlo,
      debes bajar una extensión o instalar un software de Screen Reader. Algunos
      ejemplos gratuitos que puedes utilizar son:
    </p>
    <ul className="list-disc">
      <li>
        <a href="https://nvda.es/">
          <span className="font-bold">NVDA</span> (para Windows)
        </a>
      </li>
      <li>
        <a href="https://support.apple.com/es-cl/guide/voiceover/vo2682/mac">
          <span className="font-bold">VoiceOver</span> (integrado en
          dispositivos Apple)
        </a>
      </li>
      <li>
        <a href="https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=es">
          <span className="font-bold">Screen reader</span> (extensión de Google
          Chrome)
        </a>
      </li>
    </ul>
    <p>
      En celulares, solo debes ir a la configuración y activar la opción de
      VoiceOver en dispositivos iOS o TalkBack en Android.
    </p>
  </div>
);

export default ModalContent;
