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
let output = "import React from 'react'\n";
output += "export type IconProps = { size?: 'xs' | 's' | 'm' | 'l' | 'xl'; color?: string }\n";
output += `const getSize = (size: 'xs' | 's' | 'm' | 'l' | 'xl'): number => {switch (size) {case 'm':return ${iconSizeM};case 'l':return ${iconSizeL};case 's':return ${iconSizeS};case 'xl':return ${iconSizeXL};case 'xs':return ${iconSizeXS};}};
`;

for (const svg of svgs) {
  output += `import ${pascalCase(extentionless(svg))}Svg from "./icons/${svg}?react";\n`;
}
for (const svg of svgs) {
  output += `export function ${pascalCase(extentionless(svg))}({size = ${iconSizeDefault}, color = '${iconColorDefault}'}: IconProps){`;
  output += `  return <${pascalCase(extentionless(svg))}Svg width={getSize(size)} height={getSize(size)} color={color} />;}\n`;
}
fs.writeFileSync(path.resolve(process.cwd(), 'lib/icon/index.tsx'), output);
