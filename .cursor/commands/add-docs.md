# Add Component Documentation

Create documentation for a Carbon Copy component.

## Instructions

1. Ask me for the component name if not provided
2. Create documentation page at `src/app/docs/components/[component-name]/page.tsx`

## Documentation Template

```tsx
import { [ComponentName] } from '@/lib';

export const metadata = {
  title: '[ComponentName] - Carbon Copy',
  description: 'Brief description of the component',
};

export default function [ComponentName]Page() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold mb-4">[ComponentName]</h1>
        <p className="text-lg text-muted-foreground">
          Description of what this component does and when to use it.
        </p>
      </section>

      {/* Basic Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <div className="example-container p-4 border rounded">
          <[ComponentName]>Example content</[ComponentName]>
        </div>
        <pre className="mt-4 p-4 bg-muted rounded">
{`import { [ComponentName] } from '@prnv/carbon-copy';

<[ComponentName]>Example content</[ComponentName]>`}
        </pre>
      </section>

      {/* Variants */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Default</h3>
            <[ComponentName] variant="default">Default variant</[ComponentName]>
          </div>
          <div>
            <h3 className="font-medium mb-2">Dense</h3>
            <[ComponentName] variant="dense">Dense variant</[ComponentName]>
          </div>
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Prop</th>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Default</th>
              <th className="text-left py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2"><code>variant</code></td>
              <td className="py-2"><code>'default' | 'dense'</code></td>
              <td className="py-2"><code>'default'</code></td>
              <td className="py-2">Visual style variant</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>className</code></td>
              <td className="py-2"><code>string</code></td>
              <td className="py-2">-</td>
              <td className="py-2">Additional CSS classes</td>
            </tr>
            <tr className="border-b">
              <td className="py-2"><code>children</code></td>
              <td className="py-2"><code>ReactNode</code></td>
              <td className="py-2">-</td>
              <td className="py-2">Content to display</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
```

## Checklist

- [ ] Basic usage example with code
- [ ] All variants demonstrated
- [ ] Props table complete
- [ ] Accessibility notes if applicable
- [ ] Navigation updated in docs/layout.tsx
