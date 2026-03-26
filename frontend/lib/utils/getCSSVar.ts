'client use';
export function getCSSVar(varName: string): string {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
}
