# Contribution Guidelines for HG-Storybook

## Folder Structure

- .storybook 
- lib 
  - index.ts 
  - [componentName]
    - Component.tsx
    - Component.stories.tsx
    - additional Component related files


## Coding
- max lines per component file: 200
- define component Props in same file as component

### Syntax Preferences

- Component declaration: 
    ```tsx
    export default function Component<T>({
      destructure, 
      non, 
      nested, 
      props, 
      only 
    }: Props<T>) {
      // ...
    }
  ```
- avoid nested destructuring, e.g:
  - DON'T: `const { address: { street : { name, id }} } = person`
  - DO: `const { name, id } = person.address.street`
- rename ambiguously named properties when destructuring, e.g:
  - DON'T: `const { name, id } = person.address.street`
  - DO: `const { name: streetName, id: streetId } = person.address.street`
- prefer more legible syntaxes over less-legible syntaxes, e.g:
  - DON'T: `if (!!onClick)`
  - DO: `if (Boolean(onClick))`
  - DON'T: `~~floatingPointNumber`
  - DO: `Math.floor(floatingPointNumber)`
  
## Testing
- Components must have Component Test coverage > 80% 
- `utils` functions must have Unit Test coverage > 80%
- Snapshot Tests must be visual (format .png or .jpg)
