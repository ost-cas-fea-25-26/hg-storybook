import fs from 'fs';
import path from 'path';

const svgs = fs
  .readdirSync(path.resolve(process.cwd(), 'lib/icon/icons/'))
  .filter((fileName) => fileName.endsWith('svg'));
const extentionless = (s: string) => s.slice(0, s.length - 4);
const pascalCase = (s: string) =>
  s.split('_').reduce((acc, s) => acc.charAt(0).toUpperCase() + acc.slice(1) + s.charAt(0).toUpperCase() + s.slice(1));

let output = "import React from 'react';\n";

for (const svg of svgs) {
  output += `import ${pascalCase(extentionless(svg))} from "./${svg}?react";\n`;
}
output += 'type IconProps={height:number;width:number;color?:string;fill?:string;stroke?:string;};';
output += 'const ICONS: Record<IconType, React.FC<IconProps>> = {';
for (const svg of svgs) {
  output += `${extentionless(svg)}: ${pascalCase(extentionless(svg))},`;
}
output += '};export enum IconType {';
for (const svg of svgs) {
  output += `${extentionless(svg).toUpperCase()} = '${extentionless(svg)}',`;
}
output += '}export function getIcon(icon: IconType): React.FC<IconProps>{return ICONS[icon];}';
fs.writeFileSync(path.resolve(process.cwd(), 'lib/icon/icons/index.ts'), output);
