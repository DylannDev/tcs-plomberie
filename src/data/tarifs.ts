export interface Tarif {
  title: string;
  price: number;
  from: boolean;
}

export interface Tarifs {
  id?: string;
  label: string;
  description: string;
  tarifs: Tarif[];
}

export const tarifs: Tarifs[] = [
  {
    id: "chauffe-eau",
    label: "Chauffe-eau",
    description: "Installation et remplacement de chauffe-eau électriques",
    tarifs: [
      {
        title: "Remplacement ballon d’eau chaude ATLANTIC",
        price: 600,
        from: true,
      },
      {
        title: "Remplacement chauffe-eau électrique THERMOR",
        price: 650,
        from: true,
      },
      {
        title: "Remplacement ballon d’eau chaude ARISTON",
        price: 350,
        from: true,
      },
    ],
  },
  {
    id: "debouchage",
    label: "Débouchage Canalisation",
    description: "Débouchage de canalisations bouchées (évier, lavabo...)",
    tarifs: [
      { title: "Débouchage évier", price: 200, from: true },
      { title: "Débouchage lavabo", price: 300, from: true },
    ],
  },
  {
    id: "fuites-eau",
    label: "Fuites d'eau",
    description:
      "Recherche et réparation de fuites d'eau sur installations sanitaires",
    tarifs: [
      { title: "Recherche de fuite visuelle", price: 150, from: true },
      {
        title: "Recherche de fuite acoustique et caméra thermique",
        price: 650,
        from: false,
      },
      { title: "Remplacement de joint", price: 90, from: false },
      { title: "Réparation fuite d’eau (générale)", price: 150, from: false },
      { title: "Réparation fuite évier", price: 150, from: false },
      { title: "Réparation fuite WC", price: 150, from: false },
      { title: "Réparation fuite douche", price: 130, from: false },
      { title: "Réparation fuite baignoire", price: 190, from: false },
      { title: "Fuite sur robinet d’arrêt", price: 100, from: false },
    ],
  },
  {
    id: "toilettes",
    label: "Toilettes",
    description: "Remplacement et réparation d’équipements WC",
    tarifs: [
      { title: "Remplacement WC", price: 300, from: true },
      { title: "Changement chasse d’eau + flotteur", price: 200, from: false },
      { title: "Remplacement flotteur WC", price: 130, from: false },
      { title: "Remplacement mécanisme toilette", price: 200, from: false },
      { title: "Remplacement robinet d’arrêt WC", price: 130, from: false },
      { title: "Remplacement réservoir WC", price: 300, from: false },
      {
        title: "Remplacement cuvette WC indépendante",
        price: 250,
        from: false,
      },
      { title: "Remplacement cuvette WC suspendue", price: 250, from: false },
      {
        title: "Remplacement réservoir WC haut avec mécanisme",
        price: 270,
        from: false,
      },
    ],
  },
  {
    id: "robinetterie",
    label: "Robinetterie",
    description: "Remplacement de robinets, bondes, mitigeurs",
    tarifs: [
      { title: "Remplacement robinet évier", price: 200, from: false },
      { title: "Remplacement robinet douche", price: 250, from: false },
      { title: "Remplacement robinet lavabo", price: 190, from: false },
      { title: "Remplacement robinet baignoire", price: 300, from: false },
      { title: "Remplacement robinet (général)", price: 150, from: false },
      { title: "Remplacement bonde lavabo", price: 130, from: false },
      {
        title: "Remplacement robinet machine à laver",
        price: 130,
        from: false,
      },
      { title: "Dépose et pose d’un évier", price: 480, from: true },
      { title: "Remplacement robinet mitigeur", price: 200, from: false },
      { title: "Remplacement robinet d’arrêt", price: 120, from: false },
    ],
  },
];
