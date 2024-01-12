import bffPublicClient from '@/application/data-source/bff-public-instance';
import SidebarService from '@/domain/interfaces/sidebar/services.interface';

const GROUP_NAME = 'account';
const PARAM_NAME = 'sidebar';

const sidebarService: SidebarService = {
  getSidebarData: () => {
    return bffPublicClient.get(`/cms/group/${GROUP_NAME}/${PARAM_NAME}`);
  },
};

export default sidebarService;
