import { AxiosResponse } from 'axios';
import { Sidebar } from '.';

export default interface SidebarService {
  getSidebarData(): Promise<AxiosResponse<{ value: Sidebar[] }>>;
}
