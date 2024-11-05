import RocketIcon from '../../../../public/images/icons/common/rocket.svg';
import BooksIcon from '../../../../public/images/icons/common/books.svg';
import CrownIcon from '../../../../public/images/icons/common/crown.svg';
import HeartIcon from '../../../../public/images/icons/common/heart.svg';
import SmileIcon from '../../../../public/images/icons/common/emoji-smile.svg';

type HeaderTabsType = {
  label: string;
  key: number;
  icon: string;
  ref: string;
}[];

export const headerTabs: HeaderTabsType = [
  { label: "Let's play", key: 0, icon: RocketIcon, ref: '/' },
  { label: 'Journal', key: 1, icon: BooksIcon, ref: '/' },
  { label: 'Achievements', key: 2, icon: CrownIcon, ref: '/' },
  { label: 'Community', key: 3, icon: HeartIcon, ref: '/' },
  { label: 'Avatar', key: 4, icon: SmileIcon, ref: '/' },
];
