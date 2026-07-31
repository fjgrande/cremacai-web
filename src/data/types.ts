export type NavLink = {
  label: string;
  href: string;
};

// Un "union type" (con el símbolo |) dice: este valor SOLO puede ser
// uno de estos strings exactos, ningún otro. Si en otro archivo escribes
// color: "rojo", TypeScript te dará error antes de que llegue a producción.
export type DotColor = "maroon" | "mustard" | "green" | "blue";

export type Feature = {
  label: string;
  color: DotColor;
};

// El "?" marca una propiedad como opcional: se puede omitir al usar el tipo.
export type LocationInfo = {
  address: string;
  phone?: string;
  hours: string;
  mapEmbedSrc: string;
  directionsHref: string;
};
