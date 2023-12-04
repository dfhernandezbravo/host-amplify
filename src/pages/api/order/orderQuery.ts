export const query = `
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
