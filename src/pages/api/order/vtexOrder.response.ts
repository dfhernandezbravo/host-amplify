export interface VtexOrder {
  data: Data;
}

export interface Data {
  orderGroup: OrderGroup;
}

export interface OrderGroup {
  orders: Order[];
  totalPickUpParcels: Parcel[];
  totalDeliveryParcels: Parcel[];
  totalTakeAwayParcels: any[];
  analyticsData: AnalyticsDatum[];
}

export interface AnalyticsDatum {
  event: string;
  accountName: string;
  orderGroup: string;
  ordersInOrderGroup: string[];
  salesChannel: string;
  visitorOptinNewsletter: boolean;
  corporateName: string;
  visitorContactPhone: string;
  visitorContactInfo: string[];
  visitorAddressState: string;
  visitorAddressCountry: string;
  visitorAddressPostalCode: string;
  visitorAddressCity: string;
  visitorAddressStreet: string;
  visitorAddressNumber: string;
  visitorAddressNeighborhood: string;
  visitorAddresssComplement: string;
  transactionId: string;
  transactionDate: Date;
  openTextField: OpenTextField;
  transactionAffiliation: string;
  transactionTotal: number;
  transactionShipping: number;
  transactionSubtotal: number;
  transactionDiscounts: number;
  transactionTax: number;
  transactionCustomTaxes: TransactionCustomTaxes;
  transactionCurrency: string;
  transactionPaymentType: TransactionPaymentType[];
  transactionShippingMethod: TransactionShippingMethod[];
  transactionLatestShippingEstimate: Date;
  transactionProducts: TransactionProduct[];
  transactionPayment: TransactionPayment;
}

export interface OpenTextField {
  value: string;
}

export interface TransactionCustomTaxes {}

export interface TransactionPayment {
  id: string;
}

export interface TransactionPaymentType {
  group: string;
  paymentSystemName: string;
  installments: number;
  value: number;
}

export interface TransactionProduct {
  id: string;
  name: string;
  sku: string;
  skuRefId: string;
  productRefId: string;
  ean: string;
  skuName: string;
  attachments: any[];
  slug: string;
  brand: string;
  brandId: string;
  seller: string;
  sellerId: string;
  category: string;
  categoryId: string;
  categoryTree: string[];
  categoryIdTree: string[];
  priceTags: any[];
  originalPrice: number;
  price: number;
  sellingPrice: number;
  tax: number;
  quantity: number;
  components: any[];
  measurementUnit: string;
  unitMultiplier: number;
}

export interface TransactionShippingMethod {
  selectedSla: string;
  itemId: string;
}

export interface Order {
  allowCancellation: boolean;
  orderId: string;
  deliveryParcels: Parcel[];
  pickUpParcels: Parcel[];
  takeAwayParcels: Parcel[];
  items: Item[];
  sellers: Seller[];
  totals: Total[];
  clientProfileData: ClientProfileData;
  paymentData: PaymentData;
  storePreferencesData: StorePreferencesData;
  creationDate: Date;
  value: number;
}

export interface ClientProfileData {
  email: string;
  firstName: string;
  lastName: string;
  document: string;
  documentType: string;
  phone: string;
}

export interface Parcel {
  address: Address;
  price: number;
  pickupFriendlyName: string;
  seller: string;
  items: Item[];
  selectedSla: string;
  selectedSlaObj: SelectedSlaObj;
  shippingEstimate: string;
  shippingEstimateDate: Date;
  deliveryWindow: DeliveryWindow;
  deliveryChannel: string;
  selectedSlaType: string;
}
enum AddressType {
  Pickup = 'pickup',
}

export interface Address {
  addressType: AddressType;
  receiverName: string;
  state: string;
  street: string;
  number: string;
  city: string;
  postalCode: string;
  neighborhood: string;
  complement: string;
  country: string;
  addressId?: string;
}

export interface DeliveryWindow {
  endDateUtc: Date;
  startDateUtc: Date;
}

export interface Item {
  id: string;
  skuName: string;
  name: string;
  productId: string;
  price: number;
  listPrice: number;
  isGift: boolean;
  parentItemIndex: string;
  quantity: number;
  attachments: any[];
  bundleItems: any[];
  seller: string;
  imageUrl: string;
  detailUrl: string;
  measurementUnit: string;
  unitMultiplier: number;
}

export interface SelectedSlaObj {
  id: string;
  name: string;
  shippingEstimate: string;
  deliveryWindow: DeliveryWindow;
  price: number;
  deliveryChannel: string;
  pickupStoreInfo: PickupStoreInfo;
}

export interface PickupStoreInfo {
  additionalInfo: string;
  address: Address;
  friendlyName: string;
  isPickupStore: boolean;
}

export interface PaymentData {
  transactions: Transaction[];
}

export interface Transaction {
  transactionId: string;
  payments: Payment[];
}

export enum PaymentSystem {
  EpayRedirect = '735',
}

export interface Payment {
  id: string;
  paymentSystem: PaymentSystem;
  paymentSystemName: string;
  value: number;
  installments: number;
  lastDigits: string;
  group: string;
  dueDate: string;
  url: string;
  bankIssuedInvoiceBarCodePNG: string;
  bankIssuedInvoiceIdentificationNumber: string;
  connectorResponses: ConnectorResponses;
}

export interface ConnectorResponses {
  Tid: string;
  ReturnCode: string;
  Message: string;
  authId: string;
  nsu: string;
}

export interface Seller {
  id: string;
  name: string;
}

export interface StorePreferencesData {
  countryCode: string;
  currencyCode: string;
}

export interface Total {
  id: string;
  name: string;
  value: number;
}
