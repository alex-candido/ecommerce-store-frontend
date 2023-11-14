import { api } from '@/lib/fetcher';

const getAllColors = async (): Promise<ColorData[]> => {
  try {
    const url = `/api/${process.env.NEXT_STORE_API_ID}/colors`;
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
};

export default getAllColors;
