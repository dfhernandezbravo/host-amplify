import bffPublicClient from '@/application/data-source/bff-public-instance';
import SidebarService from '@/domain/interfaces/sidebar/services.interface';

const sidebarService: SidebarService = {
  getSidebarData: (GROUP_NAME, PARAM_NAME) => {
    return bffPublicClient.get(`/cms/group/${GROUP_NAME}/${PARAM_NAME}`);
  },
};

export default sidebarService;
