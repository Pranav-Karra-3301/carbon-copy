# Carbon Copy - AI Agent Guidelines

> **For GitHub Copilot, Codex, and AI Coding Assistants**
>
> This document provides context and guidelines for AI agents working on the Carbon Copy codebase.

---

## Project Overview

**Carbon Copy** is a React component library that recreates the authentic aesthetic of 1970s carbon copy forms, inspired by vintage Chevrolet dealer order forms.

### Package Information

```
Name:     @prnv/carbon-copy
Version:  0.0.1
License:  MIT
Author:   Pranav Karra
```

### Project Philosophy

1. **Authenticity First** - Components should look and feel like genuine 1970s forms
2. **Zero Dependencies** - The library has no runtime dependencies (React is a peer dependency)
3. **Type Safety** - Full TypeScript support with strict mode enabled
4. **Accessibility** - ARIA-compliant, keyboard-navigable components
5. **Simplicity** - Minimal API surface, intuitive usage

---

## Tech Stack

- **React** 19+ (peer dependency)
- **TypeScript** 5+ (strict mode)
- **CSS Modules** (component-scoped styling)
- **CSS Custom Properties** (theming system)
- **tsup** (library bundler)
- **Next.js** 16+ (documentation site)
- **ESLint** 9+ (code quality)

---

## Directory Structure

```
src/
├── lib/                        # Component library
│   ├── components/             # 18 React components
│   │   ├── VintageTable/       # Tables with Row, Cell, Header
│   │   ├── FormField/          # Input fields (underline, box, ghost)
│   │   ├── Checkbox/           # X-mark and checkmark variants
│   │   ├── DenseGrid/          # Zero-gap grid layouts
│   │   ├── FormLayout/         # Pre-built form templates
│   │   ├── FormSection/        # Collapsible form sections
│   │   ├── FormGrid/           # Flexible grid layouts
│   │   ├── SectionHeader/      # Burgundy section headers
│   │   ├── YearBadge/          # Year badges (1970 style)
│   │   └── ...                 # Additional components
│   ├── tokens/                 # Design tokens
│   │   ├── colors.ts           # Color palette
│   │   ├── spacing.ts          # Spacing scale (4px base)
│   │   └── typography.ts       # Font settings
│   ├── theme/                  # Theme system
│   │   └── index.ts            # Default, sepia, dark, minimal themes
│   ├── utils/                  # Utilities
│   │   └── classNames.ts       # cn() class composition helper
│   └── index.ts                # Public API exports
└── app/                        # Documentation site (Next.js)
    ├── docs/                   # Component documentation
    ├── page.tsx                # Showcase demo
    └── globals.css             # Global styles
```

---

## Component Implementation Pattern

**Every component must follow this structure:**

```tsx
'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils';
import styles from './ComponentName.module.css';

export interface ComponentNameProps {
  /** Description for documentation */
  variant?: 'default' | 'dense' | 'underline';
  className?: string;
  children?: React.ReactNode;
}

export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    const id = useId();

    return (
      <div
        ref={ref}
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

- `'use client'` directive for Next.js compatibility
- `forwardRef` for ref forwarding
- `useId` for unique accessible IDs
- `cn()` utility for class composition
- JSDoc comments on all props
- `displayName` for debugging
- Spread `...props` for HTML attribute support

---

## CSS Styling Pattern

```css
/* ComponentName.module.css */
.component {
  /* Always use CSS variables for themeable values */
  color: var(--cc-text-primary);
  font-family: var(--cc-font-typewriter);
  background: var(--cc-bg-paper);
  border: 1px solid var(--cc-border-primary);
}

/* Variant modifiers */
.default { }
.dense { padding: 2px 4px; }
.underline { border-bottom: 2px solid var(--cc-border-primary); }
```

### Design Token Variables

| Variable | Default | Purpose |
|----------|---------|---------|
| `--cc-text-primary` | `#324D88` | Navy blue text |
| `--cc-text-red` | `#8B1538` | Maroon accent |
| `--cc-bg-form` | `#A8D5D8` | Teal form background |
| `--cc-bg-paper` | `#F5F2E8` | Cream paper |
| `--cc-border-primary` | `#324D88` | Primary borders |
| `--cc-font-typewriter` | Berkeley Mono | Typewriter font |

---

## Code Generation Rules

### DO Generate

- Components following the exact pattern above
- CSS Modules using CSS custom properties
- TypeScript interfaces with JSDoc comments
- Accessible markup with ARIA attributes
- Exports added to `src/lib/index.ts`

### DO NOT Generate

- **No new dependencies** - Library must stay zero-dependency
- **No inline styles** - Use CSS Modules only
- **No `any` types** - TypeScript strict mode is enforced
- **No Tailwind classes** - Project uses CSS Modules
- **No breaking changes** - Preserve existing exports

---

## Common Development Tasks

### Starting Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:3000
```

### Building

```bash
npm run build:lib    # Build component library → dist/
npm run build        # Build documentation site
npm run lint         # Run ESLint
```

### Adding a New Component

1. Create `src/lib/components/NewComponent/index.tsx`
2. Create `src/lib/components/NewComponent/NewComponent.module.css`
3. Export from `src/lib/index.ts`
4. Create docs page at `src/app/docs/components/new-component/page.tsx`
5. Run `npm run build:lib` to verify

---

## Commit Message Format

Use Conventional Commits:

```
feat: add new component or feature
fix: bug fix
docs: documentation updates
style: formatting changes
refactor: code restructuring
test: adding tests
chore: maintenance tasks
```

**Examples:**
```
feat: add SubHeader component with variants
fix: correct Checkbox focus ring in Safari
docs: add FormGrid usage examples
refactor: simplify theme generation logic
```

---

## Critical Constraints

### Never Do

1. Add npm dependencies (zero-dependency library)
2. Use `@ts-ignore` or `any` types
3. Skip accessibility attributes (ARIA)
4. Modify design tokens without explicit request
5. Remove or rename public exports
6. Use inline styles instead of CSS Modules
7. Commit without running `npm run lint`

### Always Do

1. Use TypeScript with full type definitions
2. Forward refs on DOM-rendering components
3. Support `className` prop for customization
4. Spread remaining props to root element
5. Include `displayName` on forwardRef components
6. Test with `npm run build:lib` before committing

---

## Key Files Quick Reference

| Purpose | Location |
|---------|----------|
| Library entry | `src/lib/index.ts` |
| Color tokens | `src/lib/tokens/colors.ts` |
| Spacing tokens | `src/lib/tokens/spacing.ts` |
| Typography tokens | `src/lib/tokens/typography.ts` |
| Theme system | `src/lib/theme/index.ts` |
| Utility functions | `src/lib/utils/index.ts` |
| Global CSS | `src/app/globals.css` |
| Showcase page | `src/app/page.tsx` |
| Build config | `tsup.config.ts` |
| TypeScript config | `tsconfig.json` |

---

## Testing Checklist

Before suggesting or generating code changes:

- [ ] Does it follow the component pattern?
- [ ] Are TypeScript types complete?
- [ ] Is accessibility considered?
- [ ] Does it use CSS Modules (not inline styles)?
- [ ] Are CSS variables used for themeable values?
- [ ] Is it exported from `src/lib/index.ts`?
- [ ] Does `npm run build:lib` succeed?
- [ ] Does `npm run lint` pass?

---

## Project Goals

**Carbon Copy aims to:**

1. Provide authentic 1970s form aesthetics for modern React apps
2. Remain lightweight with zero runtime dependencies
3. Support full customization through CSS variables
4. Maintain excellent TypeScript support
5. Ensure accessibility for all users
6. Offer comprehensive documentation with live examples

**The library is NOT:**

- A general-purpose component library
- A design system replacement
- A Tailwind/MUI alternative

Focus contributions on enhancing the vintage form aesthetic while maintaining code quality and accessibility standards.
