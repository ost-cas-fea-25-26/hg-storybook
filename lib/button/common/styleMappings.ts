export const VARIANTS = {
  background: {
    primary: 'bg-primary hover:bg-primary-700 active:bg-primary-800 focus:outline-primary-200',
    white: 'bg-transparent hover:bg-secondary/10 active:bg-secondary/10 focus:outline-secondary/10',
    black: 'bg-black hover:bg-black-700 active:bg-black-800 focus:outline-black-200',
    secondary: 'bg-secondary hover:bg-secondary-700 active:bg-secondary-800 focus:outline-secondary-200',
    gradient:
      'bg-linear-(--gradient-50-50) hover:bg-linear-(--gradient-30-70) active:bg-linear-(--gradient-20-80) focus:outline-primary-200',
  },
  text: {
    primary: 'text-primary hover:text-primary-700 active:text-primary-800 focus:text-primary-800',
    white: 'text-white hover:text-white-700 active:text-white-800 focus:text-white-800',
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
