# Build and Lint Check

Run a complete build and lint check to verify the codebase is healthy.

## Steps to Execute

1. Run ESLint to check for code issues:
```bash
npm run lint
```

2. Build the component library to verify TypeScript compiles:
```bash
npm run build:lib
```

3. Optionally, build the full documentation site:
```bash
npm run build
```

## What to Check

- [ ] No ESLint errors or warnings
- [ ] TypeScript compiles without errors
- [ ] All exports are correctly defined
- [ ] CSS Modules are properly imported
- [ ] Build outputs are generated in `dist/`

## Common Issues

### "Cannot find module" errors
- Check that the import path is correct
- Verify the component is exported from index.ts

### TypeScript errors
- Ensure all props have type definitions
- Check for missing type imports
- Verify forwardRef generic types

### CSS Module errors
- Ensure .module.css file exists
- Check that class names match between TSX and CSS

## After Fixing Issues

Run the checks again until all pass:
```bash
npm run lint && npm run build:lib
```
