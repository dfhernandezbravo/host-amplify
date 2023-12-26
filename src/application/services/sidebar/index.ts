import bffPrivateClient from '@/application/data-source/bff-private-instance';
import SidebarService from '@/domain/interfaces/sidebar/services.interface';

const GROUP_NAME = 'account';
const PARAM_NAME = 'sidebar';

const sidebarService: SidebarService = {
  getSidebarData: () => {
    return bffPrivateClient.get(`/cms/group/${GROUP_NAME}/${PARAM_NAME}`);
  },
};

export default sidebarService;
