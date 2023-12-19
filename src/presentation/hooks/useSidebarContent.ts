import { useState, useEffect } from 'react';
export enum To {
  Local = 'local',
  External = 'external',
}
enum Target {
  Blank = '_blank',
  Parent = '_parent',
}
interface Redirect {
  to: To;
  target: Target | null;
  url: string;
}
export interface Sidebar {
  id: string;
  label: string;
  isActive: boolean;
  isDefault: boolean;
  redirect: Redirect;
}

type ResponseData = { value: Sidebar[] };

interface ErrorResponse {
  message: string;
}

const GROUP_NAME = 'account';
const PARAM_NAME = 'sidebar';

function useSidebarContent() {
  const [data, setData] = useState<ResponseData | null>(null);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BFF_WEB_URL}cms/group/${GROUP_NAME}/${PARAM_NAME}`,
          {
            headers: {
              'x-api-key': process.env.NEXT_PUBLIC_API_KEY_BFF_WEB!,
            },
          },
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const jsonData = (await response.json()) as ResponseData;
        setData(jsonData);
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
