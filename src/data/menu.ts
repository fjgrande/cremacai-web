import type { Locale, MenuCategory } from "./types";

// "Record<Locale, MenuCategory[]>" es un tipo utilitario de TypeScript:
// dice "un objeto cuyas claves son EXACTAMENTE los valores del tipo
// Locale (ca | es | en), y cada valor es un array de MenuCategory".
// Si te olvidas de una clave (ej. "en"), TypeScript te avisa al momento.
//
// Traducción de borrador (catalán → español → inglés), pendiente de
// revisión final del cliente antes de publicar.
export const menuByLocale: Record<Locale, MenuCategory[]> = {
	ca: [
		{
			id: "copacai",
			title: "Copaçaí",
			subtitle: "Talla M i L",
			items: [
				{
					name: "Amazalfi",
					origin: "De l'Amazones a la Costa Amalfitana",
					description: "Sorbet de Llimona · Cacauet · Quinoa inflada · Llet condensada",
					prices: [{ size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }],
				},
				{
					name: "Brasicilia",
					origin: "Del cor del Brasil a Sicília",
					description: "Gelato de Pistatxo · Pistatxo molt · Anacards · Salsa de Pistatxo",
					prices: [{ size: "M", amount: "11,90 €" }, { size: "L", amount: "13,90 €" }],
				},
				{
					name: "Bahiatorino",
					origin: "De Bahia a Torí",
					description: "Gelato de Xocolata · Oreo · Nibs de cacau · Nutella",
					prices: [{ size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }],
				},
				{
					name: "Riocaracas",
					origin: "De Rio de Janeiro a Caracas",
					description: "Sorbet de Mango · Coco laminat · Quinoa inflada · Salsa de Mango o Maracujà",
					prices: [{ size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }],
				},
				{
					name: "Huelvaçu",
					origin: "De Huelva a Foz do Iguaçu",
					description: "Gelato de Maduixa · Coco laminat · Xia · Llet condensada",
					prices: [{ size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }],
				},
				{
					name: "Copa del Chef",
					origin: "Destinació sorpresa",
					description: "Recepta de temporada",
					prices: [{ size: "M", amount: "11,90 €" }, { size: "L", amount: "12,90 €" }],
				},
			],
		},
		{
			id: "bowlacai",
			title: "Bowlaçaí",
			subtitle: "Talla S, M i L",
			note: "Tots els nostres Bowls inclouen Açaí Premium i Granola Signature.",
			items: [
				{ name: "Alegría", description: "Plàtan · Nabius · Coco · Llet condensada", prices: [{ size: "S", amount: "8,90 €" }, { size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Energía", description: "Plàtan · Anacards · Quinoa · Salsa de Cacauet", prices: [{ size: "S", amount: "8,90 €" }, { size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Calma", description: "Fresa · Arándanos · Chía · Salsa de fresa", prices: [{ size: "S", amount: "8,90 €" }, { size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Frescura", description: "Kiwi · Plàtan · Quinoa · Salsa de Mango o Maracujà", prices: [{ size: "S", amount: "8,90 €" }, { size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Tentación", description: "Plàtan · Oreo · Llet en pols · Salsa de Xocolata", prices: [{ size: "S", amount: "8,90 €" }, { size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Capricho", description: "Plàtan · Anacards · Pistatxo · Salsa de Pistatxo", prices: [{ size: "S", amount: "9,90 €" }, { size: "M", amount: "11,90 €" }, { size: "L", amount: "13,90 €" }] },
			],
		},
		{
			id: "creacai",
			title: "Creaçaí",
			subtitle: "Tria fins a 2 fruites, 2 toppings i 1 salsa",
			items: [
				{ name: "Creaçaí", description: "El teu bowl, a la teva manera", prices: [{ size: "S", amount: "10,90 €" }, { size: "M", amount: "12,90 €" }, { size: "L", amount: "14,90 €" }] },
			],
			toppingGroups: [
				{ label: "Clàssic · +1,00 €", items: ["Fruites", "Coco", "Xia", "Quinoa", "Cacauet", "Anacards", "Oreo", "Llet en pols"] },
				{ label: "Premium · +1,50 €", items: ["Proteïna Whey", "Proteïna Vegetal", "Pistatxo", "Nibs de cacau", "Crema de Pistatxo", "Cacauet", "Nutella", "Dolç de Llet"] },
			],
		},
		{
			id: "shakes",
			title: "Shakes",
			subtitle: "475 ml",
			items: [
				{ name: "Samba", description: "Açaí · Sorbet de Maduixa · Salsa de Maduixa", prices: [{ amount: "7,90 €" }] },
				{ name: "Bossa", description: "Açaí · Gelato de Vainilla · Salsa de Cacauet", prices: [{ amount: "7,90 €" }] },
				{ name: "Lambada", description: "Açaí · Sorbet de Mango · Salsa de Maracujà", prices: [{ amount: "7,90 €" }] },
				{ name: "Tango", description: "Llet · Gelato de Pistatxo · Salsa de Dolç de Llet", prices: [{ amount: "8,90 €" }] },
				{ name: "Funk", description: "Llet · Gelato de Xocolata · Nutella", prices: [{ amount: "7,90 €" }] },
				{ name: "Swing", description: "Llet · Gelato Cheesecake · Salsa de Maduixa", prices: [{ amount: "7,90 €" }] },
				{ name: "Tarantella", description: "Açaí · Sorbet de Llimona · Llet condensada", prices: [{ amount: "7,90 €" }] },
				{ name: "Shake del Chef", description: "Sabors del Chef", prices: [{ amount: "8,90 €" }] },
			],
		},
		{
			id: "gelato",
			title: "Gelato",
			subtitle: "Per boles o per pes",
			items: [
				{ name: "1 Bola", prices: [{ amount: "3,80 €" }] },
				{ name: "2 Boles", prices: [{ amount: "4,80 €" }] },
				{ name: "3 Boles", prices: [{ amount: "5,80 €" }] },
				{ name: "500 ml", prices: [{ amount: "14,90 €" }] },
				{ name: "1 Litre", prices: [{ amount: "24,90 €" }] },
				{ name: "Cucurutxo Casolà", prices: [{ amount: "+1,00 €" }] },
				{ name: "Cucurutxo Premium", prices: [{ amount: "+2,00 €" }] },
				{ name: "Toppings", prices: [{ amount: "+1,00 €" }] },
			],
		},
		{
			id: "matcha",
			title: "Matcha",
			items: [
				{ name: "Matcha", prices: [{ amount: "3,50 €" }] },
				{ name: "Matcha Latte", prices: [{ amount: "4,50 €" }] },
				{ name: "Matcha Pistatxo", prices: [{ amount: "5,20 €" }] },
				{ name: "Iced Matcha Latte", prices: [{ amount: "5,20 €" }] },
				{ name: "Iced Matcha", prices: [{ amount: "6,90 €" }] },
				{ name: "Affogaçaí", description: "Açaí · Maduixa · Mango", prices: [{ amount: "5,90 €" }] },
			],
		},
		{
			id: "cafe",
			title: "Café",
			note: "Personalitza el teu cafè amb Xocolata · Pistatxo · Dolç de Llet.",
			items: [
				{ name: "Espresso", prices: [{ amount: "2,20 €" }] },
				{ name: "Doble espresso", prices: [{ amount: "2,80 €" }] },
				{ name: "Americano", prices: [{ amount: "2,80 €" }] },
				{ name: "Flat White", prices: [{ amount: "3,50 €" }] },
				{ name: "Latte", prices: [{ amount: "3,50 €" }] },
				{ name: "Cappuccino", prices: [{ amount: "3,90 €" }] },
				{ name: "Iced Coffee", prices: [{ amount: "4,20 €" }] },
				{ name: "Iced Latte", prices: [{ amount: "4,90 €" }] },
				{ name: "Affogato", description: "Vainilla · Xocolata · Pistatxo · Dolç de Llet", prices: [{ amount: "5,90 €" }] },
			],
		},
		{
			id: "begudes",
			title: "Begudes",
			items: [
				{ name: "Aigua mineral", prices: [{ amount: "2,00 €" }] },
				{ name: "Aigua amb Gas", prices: [{ amount: "2,20 €" }] },
				{ name: "Aigua de Coco", prices: [{ amount: "3,50 €" }] },
				{ name: "Begudes", prices: [{ amount: "2,80 €" }] },
			],
		},
	],

	es: [
		{
			id: "copacai",
			title: "Copaçaí",
			subtitle: "Tamaño M y L",
			items: [
				{ name: "Amazalfi", origin: "Del Amazonas a la Costa Amalfitana", description: "Sorbete de Limón · Cacahuete · Quinoa inflada · Leche condensada", prices: [{ size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Brasicilia", origin: "Del corazón de Brasil a Sicilia", description: "Gelato de Pistacho · Pistacho triturado · Anacardos · Salsa de Pistacho", prices: [{ size: "M", amount: "11,90 €" }, { size: "L", amount: "13,90 €" }] },
				{ name: "Bahiatorino", origin: "De Bahía a Turín", description: "Gelato de Chocolate · Oreo · Nibs de cacao · Nutella", prices: [{ size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Riocaracas", origin: "De Río de Janeiro a Caracas", description: "Sorbete de Mango · Coco laminado · Quinoa inflada · Salsa de Mango o Maracuyá", prices: [{ size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Huelvaçu", origin: "De Huelva a Foz do Iguaçu", description: "Gelato de Fresa · Coco laminado · Chía · Leche condensada", prices: [{ size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Copa del Chef", origin: "Destino sorpresa", description: "Receta de temporada", prices: [{ size: "M", amount: "11,90 €" }, { size: "L", amount: "12,90 €" }] },
			],
		},
		{
			id: "bowlacai",
			title: "Bowlaçaí",
			subtitle: "Tamaño S, M y L",
			note: "Todos nuestros Bowls incluyen Açaí Premium y Granola Signature.",
			items: [
				{ name: "Alegría", description: "Plátano · Arándanos · Coco · Leche condensada", prices: [{ size: "S", amount: "8,90 €" }, { size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Energía", description: "Plátano · Anacardos · Quinoa · Salsa de Cacahuete", prices: [{ size: "S", amount: "8,90 €" }, { size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Calma", description: "Fresa · Arándanos · Chía · Salsa de fresa", prices: [{ size: "S", amount: "8,90 €" }, { size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Frescura", description: "Kiwi · Plátano · Quinoa · Salsa de Mango o Maracuyá", prices: [{ size: "S", amount: "8,90 €" }, { size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Tentación", description: "Plátano · Oreo · Leche en polvo · Salsa de Chocolate", prices: [{ size: "S", amount: "8,90 €" }, { size: "M", amount: "10,90 €" }, { size: "L", amount: "12,90 €" }] },
				{ name: "Capricho", description: "Plátano · Anacardos · Pistacho · Salsa de Pistacho", prices: [{ size: "S", amount: "9,90 €" }, { size: "M", amount: "11,90 €" }, { size: "L", amount: "13,90 €" }] },
			],
		},
		{
			id: "creacai",
			title: "Creaçaí",
			subtitle: "Elige hasta 2 frutas, 2 toppings y 1 salsa",
			items: [
				{ name: "Creaçaí", description: "Tu bowl, a tu manera", prices: [{ size: "S", amount: "10,90 €" }, { size: "M", amount: "12,90 €" }, { size: "L", amount: "14,90 €" }] },
			],
			toppingGroups: [
				{ label: "Clásico · +1,00 €", items: ["Frutas", "Coco", "Chía", "Quinoa", "Cacahuete", "Anacardos", "Oreo", "Leche en polvo"] },
				{ label: "Premium · +1,50 €", items: ["Proteína Whey", "Proteína Vegetal", "Pistacho", "Nibs de cacao", "Crema de Pistacho", "Cacahuete", "Nutella", "Dulce de Leche"] },
			],
		},
		{
			id: "shakes",
			title: "Shakes",
			subtitle: "475 ml",
			items: [
				{ name: "Samba", description: "Açaí · Sorbete de Fresa · Salsa de Fresa", prices: [{ amount: "7,90 €" }] },
				{ name: "Bossa", description: "Açaí · Gelato de Vainilla · Salsa de Cacahuete", prices: [{ amount: "7,90 €" }] },
				{ name: "Lambada", description: "Açaí · Sorbete de Mango · Salsa de Maracuyá", prices: [{ amount: "7,90 €" }] },
				{ name: "Tango", description: "Leche · Gelato de Pistacho · Salsa de Dulce de Leche", prices: [{ amount: "8,90 €" }] },
				{ name: "Funk", description: "Leche · Gelato de Chocolate · Nutella", prices: [{ amount: "7,90 €" }] },
				{ name: "Swing", description: "Leche · Gelato Cheesecake · Salsa de Fresa", prices: [{ amount: "7,90 €" }] },
				{ name: "Tarantella", description: "Açaí · Sorbete de Limón · Leche condensada", prices: [{ amount: "7,90 €" }] },
				{ name: "Shake del Chef", description: "Sabores del Chef", prices: [{ amount: "8,90 €" }] },
			],
		},
		{
			id: "gelato",
			title: "Gelato",
			subtitle: "Por bolas o por peso",
			items: [
				{ name: "1 Bola", prices: [{ amount: "3,80 €" }] },
				{ name: "2 Bolas", prices: [{ amount: "4,80 €" }] },
				{ name: "3 Bolas", prices: [{ amount: "5,80 €" }] },
				{ name: "500 ml", prices: [{ amount: "14,90 €" }] },
				{ name: "1 Litro", prices: [{ amount: "24,90 €" }] },
				{ name: "Cucurucho Casero", prices: [{ amount: "+1,00 €" }] },
				{ name: "Cucurucho Premium", prices: [{ amount: "+2,00 €" }] },
				{ name: "Toppings", prices: [{ amount: "+1,00 €" }] },
			],
		},
		{
			id: "matcha",
			title: "Matcha",
			items: [
				{ name: "Matcha", prices: [{ amount: "3,50 €" }] },
				{ name: "Matcha Latte", prices: [{ amount: "4,50 €" }] },
				{ name: "Matcha Pistacho", prices: [{ amount: "5,20 €" }] },
				{ name: "Iced Matcha Latte", prices: [{ amount: "5,20 €" }] },
				{ name: "Iced Matcha", prices: [{ amount: "6,90 €" }] },
				{ name: "Affogaçaí", description: "Açaí · Fresa · Mango", prices: [{ amount: "5,90 €" }] },
			],
		},
		{
			id: "cafe",
			title: "Café",
			note: "Personaliza tu café con Chocolate · Pistacho · Dulce de Leche.",
			items: [
				{ name: "Espresso", prices: [{ amount: "2,20 €" }] },
				{ name: "Doble espresso", prices: [{ amount: "2,80 €" }] },
				{ name: "Americano", prices: [{ amount: "2,80 €" }] },
				{ name: "Flat White", prices: [{ amount: "3,50 €" }] },
				{ name: "Latte", prices: [{ amount: "3,50 €" }] },
				{ name: "Cappuccino", prices: [{ amount: "3,90 €" }] },
				{ name: "Iced Coffee", prices: [{ amount: "4,20 €" }] },
				{ name: "Iced Latte", prices: [{ amount: "4,90 €" }] },
				{ name: "Affogato", description: "Vainilla · Chocolate · Pistacho · Dulce de Leche", prices: [{ amount: "5,90 €" }] },
			],
		},
		{
			id: "begudes",
			title: "Bebidas",
			items: [
				{ name: "Agua mineral", prices: [{ amount: "2,00 €" }] },
				{ name: "Agua con Gas", prices: [{ amount: "2,20 €" }] },
				{ name: "Agua de Coco", prices: [{ amount: "3,50 €" }] },
				{ name: "Refrescos", prices: [{ amount: "2,80 €" }] },
			],
		},
	],

	en: [
		{
			id: "copacai",
			title: "Copaçaí",
			subtitle: "Size M and L",
			items: [
				{ name: "Amazalfi", origin: "From the Amazon to the Amalfi Coast", description: "Lemon Sorbet · Peanut · Puffed Quinoa · Condensed Milk", prices: [{ size: "M", amount: "€10.90" }, { size: "L", amount: "€12.90" }] },
				{ name: "Brasicilia", origin: "From the heart of Brazil to Sicily", description: "Pistachio Gelato · Crushed Pistachio · Cashews · Pistachio Sauce", prices: [{ size: "M", amount: "€11.90" }, { size: "L", amount: "€13.90" }] },
				{ name: "Bahiatorino", origin: "From Bahia to Turin", description: "Chocolate Gelato · Oreo · Cacao Nibs · Nutella", prices: [{ size: "M", amount: "€10.90" }, { size: "L", amount: "€12.90" }] },
				{ name: "Riocaracas", origin: "From Rio de Janeiro to Caracas", description: "Mango Sorbet · Shaved Coconut · Puffed Quinoa · Mango or Passion Fruit Sauce", prices: [{ size: "M", amount: "€10.90" }, { size: "L", amount: "€12.90" }] },
				{ name: "Huelvaçu", origin: "From Huelva to Foz do Iguaçu", description: "Strawberry Gelato · Shaved Coconut · Chia · Condensed Milk", prices: [{ size: "M", amount: "€10.90" }, { size: "L", amount: "€12.90" }] },
				{ name: "Copa del Chef", origin: "Surprise destination", description: "Seasonal recipe", prices: [{ size: "M", amount: "€11.90" }, { size: "L", amount: "€12.90" }] },
			],
		},
		{
			id: "bowlacai",
			title: "Bowlaçaí",
			subtitle: "Size S, M and L",
			note: "All our Bowls include Premium Açaí and Signature Granola.",
			items: [
				{ name: "Alegría", description: "Banana · Blueberries · Coconut · Condensed Milk", prices: [{ size: "S", amount: "€8.90" }, { size: "M", amount: "€10.90" }, { size: "L", amount: "€12.90" }] },
				{ name: "Energía", description: "Banana · Cashews · Quinoa · Peanut Sauce", prices: [{ size: "S", amount: "€8.90" }, { size: "M", amount: "€10.90" }, { size: "L", amount: "€12.90" }] },
				{ name: "Calma", description: "Strawberry · Blueberries · Chia · Strawberry Sauce", prices: [{ size: "S", amount: "€8.90" }, { size: "M", amount: "€10.90" }, { size: "L", amount: "€12.90" }] },
				{ name: "Frescura", description: "Kiwi · Banana · Quinoa · Mango or Passion Fruit Sauce", prices: [{ size: "S", amount: "€8.90" }, { size: "M", amount: "€10.90" }, { size: "L", amount: "€12.90" }] },
				{ name: "Tentación", description: "Banana · Oreo · Milk Powder · Chocolate Sauce", prices: [{ size: "S", amount: "€8.90" }, { size: "M", amount: "€10.90" }, { size: "L", amount: "€12.90" }] },
				{ name: "Capricho", description: "Banana · Cashews · Pistachio · Pistachio Sauce", prices: [{ size: "S", amount: "€9.90" }, { size: "M", amount: "€11.90" }, { size: "L", amount: "€13.90" }] },
			],
		},
		{
			id: "creacai",
			title: "Creaçaí",
			subtitle: "Choose up to 2 fruits, 2 toppings and 1 sauce",
			items: [
				{ name: "Creaçaí", description: "Your bowl, your way", prices: [{ size: "S", amount: "€10.90" }, { size: "M", amount: "€12.90" }, { size: "L", amount: "€14.90" }] },
			],
			toppingGroups: [
				{ label: "Classic · +€1.00", items: ["Fruits", "Coconut", "Chia", "Quinoa", "Peanut", "Cashews", "Oreo", "Milk Powder"] },
				{ label: "Premium · +€1.50", items: ["Whey Protein", "Plant Protein", "Pistachio", "Cacao Nibs", "Pistachio Cream", "Peanut", "Nutella", "Dulce de Leche"] },
			],
		},
		{
			id: "shakes",
			title: "Shakes",
			subtitle: "475 ml",
			items: [
				{ name: "Samba", description: "Açaí · Strawberry Sorbet · Strawberry Sauce", prices: [{ amount: "€7.90" }] },
				{ name: "Bossa", description: "Açaí · Vanilla Gelato · Peanut Sauce", prices: [{ amount: "€7.90" }] },
				{ name: "Lambada", description: "Açaí · Mango Sorbet · Passion Fruit Sauce", prices: [{ amount: "€7.90" }] },
				{ name: "Tango", description: "Milk · Pistachio Gelato · Dulce de Leche Sauce", prices: [{ amount: "€8.90" }] },
				{ name: "Funk", description: "Milk · Chocolate Gelato · Nutella", prices: [{ amount: "€7.90" }] },
				{ name: "Swing", description: "Milk · Cheesecake Gelato · Strawberry Sauce", prices: [{ amount: "€7.90" }] },
				{ name: "Tarantella", description: "Açaí · Lemon Sorbet · Condensed Milk", prices: [{ amount: "€7.90" }] },
				{ name: "Shake del Chef", description: "Chef's Flavors", prices: [{ amount: "€8.90" }] },
			],
		},
		{
			id: "gelato",
			title: "Gelato",
			subtitle: "By scoop or by weight",
			items: [
				{ name: "1 Scoop", prices: [{ amount: "€3.80" }] },
				{ name: "2 Scoops", prices: [{ amount: "€4.80" }] },
				{ name: "3 Scoops", prices: [{ amount: "€5.80" }] },
				{ name: "500 ml", prices: [{ amount: "€14.90" }] },
				{ name: "1 Liter", prices: [{ amount: "€24.90" }] },
				{ name: "Homemade Cone", prices: [{ amount: "+€1.00" }] },
				{ name: "Premium Cone", prices: [{ amount: "+€2.00" }] },
				{ name: "Toppings", prices: [{ amount: "+€1.00" }] },
			],
		},
		{
			id: "matcha",
			title: "Matcha",
			items: [
				{ name: "Matcha", prices: [{ amount: "€3.50" }] },
				{ name: "Matcha Latte", prices: [{ amount: "€4.50" }] },
				{ name: "Pistachio Matcha", prices: [{ amount: "€5.20" }] },
				{ name: "Iced Matcha Latte", prices: [{ amount: "€5.20" }] },
				{ name: "Iced Matcha", prices: [{ amount: "€6.90" }] },
				{ name: "Affogaçaí", description: "Açaí · Strawberry · Mango", prices: [{ amount: "€5.90" }] },
			],
		},
		{
			id: "cafe",
			title: "Coffee",
			note: "Customize your coffee with Chocolate · Pistachio · Dulce de Leche.",
			items: [
				{ name: "Espresso", prices: [{ amount: "€2.20" }] },
				{ name: "Double Espresso", prices: [{ amount: "€2.80" }] },
				{ name: "Americano", prices: [{ amount: "€2.80" }] },
				{ name: "Flat White", prices: [{ amount: "€3.50" }] },
				{ name: "Latte", prices: [{ amount: "€3.50" }] },
				{ name: "Cappuccino", prices: [{ amount: "€3.90" }] },
				{ name: "Iced Coffee", prices: [{ amount: "€4.20" }] },
				{ name: "Iced Latte", prices: [{ amount: "€4.90" }] },
				{ name: "Affogato", description: "Vanilla · Chocolate · Pistachio · Dulce de Leche", prices: [{ amount: "€5.90" }] },
			],
		},
		{
			id: "begudes",
			title: "Drinks",
			items: [
				{ name: "Still Water", prices: [{ amount: "€2.00" }] },
				{ name: "Sparkling Water", prices: [{ amount: "€2.20" }] },
				{ name: "Coconut Water", prices: [{ amount: "€3.50" }] },
				{ name: "Soft Drinks", prices: [{ amount: "€2.80" }] },
			],
		},
	],
};

// Metadatos del selector de idioma (solo para pintar los botones CA/ES/EN)
export const localeLabels: Record<Locale, string> = {
	ca: "CA",
	es: "ES",
	en: "EN",
};
