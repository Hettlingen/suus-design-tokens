# suus-design-tokens

Design tokens for the SUUS project, built with Style Dictionary.

## Installation

To use these design tokens in your project, install the package from npm:

```bash
npm install suus-design-tokens
```

## Usage in a React TypeScript Project

You can import the design tokens in different formats depending on your needs.

### Importing CSS Variables

Import the CSS file to use the tokens as CSS custom properties:

```typescript
import 'suus-design-tokens/css';
```

Then use them in your CSS or styled components:

```css
.my-component {
  color: var(--color-brand-primary);
  padding: var(--spacing-small);
}
```

### Importing JavaScript Object

Import the tokens as a JavaScript object:

```typescript
import { tokens } from 'suus-design-tokens/tokens';
```

Use in your React components:

```tsx
import React from 'react';
import { tokens } from 'suus-design-tokens/tokens';

const MyComponent: React.FC = () => {
  return (
    <div
      style={{
        color: tokens.color.brand.primary.$value,
        padding: tokens.spacing.small.$value,
        borderRadius: tokens.radius.small.$value,
      }}
    >
      Hello World
    </div>
  );
};

export default MyComponent;
```

### Importing JSON



## Development

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Building the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the tokens:
   ```bash
   npm run build
   ```

   This will generate the output files in the `dist/` directory.

### Publishing to npm

1. Ensure you are logged in to npm:
   ```bash
   npm login
   ```

2. Update the version in `package.json` (e.g., patch, minor, or major):
   ```bash
   npm version patch
   ```

3. Publish the package:
   ```bash
   npm run publish
   ```

   Note: The `prepublishOnly` script will automatically run the build before publishing.

### Project Structure

- `tokens/`: Source token files organized by category (primitive, semantic, component)
- `style-dictionary.config.mjs`: Configuration for Style Dictionary
- `dist/`: Generated output files (CSS, JS, JSON)

## Contributing

1. Make changes to the token files in `tokens/`
2. Run `npm run build` to generate updated outputs
3. Test your changes
4. Commit and push your changes
