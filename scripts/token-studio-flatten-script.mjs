import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const input = JSON.parse(fs.readFileSync(path.join(projectRoot, 'tokens/figma-tokens.json'), 'utf8'));

const output = {
    ...(input['primitive/tokens'] ?? {}),
    ...(input['semantic/tokens'] ?? {}),
    ...(input['typography/tokens'] ?? {})
};

fs.mkdirSync(path.join(projectRoot, 'tokens'), { recursive: true });
fs.writeFileSync(path.join(projectRoot, 'tokens/design-tokens.json'), JSON.stringify(output, null, 2));

console.log('✅ tokens/design-tokens.json erstellt');
