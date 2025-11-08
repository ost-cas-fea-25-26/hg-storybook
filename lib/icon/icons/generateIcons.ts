import fs from 'fs';
import path from 'path';

const iconSizeXS = 16;
const iconSizeS = 28;
const iconSizeM = 40;
const iconSizeL = 64;
const iconSizeXL = 80;
const iconColorDefault = '#475569';
const iconSizeDefault = 'm';

const svgs = fs
  .readdirSync(path.resolve(process.cwd(), 'lib/icon/icons/'))
  .filter((fileName) => fileName.endsWith('svg'));
const extentionless = (s: string) => s.slice(0, s.length - 4);
const pascalCase = (s: string) =>
  s.indexOf('_') > -1
    ? s
        .split('_')
        .reduce((acc, str) => acc.charAt(0).toUpperCase() + acc.slice(1) + str.charAt(0).toUpperCase() + str.slice(1))
    : s.charAt(0).toUpperCase() + s.slice(1);
let output = '/** generated file, do not edit manually - run "npm run generate" instead */\n';
output += "import React from 'react'\n";
output += "import { IconSize } from '@/common/types.ts';\n";
output += 'export type IconProps = { size?: IconSize; color?: string, className?: string }\n';
output += `const sizes: Record<IconSize, number> = {xs: ${iconSizeXS}, s:${iconSizeS}, m:${iconSizeM}, l:${iconSizeL}, xl:${iconSizeXL}};\n`;

for (const svg of svgs) {
  output += `import ${pascalCase(extentionless(svg))}Svg from "./icons/${svg}?react";\n`;
}
for (const svg of svgs) {
  output += `export function ${pascalCase(extentionless(svg))}({size = '${iconSizeDefault}', color = '${iconColorDefault}', ...rest}: IconProps){`;
  output += `  return <${pascalCase(extentionless(svg))}Svg width={sizes[size]} height={sizes[size]} color={color} {...rest}/>;}\n`;
}
fs.writeFileSync(path.resolve(process.cwd(), 'lib/icon/index.tsx'), output);
