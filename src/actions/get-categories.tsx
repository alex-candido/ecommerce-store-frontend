import { api } from '@/lib/fetcher';

const getAllCategories = async (): Promise<CategoryData[]> => {
  try {
    const url = `/api/${process.env.NEXT_STORE_API_ID}/categories`;
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
};

export default getAllCategories;
