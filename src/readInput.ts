export const readInput = async (fileName: string) => {
  const text = await Deno.readTextFile(fileName).then((response: string) =>
    response.split("\n")
  );
  return text;
};
