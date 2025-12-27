# Explore Codebase

Understand the Carbon Copy codebase structure and patterns.

## Project Overview

**Carbon Copy** is a vintage 1970s-inspired React component library.

## Key Directories

```
src/
├── lib/                        # Component library
│   ├── components/             # 18 React components
│   ├── tokens/                 # Design tokens
│   ├── theme/                  # Theme system
│   ├── utils/                  # Utilities
│   └── index.ts                # Main exports
└── app/                        # Documentation site
    ├── docs/                   # Component documentation
    └── page.tsx                # Showcase page
```

## Exploration Commands

### List all components
```bash
ls -la src/lib/components/
```

### View component structure
```bash
cat src/lib/components/VintageTable/index.tsx
```

### Find all exports
```bash
cat src/lib/index.ts
```

### View design tokens
```bash
cat src/lib/tokens/colors.ts
cat src/lib/tokens/typography.ts
cat src/lib/tokens/spacing.ts
```

### View theme system
```bash
cat src/lib/theme/index.ts
```

### Check global styles
```bash
cat src/app/globals.css
```

## Key Files

| Purpose | Location |
|---------|----------|
| Main exports | `src/lib/index.ts` |
| Colors | `src/lib/tokens/colors.ts` |
| Typography | `src/lib/tokens/typography.ts` |
| Themes | `src/lib/theme/index.ts` |
| Utilities | `src/lib/utils/classNames.ts` |
| Showcase | `src/app/page.tsx` |
| Docs layout | `src/app/docs/layout.tsx` |

## Component Pattern

All components follow this pattern:
- `'use client'` directive
- `forwardRef` wrapper
- TypeScript interface with JSDoc
- CSS Module styling
- `displayName` set

## Questions to Answer

1. How many components exist?
2. What variants does each component support?
3. What CSS variables are used?
4. How is theming implemented?
5. What's the export structure?
