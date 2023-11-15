import { api } from '@/lib/fetcher';

interface IUserStoreProps {
  billboardId: string;
}

const getBillboard = async ({
  billboardId,
}: IUserStoreProps): Promise<BillboardData> => {
  try {
    const url = `/api/billboards/${billboardId}`;
    const { data } = await api.get(url);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    return {} as BillboardData;
  }
};

export default getBillboard;
