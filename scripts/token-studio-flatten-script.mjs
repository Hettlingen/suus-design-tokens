import fs from 'node:fs';

const inputPath = './tokens/figma/figma-tokens.json';
const outputPath = './tokens/design-tokens.json';

const input = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

console.log('Token Sets im Export:', Object.keys(input));

function deepMerge(...objects) {
    const result = {};

    for (const object of objects) {
        if (!object || typeof object !== 'object') continue;

        for (const [key, value] of Object.entries(object)) {
            const existingValue = result[key];

            const shouldDeepMerge =
                existingValue &&
                typeof existingValue === 'object' &&
                !Array.isArray(existingValue) &&
                value &&
                typeof value === 'object' &&
                !Array.isArray(value) &&
                !('$value' in value);

            if (shouldDeepMerge) {
                result[key] = deepMerge(existingValue, value);
            } else {
                result[key] = value;
            }
        }
    }

    return result;
}

const primitiveTokens = input['primitive/tokens'] ?? {};
const modeTokens = input['mode/desktop'] ?? {};
const semanticTokens = input['semantic/tokens'] ?? {};
const typographyTokens = input['typography/tokens'] ?? {};

const output = deepMerge(
    primitiveTokens,
    modeTokens,
    semanticTokens,
    typographyTokens
);

fs.mkdirSync('./tokens', { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log('✅ tokens/design-tokens.json wurde sauber erstellt');
