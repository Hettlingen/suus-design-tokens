import fs from 'node:fs';

const inputPath = './tokens/figma/figma-tokens.json';
const outputPath = './tokens/design-tokens.json';

const input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

const primitiveTokens = input['primitive/tokens'] ?? {};
const semanticTokens = input['semantic/tokens'] ?? {};
const typographyTokens = input['typography/tokens'] ?? {};

const output = {
    ...primitiveTokens,
    ...semanticTokens,
    ...typographyTokens
};

fs.mkdirSync('./tokens', { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log('✅ tokens/design-tokens.json wurde sauber erstellt');
