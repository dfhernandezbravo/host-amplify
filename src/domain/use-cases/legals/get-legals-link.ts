import remoteConfigService from '@/application/services/remote-configs';
import { LegalLiks } from '@/presentation/providers/store/modules/legals/state';

export const getLegalLinks = async (): Promise<LegalLiks[]> => {
  const GROUP_NAME = 'sidebars';
  const PARAM_NAME = 'legals';

  try {
    const { data } = await remoteConfigService<LegalLiks[]>().getRemoteConfig(
      GROUP_NAME,
      PARAM_NAME,
    );
    return data.value;
  } catch (error) {
    return [];
  }
};
