# hadolint ignore=DL3007
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/new-relic-builder:latest as newrelic
RUN /tmp/get-new-relic-js.sh

# FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/pm2:14-alpine
FROM registry.gitlab.com/cencosud-ds/cencommerce/utils/docker-images/node:16.18.0-alpine3.16
WORKDIR /app

COPY . ./

COPY --from=newrelic /tmp/newrelic.js .

ARG NEXT_PUBLIC_HOME_URI
ARG NEXT_PUBLIC_CART_URI
ARG NEXT_PUBLIC_HEADER_URI
ARG NEXT_PUBLIC_PLP_URI
ARG NEXT_PUBLIC_PDP_URI
ARG NEXT_PUBLIC_BFF_MOBILE_URL
ARG NEXT_PUBLIC_CMS_URL
ARG NEXT_PUBLIC_CMS_API_KEY
ARG NEXT_PUBLIC_VTEX_GRAPHQL
ARG NEXT_PUBLIC_ENHACEMENT_URI
ARG NEXT_PUBLIC_HOST
ARG NEXT_PUBLIC_GTM_ID

ENV NEXT_PUBLIC_HOME_URI=$NEXT_PUBLIC_HOME_URI
ENV NEXT_PUBLIC_CART_URI=$NEXT_PUBLIC_CART_URI
ENV NEXT_PUBLIC_HEADER_URI=$NEXT_PUBLIC_HEADER_URI
ENV NEXT_PUBLIC_PLP_URI=$NEXT_PUBLIC_PLP_URI
ENV NEXT_PUBLIC_PDP_URI=$NEXT_PUBLIC_PDP_URI
ENV NEXT_PUBLIC_BFF_MOBILE_URL=$NEXT_PUBLIC_BFF_MOBILE_URL
ENV NEXT_PUBLIC_CMS_URL=$NEXT_PUBLIC_CMS_URL
ENV NEXT_PUBLIC_CMS_API_KEY=$NEXT_PUBLIC_CMS_API_KEY
ENV NEXT_PUBLIC_VTEX_GRAPHQL=$NEXT_PUBLIC_VTEX_GRAPHQL
ENV NEXT_PUBLIC_ENHACEMENT_URI=$NEXT_PUBLIC_ENHACEMENT_URI
ENV NEXT_PUBLIC_HOST=$NEXT_PUBLIC_HOST
ENV NEXT_PUBLIC_GTM_ID=$NEXT_PUBLIC_GTM_ID

RUN echo "======= HOST HEADLESS ENVIRONMENTS ======="
RUN echo "NEXT_PUBLIC_HOME_URI --- $NEXT_PUBLIC_HOME_URI"
RUN echo "NEXT_PUBLIC_CART_URI --- $NEXT_PUBLIC_CART_URI"
RUN echo "NEXT_PUBLIC_HEADER_URI --- $NEXT_PUBLIC_HEADER_URI"
RUN echo "NEXT_PUBLIC_PLP_URI --- $NEXT_PUBLIC_PLP_URI"
RUN echo "NEXT_PUBLIC_PDP_URI --- $NEXT_PUBLIC_PDP_URI"
RUN echo "NEXT_PUBLIC_BFF_MOBILE_URL --- $NEXT_PUBLIC_BFF_MOBILE_URL"
RUN echo "NEXT_PUBLIC_CMS_URL --- $NEXT_PUBLIC_CMS_URL"
RUN echo "NEXT_PUBLIC_CMS_API_KEY --- $NEXT_PUBLIC_CMS_API_KEY"
RUN echo "NEXT_PUBLIC_VTEX_GRAPHQL --- $NEXT_PUBLIC_VTEX_GRAPHQL"
RUN echo "NEXT_PUBLIC_ENHACEMENT_URI --- $NEXT_PUBLIC_ENHACEMENT_URI"
RUN echo "NEXT_PUBLIC_HOST --- $NEXT_PUBLIC_HOST"
RUN echo "ENV NEXT_PUBLIC_GTM_ID --- $NEXT_PUBLIC_GTM_ID"


RUN NODE_ENV='' yarn install && \
yarn build

# CMD ["sh", "-c", "pm2-runtime dist/src/main.js"]
EXPOSE 8080
CMD [ "yarn", "start", "-p", "8080"]
