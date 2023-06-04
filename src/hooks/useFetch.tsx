import useSWR from 'swr';
import api from '@/service/api';

export default function useFetch<Data = any, Error = any>(url: string){
  const{data, error} = useSWR<Data, Error>(url, async(url: string) => {
    const response = await api.get(url);
    return response.data;
  }, {
    revalidateOnReconnect: true
  });

  return {data, error};
}

