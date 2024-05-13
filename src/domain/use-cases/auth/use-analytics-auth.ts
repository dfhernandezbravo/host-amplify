import { WINDOWS_EVENTS } from '@/application/infra/events';
import { useEvents } from '@/presentation/hooks/use-events';
import { ShoppingCart } from '@cencosud-ds/easy-design-system';

const useAnalyticsAuth = () => {
  const { dispatchEvent } = useEvents();

  const sendLoginEvent = async (shoppingCart: ShoppingCart) => {
    const customer = shoppingCart?.customer;
    if (!customer) return;

    const { userId, document, email } = customer;

    dispatchEvent({
      name: WINDOWS_EVENTS.Analytics,
      detail: {
        event: 'userData',
        userId: btoa(email),
        idEcommerce: userId,
        userCiid: btoa(document),
        category: 'Identificación usuario',
        accion: 'Ingreso',
        tag: 'usuario registrado',
      },
    });
  };

  return { sendLoginEvent };
};

export default useAnalyticsAuth;
