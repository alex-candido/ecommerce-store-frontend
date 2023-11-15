import { api } from '@/lib/fetcher';

interface IProductsProps {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getAllProducts = async ({
  colorId,
  sizeId,
  categoryId,
  isFeatured,
}: IProductsProps): Promise<ProductData[]> => {
  try {
    const url = `/api/${process.env.NEXT_STORE_API_ID}/products`;

    const { data } = await api.get(url, {
      params: {
        colorId,
        sizeId,
        categoryId,
        isFeatured,
      },
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
};

export default getAllProducts;
