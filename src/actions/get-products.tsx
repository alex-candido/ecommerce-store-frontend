import { api } from '@/lib/fetcher';

const getAllProducts = async (): Promise<ProductData[]> => {
  try {
    const url = `/api/${process.env.NEXT_STORE_API_ID}/products`;
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
};

export default getAllProducts;
