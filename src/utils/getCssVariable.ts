export const getCssVariable = (variableName: string): string => {
  if (typeof window !== 'undefined') {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim();
    return value || '';
  }
  return '';
};