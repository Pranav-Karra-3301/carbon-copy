import React, { ReactNode } from 'react';
export { ThemeBorder, ThemeColor, ThemeConfig, ThemeFont, ThemeName, ThemePattern, ThemeSize, ThemeVariant, defaultTheme, generateCSSVariables, themes } from './theme/index.mjs';

interface VintageTableProps {
    children: ReactNode;
    caption?: string;
    variant?: 'default' | 'dense' | 'ledger' | 'dotted';
    borderStyle?: 'thin' | 'medium' | 'thick';
    background?: 'teal' | 'paper' | 'none';
    className?: string;
    'aria-label'?: string;
}
interface VintageTableRowProps {
    children: ReactNode;
    variant?: 'default' | 'header' | 'subheader' | 'total' | 'highlighted';
    className?: string;
}
interface VintageTableCellProps {
    children?: ReactNode;
    colSpan?: number;
    rowSpan?: number;
    as?: 'th' | 'td';
    align?: 'left' | 'center' | 'right';
    valign?: 'top' | 'middle' | 'bottom';
    variant?: 'default' | 'header' | 'label' | 'value' | 'red';
    width?: string | number;
    minWidth?: string | number;
    borderRight?: boolean;
    borderBottom?: boolean;
    borderLeft?: boolean;
    borderTop?: boolean;
    noBorder?: boolean;
    className?: string;
    onClick?: () => void;
    'aria-label'?: string;
    scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
}
interface VintageTableHeaderProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'section';
    colSpan?: number;
    align?: 'left' | 'center' | 'right';
    className?: string;
}
declare const VintageTable: React.FC<VintageTableProps>;
declare const VintageTableRow: React.FC<VintageTableRowProps>;
declare const VintageTableCell: React.FC<VintageTableCellProps>;
declare const VintageTableHeader: React.FC<VintageTableHeaderProps>;

interface StrikethroughCellProps {
    children?: React.ReactNode;
    direction?: 'diagonal-down' | 'diagonal-up' | 'horizontal' | 'both';
    lineWeight?: 'thin' | 'medium' | 'thick';
    colSpan?: number;
    rowSpan?: number;
    as?: 'th' | 'td';
    className?: string;
    'aria-label'?: string;
}
declare const StrikethroughCell: React.FC<StrikethroughCellProps>;

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    name?: string;
    value?: string;
    size?: 'sm' | 'md' | 'lg';
    markStyle?: 'x' | 'check' | 'fill';
    labelPosition?: 'left' | 'right';
    className?: string;
    required?: boolean;
    'aria-label'?: string;
    'aria-describedby'?: string;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

interface FormFieldProps {
    label?: string;
    type?: 'text' | 'number' | 'date' | 'email' | 'tel' | 'password';
    placeholder?: string;
    value?: string | number;
    defaultValue?: string | number;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    name?: string;
    helperText?: string;
    error?: boolean | string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
    variant?: 'default' | 'underline' | 'boxed' | 'minimal' | 'handwriting' | 'none' | 'dotted';
    align?: 'left' | 'center' | 'right';
    maxLength?: number;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    pattern?: string;
    autoComplete?: string;
    className?: string;
    labelPosition?: 'top' | 'left' | 'inline';
    labelWidth?: string;
    'aria-label'?: string;
    'aria-describedby'?: string;
}
declare const FormField: React.ForwardRefExoticComponent<FormFieldProps & React.RefAttributes<HTMLInputElement>>;

interface SectionHeaderProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'dark' | 'navy' | 'outlined';
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
    align?: 'left' | 'center' | 'right';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    sectionNumber?: string | number;
    rightContent?: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
}
declare const SectionHeader: React.FC<SectionHeaderProps>;

interface FormGridProps {
    children: React.ReactNode;
    columns?: number | 'auto' | string;
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
    rowGap?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    background?: 'none' | 'teal' | 'paper';
    bordered?: boolean;
    className?: string;
}
interface FormGridItemProps {
    children: React.ReactNode;
    colSpan?: number | 'full';
    rowSpan?: number;
    align?: 'left' | 'center' | 'right';
    valign?: 'top' | 'center' | 'bottom';
    className?: string;
}
declare const FormGrid: React.FC<FormGridProps>;
declare const FormGridItem: React.FC<FormGridItemProps>;

interface FormSectionProps {
    title?: React.ReactNode;
    children: React.ReactNode;
    sectionNumber?: string | number;
    /** Title suffix like * or # */
    titleSuffix?: string;
    headerVariant?: 'primary' | 'secondary' | 'dark' | 'navy' | 'outlined' | 'none';
    background?: 'teal' | 'paper' | 'none';
    bordered?: boolean | 'top' | 'bottom' | 'sides' | 'none';
    /** Border weight */
    borderWeight?: 'thin' | 'medium';
    collapsible?: boolean;
    defaultCollapsed?: boolean;
    padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
    /** Content padding specifically */
    contentPadding?: 'none' | 'xs' | 'sm' | 'md';
    description?: React.ReactNode;
    /** Whether to attach to adjacent sections (no margin) */
    attached?: boolean;
    className?: string;
    id?: string;
}
declare const FormSection: React.FC<FormSectionProps>;

interface YearBadgeProps {
    year: string | number;
    preliminary?: boolean;
    subtitle?: string;
    variant?: 'dark' | 'light';
    className?: string;
}
declare const YearBadge: React.FC<YearBadgeProps>;

interface DirectionalArrowProps {
    direction?: 'left' | 'right' | 'up' | 'down';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    'aria-label'?: string;
}
declare const DirectionalArrow: React.FC<DirectionalArrowProps>;

interface PatternedFieldProps {
    children?: React.ReactNode;
    value?: string | number;
    placeholder?: string;
    subText?: string | React.ReactNode;
    subTextColor?: 'default' | 'red';
    showAsterisk?: boolean;
    readOnly?: boolean;
    align?: 'left' | 'center' | 'right';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    'aria-label'?: string;
}
declare const PatternedField: React.FC<PatternedFieldProps>;

interface DenseGridProps {
    children: React.ReactNode;
    /** Number of columns or template string */
    columns?: number | string;
    /** Row template */
    rows?: string;
    /** Whether cells share borders (no gaps, collapsed borders) */
    collapsed?: boolean;
    /** Background variant */
    background?: 'none' | 'teal' | 'paper';
    /** Border around entire grid */
    bordered?: boolean;
    /** Border weight */
    borderWeight?: 'thin' | 'medium' | 'thick';
    className?: string;
}
declare const DenseGrid: React.FC<DenseGridProps>;
interface DenseGridCellProps {
    children?: React.ReactNode;
    /** Column span */
    colSpan?: number;
    /** Row span */
    rowSpan?: number;
    /** Cell padding */
    padding?: 'none' | 'xs' | 'sm' | 'md';
    /** Text alignment */
    align?: 'left' | 'center' | 'right';
    /** Vertical alignment */
    valign?: 'top' | 'middle' | 'bottom';
    /** Border on specific sides */
    borderTop?: boolean;
    borderRight?: boolean;
    borderBottom?: boolean;
    borderLeft?: boolean;
    /** All borders */
    bordered?: boolean;
    /** Text color variant */
    textColor?: 'default' | 'red' | 'navy' | 'muted';
    /** Font weight */
    weight?: 'normal' | 'medium' | 'bold';
    /** Text transform */
    transform?: 'none' | 'uppercase';
    /** Font size */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    className?: string;
}
declare const DenseGridCell: React.FC<DenseGridCellProps>;

interface CompactSectionProps {
    children: React.ReactNode;
    /** Section title */
    title?: React.ReactNode;
    /** Title color */
    titleColor?: 'red' | 'navy' | 'default';
    /** Whether title has asterisk */
    hasAsterisk?: boolean;
    /** Border configuration */
    border?: 'none' | 'all' | 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical';
    /** Border weight */
    borderWeight?: 'thin' | 'medium' | 'thick';
    /** Internal padding */
    padding?: 'none' | 'xs' | 'sm' | 'md';
    /** Whether content flows in columns */
    columns?: 1 | 2 | 3 | 4;
    /** Column gap */
    columnGap?: 'none' | 'xs' | 'sm';
    className?: string;
}
declare const CompactSection: React.FC<CompactSectionProps>;

interface OptionRowProps {
    /** Main label/description */
    label: React.ReactNode;
    /** Option code (e.g., V31, M35) */
    code?: string;
    /** Sub-label/note (shown in smaller text, often red) */
    subLabel?: React.ReactNode;
    /** Sub-label color */
    subLabelColor?: 'default' | 'red' | 'muted';
    /** Prefix like (A), (B), etc. */
    prefix?: string;
    /** Checkbox or X mark on the right */
    hasCheckbox?: boolean;
    /** Whether checkbox is checked */
    checked?: boolean;
    /** Border style */
    border?: 'none' | 'bottom' | 'dotted';
    /** Code width */
    codeWidth?: 'sm' | 'md' | 'lg';
    /** Font size */
    size?: 'xs' | 'sm' | 'md';
    /** onClick handler for checkbox */
    onCheck?: (checked: boolean) => void;
    className?: string;
}
declare const OptionRow: React.FC<OptionRowProps>;

interface LabeledInputProps {
    /** Field label */
    label: string;
    /** Current value */
    value?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Input style variant */
    variant?: 'underline' | 'box' | 'dotted' | 'none';
    /** Layout direction */
    layout?: 'horizontal' | 'vertical' | 'stacked';
    /** Label width (for horizontal) */
    labelWidth?: 'auto' | 'sm' | 'md' | 'lg';
    /** Input width */
    inputWidth?: 'auto' | 'sm' | 'md' | 'lg' | 'full';
    /** Font size */
    size?: 'xs' | 'sm' | 'md';
    /** Whether value looks handwritten */
    handwritten?: boolean;
    /** Read only */
    readOnly?: boolean;
    /** onChange handler */
    onChange?: (value: string) => void;
    className?: string;
}
declare const LabeledInput: React.FC<LabeledInputProps>;

interface SubHeaderProps {
    children: React.ReactNode;
    /** Include "Includes:" text after the header */
    hasIncludes?: boolean;
    /** Also see reference text */
    alsoSee?: string;
    /** Color variant */
    color?: 'default' | 'navy' | 'red';
    /** Size variant */
    size?: 'xs' | 'sm' | 'md';
    /** Border style */
    border?: 'none' | 'top' | 'bottom' | 'both';
    className?: string;
}
declare const SubHeader: React.FC<SubHeaderProps>;

interface FormLayoutProps {
    children: React.ReactNode;
    /** Preset layout template */
    template?: 'header-2col' | 'body-4col' | 'body-3col' | 'footer';
    /** Custom grid template */
    gridTemplate?: string;
    /** Gap between items */
    gap?: 'none' | 'xs' | 'sm';
    /** Border around layout */
    bordered?: boolean;
    /** Border weight */
    borderWeight?: 'thin' | 'medium';
    className?: string;
}
declare const FormLayout: React.FC<FormLayoutProps>;
interface FormLayoutAreaProps {
    children: React.ReactNode;
    /** Grid area name or span */
    area?: string;
    /** Column span */
    colSpan?: number;
    /** Row span */
    rowSpan?: number;
    /** Border configuration */
    border?: 'none' | 'all' | 'left' | 'right' | 'top' | 'bottom';
    /** Content alignment */
    align?: 'start' | 'center' | 'end' | 'stretch';
    className?: string;
}
declare const FormLayoutArea: React.FC<FormLayoutAreaProps>;

interface SectionTitleProps {
    children: React.ReactNode;
    /** Hashtag/asterisk suffix */
    suffix?: '#' | '*' | '';
    /** Color variant */
    color?: 'red' | 'navy' | 'default';
    /** Size variant */
    size?: 'xs' | 'sm' | 'md' | 'lg';
    /** Border configuration */
    border?: 'none' | 'top' | 'bottom' | 'both' | 'all';
    /** Inline with other content */
    inline?: boolean;
    className?: string;
}
declare const SectionTitle: React.FC<SectionTitleProps>;

interface CodeTableProps {
    children: React.ReactNode;
    /** Show code column */
    showCode?: boolean;
    /** Code column position */
    codePosition?: 'left' | 'right';
    /** Show checkbox column */
    showCheckbox?: boolean;
    /** Border style */
    border?: 'none' | 'rows' | 'all' | 'dotted';
    /** Compact mode */
    compact?: boolean;
    className?: string;
}
declare const CodeTable: React.FC<CodeTableProps>;
interface CodeTableRowProps {
    /** Option code (e.g., ZW4, M35) */
    code?: string;
    /** Main label/description */
    label: React.ReactNode;
    /** Sub-label (smaller text, often conditions) */
    subLabel?: React.ReactNode;
    /** Sub-label color */
    subLabelColor?: 'default' | 'red' | 'muted';
    /** Whether checkbox is shown */
    hasCheckbox?: boolean;
    /** Whether checked */
    checked?: boolean;
    /** On check change */
    onCheck?: (checked: boolean) => void;
    /** Border style override */
    border?: 'none' | 'bottom' | 'dotted';
    className?: string;
}
declare const CodeTableRow: React.FC<CodeTableRowProps>;

declare const colors: {
    readonly background: {
        readonly form: "#A8D5D8";
        readonly formAlt: "#9CCBCE";
        readonly paper: "#F5F2E8";
        readonly muted: "#E8E5DC";
    };
    readonly header: {
        readonly primary: "#8B1538";
        readonly secondary: "#4A0D1F";
        readonly accent: "#C41E3A";
    };
    readonly border: {
        readonly primary: "#1A1A1A";
        readonly thin: "#2D2D2D";
        readonly muted: "#666666";
    };
    readonly text: {
        readonly primary: "#1A1A1A";
        readonly secondary: "#333333";
        readonly onDark: "#F5F2E8";
        readonly muted: "#666666";
        readonly typewriter: "#0A0A0A";
    };
    readonly interactive: {
        readonly checkbox: "#1A1A1A";
        readonly strikethrough: "#1A1A1A";
        readonly highlight: "#FFE4B5";
    };
};
type Colors = typeof colors;

declare const typography: {
    readonly fonts: {
        readonly typewriter: "\"American Typewriter\", \"Courier Prime\", \"Courier New\", Courier, monospace";
        readonly mono: "\"IBM Plex Mono\", \"Consolas\", \"Monaco\", monospace";
        readonly sans: "\"Inter\", -apple-system, BlinkMacSystemFont, sans-serif";
    };
    readonly sizes: {
        readonly xs: "0.625rem";
        readonly sm: "0.75rem";
        readonly base: "0.875rem";
        readonly md: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly '2xl': "1.5rem";
    };
    readonly weights: {
        readonly normal: 400;
        readonly medium: 500;
        readonly bold: 700;
    };
    readonly lineHeights: {
        readonly tight: 1.2;
        readonly normal: 1.5;
        readonly relaxed: 1.75;
    };
    readonly letterSpacing: {
        readonly tight: "-0.02em";
        readonly normal: "0";
        readonly wide: "0.05em";
        readonly wider: "0.1em";
        readonly typewriter: "0.08em";
    };
};
type Typography = typeof typography;

declare const spacing: {
    readonly 0: "0";
    readonly px: "1px";
    readonly 0.5: "0.125rem";
    readonly 1: "0.25rem";
    readonly 2: "0.5rem";
    readonly 3: "0.75rem";
    readonly 4: "1rem";
    readonly 5: "1.25rem";
    readonly 6: "1.5rem";
    readonly 8: "2rem";
    readonly 10: "2.5rem";
    readonly 12: "3rem";
};
declare const borders: {
    readonly width: {
        readonly thin: "1px";
        readonly medium: "2px";
        readonly thick: "3px";
    };
    readonly radius: {
        readonly none: "0";
        readonly sm: "1px";
        readonly md: "2px";
    };
};
type Spacing = typeof spacing;
type Borders = typeof borders;

type ClassValue = string | undefined | null | false | ClassValue[];
declare function cn(...classes: ClassValue[]): string;

export { type Borders, Checkbox, type CheckboxProps, CodeTable, type CodeTableProps, CodeTableRow, type CodeTableRowProps, type Colors, CompactSection, type CompactSectionProps, DenseGrid, DenseGridCell, type DenseGridCellProps, type DenseGridProps, DirectionalArrow, type DirectionalArrowProps, FormField, type FormFieldProps, FormGrid, FormGridItem, type FormGridItemProps, type FormGridProps, FormLayout, FormLayoutArea, type FormLayoutAreaProps, type FormLayoutProps, FormSection, type FormSectionProps, LabeledInput, type LabeledInputProps, OptionRow, type OptionRowProps, PatternedField, type PatternedFieldProps, SectionHeader, type SectionHeaderProps, SectionTitle, type SectionTitleProps, type Spacing, StrikethroughCell, type StrikethroughCellProps, SubHeader, type SubHeaderProps, type Typography, VintageTable, VintageTableCell, type VintageTableCellProps, VintageTableHeader, type VintageTableHeaderProps, type VintageTableProps, VintageTableRow, type VintageTableRowProps, YearBadge, type YearBadgeProps, borders, cn, colors, spacing, typography };
