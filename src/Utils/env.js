export const isDevMode = () =>
  import.meta.env.VITE_DEV_MODE?.toLowerCase() === "true";
