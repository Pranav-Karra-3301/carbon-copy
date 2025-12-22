# Carbon Copy

A vintage 1970s-inspired form UI component library for React. Build authentic retro interfaces with the aesthetic of classic carbon copy forms.

![Carbon Copy](https://raw.githubusercontent.com/Pranav-Karra-3301/carbon-copy/main/public/og-image.png)

## Features

- 🎨 **Authentic 1970s Aesthetic** - Recreate the look and feel of vintage carbon copy forms
- 📝 **Rich Component Set** - Tables, forms, grids, badges, and more
- 🎯 **Highly Customizable** - Extensive props and theming options
- 🔧 **TypeScript** - Full type safety and IntelliSense support
- 📦 **Zero Dependencies** - Lightweight and efficient
- ♿ **Accessible** - ARIA-compliant and keyboard-navigable

## Installation

```bash
npm install @prnv/carbon-copy
# or
yarn add @prnv/carbon-copy
# or
pnpm add @prnv/carbon-copy
```

## Quick Start

```tsx
import { VintageTable, FormField, YearBadge } from '@prnv/carbon-copy';
import '@prnv/carbon-copy/styles';

function MyForm() {
  return (
    <>
      <YearBadge year="1970" preliminary="PRELIMINARY" />
      
      <FormField 
        label="Dealer Name" 
        value={dealerName}
        onChange={setDealerName}
        variant="underline"
      />
      
      <VintageTable>
        <VintageTableRow>
          <VintageTableCell>Order No.</VintageTableCell>
          <VintageTableCell variant="red">AHQ485</VintageTableCell>
        </VintageTableRow>
      </VintageTable>
    </>
  );
}
```

## Documentation

Visit our [documentation site](https://carbon-copy.vercel.app/docs) for:

- 📚 Complete component API reference
- 🎨 Live examples and demos
- 🎯 Layout patterns and templates
- 🎭 Theming and customization guides
- 📖 Best practices

## Components

### Layout
- **DenseGrid** - Zero-gap grid for dense layouts
- **FormLayout** - Pre-built form templates
- **FormSection** - Grouped form sections
- **FormGrid** - Flexible grid layouts

### Form Elements
- **FormField** - Versatile input fields
- **Checkbox** - Vintage checkboxes with X marks
- **LabeledInput** - Labeled form inputs
- **OptionRow** - Checkbox option rows

### Tables
- **VintageTable** - Classic table layouts
- **CodeTable** - Code and option tables
- **StrikethroughCell** - Crossed-out cells

### Display
- **SectionHeader** - Colored section headers
- **YearBadge** - Year badges (1970 style)
- **PatternedField** - Fields with patterns

## Theming

Carbon Copy uses CSS custom properties for easy theming:

```css
:root {
  --cc-text-primary: #324D88;
  --cc-text-red: #8B1538;
  --cc-border-primary: #324D88;
  --cc-bg-form: #A8D5D8;
  --cc-bg-paper: #F5F2E8;
  --cc-font-typewriter: 'Berkeley Mono', 'Courier New', monospace;
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [Pranav Karra](https://github.com/Pranav-Karra-3301)

## Credits

Inspired by vintage 1970s Chevrolet order forms and the beauty of analog documentation.

---

**Made with ❤️ for lovers of vintage design**
