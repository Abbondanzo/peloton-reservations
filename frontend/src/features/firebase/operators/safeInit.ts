export const safeInit = <T>(init: () => T | undefined) => {
  try {
    return init();
  } catch (error) {
    if (process.env.NODE_ENV === "production") {
      throw error;
    } else {
      console.error(error);
    }
  }
};
