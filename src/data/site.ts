import type { NavLink, Feature, LocationInfo } from "./types";

export const navLinks: NavLink[] = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export const features: Feature[] = [
  { label: "Açaí 100% natural, sin azúcares añadidos", color: "maroon" },
  { label: "Toppings artesanales de temporada", color: "mustard" },
  { label: "Recetas propias, sin franquicia", color: "green" },
  { label: "Ingredientes locales cuando es posible", color: "blue" },
];

export const location: LocationInfo = {
  address: "Carrer d'Aragó, 303, Eixample, 08009 Barcelona",
  hours: "Lunes a domingo, 12:00 – 22:00",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0458606515626!2d2.1681261!3d41.3948104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3b5d87ce87f%3A0x338787568ee41ea1!2sCREMACAI!5e0!3m2!1ses!2ses!4v1785444360231!5m2!1ses!2ses",
  directionsHref: "https://share.google/eL8ShvouIVugqdGaL",
};
