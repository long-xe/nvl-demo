import AvatarIcon from '../../../../public/images/icons/common/Avatar.svg';
import NotificationIcon from '../../../../public/images/icons/common/notification.svg';
import SearchIcon from '../../../../public/images/icons/common/search-icon.svg';

type HeaderProfileType = {
  key: string;
  icon: string;
}[];

export const HeaderProfile: HeaderProfileType = [
  {
    key: 'search',
    icon: SearchIcon,
  },
  {
    key: 'notification',
    icon: NotificationIcon,
  },
  {
    key: 'avatar',
    icon: AvatarIcon,
  },
];
