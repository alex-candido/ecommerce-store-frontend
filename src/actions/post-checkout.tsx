import { api } from '@/lib/fetcher';

interface ICheckoutProps {
  items: ProductData[];
}

const postCheckout = async ({
  items
}: ICheckoutProps): Promise<any> => {
  try {
    const url = `/api/${process.env.NEXT_STORE_API_ID}/checkout`;

    const { data } = await api.post(url, {
      productIds: items.map((item) => item.id)
    });

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return [];
  }
};

export default postCheckout;
