export function getCSSVar(varName: string) {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
}
