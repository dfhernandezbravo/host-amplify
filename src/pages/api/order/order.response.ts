export interface Total {
  id: string;
  name: string;
  value: number;
}

export type Order = {
  orderId: string;
  sequence: string;
  marketplaceOrderId: string;
  marketplaceServicesEndpoint: null;
  sellerOrderId: string;
  origin: string;
  affiliateId: string;
  salesChannel: string;
  merchantName: null;
  status: string;
  workflowIsInError: boolean;
  statusDescription: string;
  value: number;
  creationDate: Date;
  lastChange: Date;
  orderGroup: string;
  totals: Total[];
  items: ItemElement[];
  marketplaceItems: string[];
  clientProfileData: ClientProfileData;
  giftRegistryData: null;
  marketingData: null;
  ratesAndBenefitsData: RatesAndBenefitsData;
  shippingData: ShippingData;
  paymentData: PaymentData;
  packageAttachment: PackageAttachment;
  sellers: Seller[];
  callCenterOperatorData: null;
  followUpEmail: string;
  lastMessage: null;
  hostname: string;
  invoiceData: null;
  changesAttachment: null;
  openTextField: OpenTextField;
  roundingError: number;
  orderFormId: string;
  commercialConditionData: null;
  isCompleted: boolean;
  customData: CustomData;
  storePreferencesData: StorePreferencesData;
  allowCancellation: boolean;
  allowEdition: boolean;
  isCheckedIn: boolean;
  marketplace: null;
  authorizedDate: Date;
  invoicedDate: null;
  cancelReason: null;
  itemMetadata: ItemMetadata;
  subscriptionData: null;
  taxData: null;
  checkedInPickupPointId: null;
  cancellationData: null;
  clientPreferencesData: ClientPreferencesData;
};

export interface ClientPreferencesData {
  locale: string;
  optinNewsLetter: boolean;
}

export interface ClientProfileData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  documentType: string;
  document: string;
  phone: string;
  corporateName: null;
  tradeName: null;
  corporateDocument: null;
  stateInscription: null;
  corporatePhone: null;
  isCorporate: boolean;
  userProfileId: string;
  userProfileVersion: null;
  customerClass: null;
}

export interface CustomData {
  customApps: CustomApp[];
}

export interface CustomApp {
  fields: Fields;
  id: string;
  major: number;
}

export interface Fields {
  itemValues: string;
}

export interface ItemMetadata {
  Items: Item[];
}

export interface Item {
  Id: string;
  Seller: string;
  Name: string;
  SkuName: string;
  ProductId: string;
  RefId: string;
  Ean: string;
  ImageUrl: string;
  DetailUrl: string;
  AssemblyOptions: string[];
}

export interface ItemElement {
  uniqueId: string;
  id: string;
  productId: string;
  ean: string;
  lockId: null;
  itemAttachment: ItemAttachment;
  attachments: string[];
  quantity: number;
  seller: string;
  name: string;
  refId: string;
  price: number;
  listPrice: number;
  manualPrice: null;
  priceTags: string[];
  imageUrl: string;
  detailUrl: string;
  components: string[];
  bundleItems: string[];
  params: string[];
  offerings: Offering[];
  attachmentOfferings: string[];
  sellerSku: string;
  priceValidUntil: Date;
  commission: number;
  tax: number;
  preSaleDate: null;
  additionalInfo: AdditionalInfo;
  measurementUnit: string;
  unitMultiplier: number;
  sellingPrice: number;
  isGift: boolean;
  shippingPrice: null;
  rewardValue: number;
  freightCommission: number;
  priceDefinition: PriceDefinition;
  taxCode: string;
  parentItemIndex: null;
  parentAssemblyBinding: null;
  callCenterOperator: null;
  serialNumbers: null;
  assemblies: string[];
  costPrice: null;
}

export interface AdditionalInfo {
  brandName: string;
  brandId: string;
  categoriesIds: string;
  categories: Category[];
  productClusterId: string;
  commercialConditionId: string;
  dimension: Dimension;
  offeringInfo: null;
  offeringType: null;
  offeringTypeId: null;
}

export interface Category {
  id: number;
  name: string;
}

export interface Dimension {
  cubicweight: number;
  height: number;
  length: number;
  weight: number;
  width: number;
}

export interface ItemAttachment {
  content: Content;
  name: null;
}

export interface Content {}

export interface Offering {
  type: string;
  id: string;
  name: string;
  price: number;
}

export interface PriceDefinition {
  sellingPrices: SellingPrice[];
  calculatedSellingPrice: number;
  total: number;
}

export interface SellingPrice {
  value: number;
  quantity: number;
}

export interface OpenTextField {
  value: string;
}

export interface PackageAttachment {
  packages: string[];
}

export interface PaymentData {
  giftCards: string[];
  transactions: Transaction[];
}

export interface Transaction {
  isActive: boolean;
  transactionId: string;
  merchantName: string;
  payments: Payment[];
}

export interface Payment {
  id: string;
  paymentSystem: string;
  paymentSystemName: string;
  value: number;
  installments: number;
  referenceValue: number;
  cardHolder: null;
  cardNumber: null;
  firstDigits: null;
  lastDigits: null;
  cvv2: null;
  expireMonth: null;
  expireYear: null;
  url: null;
  giftCardId: null;
  giftCardName: null;
  giftCardCaption: null;
  redemptionCode: null;
  group: string;
  tid: string;
  dueDate: null;
  connectorResponses: ConnectorResponses;
  giftCardProvider: null;
  giftCardAsDiscount: null;
  koinUrl: null;
  accountId: null;
  parentAccountId: null;
  bankIssuedInvoiceIdentificationNumber: null;
  bankIssuedInvoiceIdentificationNumberFormatted: null;
  bankIssuedInvoiceBarCodeNumber: null;
  bankIssuedInvoiceBarCodeType: null;
  billingAddress: null;
  paymentOrigin: null;
}

export interface ConnectorResponses {
  Tid: string;
  ReturnCode: null;
  Message: null;
  authId: string;
  nsu: string;
}

export interface RatesAndBenefitsData {
  id: string;
  rateAndBenefitsIdentifiers: string[];
}

export interface Seller {
  id: string;
  name: string;
  logo: string;
  fulfillmentEndpoint: string;
}

export interface ShippingData {
  id: string;
  address: Address;
  logisticsInfo: LogisticsInfo[];
  trackingHints: null;
  selectedAddresses: Address[];
}

export interface Address {
  addressType: string;
  receiverName: null | string;
  addressId: string;
  versionId: null;
  entityId: null;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: null;
  reference: null;
  geoCoordinates: number[];
}

export interface LogisticsInfo {
  itemIndex: number;
  selectedSla: string;
  lockTTL: string;
  price: number;
  listPrice: number;
  sellingPrice: number;
  deliveryWindow: DeliveryWindow;
  deliveryCompstring: string;
  shippingEstimate: string;
  shippingEstimateDate: Date;
  slas: Sla[];
  shipsTo: string[];
  deliveryIds: DeliveryID[];
  deliveryChannels: DeliveryChannel[];
  deliveryChannel: string;
  pickupStoreInfo: PickupStoreInfo;
  addressId: string;
  versionId: null;
  entityId: null;
  polygonName: string;
  pickupPointId: string;
  transitTime: string;
}

export interface DeliveryChannel {
  id: string;
  stockBalance: number;
}

export interface DeliveryID {
  courierId: string;
  courierName: string;
  dockId: string;
  quantity: number;
  warehouseId: string;
  accountCarrierName: null;
  kitItemDetails: string[];
}

export interface DeliveryWindow {
  startDateUtc: Date;
  endDateUtc: Date;
  price: number;
}

export interface PickupStoreInfo {
  additionalInfo: string;
  address: Address;
  dockId: null;
  friendlyName: string;
  isPickupStore: boolean;
}

export interface Sla {
  id: string;
  name: string;
  shippingEstimate: string;
  deliveryWindow: DeliveryWindow;
  price: number;
  deliveryChannel: string;
  pickupStoreInfo: PickupStoreInfo;
  polygonName: string;
  lockTTL: string;
  pickupPointId: string;
  transitTime: string;
  pickupDistance: number;
}

export interface StorePreferencesData {
  countryCode: string;
  currencyCode: string;
  currencyFormatInfo: CurrencyFormatInfo;
  currencyLocale: number;
  currencySymbol: string;
  timeZone: string;
}

export interface CurrencyFormatInfo {
  CurrencyDecimalDigits: number;
  CurrencyDecimalSeparator: string;
  CurrencyGroupSeparator: string;
  CurrencyGroupSize: number;
  StartsWithCurrencySymbol: boolean;
}
