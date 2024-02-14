enum AddressType {
  Pickup = 'pickup',
}

type Address = {
  street: string;
  number: string;
  state: string;
  city: string;
  neighborhood: string;
  addressType?: AddressType;
};

export enum PaymentSystem {
  EpayRedirect = '735',
}

type Payment = {
  id: string;
  paymentSystemName: string;
  value: number;
  installments: number;
  paymentSystem: PaymentSystem;
  group: string;
  lastDigits: string;
};

type Transaction = {
  transactionId: string;
  payments: Payment[];
};

type DeliveryWindow = {
  endDateUtc: Date;
  startDateUtc: Date;
};

type Item = {
  id: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
  detailUrl: string;
};

type Parcel = {
  address: Address;
  shippingEstimateDate: Date;
  items: Item[];
  deliveryWindow: DeliveryWindow;
  pickupFriendlyName: string;
};

type Order = {
  orderId: string;
  deliveryParcel?: Parcel[];
  pickUpParcels?: Parcel[];
  takeAwayParcels?: Parcel[];
};

type TransactionProduct = {
  id: string;
  name: string;
  sku: string;
  brand: string;
  category: string;
};

export type OrderDto = {
  orderNumber: string;
  transactionDate: Date;
  clientProfileData: {
    fullName: string;
    email: string;
    phone: string;
    address: Address;
  };
  paymentData: {
    transactions: Transaction[];
  };
  orders: Order[];
  transactionProducts: TransactionProduct[];
  totals: {
    subtotal: number;
    discounts: number;
    shipping: number;
    finalValue: number;
  };
};
