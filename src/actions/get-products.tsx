import { api } from '@/lib/fetcher';

interface IProductsProps {
  storeId: string;
}

const getAllProducts = async ({
  storeId,
}: IProductsProps): Promise<ProductData[]> => {
  try {
    const url = `/api/${storeId}/products`;
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
