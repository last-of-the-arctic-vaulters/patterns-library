import React from 'react';

export interface AXAFieldsetProps {
  horizontal?: boolean;
  error?: string;
  slot?: string;
  disableresponsivestretch?: boolean;
}

declare function createAXAFieldset(
  createElement: typeof React.createElement
): React.ComponentType<AXAFieldsetProps>;

export default createAXAFieldset;
