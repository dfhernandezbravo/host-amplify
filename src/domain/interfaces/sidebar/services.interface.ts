import { AxiosResponse } from 'axios';
import { Sidebar } from '.';

export default interface SidebarService {
  getSidebarData(
    GROUP_NAME: string,
    PARAM_NAME: string,
  ): Promise<AxiosResponse<{ value: Sidebar[] }>>;
}
