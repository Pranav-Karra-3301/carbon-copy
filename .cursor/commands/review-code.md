# Code Review Checklist

Review code changes against Carbon Copy standards.

## Component Structure

- [ ] Uses `'use client'` directive
- [ ] Uses `forwardRef` for ref forwarding
- [ ] Has `displayName` set
- [ ] Props interface defined with JSDoc comments
- [ ] Supports `className` prop
- [ ] Spreads remaining props with `...props`
- [ ] Uses `cn()` utility for class composition
- [ ] Uses `useId()` for accessibility IDs

## TypeScript

- [ ] No `any` types
- [ ] No `@ts-ignore` comments
- [ ] All props have explicit types
- [ ] Correct ref type in forwardRef generic
- [ ] Proper event handler types

## Styling

- [ ] Uses CSS Modules (not inline styles)
- [ ] Uses CSS custom properties for colors/fonts
- [ ] Follows naming conventions (.component, .variant)
- [ ] Maintains vintage 1970s aesthetic
- [ ] No Tailwind classes

## Accessibility

- [ ] Semantic HTML elements used
- [ ] ARIA attributes where needed
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Labels associated with inputs

## Safety

- [ ] No new dependencies added
- [ ] No breaking changes to exports
- [ ] Build passes (`npm run build:lib`)
- [ ] Lint passes (`npm run lint`)

## Documentation

- [ ] Props documented with JSDoc
- [ ] Examples work correctly
- [ ] Docs page updated if needed

## Questions to Ask

1. Does this match the vintage 1970s aesthetic?
2. Is this the simplest solution?
3. Could this break existing consumers?
4. Are there accessibility concerns?
5. Is the TypeScript as strict as it should be?
