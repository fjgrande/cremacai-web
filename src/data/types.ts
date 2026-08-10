export type NavLink = {
	label: string;
	href: string;
};

export type DotColor = "maroon" | "mustard" | "green" | "blue";

export type Feature = {
	label: string;
	color: DotColor;
};

export type LocationInfo = {
	address: string;
	phone?: string;
	hours: string;
	mapEmbedSrc: string;
	directionsHref: string;
	storefrontImage: string;
	storefrontAlt: string;
};

// Un producto del grid "Nuestros imprescindibles". La imagen es opcional:
// si todavía no tenemos la foto real, el componente sabe mostrar un
// placeholder en su lugar (lo verás en ProductGrid.astro).
export type Product = {
	name: string;
	description: string;
	image?: string;
	href: string;
};

// Un bloque de la página "Nuestra Mezcla": texto + imagen alternando de lado.
export type StoryBlock = {
	heading: string;
	paragraphs: string[];
	image?: string;
	imageAlt?: string;
	reverse?: boolean;
};
