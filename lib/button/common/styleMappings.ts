export const VARIANTS = {
  button: {
    primary: 'bg-primary hover:not-disabled:bg-primary-700 active:bg-primary-800 text-white',
    white:
      'border-secondary-300 border-2 border-solid focus:border-transparent bg-transparent hover:not-disabled:bg-secondary/10 active:bg-secondary/10 text-black',
    black: 'bg-black hover:not-disabled:bg-black-700 active:bg-black-800 text-white',
    secondary: 'bg-secondary hover:not-disabled:bg-secondary-700 active:bg-secondary-800 text-white',
    gradient:
      'bg-linear-(--gradient-50-50) hover:not-disabled:bg-linear-(--gradient-30-70) active:bg-linear-(--gradient-20-80) text-white',
  },
  iconColor: {
    primary: 'text-white',
    white: 'text-black',
    black: 'text-white',
    secondary: 'text-white',
    gradient: 'text-white',
  },
  icon: {
    primary: 'primary',
    white: 'white',
    black: 'black',
    secondary: 'secondary',
    gradient: 'gradient',
  },
}
