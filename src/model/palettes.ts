
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
  { 
    background: "#FD6509",
    title: "#D53829",
    icon: "#842E5C",
    subtitle: "#582540",
    arrow: '#1C1C2B',
  },
  { 
    background: "#7E3F36",
    title: "#D53829",
    icon: "#A5C537",
    subtitle: "#582540",
    arrow: '#E6D7BB',
  },
  { 
    background: "#463440",
    title: "#E8D895",
    icon: "#CCB125",
    subtitle: "#CA5937",
    arrow: '#AE3E4D',
  },
  { 
    background: "#A0363A",
    title: "#CDA188",
    icon: "#4B9ACF",
    subtitle: "#57B6BE",
    arrow: '#F9F9F6',
  },
  { 
    background: "#FCA109",
    title: "#F6F288",
    icon: "#19D0FA",
    subtitle: "#FCA109",
    arrow: '#17D8DE',
  },
  { 
    background: "#E5322B",
    title: "#F3A321",
    icon: "#D6DA41",
    subtitle: "#2AAA70",
    arrow: '#17D8DE',
  },
  { 
    background: "#E12822",
    title: "#E0D06A",
    icon: "#335A52",
    subtitle: "#7A1911",
    arrow: '#17D8DE',
  },
  { 
    background: "#DEB15A",
    title: "#F8F4E9",
    icon: "#4A1A25",
    subtitle: "#7A1911",
    arrow: '#8D302B',
  },
  { 
    background: "#fff",
    title: "#000",
    icon: "#2D0A57",
    subtitle: "#000",
    arrow: '#000',
  },
];

export const getPalete = () => {
  const next = Palettes[Math.floor(Math.random() * Palettes.length)];
  return next;
}