export const extractId = (str?: string) => str ? +str.replace(/[^0-9]/g, '') : undefined
