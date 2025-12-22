"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib/index.ts
var index_exports = {};
__export(index_exports, {
  Checkbox: () => Checkbox,
  CodeTable: () => CodeTable,
  CodeTableRow: () => CodeTableRow,
  CompactSection: () => CompactSection,
  DenseGrid: () => DenseGrid,
  DenseGridCell: () => DenseGridCell,
  DirectionalArrow: () => DirectionalArrow,
  FormField: () => FormField,
  FormGrid: () => FormGrid,
  FormGridItem: () => FormGridItem,
  FormLayout: () => FormLayout,
  FormLayoutArea: () => FormLayoutArea,
  FormSection: () => FormSection,
  LabeledInput: () => LabeledInput,
  OptionRow: () => OptionRow,
  PatternedField: () => PatternedField,
  SectionHeader: () => SectionHeader,
  SectionTitle: () => SectionTitle,
  StrikethroughCell: () => StrikethroughCell,
  SubHeader: () => SubHeader,
  VintageTable: () => VintageTable,
  VintageTableCell: () => VintageTableCell,
  VintageTableHeader: () => VintageTableHeader,
  VintageTableRow: () => VintageTableRow,
  YearBadge: () => YearBadge,
  borders: () => borders,
  cn: () => cn,
  colors: () => colors,
  defaultTheme: () => defaultTheme,
  generateCSSVariables: () => generateCSSVariables,
  spacing: () => spacing,
  themes: () => themes,
  typography: () => typography
});
module.exports = __toCommonJS(index_exports);

// src/lib/utils/classNames.ts
function cn(...classes) {
  return classes.flat().filter((cls) => typeof cls === "string" && cls.length > 0).join(" ");
}

// src/lib/components/VintageTable/VintageTable.module.css
var VintageTable_default = {};

// src/lib/components/VintageTable/VintageTable.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var VintageTable = ({
  children,
  caption,
  variant = "default",
  borderStyle = "thin",
  background = "teal",
  className,
  "aria-label": ariaLabel
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "table",
    {
      className: cn(
        VintageTable_default.vintageTable,
        VintageTable_default[variant],
        VintageTable_default[`border${borderStyle.charAt(0).toUpperCase() + borderStyle.slice(1)}`],
        VintageTable_default[`bg${background.charAt(0).toUpperCase() + background.slice(1)}`],
        className
      ),
      "aria-label": ariaLabel,
      children: [
        caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", { className: VintageTable_default.vintageCaption, children: caption }),
        children
      ]
    }
  );
};
var VintageTableRow = ({
  children,
  variant = "default",
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { className: cn(VintageTable_default.vintageRow, VintageTable_default[`row${variant.charAt(0).toUpperCase() + variant.slice(1)}`], className), children });
};
var VintageTableCell = ({
  children,
  colSpan,
  rowSpan,
  as: Component = "td",
  align = "left",
  valign = "middle",
  variant = "default",
  width,
  minWidth,
  borderRight,
  borderBottom,
  borderLeft,
  borderTop,
  noBorder,
  className,
  onClick,
  "aria-label": ariaLabel,
  scope
}) => {
  const style = {
    textAlign: align,
    verticalAlign: valign,
    width: typeof width === "number" ? `${width}px` : width,
    minWidth: typeof minWidth === "number" ? `${minWidth}px` : minWidth
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Component,
    {
      colSpan,
      rowSpan,
      className: cn(
        VintageTable_default.vintageCell,
        VintageTable_default[`cell${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        borderRight && VintageTable_default.borderRight,
        borderBottom && VintageTable_default.borderBottom,
        borderLeft && VintageTable_default.borderLeft,
        borderTop && VintageTable_default.borderTop,
        noBorder && VintageTable_default.noBorder,
        onClick && VintageTable_default.clickable,
        className
      ),
      style,
      onClick,
      "aria-label": ariaLabel,
      scope,
      tabIndex: onClick ? 0 : void 0,
      role: onClick ? "button" : void 0,
      onKeyDown: onClick ? (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      } : void 0,
      children
    }
  );
};
var VintageTableHeader = ({
  children,
  variant = "primary",
  colSpan,
  align = "left",
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "th",
    {
      colSpan,
      className: cn(
        VintageTable_default.vintageHeader,
        VintageTable_default[`header${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        className
      ),
      style: { textAlign: align },
      scope: "col",
      children
    }
  );
};
VintageTable.displayName = "VintageTable";
VintageTableRow.displayName = "VintageTableRow";
VintageTableCell.displayName = "VintageTableCell";
VintageTableHeader.displayName = "VintageTableHeader";

// src/lib/components/StrikethroughCell/StrikethroughCell.module.css
var StrikethroughCell_default = {};

// src/lib/components/StrikethroughCell/StrikethroughCell.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var StrikethroughCell = ({
  children,
  direction = "both",
  lineWeight = "thin",
  colSpan,
  rowSpan,
  as: Component = "td",
  className,
  "aria-label": ariaLabel = "Not applicable"
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    Component,
    {
      colSpan,
      rowSpan,
      className: cn(
        StrikethroughCell_default.strikethroughCell,
        StrikethroughCell_default[direction],
        StrikethroughCell_default[lineWeight],
        className
      ),
      "aria-label": ariaLabel,
      children: [
        children && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: StrikethroughCell_default.content, children }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: StrikethroughCell_default.strikethroughPattern, "aria-hidden": "true" })
      ]
    }
  );
};
StrikethroughCell.displayName = "StrikethroughCell";

// src/lib/components/Checkbox/Checkbox.tsx
var import_react = require("react");

// src/lib/components/Checkbox/Checkbox.module.css
var Checkbox_default = {};

// src/lib/components/Checkbox/Checkbox.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Checkbox = (0, import_react.forwardRef)(({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  name,
  value,
  size = "md",
  markStyle = "x",
  labelPosition = "right",
  className,
  required = false,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy
}, ref) => {
  const id = (0, import_react.useId)();
  const handleChange = (event) => {
    onChange == null ? void 0 : onChange(event.target.checked, event);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "label",
    {
      className: cn(
        Checkbox_default.checkbox,
        Checkbox_default[labelPosition],
        disabled && Checkbox_default.disabled,
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            ref,
            type: "checkbox",
            id,
            name,
            value,
            checked,
            defaultChecked,
            onChange: handleChange,
            disabled,
            required,
            className: Checkbox_default.input,
            "aria-label": ariaLabel || label,
            "aria-describedby": ariaDescribedBy
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: cn(Checkbox_default.box, Checkbox_default[size]), "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className: cn(Checkbox_default.mark, Checkbox_default[`mark${markStyle.charAt(0).toUpperCase() + markStyle.slice(1)}`]), viewBox: "0 0 16 16", children: [
          markStyle === "x" && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "3", y1: "3", x2: "13", y2: "13" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "13", y1: "3", x2: "3", y2: "13" })
          ] }),
          markStyle === "check" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polyline", { points: "3,8 6,12 13,4" }),
          markStyle === "fill" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "3", y: "3", width: "10", height: "10" })
        ] }) }),
        label && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: Checkbox_default.label, children: label })
      ]
    }
  );
});
Checkbox.displayName = "Checkbox";

// src/lib/components/FormField/FormField.tsx
var import_react2 = require("react");

// src/lib/components/FormField/FormField.module.css
var FormField_default = {};

// src/lib/components/FormField/FormField.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var FormField = (0, import_react2.forwardRef)(({
  label,
  type = "text",
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  readOnly = false,
  required = false,
  name,
  helperText,
  error,
  size = "md",
  variant = "default",
  align = "left",
  maxLength,
  min,
  max,
  step,
  pattern,
  autoComplete,
  className,
  labelPosition = "top",
  labelWidth,
  "aria-label": ariaLabel,
  "aria-describedby": ariaDescribedBy
}, ref) => {
  const id = (0, import_react2.useId)();
  const errorId = (0, import_react2.useId)();
  const helperId = (0, import_react2.useId)();
  const hasError = Boolean(error);
  const errorMessage = typeof error === "string" ? error : void 0;
  const handleChange = (event) => {
    onChange == null ? void 0 : onChange(event.target.value, event);
  };
  const describedBy = [
    ariaDescribedBy,
    helperText ? helperId : void 0,
    errorMessage ? errorId : void 0
  ].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: cn(
        FormField_default.formField,
        FormField_default[`position${labelPosition.charAt(0).toUpperCase() + labelPosition.slice(1)}`],
        FormField_default[variant],
        FormField_default[size],
        hasError && FormField_default.hasError,
        disabled && FormField_default.disabled,
        className
      ),
      children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "label",
          {
            htmlFor: id,
            className: FormField_default.label,
            style: labelWidth ? { width: labelWidth } : void 0,
            children: [
              label,
              required && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: FormField_default.required, "aria-hidden": "true", children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: FormField_default.inputWrapper, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "input",
          {
            ref,
            id,
            type,
            name,
            value,
            defaultValue,
            placeholder,
            onChange: handleChange,
            onBlur,
            onFocus,
            disabled,
            readOnly,
            required,
            maxLength,
            min,
            max,
            step,
            pattern,
            autoComplete,
            className: FormField_default.input,
            style: { textAlign: align },
            "aria-label": ariaLabel || label,
            "aria-describedby": describedBy,
            "aria-invalid": hasError,
            "aria-required": required
          }
        ) }),
        helperText && !hasError && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { id: helperId, className: FormField_default.helperText, children: helperText }),
        errorMessage && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { id: errorId, className: FormField_default.errorText, role: "alert", children: errorMessage })
      ]
    }
  );
});
FormField.displayName = "FormField";

// src/lib/components/SectionHeader/SectionHeader.module.css
var SectionHeader_default = {};

// src/lib/components/SectionHeader/SectionHeader.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var SectionHeader = ({
  children,
  variant = "primary",
  as: Component = "h2",
  align = "left",
  size = "md",
  icon,
  sectionNumber,
  rightContent,
  fullWidth = false,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    Component,
    {
      className: cn(
        SectionHeader_default.sectionHeader,
        SectionHeader_default[variant],
        SectionHeader_default[size],
        SectionHeader_default[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
        fullWidth && SectionHeader_default.fullWidth,
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: SectionHeader_default.content, children: [
          sectionNumber !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: SectionHeader_default.sectionNumber, children: [
            sectionNumber,
            "."
          ] }),
          icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: SectionHeader_default.icon, children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: SectionHeader_default.text, children })
        ] }),
        rightContent && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: SectionHeader_default.rightContent, children: rightContent })
      ]
    }
  );
};
SectionHeader.displayName = "SectionHeader";

// src/lib/components/FormGrid/FormGrid.module.css
var FormGrid_default = {};

// src/lib/components/FormGrid/FormGrid.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var FormGrid = ({
  children,
  columns = "auto",
  gap = "sm",
  rowGap,
  alignItems = "stretch",
  background = "none",
  bordered = false,
  className
}) => {
  const columnStyle = typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns === "auto" ? "repeat(auto-fit, minmax(120px, 1fr))" : columns;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      className: cn(
        FormGrid_default.formGrid,
        FormGrid_default[`gap${gap.charAt(0).toUpperCase() + gap.slice(1)}`],
        rowGap && FormGrid_default[`rowGap${rowGap.charAt(0).toUpperCase() + rowGap.slice(1)}`],
        FormGrid_default[`align${alignItems.charAt(0).toUpperCase() + alignItems.slice(1)}`],
        FormGrid_default[`bg${background.charAt(0).toUpperCase() + background.slice(1)}`],
        bordered && FormGrid_default.bordered,
        className
      ),
      style: { gridTemplateColumns: columnStyle },
      children
    }
  );
};
var FormGridItem = ({
  children,
  colSpan,
  rowSpan,
  align = "left",
  valign = "center",
  className
}) => {
  const style = {
    gridColumn: colSpan === "full" ? "1 / -1" : colSpan ? `span ${colSpan}` : void 0,
    gridRow: rowSpan ? `span ${rowSpan}` : void 0,
    textAlign: align,
    alignSelf: valign === "top" ? "start" : valign === "bottom" ? "end" : "center"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: cn(FormGrid_default.formGridItem, className), style, children });
};
FormGrid.displayName = "FormGrid";
FormGridItem.displayName = "FormGridItem";

// src/lib/components/FormSection/FormSection.tsx
var import_react3 = require("react");

// src/lib/components/FormSection/FormSection.module.css
var FormSection_default = {};

// src/lib/components/FormSection/FormSection.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var FormSection = ({
  title,
  children,
  sectionNumber,
  titleSuffix,
  headerVariant = "primary",
  background = "teal",
  bordered = true,
  borderWeight = "thin",
  collapsible = false,
  defaultCollapsed = false,
  padding = "md",
  contentPadding,
  description,
  attached = false,
  className,
  id
}) => {
  const [isCollapsed, setIsCollapsed] = (0, import_react3.useState)(defaultCollapsed);
  const handleToggle = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };
  const handleKeyDown = (e) => {
    if (collapsible && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setIsCollapsed(!isCollapsed);
    }
  };
  const borderClass = bordered === true ? FormSection_default.bordered : bordered === "top" ? FormSection_default.borderedTop : bordered === "bottom" ? FormSection_default.borderedBottom : bordered === "sides" ? FormSection_default.borderedSides : bordered === "none" ? "" : "";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "section",
    {
      id,
      className: cn(
        FormSection_default.formSection,
        FormSection_default[`bg${background.charAt(0).toUpperCase() + background.slice(1)}`],
        FormSection_default[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
        FormSection_default[`borderWeight${borderWeight.charAt(0).toUpperCase() + borderWeight.slice(1)}`],
        borderClass,
        attached && FormSection_default.attached,
        className
      ),
      children: [
        title && headerVariant !== "none" && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "header",
          {
            className: cn(FormSection_default.header, FormSection_default[headerVariant]),
            onClick: handleToggle,
            onKeyDown: handleKeyDown,
            role: collapsible ? "button" : void 0,
            "aria-expanded": collapsible ? !isCollapsed : void 0,
            tabIndex: collapsible ? 0 : void 0,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: FormSection_default.headerContent, children: [
                sectionNumber !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: FormSection_default.sectionNumber, children: [
                  sectionNumber,
                  "."
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: FormSection_default.title, children: title }),
                titleSuffix && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: FormSection_default.titleSuffix, children: titleSuffix })
              ] }),
              collapsible && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "span",
                {
                  className: cn(FormSection_default.collapseIcon, isCollapsed && FormSection_default.collapsed),
                  "aria-hidden": "true",
                  children: "\u25BC"
                }
              )
            ]
          }
        ),
        description && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: FormSection_default.description, children: description }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "div",
          {
            className: cn(
              FormSection_default.content,
              isCollapsed && FormSection_default.hidden,
              contentPadding && FormSection_default[`contentPadding${contentPadding.charAt(0).toUpperCase() + contentPadding.slice(1)}`]
            ),
            "aria-hidden": isCollapsed,
            children
          }
        )
      ]
    }
  );
};
FormSection.displayName = "FormSection";

// src/lib/components/YearBadge/YearBadge.module.css
var YearBadge_default = {};

// src/lib/components/YearBadge/YearBadge.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var YearBadge = ({
  year,
  preliminary = true,
  subtitle,
  variant = "dark",
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      className: cn(
        YearBadge_default.yearBadge,
        YearBadge_default[variant],
        className
      ),
      children: [
        preliminary && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: YearBadge_default.preliminary, children: "PRELIMINARY" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: YearBadge_default.year, children: year }),
        subtitle && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: YearBadge_default.subtitle, children: subtitle })
      ]
    }
  );
};
YearBadge.displayName = "YearBadge";

// src/lib/components/DirectionalArrow/DirectionalArrow.module.css
var DirectionalArrow_default = {};

// src/lib/components/DirectionalArrow/DirectionalArrow.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var DirectionalArrow = ({
  direction = "right",
  size = "md",
  className,
  "aria-label": ariaLabel = `Arrow pointing ${direction}`
}) => {
  const getPath = () => {
    switch (direction) {
      case "right":
        return "M 0 0 L 8 4 L 0 8 Z";
      case "left":
        return "M 8 0 L 0 4 L 8 8 Z";
      case "up":
        return "M 0 8 L 4 0 L 8 8 Z";
      case "down":
        return "M 0 0 L 4 8 L 8 0 Z";
      default:
        return "M 0 0 L 8 4 L 0 8 Z";
    }
  };
  const getViewBox = () => {
    return "0 0 8 8";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "svg",
    {
      className: cn(DirectionalArrow_default.arrow, DirectionalArrow_default[direction], DirectionalArrow_default[size], className),
      viewBox: getViewBox(),
      "aria-label": ariaLabel,
      role: "img",
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: getPath(), fill: "currentColor" })
    }
  );
};
DirectionalArrow.displayName = "DirectionalArrow";

// src/lib/components/PatternedField/PatternedField.module.css
var PatternedField_default = {};

// src/lib/components/PatternedField/PatternedField.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var PatternedField = ({
  children,
  value,
  placeholder,
  subText,
  subTextColor = "default",
  showAsterisk = false,
  readOnly = false,
  align = "left",
  size = "md",
  className,
  "aria-label": ariaLabel
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      className: cn(
        PatternedField_default.patternedField,
        PatternedField_default[size],
        PatternedField_default[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
        readOnly && PatternedField_default.readOnly,
        className
      ),
      "aria-label": ariaLabel,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: PatternedField_default.patternOverlay, "aria-hidden": "true" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: PatternedField_default.content, children: children ? children : /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
          value !== void 0 && value !== "" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: PatternedField_default.mainText, children: [
            showAsterisk && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: PatternedField_default.asterisk, children: "*" }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: PatternedField_default.value, children: value })
          ] }) : placeholder ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: PatternedField_default.placeholder, children: placeholder }) : null,
          subText && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: cn(PatternedField_default.subText, PatternedField_default[subTextColor]), children: subText })
        ] }) })
      ]
    }
  );
};
PatternedField.displayName = "PatternedField";

// src/lib/components/DenseGrid/DenseGrid.module.css
var DenseGrid_default = {};

// src/lib/components/DenseGrid/DenseGrid.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var DenseGrid = ({
  children,
  columns = 1,
  rows,
  collapsed = true,
  background = "none",
  bordered = false,
  borderWeight = "thin",
  className
}) => {
  const gridTemplateColumns = typeof columns === "number" ? `repeat(${columns}, 1fr)` : columns;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      className: cn(
        DenseGrid_default.denseGrid,
        collapsed && DenseGrid_default.collapsed,
        bordered && DenseGrid_default.bordered,
        DenseGrid_default[`bg${background.charAt(0).toUpperCase() + background.slice(1)}`],
        DenseGrid_default[`border${borderWeight.charAt(0).toUpperCase() + borderWeight.slice(1)}`],
        className
      ),
      style: __spreadValues({
        gridTemplateColumns
      }, rows && { gridTemplateRows: rows }),
      children
    }
  );
};
DenseGrid.displayName = "DenseGrid";
var DenseGridCell = ({
  children,
  colSpan,
  rowSpan,
  padding = "sm",
  align = "left",
  valign = "middle",
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  bordered,
  textColor = "default",
  weight = "normal",
  transform = "none",
  size = "sm",
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      className: cn(
        DenseGrid_default.cell,
        DenseGrid_default[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
        DenseGrid_default[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
        DenseGrid_default[`valign${valign.charAt(0).toUpperCase() + valign.slice(1)}`],
        DenseGrid_default[`text${textColor.charAt(0).toUpperCase() + textColor.slice(1)}`],
        DenseGrid_default[`weight${weight.charAt(0).toUpperCase() + weight.slice(1)}`],
        DenseGrid_default[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        transform === "uppercase" && DenseGrid_default.uppercase,
        bordered && DenseGrid_default.cellBordered,
        borderTop && DenseGrid_default.borderTop,
        borderRight && DenseGrid_default.borderRight,
        borderBottom && DenseGrid_default.borderBottom,
        borderLeft && DenseGrid_default.borderLeft,
        className
      ),
      style: __spreadValues(__spreadValues({}, colSpan && { gridColumn: `span ${colSpan}` }), rowSpan && { gridRow: `span ${rowSpan}` }),
      children
    }
  );
};
DenseGridCell.displayName = "DenseGridCell";

// src/lib/components/CompactSection/CompactSection.module.css
var CompactSection_default = {};

// src/lib/components/CompactSection/CompactSection.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var CompactSection = ({
  children,
  title,
  titleColor = "navy",
  hasAsterisk = false,
  border = "all",
  borderWeight = "thin",
  padding = "none",
  columns = 1,
  columnGap = "none",
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "section",
    {
      className: cn(
        CompactSection_default.compactSection,
        CompactSection_default[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        CompactSection_default[`borderWeight${borderWeight.charAt(0).toUpperCase() + borderWeight.slice(1)}`],
        CompactSection_default[`padding${padding.charAt(0).toUpperCase() + padding.slice(1)}`],
        className
      ),
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
          "header",
          {
            className: cn(
              CompactSection_default.header,
              CompactSection_default[`title${titleColor.charAt(0).toUpperCase() + titleColor.slice(1)}`]
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: CompactSection_default.titleText, children: title }),
              hasAsterisk && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: CompactSection_default.asterisk, children: "*" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "div",
          {
            className: cn(
              CompactSection_default.content,
              CompactSection_default[`columns${columns}`],
              CompactSection_default[`columnGap${columnGap.charAt(0).toUpperCase() + columnGap.slice(1)}`]
            ),
            children
          }
        )
      ]
    }
  );
};
CompactSection.displayName = "CompactSection";

// src/lib/components/OptionRow/OptionRow.module.css
var OptionRow_default = {};

// src/lib/components/OptionRow/OptionRow.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var OptionRow = ({
  label,
  code,
  subLabel,
  subLabelColor = "red",
  prefix,
  hasCheckbox = false,
  checked = false,
  border = "none",
  codeWidth = "md",
  size = "sm",
  onCheck,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      className: cn(
        OptionRow_default.optionRow,
        OptionRow_default[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        OptionRow_default[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        className
      ),
      children: [
        prefix && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: OptionRow_default.prefix, children: prefix }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: OptionRow_default.labelArea, children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: OptionRow_default.label, children: label }),
          subLabel && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "span",
            {
              className: cn(
                OptionRow_default.subLabel,
                OptionRow_default[`subLabel${subLabelColor.charAt(0).toUpperCase() + subLabelColor.slice(1)}`]
              ),
              children: subLabel
            }
          )
        ] }),
        code && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "span",
          {
            className: cn(
              OptionRow_default.code,
              OptionRow_default[`codeWidth${codeWidth.charAt(0).toUpperCase() + codeWidth.slice(1)}`]
            ),
            children: code
          }
        ),
        hasCheckbox && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "button",
          {
            type: "button",
            className: cn(OptionRow_default.checkbox, checked && OptionRow_default.checked),
            onClick: () => onCheck == null ? void 0 : onCheck(!checked),
            "aria-checked": checked,
            role: "checkbox",
            children: checked && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: OptionRow_default.checkMark, children: "\xD7" })
          }
        )
      ]
    }
  );
};
OptionRow.displayName = "OptionRow";

// src/lib/components/LabeledInput/LabeledInput.module.css
var LabeledInput_default = {};

// src/lib/components/LabeledInput/LabeledInput.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var LabeledInput = ({
  label,
  value = "",
  placeholder,
  variant = "underline",
  layout = "horizontal",
  labelWidth = "auto",
  inputWidth = "auto",
  size = "sm",
  handwritten = false,
  readOnly = false,
  onChange,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "div",
    {
      className: cn(
        LabeledInput_default.labeledInput,
        LabeledInput_default[`layout${layout.charAt(0).toUpperCase() + layout.slice(1)}`],
        LabeledInput_default[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "label",
          {
            className: cn(
              LabeledInput_default.label,
              LabeledInput_default[`labelWidth${labelWidth.charAt(0).toUpperCase() + labelWidth.slice(1)}`]
            ),
            children: label
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "input",
          {
            type: "text",
            value,
            placeholder,
            readOnly,
            onChange: (e) => onChange == null ? void 0 : onChange(e.target.value),
            className: cn(
              LabeledInput_default.input,
              LabeledInput_default[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
              LabeledInput_default[`inputWidth${inputWidth.charAt(0).toUpperCase() + inputWidth.slice(1)}`],
              handwritten && LabeledInput_default.handwritten
            )
          }
        )
      ]
    }
  );
};
LabeledInput.displayName = "LabeledInput";

// src/lib/components/SubHeader/SubHeader.module.css
var SubHeader_default = {};

// src/lib/components/SubHeader/SubHeader.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var SubHeader = ({
  children,
  hasIncludes = false,
  alsoSee,
  color = "navy",
  size = "sm",
  border = "top",
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "div",
    {
      className: cn(
        SubHeader_default.subHeader,
        SubHeader_default[`color${color.charAt(0).toUpperCase() + color.slice(1)}`],
        SubHeader_default[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        SubHeader_default[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: SubHeader_default.text, children }),
        alsoSee && /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { className: SubHeader_default.alsoSee, children: [
          "Also see ",
          alsoSee
        ] }),
        hasIncludes && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: SubHeader_default.includes, children: "Includes:" })
      ]
    }
  );
};
SubHeader.displayName = "SubHeader";

// src/lib/components/FormLayout/FormLayout.module.css
var FormLayout_default = {};

// src/lib/components/FormLayout/FormLayout.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var FormLayout = ({
  children,
  template,
  gridTemplate,
  gap = "none",
  bordered = false,
  borderWeight = "thin",
  className
}) => {
  const getTemplateStyle = () => {
    if (gridTemplate) return { gridTemplateColumns: gridTemplate };
    switch (template) {
      case "header-2col":
        return { gridTemplateColumns: "1fr 1fr" };
      case "body-4col":
        return { gridTemplateColumns: "repeat(4, 1fr)" };
      case "body-3col":
        return { gridTemplateColumns: "repeat(3, 1fr)" };
      case "footer":
        return { gridTemplateColumns: "1fr auto 1fr" };
      default:
        return {};
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "div",
    {
      className: cn(
        FormLayout_default.formLayout,
        template && FormLayout_default[template],
        FormLayout_default[`gap${gap.charAt(0).toUpperCase() + gap.slice(1)}`],
        bordered && FormLayout_default.bordered,
        FormLayout_default[`borderWeight${borderWeight.charAt(0).toUpperCase() + borderWeight.slice(1)}`],
        className
      ),
      style: getTemplateStyle(),
      children
    }
  );
};
FormLayout.displayName = "FormLayout";
var FormLayoutArea = ({
  children,
  area,
  colSpan,
  rowSpan,
  border = "none",
  align = "stretch",
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "div",
    {
      className: cn(
        FormLayout_default.formLayoutArea,
        FormLayout_default[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        FormLayout_default[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
        className
      ),
      style: __spreadValues(__spreadValues(__spreadValues({}, area && { gridArea: area }), colSpan && { gridColumn: `span ${colSpan}` }), rowSpan && { gridRow: `span ${rowSpan}` }),
      children
    }
  );
};
FormLayoutArea.displayName = "FormLayoutArea";

// src/lib/components/SectionTitle/SectionTitle.module.css
var SectionTitle_default = {};

// src/lib/components/SectionTitle/SectionTitle.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var SectionTitle = ({
  children,
  suffix = "",
  color = "navy",
  size = "sm",
  border = "bottom",
  inline = false,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "div",
    {
      className: cn(
        SectionTitle_default.sectionTitle,
        SectionTitle_default[`color${color.charAt(0).toUpperCase() + color.slice(1)}`],
        SectionTitle_default[`size${size.charAt(0).toUpperCase() + size.slice(1)}`],
        SectionTitle_default[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        inline && SectionTitle_default.inline,
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: SectionTitle_default.text, children }),
        suffix && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: SectionTitle_default.suffix, children: suffix })
      ]
    }
  );
};
SectionTitle.displayName = "SectionTitle";

// src/lib/components/CodeTable/CodeTable.module.css
var CodeTable_default = {};

// src/lib/components/CodeTable/CodeTable.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var CodeTable = ({
  children,
  showCode = true,
  codePosition = "left",
  showCheckbox = true,
  border = "none",
  compact = true,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "div",
    {
      className: cn(
        CodeTable_default.codeTable,
        CodeTable_default[`code${codePosition.charAt(0).toUpperCase() + codePosition.slice(1)}`],
        CodeTable_default[`border${border.charAt(0).toUpperCase() + border.slice(1)}`],
        compact && CodeTable_default.compact,
        !showCode && CodeTable_default.hideCode,
        !showCheckbox && CodeTable_default.hideCheckbox,
        className
      ),
      children
    }
  );
};
CodeTable.displayName = "CodeTable";
var CodeTableRow = ({
  code,
  label,
  subLabel,
  subLabelColor = "red",
  hasCheckbox = true,
  checked = false,
  onCheck,
  border,
  className
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    "div",
    {
      className: cn(
        CodeTable_default.codeTableRow,
        border && CodeTable_default[`rowBorder${border.charAt(0).toUpperCase() + border.slice(1)}`],
        className
      ),
      children: [
        code !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: CodeTable_default.code, children: code }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: CodeTable_default.labelArea, children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: CodeTable_default.label, children: label }),
          subLabel && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            "span",
            {
              className: cn(
                CodeTable_default.subLabel,
                CodeTable_default[`subLabel${subLabelColor.charAt(0).toUpperCase() + subLabelColor.slice(1)}`]
              ),
              children: subLabel
            }
          )
        ] }),
        hasCheckbox && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          "button",
          {
            type: "button",
            className: cn(CodeTable_default.checkbox, checked && CodeTable_default.checked),
            onClick: () => onCheck == null ? void 0 : onCheck(!checked),
            "aria-checked": checked,
            role: "checkbox",
            children: checked && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: CodeTable_default.checkMark, children: "\xD7" })
          }
        )
      ]
    }
  );
};
CodeTableRow.displayName = "CodeTableRow";

// src/lib/tokens/colors.ts
var colors = {
  // Backgrounds
  background: {
    form: "#A8D5D8",
    // Teal/seafoam - main form background
    formAlt: "#9CCBCE",
    // Slightly darker teal for alternating rows
    paper: "#F5F2E8",
    // Aged paper white for input areas
    muted: "#E8E5DC"
    // Muted cream for disabled states
  },
  // Headers & Accents
  header: {
    primary: "#8B1538",
    // Deep burgundy/maroon for main headers
    secondary: "#4A0D1F",
    // Darker variant for hover/active
    accent: "#C41E3A"
    // Brighter red for emphasis
  },
  // Borders & Lines
  border: {
    primary: "#1A1A1A",
    // Near-black for primary borders
    thin: "#2D2D2D",
    // Slightly lighter for thin rules
    muted: "#666666"
    // Gray for subtle divisions
  },
  // Text
  text: {
    primary: "#1A1A1A",
    // Near-black for main text
    secondary: "#333333",
    // Dark gray for secondary
    onDark: "#F5F2E8",
    // Light text on dark backgrounds
    muted: "#666666",
    // Muted text for labels
    typewriter: "#0A0A0A"
    // Intense black for typewriter effect
  },
  // Interactive
  interactive: {
    checkbox: "#1A1A1A",
    // Black for checkbox marks
    strikethrough: "#1A1A1A",
    // Black for N/A diagonal lines
    highlight: "#FFE4B5"
    // Muted yellow for highlights
  }
};

// src/lib/tokens/typography.ts
var typography = {
  fonts: {
    // Primary typewriter font stack
    typewriter: '"American Typewriter", "Courier Prime", "Courier New", Courier, monospace',
    // Alternative mono for code/technical
    mono: '"IBM Plex Mono", "Consolas", "Monaco", monospace',
    // Sans-serif fallback for accessibility
    sans: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif'
  },
  sizes: {
    xs: "0.625rem",
    // 10px - fine print
    sm: "0.75rem",
    // 12px - labels, footnotes
    base: "0.875rem",
    // 14px - body text
    md: "1rem",
    // 16px - standard inputs
    lg: "1.125rem",
    // 18px - section headers
    xl: "1.25rem",
    // 20px - major headers
    "2xl": "1.5rem"
    // 24px - page titles
  },
  weights: {
    normal: 400,
    medium: 500,
    bold: 700
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75
  },
  letterSpacing: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.05em",
    wider: "0.1em",
    typewriter: "0.08em"
    // Authentic typewriter spacing
  }
};

// src/lib/tokens/spacing.ts
var spacing = {
  // Base unit: 4px
  0: "0",
  px: "1px",
  0.5: "0.125rem",
  // 2px
  1: "0.25rem",
  // 4px
  2: "0.5rem",
  // 8px
  3: "0.75rem",
  // 12px
  4: "1rem",
  // 16px
  5: "1.25rem",
  // 20px
  6: "1.5rem",
  // 24px
  8: "2rem",
  // 32px
  10: "2.5rem",
  // 40px
  12: "3rem"
  // 48px
};
var borders = {
  width: {
    thin: "1px",
    medium: "2px",
    thick: "3px"
  },
  // Border radii - vintage forms have sharp corners
  radius: {
    none: "0",
    sm: "1px",
    // Subtle rounding for print imperfections
    md: "2px"
  }
};

// src/lib/theme/index.ts
var defaultTheme = {
  colors: {
    primary: "#324D88",
    secondary: "#1E3A5F",
    accent: "#8B1538",
    background: "#A8D5D8",
    surface: "#F5F2E8",
    text: "#324D88",
    textMuted: "#6B8BC8",
    border: "#324D88",
    error: "#8B1538",
    success: "#2D5A27"
  },
  fonts: {
    typewriter: '"Berkeley Mono", "American Typewriter", "Courier Prime", monospace',
    mono: '"Berkeley Mono", "IBM Plex Mono", "Consolas", monospace',
    handwriting: '"Caveat", "Dancing Script", cursive',
    system: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem"
  },
  borders: {
    thin: "1px solid",
    medium: "2px solid",
    thick: "3px solid"
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    md: "0.25rem",
    lg: "0.5rem",
    full: "9999px"
  }
};
var themes = {
  default: defaultTheme,
  // Warmer, sepia-toned variant
  sepia: __spreadProps(__spreadValues({}, defaultTheme), {
    colors: __spreadProps(__spreadValues({}, defaultTheme.colors), {
      primary: "#5C4033",
      secondary: "#8B7355",
      background: "#F4E9D9",
      surface: "#FFF8F0",
      text: "#4A3728",
      border: "#8B7355"
    })
  }),
  // High contrast dark mode
  dark: __spreadProps(__spreadValues({}, defaultTheme), {
    colors: __spreadProps(__spreadValues({}, defaultTheme.colors), {
      primary: "#7EB8DA",
      secondary: "#A8D5D8",
      background: "#1A1A2E",
      surface: "#16213E",
      text: "#E8E8E8",
      textMuted: "#A0A0A0",
      border: "#4A5568"
    })
  }),
  // Minimal grayscale
  minimal: __spreadProps(__spreadValues({}, defaultTheme), {
    colors: __spreadProps(__spreadValues({}, defaultTheme.colors), {
      primary: "#333333",
      secondary: "#666666",
      accent: "#000000",
      background: "#FFFFFF",
      surface: "#F5F5F5",
      text: "#333333",
      textMuted: "#888888",
      border: "#CCCCCC"
    })
  })
};
function generateCSSVariables(theme) {
  return `
    --cc-color-primary: ${theme.colors.primary};
    --cc-color-secondary: ${theme.colors.secondary};
    --cc-color-accent: ${theme.colors.accent};
    --cc-color-background: ${theme.colors.background};
    --cc-color-surface: ${theme.colors.surface};
    --cc-color-text: ${theme.colors.text};
    --cc-color-text-muted: ${theme.colors.textMuted};
    --cc-color-border: ${theme.colors.border};
    --cc-color-error: ${theme.colors.error};
    --cc-color-success: ${theme.colors.success};
    --cc-font-typewriter: ${theme.fonts.typewriter};
    --cc-font-mono: ${theme.fonts.mono};
    --cc-font-handwriting: ${theme.fonts.handwriting};
    --cc-font-system: ${theme.fonts.system};
    --cc-spacing-xs: ${theme.spacing.xs};
    --cc-spacing-sm: ${theme.spacing.sm};
    --cc-spacing-md: ${theme.spacing.md};
    --cc-spacing-lg: ${theme.spacing.lg};
    --cc-spacing-xl: ${theme.spacing.xl};
  `.trim();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Checkbox,
  CodeTable,
  CodeTableRow,
  CompactSection,
  DenseGrid,
  DenseGridCell,
  DirectionalArrow,
  FormField,
  FormGrid,
  FormGridItem,
  FormLayout,
  FormLayoutArea,
  FormSection,
  LabeledInput,
  OptionRow,
  PatternedField,
  SectionHeader,
  SectionTitle,
  StrikethroughCell,
  SubHeader,
  VintageTable,
  VintageTableCell,
  VintageTableHeader,
  VintageTableRow,
  YearBadge,
  borders,
  cn,
  colors,
  defaultTheme,
  generateCSSVariables,
  spacing,
  themes,
  typography
});
//# sourceMappingURL=index.js.map