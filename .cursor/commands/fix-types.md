# Fix TypeScript Errors

Diagnose and fix TypeScript compilation errors.

## Diagnosis Steps

1. Run the build to see all errors:
```bash
npm run build:lib
```

2. For each error, identify the category:
   - Missing type definitions
   - Incorrect import paths
   - Incompatible types
   - Missing exports

## Common Fixes

### Missing forwardRef types

```tsx
// Wrong
const Component = forwardRef((props, ref) => { ... });

// Correct
const Component = forwardRef<HTMLDivElement, ComponentProps>(
  (props, ref) => { ... }
);
```

### Missing prop types

```tsx
// Wrong
interface Props {
  onChange: Function;  // Too vague
}

// Correct
interface Props {
  onChange?: (value: string) => void;
}
```

### Event handler types

```tsx
// Wrong
const handleClick = (e) => { ... };

// Correct
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { ... };
```

### Ref types

```tsx
// Wrong
const ref = useRef(null);

// Correct
const ref = useRef<HTMLInputElement>(null);
```

### Import errors

```tsx
// Check path is correct
import { cn } from '../../utils';  // Not '../utils' or './utils'

// Check export exists
import { Component } from '@/lib';  // Must be exported from index.ts
```

## After Fixing

1. Run build again:
```bash
npm run build:lib
```

2. Run lint:
```bash
npm run lint
```

3. Test in dev server:
```bash
npm run dev
```

## Rules

- Never use `any` - find the correct type
- Never use `@ts-ignore` - fix the underlying issue
- Always use strict null checks
- Prefer specific types over generic ones
