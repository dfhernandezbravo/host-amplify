import remoteConfigService from '@/application/services/remote-configs';
import { AccountLinks } from '@/presentation/providers/store/modules/account/state';

export const getAccountLinks = async (): Promise<AccountLinks[]> => {
  const GROUP_NAME = 'account';
  const PARAM_NAME = 'sidebar';

  try {
    const { data } = await remoteConfigService<
      AccountLinks[]
    >().getRemoteConfig(GROUP_NAME, PARAM_NAME);
    return data.value;
  } catch (error) {
    return [];
  }
};
