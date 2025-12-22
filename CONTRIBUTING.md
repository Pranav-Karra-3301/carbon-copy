# Contributing to Carbon Copy

First off, thank you for considering contributing to Carbon Copy! It's people like you that make Carbon Copy such a great tool.

## Code of Conduct

This project and everyone participating in it is governed by common sense and respect. Please be kind and constructive.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** - Include code snippets or links
- **Describe the behavior you observed** and what you expected
- **Include screenshots** if relevant
- **Environment details** - OS, browser, React version, etc.

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the proposed feature
- **Include examples** of how the feature would be used
- **Explain why this enhancement would be useful**

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue the pull request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/carbon-copy.git
cd carbon-copy

# Install dependencies
npm install

# Start the development server
npm run dev

# Build the library
npm run build:lib

# Build the documentation site
npm run build
```

## Project Structure

```
carbon-copy/
├── src/
│   ├── lib/              # Component library source
│   │   ├── components/   # React components
│   │   ├── tokens/       # Design tokens
│   │   ├── theme/        # Theme system
│   │   └── index.ts      # Main exports
│   └── app/              # Documentation site
│       ├── docs/         # Documentation pages
│       └── page.tsx      # Showcase page
├── public/               # Static assets
└── package.json
```

## Component Guidelines

### Writing Components

- Use TypeScript for type safety
- Follow the existing naming conventions
- Keep components focused and single-responsibility
- Use CSS Modules for styling
- Support all standard HTML attributes via spread props
- Include proper TypeScript types and JSDoc comments

### Example Component Structure

```tsx
'use client';

import React from 'react';
import styles from './MyComponent.module.css';

export interface MyComponentProps {
  /** Description of the prop */
  variant?: 'default' | 'primary';
  /** Additional CSS classes */
  className?: string;
  /** Child elements */
  children?: React.ReactNode;
}

export function MyComponent({ 
  variant = 'default',
  className,
  children,
  ...props 
}: MyComponentProps) {
  return (
    <div 
      className={`${styles.component} ${styles[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  );
}
```

### Styling Guidelines

- Use CSS Modules for component-specific styles
- Use CSS custom properties (variables) for themeable values
- Follow the vintage 1970s aesthetic
- Prefer the Berkeley Mono font for typewriter text
- Use the established color palette:
  - Primary text: `#324D88` (navy blue)
  - Accent text: `#8B1538` (maroon red)
  - Borders: `#324D88`
  - Form background: `#A8D5D8` (light blue)
  - Paper background: `#F5F2E8` (cream)

## Documentation

When adding or modifying components:

1. Update the component's documentation page in `src/app/docs/components/`
2. Include live examples with code snippets
3. Document all props in the props table
4. Add usage examples and best practices
5. Update the main documentation index if adding new components

## Testing

```bash
# Run linter
npm run lint

# Type checking
npm run build:lib
```

## Commit Guidelines

We use conventional commits for clear commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```
feat: add DirectionalArrow component
fix: correct FormField alignment in Safari
docs: update DenseGrid examples
```

## Questions?

Feel free to open an issue with the `question` label or reach out to [@pranavkarra](https://github.com/Pranav-Karra-3301).

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

