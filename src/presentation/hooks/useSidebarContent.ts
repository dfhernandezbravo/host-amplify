import sidebarService from '@/application/services/sidebar';
import { Sidebar } from '@/domain/interfaces/sidebar';
import { useState, useEffect } from 'react';
interface ErrorResponse {
  message: string;
}

function useSidebarContent(GROUP_NAME: string, PARAM_NAME: string) {
  const [data, setData] = useState<{ value: Sidebar[] } | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await sidebarService.getSidebarData(
          GROUP_NAME,
          PARAM_NAME,
        );
        setData(data);
      } catch (error) {
        setError({ message: (error as Error).message });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
}

export default useSidebarContent;
