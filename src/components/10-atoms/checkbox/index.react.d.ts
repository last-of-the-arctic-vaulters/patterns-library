import React from 'react';

interface AXACheckboxProps {
  value?: string;
  name?: string;
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  onChange?: (e: UIEvent) => void;
  onFocus?: (e?: FocusEvent) => void;
  onBlur?: (e?: FocusEvent) => void;
}

declare function createAXACheckbox(
  createElement: typeof React.createElement
): React.ComponentType<AXACheckboxProps>;

export = createAXACheckbox;
