export const isEmpty = (jutsu)=> Object.values(jutsu).every(x => x !== null && x !== '' && x !== 0);