import { ComponentType } from 'react';

export type AccountPaths =
  | 'cotizacion-de-pedido'
  | 'mis-favoritos'
  | 'mis-tarjetas'
  | 'pedidos'
  | 'mi-organizacion'
  | 'mi-perfil'
  | 'autenticacion'
  | 'direcciones'
  | 'mis-compras';

export type AccountComponentProps = {
  [key in AccountPaths]: ComponentType<{}>;
};
