import request from "./request";

export const getPokemonData = async (name: string): Promise<any> => {
  try {
    const { data } = await request.get(`/pokemon/${name}`);
    return data;
  } catch (error) {
    console.error("error api");
  }
};
