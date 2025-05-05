#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const moduleName = args[0];

if (!moduleName) {
  console.error(
    "❌ Vui lòng nhập tên container. Ví dụ: yarn generate-container Login"
  );
  process.exit(1);
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const name = capitalize(moduleName);
const baseDir = path.join(__dirname, "..", "src", "containers", name);

// Template files
const containerTemplate = `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './${name}.styles';

export const ${name}Container: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>${name} Screen</Text>
    </View>
  );
};
`;

const typesTemplate = `export interface ${name}Props {
  // Định nghĩa props nếu có
}
`;

const hooksTemplate = `// Custom hooks cho ${name}

export const use${name} = () => {
  // TODO: Viết hook logic ở đây
};
`;

const stylesTemplate = `import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
`;

const indexTemplate = `export * from './${name}.Container';
export * from './${name}.types';
export * from './${name}.hooks';
`;

// Tạo thư mục
if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });

// Ghi file
fs.writeFileSync(
  path.join(baseDir, `${name}.Container.tsx`),
  containerTemplate
);
fs.writeFileSync(path.join(baseDir, `${name}.types.ts`), typesTemplate);
fs.writeFileSync(path.join(baseDir, `${name}.hooks.ts`), hooksTemplate);
fs.writeFileSync(path.join(baseDir, `${name}.styles.ts`), stylesTemplate);
fs.writeFileSync(path.join(baseDir, `index.ts`), indexTemplate);

console.log(`✅ Đã tạo container "${name}" tại: src/containers/${name}`);
