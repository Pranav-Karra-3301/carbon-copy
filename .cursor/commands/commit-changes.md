# Commit Changes

Create a properly formatted commit for Carbon Copy.

## Pre-Commit Checklist

Before committing, verify:

```bash
# 1. Lint passes
npm run lint

# 2. Build passes
npm run build:lib

# 3. Check what's staged
git status
git diff --staged
```

## Commit Message Format

Use Conventional Commits:

```
<type>: <description>

[optional body]

[optional footer]
```

### Types

| Type | When to Use |
|------|-------------|
| `feat` | New feature or component |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting (not CSS changes) |
| `refactor` | Code restructuring |
| `test` | Adding tests |
| `chore` | Maintenance |

### Examples

```bash
# New component
git commit -m "feat: add SubHeader component with size variants"

# Bug fix
git commit -m "fix: correct Checkbox focus ring in Safari"

# With issue reference
git commit -m "fix: resolve FormField alignment issue

Fixes #42"

# Documentation
git commit -m "docs: add FormGrid usage examples"
```

## Guidelines

1. **Imperative mood**: "add" not "added" or "adds"
2. **No period** at end of subject
3. **72 char limit** for subject line
4. **Capitalize** first letter
5. **Reference issues** when applicable

## Commit Command

```bash
git add <files>
git commit -m "<type>: <description>"
```

## Push Command

```bash
git push origin <branch-name>
```
