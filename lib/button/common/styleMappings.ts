export const VARIANTS = {
  background: {
    primary: 'bg-primary hover:not-disabled:bg-primary-700 active:bg-primary-800',
    white: 'bg-transparent hover:not-disabled:bg-secondary/10 active:bg-secondary/10',
    black: 'bg-black hover:not-disabled:bg-black-700 active:bg-black-800 ',
    secondary: 'bg-secondary hover:not-disabled:bg-secondary-700 active:bg-secondary-800 ',
    gradient:
      'bg-linear-(--gradient-50-50) hover:not-disabled:bg-linear-(--gradient-30-70) active:bg-linear-(--gradient-20-80)',
  },
  text: {
    primary: 'text-primary hover:not-disabled:text-primary-700 active:text-primary-800',
    white: 'text-white hover:not-disabled:text-white-700 active:text-white-800',
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
