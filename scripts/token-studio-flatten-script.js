import fs from 'node:fs';

const input = JSON.parse(fs.readFileSync('./tokens.json', 'utf8'));

const output = {
    ...(input['Primitive Tokens/value'] ?? {}),
    ...(input['Semantic Tokens/Value'] ?? {}),
    desktop: input['Typography/Desktop'] ?? {},
    mobile: input['Typography/Mobile'] ?? {}
};

fs.mkdirSync('./tokens', { recursive: true });
fs.writeFileSync('./tokens/build-tokens.json', JSON.stringify(output, null, 2));

console.log('✅ tokens/build-tokens.json erstellt');
