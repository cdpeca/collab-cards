
export interface PaletteModel {
  background: string,
  title: string,
  icon: string,
  subtitle: string,
  arrow: string,
};


export const Palettes: PaletteModel[] = [
  { 
    background: "#ffd303",
    title: "#000",
    icon: "#0336FF",
    subtitle: "#ff0266",
    arrow: '#fff',
  },
  { 
    background: "#673ab7",
    title: "#fff",
    icon: "#ffd149",
    subtitle: "#fff",
    arrow: 'green',
  },
];

export const getPalete = () => {
  const next = Palettes[Math.floor(Math.random() * Palettes.length)];
  return next;
}