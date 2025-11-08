export const VARIANTS = {
  background: {
    primary: 'bg-primary hover:bg-primary-700 active:bg-primary-800',
    white: 'bg-transparent hover:bg-secondary/10 active:bg-secondary/10',
    black: 'bg-black hover:bg-black-700 active:bg-black-800',
    secondary: 'bg-secondary hover:bg-secondary-700 active:bg-secondary-800',
    gradient: 'bg-linear-(--gradient-50-50) hover:bg-linear-(--gradient-30-70) active:bg-linear-(--gradient-20-80)',
  },
  text: {
    primary: 'text-primary hover:text-primary-700 active:text-primary-800',
    white: 'text-white hover:text-white-700 active:text-white-800',
    black: 'text-black',
    secondary: 'text-secondary',
    gradient: 'text-linear-(--gradient-50-50)',
  },
  icon: {
    primary: 'primary',
    white: 'white',
    black: 'black',
    secondary: 'secondary',
    gradient: 'gradient',
  },
};
