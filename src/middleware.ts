import { stackMiddlewares } from './middlewares/stack-middleware';
import { withCustomer } from './middlewares/validate-customer';
import { withFriendUser } from './middlewares/validate-friend-user';

const middlewares = [withFriendUser, withCustomer];

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/((?!api|_next|fonts|cart|confirmation|icons|js|[\\w-]+\\.\\w+).*)',
  ],
};

export default stackMiddlewares(middlewares);
