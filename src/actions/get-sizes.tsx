import { api } from '@/lib/fetcher';

const getAllSizes = async (): Promise<SizeData[]> => {
  try {
    const url = `/api/${process.env.NEXT_STORE_API_ID}/sizes`;
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
};

export default getAllSizes;
