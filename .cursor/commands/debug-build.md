# Debug Build Issues

Diagnose and fix build failures in Carbon Copy.

## Step 1: Identify the Error

Run the build and capture the error:

```bash
npm run build:lib 2>&1 | head -50
```

## Common Build Errors

### "Cannot find module"

**Cause**: Missing or incorrect import path

**Fix**:
1. Check the import path is correct
2. Verify the file exists
3. Check the export in the source file

```tsx
// Check imports use correct relative paths
import { cn } from '../../utils';        // Correct
import { cn } from '../utils';           // Wrong level
import { cn } from '@/lib/utils';        // May not work in lib build
```

### "Type 'X' is not assignable to type 'Y'"

**Cause**: TypeScript type mismatch

**Fix**:
1. Check the type definition
2. Ensure values match expected types
3. Add proper type annotations

### "Property 'X' does not exist on type 'Y'"

**Cause**: Missing prop definition or wrong type

**Fix**:
1. Add the property to the interface
2. Check you're accessing the right object
3. Verify the type includes the property

### CSS Module errors

**Cause**: Missing or misnamed CSS file

**Fix**:
1. Ensure CSS file exists with .module.css extension
2. Check the import matches the filename
3. Verify class names match

```tsx
import styles from './Component.module.css';  // File must exist
className={styles.component}                   // Class must be defined
```

### Export errors

**Cause**: Component not exported from index.ts

**Fix**:
1. Add export to `src/lib/index.ts`:
```tsx
export { ComponentName } from './components/ComponentName';
export type { ComponentNameProps } from './components/ComponentName';
```

## Step 2: Verify Fix

```bash
# Clean and rebuild
rm -rf dist
npm run build:lib

# Check output
ls -la dist/
```

## Step 3: Test

```bash
# Start dev server
npm run dev

# Check component works at localhost:3000
```
