export const isValidJSON = (input: string): boolean => {
  try {
    JSON.parse(input);
    return true;
  } catch (error) {
    console.error("Error validating JSON=", error);
    return false;
  }
};
