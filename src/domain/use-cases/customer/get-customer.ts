import { Customer } from '@cencosud-ds/easy-design-system';

export const getCustomer = async (accessToken: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BFF_WEB_URL}/customers`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY_BFF_WEB || '',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    if (!response.ok) return null;

    const customer = (await response.json()) as Customer;
    return customer;
  } catch (error) {
    return null;
  }
};
