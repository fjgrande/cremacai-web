import type { NavLink, Product, LocationInfo, StoryBlock } from "./types";

export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Nuestro Menú", href: "/menu" },
  { label: "Nuestra Mezcla", href: "/nuestra-mezcla" },
  { label: "Contacto", href: "/#ubicacion" },
];

export const instagramUrl = "https://www.instagram.com/cremacai/";

export const products: Product[] = [
  {
    name: "Copaçaí",
    description: "Viajes de sabores en cada capa.",
    image: "/assets/producto-real.jpg",
    href: "/menu#copacai",
  },
  {
    name: "Bowlaçaí",
    description: "Energía, frescura y bienestar.",
    href: "/menu#bowlacai", // sin foto todavía: ProductGrid.astro mostrará un placeholder
  },
  {
    name: "Shakes",
    description: "Mezclas cremosas que te enamoran.",
    href: "/menu#shakes",
  },
  {
    name: "Gelato",
    description: "Artesanal, natural e irresistible.",
    href: "/menu#gelato",
  },
];

export const location: LocationInfo = {
  address: "Carrer d'Aragó, 303, Eixample, 08009 Barcelona",
  hours: "Lunes a domingo, 12:00 – 22:00",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0458606515626!2d2.1681261!3d41.3948104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3b5d87ce87f%3A0x338787568ee41ea1!2sCREMACAI!5e0!3m2!1ses!2ses!4v1785444360231!5m2!1ses!2ses",
  directionsHref: "https://www.google.com/maps?cid=3713085223624515233",
  storefrontImage: "/assets/fachada.jpg",
  storefrontAlt: "Fachada de la tienda cremaçai",
};

// Contenido de la página "Nuestra Mezcla". Cada bloque alterna de lado
// automáticamente en escritorio gracias a "reverse". Los que no tienen
// "image" muestran un placeholder — sustituye por la ruta real cuando
// tengas la foto (ver StoryBlock.astro).
export const storyBlocks: StoryBlock[] = [
  {
    heading: "No creemos que haya que elegir.",
    paragraphs: [
      "Entre Brasil o Italia.",
      "Entre fruta o helado.",
      "Entre energía o placer.",
      "Creemos que las mejores cosas aparecen cuando dos mundos se encuentran.",
      "Por eso nació CREMAÇAÍ.",
    ],
  },
  {
    heading: "Mezclar cambia el resultado.",
    paragraphs: [
      "No mezclamos ingredientes por casualidad. Cada receta une sabores, texturas y culturas para crear algo nuevo.",
      "Porque cuando las cosas correctas se encuentran… siempre ocurre algo especial.",
    ],
    reverse: true,
  },
  {
    heading:
      "Inspirados por Brasil. Enamorados de Italia. Nacidos en Barcelona.",
    paragraphs: [
      "Barcelona nos enseñó que las ciudades más interesantes son las que mezclan personas, idiomas y culturas.",
      "CREMAÇAÍ también.",
    ],
    image: "/assets/fachada.jpg",
    imageAlt: "Fachada de la tienda cremaçai",
  },
  {
    heading: "Cada visita crea una mezcla distinta.",
    paragraphs: [
      "Hay quien viene después del gimnasio.",
      "Hay quien comparte una Copaçaí.",
      "Hay quien descubre el pistacho por primera vez.",
      "Y hay quien vuelve porque encontró su mezcla favorita.",
      "Ninguna visita es igual. Porque ninguna mezcla lo es.",
    ],
    reverse: true,
  },
];
