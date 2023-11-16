// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { OrderDto } from './order.response';
import { VtexOrder } from './vtexOrder.response';
import { extractNumber } from '@/helpers/order';
type ResponseData = OrderDto | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  const { orderNumber } = req.query;

  const { cookie } = req.headers;

  const parseCookie = (cookie: string) => {
    return cookie
      .split(';')
      .reduce((acc: { [key: string]: string }, cookie: string) => {
        const equalSignIndex = cookie.indexOf('=');
        const name = cookie.substring(0, equalSignIndex).trim();
        const value = cookie.substring(equalSignIndex + 1).trim();
        acc[name] = decodeURIComponent(value);
        return acc;
      }, {});
  };

  const parsedCookies = parseCookie(cookie!);
  console.log('parsedCookies->', parsedCookies);

  if (!parsedCookies?.CheckoutDataAccess) {
    res.status(403).send({ message: 'An error occurred' });
    return;
  }

  const query = `
  query getOrderGroup($orderGroup: String) {
    orderGroup(orderGroup: $orderGroup) {
      orders {
        allowCancellation
        orderId
        deliveryParcels {
          address {
            addressType
            receiverName
            state
            street
            number
            city
            postalCode
            neighborhood
            complement
            country
          }
          price
          pickupFriendlyName
          seller
          items {
  
            id
            skuName
            name
            productId
            price
            listPrice
            isGift
            parentItemIndex
            quantity
            attachments {
              content
              name
            }
            bundleItems {
              id
              attachments {
                content
                name
              }
              name
              price
              quantity
              imageUrl
              measurementUnit
              unitMultiplier
            }
            seller
            imageUrl
            detailUrl
            measurementUnit
            unitMultiplier
          }
          selectedSla
          selectedSlaObj {
            id
            name
            shippingEstimate
            deliveryWindow {
              endDateUtc
              startDateUtc
            }
            price
            deliveryChannel
            pickupStoreInfo {
              additionalInfo
              address {
                addressId
                addressType
                receiverName
                street
                number
                city
                state
                postalCode
                neighborhood
                complement
                country
              }
              friendlyName
              isPickupStore
            }
          }
          shippingEstimate
          shippingEstimateDate
          deliveryWindow {
            endDateUtc
            startDateUtc
          }
          deliveryChannel
          selectedSlaType
        }
        pickUpParcels {
          address {
            addressType
            receiverName
            state
            street
            number
            city
            postalCode
            neighborhood
            complement
            country
          }
          price
          pickupFriendlyName
          seller
          items {
            id
            skuName
            name
            productId
            price
            listPrice
            isGift
            parentItemIndex
            quantity
            attachments {
              content
              name
            }
            bundleItems {
              id
              attachments {
                content
                name
              }
              name
              price
              quantity
              imageUrl
              measurementUnit
              unitMultiplier
            }
            seller
            imageUrl
            detailUrl
            measurementUnit
            unitMultiplier
          }
          selectedSla
          selectedSlaObj {
            id
            name
            shippingEstimate
            deliveryWindow {
              endDateUtc
              startDateUtc
            }
            price
            deliveryChannel
            pickupStoreInfo {
              additionalInfo
              address {
                addressId
                addressType
                receiverName
                street
                number
                city
                state
                postalCode
                neighborhood
                complement
                country
              }
              friendlyName
              isPickupStore
            }
          }
          shippingEstimate
          shippingEstimateDate
          deliveryWindow {
            endDateUtc
            startDateUtc
          }
          deliveryChannel
          selectedSlaType
        }
        takeAwayParcels {
          address {
            addressType
            receiverName
            state
            street
            number
            city
            postalCode
            neighborhood
            complement
            country
          }
          price
          pickupFriendlyName
          seller
          items {
            id
            skuName
            name
            productId
            price
            listPrice
            isGift
            parentItemIndex
            quantity
            attachments {
              content
              name
            }
            bundleItems {
              id
              attachments {
                content
                name
              }
              name
              price
              quantity
              imageUrl
              measurementUnit
              unitMultiplier
            }
            seller
            imageUrl
            detailUrl
            measurementUnit
            unitMultiplier
          }
          selectedSla
          selectedSlaObj {
            id
            name
            shippingEstimate
            deliveryWindow {
              endDateUtc
              startDateUtc
            }
            price
            deliveryChannel
            pickupStoreInfo {
              additionalInfo
              address {
                addressId
                addressType
                receiverName
                street
                number
                city
                state
                postalCode
                neighborhood
                complement
                country
              }
              friendlyName
              isPickupStore
            }
          }
          shippingEstimate
          shippingEstimateDate
          deliveryWindow {
            endDateUtc
            startDateUtc
          }
          deliveryChannel
          selectedSlaType
        }
        items {
          id
          skuName
          name
          productId
          price
          listPrice
          isGift
          parentItemIndex
          quantity
          attachments {
            content
            name
          }
          bundleItems {
            id
            attachments {
              content
              name
            }
            name
            price
            quantity
            imageUrl
            measurementUnit
            unitMultiplier
          }
          seller
          imageUrl
          detailUrl
          measurementUnit
          unitMultiplier
        }
        sellers {
          id
          name
        }
        totals {
          id
          name
          value
        }
        clientProfileData {
          email
          firstName
          lastName
          document
          documentType
          phone
        }
        paymentData {
          transactions {
            transactionId
            payments {
              id
              paymentSystem
              paymentSystemName
              value
              installments
              lastDigits
              group
              dueDate
              url
              bankIssuedInvoiceBarCodePNG
              bankIssuedInvoiceIdentificationNumber
              connectorResponses
            }
          }
        }
        storePreferencesData {
          countryCode
          currencyCode
        }
        creationDate
        value
      }
      totalPickUpParcels {
        address {
          addressType
          receiverName
          state
          street
          number
          city
          postalCode
          neighborhood
          complement
          country
        }
        price
        pickupFriendlyName
        seller
        items {
          id
          skuName
          name
          productId
          price
          listPrice
          isGift
          parentItemIndex
          quantity
          attachments {
            content
            name
          }
          bundleItems {
            id
            attachments {
              content
              name
            }
            name
            price
            quantity
            imageUrl
            measurementUnit
            unitMultiplier
          }
          seller
          imageUrl
          detailUrl
          measurementUnit
          unitMultiplier
        }
        selectedSla
        selectedSlaObj {
          id
          name
          shippingEstimate
          deliveryWindow {
            endDateUtc
            startDateUtc
          }
          price
          deliveryChannel
          pickupStoreInfo {
            additionalInfo
            address {
              addressId
              addressType
              receiverName
              street
              number
              city
              state
              postalCode
              neighborhood
              complement
              country
            }
            friendlyName
            isPickupStore
          }
        }
        shippingEstimate
        shippingEstimateDate
        deliveryWindow {
          endDateUtc
          startDateUtc
        }
        deliveryChannel
        selectedSlaType
      }
      totalDeliveryParcels {
        address {
          addressType
          receiverName
          state
          street
          number
          city
          postalCode
          neighborhood
          complement
          country
        }
        price
        pickupFriendlyName
        seller
        items {
          id
          skuName
          name
          productId
          price
          listPrice
          isGift
          parentItemIndex
          quantity
          attachments {
            content
            name
          }
          bundleItems {
            id
            attachments {
              content
              name
            }
            name
            price
            quantity
            imageUrl
            measurementUnit
            unitMultiplier
          }
          seller
          imageUrl
          detailUrl
          measurementUnit
          unitMultiplier
        }
        selectedSla
        selectedSlaObj {
          id
          name
          shippingEstimate
          deliveryWindow {
            endDateUtc
            startDateUtc
          }
          price
          deliveryChannel
          pickupStoreInfo {
            additionalInfo
            address {
              addressId
              addressType
              receiverName
              street
              number
              city
              state
              postalCode
              neighborhood
              complement
              country
            }
            friendlyName
            isPickupStore
          }
        }
        shippingEstimate
        shippingEstimateDate
        deliveryWindow {
          endDateUtc
          startDateUtc
        }
        deliveryChannel
        selectedSlaType
      }
      totalTakeAwayParcels {
        address {
          addressType
          receiverName
          state
          street
          number
          city
          postalCode
          neighborhood
          complement
          country
        }
        price
        pickupFriendlyName
        seller
        items {
          id
          skuName
          name
          productId
          price
          listPrice
          isGift
          parentItemIndex
          quantity
          attachments {
            content
            name
          }
          bundleItems {
            id
            attachments {
              content
              name
            }
            name
            price
            quantity
            imageUrl
            measurementUnit
            unitMultiplier
          }
          seller
          imageUrl
          detailUrl
          measurementUnit
          unitMultiplier
        }
        selectedSla
        selectedSlaObj {
          id
          name
          shippingEstimate
          deliveryWindow {
            endDateUtc
            startDateUtc
          }
          price
          deliveryChannel
          pickupStoreInfo {
            additionalInfo
            address {
              addressId
              addressType
              receiverName
              street
              number
              city
              state
              postalCode
              neighborhood
              complement
              country
            }
            friendlyName
            isPickupStore
          }
        }
        shippingEstimate
        shippingEstimateDate
        deliveryWindow {
          endDateUtc
          startDateUtc
        }
        deliveryChannel
        selectedSlaType
      }
      analyticsData
    }
  }
  `;

  const bodyData = {
    query: query,
    variables: {
      orderGroup: orderNumber,
    },
  };

  const headers = {
    'Content-Type': 'application/json',
    Cookie: `CheckoutDataAccess=${parsedCookies?.CheckoutDataAccess}`,
  };

  const { data } = await axios<VtexOrder>({
    url: process.env.NEXT_PUBLIC_GRAPHQL_BACK_URL,
    method: 'POST',
    headers,
    data: bodyData,
  });

  if (data.errors.length > 0) {
    res.status(403).send({ message: 'An error occurred' });
    return;
  }

  const vtexData = data.data.orderGroup;

  res.json({
    orderNumber: extractNumber(vtexData.analyticsData[0].orderGroup),
    transactionDate: vtexData.orders[0].creationDate,
    clientProfileData: {
      fullName:
        vtexData.orders[0].clientProfileData.firstName +
        vtexData.orders[0].clientProfileData.lastName,
      email: vtexData.orders[0].clientProfileData.email,
      phone: vtexData.orders[0].clientProfileData.phone,
      address: {
        street: vtexData.analyticsData[0].visitorAddressStreet,
        number: vtexData.analyticsData[0].visitorAddressNumber,
        state: vtexData.analyticsData[0].visitorAddressState,
        city: vtexData.analyticsData[0].visitorAddressCity,
        neighborhood: vtexData.analyticsData[0].visitorAddressNeighborhood,
      },
    },
    paymentData: {
      transactions: vtexData.orders[0].paymentData.transactions.map(
        (transaction) => ({
          transactionId: transaction.transactionId,
          payments: transaction.payments.map((payment) => ({
            id: payment.id,
            paymentSystemName: payment.paymentSystemName,
            value: payment.value,
            installments: payment.installments,
            paymentSystem: payment.paymentSystem,
            group: payment.group,
            lastDigits: payment.lastDigits,
          })),
        }),
      ),
    },
    orders: vtexData.orders.map((order) => ({
      orderId: order.orderId,
      deliveryParcels: order.deliveryParcels.map((deliveryParcel) => ({
        address: deliveryParcel.address,
        shippingEstimateDate: deliveryParcel.shippingEstimateDate,
        items: deliveryParcel.items.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          imageUrl: item.imageUrl,
          detailUrl: item.detailUrl,
          productId: item.productId,
        })),
        deliveryWindow: deliveryParcel.deliveryWindow,
        pickupFriendlyName: deliveryParcel.pickupFriendlyName,
      })),
      pickUpParcels: order.pickUpParcels.map((pickUpParcel) => ({
        address: pickUpParcel.address,
        shippingEstimateDate: pickUpParcel.shippingEstimateDate,
        items: pickUpParcel.items.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          imageUrl: item.imageUrl,
          detailUrl: item.detailUrl,
          productId: item.productId,
        })),
        deliveryWindow: pickUpParcel.deliveryWindow,
        pickupFriendlyName: pickUpParcel.pickupFriendlyName,
      })),
      takeAwayParcels: order.takeAwayParcels.map((takeAwayParcel) => ({
        address: takeAwayParcel.address,
        shippingEstimateDate: takeAwayParcel.shippingEstimateDate,
        items: takeAwayParcel.items.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          imageUrl: item.imageUrl,
          detailUrl: item.detailUrl,
          productId: item.productId,
        })),
        deliveryWindow: takeAwayParcel.deliveryWindow,
        pickupFriendlyName: takeAwayParcel.pickupFriendlyName,
      })),
    })),
    transactionProducts: vtexData.analyticsData[0].transactionProducts.map(
      (transaction) => ({
        id: transaction.id,
        name: transaction.name,
        sku: transaction.sku,
        brand: transaction.brand,
        category: transaction.category,
      }),
    ),
    totals: {
      subtotal: vtexData.analyticsData[0].transactionSubtotal,
      discounts: vtexData.analyticsData[0].transactionDiscounts,
      shipping: vtexData.analyticsData[0].transactionShipping,
      finalValue: vtexData.analyticsData[0].transactionTotal,
    },
  });
}
