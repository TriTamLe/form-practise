export const getLinkFromFile = (blob: Blob): string => {
    return URL.createObjectURL(blob);
};