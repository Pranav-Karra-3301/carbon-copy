# Carbon Copy - Claude Code Guidelines

> **For Claude Code AI Assistant**
>
> This document defines how Claude should understand, navigate, and contribute to the Carbon Copy project.

---

## Project Identity

**Carbon Copy** is a vintage 1970s-inspired form UI component library for React. We recreate the authentic aesthetic of classic carbon copy forms and Chevrolet dealer order forms from that era.

### What We Are

- A **focused component library** for retro form UIs
- **Zero-dependency** (only React as a peer dependency)
- **TypeScript-first** with full type safety
- **Accessible** with ARIA compliance and keyboard navigation
- **Themeable** via CSS custom properties

### What We Are NOT

- A general-purpose UI framework
- A design system with dozens of components
- A replacement for Tailwind, MUI, or similar libraries

### Core Values

1. **Authenticity** - Every component should feel like it belongs on a 1970s form
2. **Simplicity** - Minimal API surface, maximum utility
3. **Safety** - Type-safe, accessible, well-tested code
4. **Documentation** - Every feature must be documented with examples

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 19+ |
| Language | TypeScript 5+ |
| Styling | CSS Modules with CSS Custom Properties |
| Bundler | tsup (library), Next.js (docs) |
| Docs Site | Next.js 16+ |
| Linting | ESLint 9+ |
| Font | Berkeley Mono (typewriter aesthetic) |

---

## Project Structure

```
carbon-copy/
├── src/
│   ├── lib/                    # COMPONENT LIBRARY SOURCE
│   │   ├── components/         # React components (18 total)
│   │   │   ├── VintageTable/   # Table with Row, Cell, Header
│   │   │   ├── FormField/      # Text inputs with variants
│   │   │   ├── Checkbox/       # X-mark checkboxes
│   │   │   ├── DenseGrid/      # Zero-gap grid layouts
│   │   │   ├── FormLayout/     # Pre-built form templates
│   │   │   ├── FormSection/    # Collapsible sections
│   │   │   └── ...             # Other components
│   │   ├── tokens/             # Design tokens
│   │   │   ├── colors.ts       # Color palette
│   │   │   ├── spacing.ts      # Spacing scale
│   │   │   └── typography.ts   # Font settings
│   │   ├── theme/              # Theme system
│   │   │   └── index.ts        # Default themes
│   │   ├── utils/              # Utilities
│   │   │   └── classNames.ts   # cn() helper
│   │   └── index.ts            # Main exports
│   └── app/                    # DOCUMENTATION SITE
│       ├── docs/               # Documentation pages
│       │   ├── components/     # Component docs
│       │   └── examples/       # Layout examples
│       ├── page.tsx            # Showcase (1970 Chevrolet form)
│       └── globals.css         # Global styles
├── dist/                       # Built library output
├── public/                     # Static assets & fonts
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── next.config.ts
```

---

## Component Pattern

Every component follows this exact pattern. **Do not deviate.**

```tsx
'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils';
import styles from './ComponentName.module.css';

export interface ComponentNameProps {
  /** Brief description of the prop */
  variant?: 'default' | 'dense' | 'underline';
  /** Additional CSS classes */
  className?: string;
  /** Child elements */
  children?: React.ReactNode;
}

export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    const id = useId();

    return (
      <div
        ref={ref}
        id={id}
        className={cn(styles.component, styles[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';
```

### Required Patterns

| Pattern | Requirement |
|---------|-------------|
| `'use client'` | Always include for Next.js compatibility |
| `forwardRef` | Use for all components that render DOM elements |
| `useId` | Use for generating unique IDs for accessibility |
| `cn()` | Use for class composition (from `../../utils`) |
| `displayName` | Always set for debugging |
| JSDoc comments | Required for all props |
| Default props | Destructure with defaults in function signature |
| Spread `...props` | Always support arbitrary HTML attributes |

---

## Styling Guidelines

### CSS Modules

```css
/* ComponentName.module.css */
.component {
  /* Use CSS variables for themeable properties */
  color: var(--cc-text-primary);
  font-family: var(--cc-font-typewriter);
  border: 1px solid var(--cc-border-primary);
}

.default { /* variant styles */ }
.dense { /* variant styles */ }
```

### Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--cc-text-primary` | `#324D88` | Navy blue main text |
| `--cc-text-red` | `#8B1538` | Maroon accent text |
| `--cc-bg-form` | `#A8D5D8` | Light teal form background |
| `--cc-bg-paper` | `#F5F2E8` | Cream paper background |
| `--cc-border-primary` | `#324D88` | Primary borders |

### Typography

- **Primary font**: `var(--cc-font-typewriter)` (Berkeley Mono)
- **Letter spacing**: `0.08em` for typewriter effect
- **Font weights**: 400 (normal), 500 (medium), 700 (bold)

---

## Development Workflow

### Commands

```bash
# Development
npm run dev          # Start docs site at localhost:3000
npm run lint         # Run ESLint

# Building
npm run build:lib    # Build component library (outputs to dist/)
npm run build        # Build documentation site

# Production
npm start            # Start production server
```

### Build Outputs

- `dist/index.js` - CommonJS bundle
- `dist/index.mjs` - ES Module bundle
- `dist/index.css` - Bundled styles
- `dist/index.d.ts` - TypeScript declarations

---

## Commit Conventions

Use **Conventional Commits**:

```
feat: add DirectionalArrow component
fix: correct FormField alignment in Safari
docs: update DenseGrid examples
style: format FormSection component
refactor: simplify Checkbox state logic
test: add FormField unit tests
chore: update tsup config
```

### Commit Message Rules

1. Use imperative mood ("add" not "added")
2. Keep subject under 72 characters
3. No period at end of subject
4. Capitalize first letter
5. Reference issue numbers when applicable: `fix: resolve checkbox focus (#42)`

---

## Safety Requirements

### NEVER Do These

1. **Never introduce dependencies** - Library must remain zero-dependency
2. **Never break TypeScript strict mode** - No `any` types, no `@ts-ignore`
3. **Never skip accessibility** - All interactive elements need ARIA attributes
4. **Never inline styles** - Use CSS Modules and CSS variables
5. **Never modify design tokens** without discussion - They define the brand
6. **Never remove or rename exports** - This breaks consumers
7. **Never commit without linting** - Run `npm run lint` first
8. **Never push directly to main** - Always use feature branches

### Always Do These

1. **Always use TypeScript** - Full types for all props and functions
2. **Always forward refs** - Use `forwardRef` for DOM-rendering components
3. **Always support className** - Allow style customization
4. **Always spread props** - Support arbitrary HTML attributes
5. **Always test builds** - Run `npm run build:lib` before committing
6. **Always document** - Update docs when adding/changing components

---

## Bug Fixing Workflow

1. **Reproduce** - Verify the bug exists with a minimal example
2. **Locate** - Find the component/file causing the issue
3. **Test** - Write a test case that fails (if testing framework exists)
4. **Fix** - Make the minimal change to fix the issue
5. **Verify** - Ensure the fix works and doesn't break other things
6. **Document** - Update docs if behavior changed

---

## Adding New Components

1. Create directory: `src/lib/components/ComponentName/`
2. Create files:
   - `index.tsx` - Component implementation
   - `ComponentName.module.css` - Styles
3. Export from `src/lib/index.ts`
4. Add documentation page: `src/app/docs/components/component-name/page.tsx`
5. Update docs navigation in `src/app/docs/layout.tsx`
6. Build and test: `npm run build:lib && npm run build`

---

## Code Generation Guidelines

When generating code for this project:

### DO

- Follow the exact component pattern shown above
- Use existing design tokens from `src/lib/tokens/`
- Match the vintage 1970s aesthetic
- Include JSDoc comments for all public APIs
- Generate corresponding CSS Module files
- Consider print styles for form components

### DON'T

- Add new npm dependencies
- Use inline styles or Tailwind classes
- Skip TypeScript types
- Generate code without accessibility attributes
- Create components that don't match the retro theme
- Forget the `'use client'` directive

---

## Key Files Reference

| Purpose | File |
|---------|------|
| Main exports | `src/lib/index.ts` |
| Color tokens | `src/lib/tokens/colors.ts` |
| Typography tokens | `src/lib/tokens/typography.ts` |
| Theme system | `src/lib/theme/index.ts` |
| Class utility | `src/lib/utils/classNames.ts` |
| Global styles | `src/app/globals.css` |
| Showcase demo | `src/app/page.tsx` |
| Docs layout | `src/app/docs/layout.tsx` |
| Build config | `tsup.config.ts` |

---

## Quick Reference

```bash
# Start developing
npm run dev

# Check types and build
npm run build:lib

# Lint code
npm run lint

# Full build (lib + docs)
npm run build:lib && npm run build
```

**Remember**: This is a component library for authentic 1970s form aesthetics. Every contribution should enhance that vision while maintaining code quality, accessibility, and type safety.
