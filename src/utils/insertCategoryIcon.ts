import CATEGORIES from '../data/categories';
import sprite from '../assets/icons/sprite.svg';

const insertCategoryIcon = (category: string) => {
  switch (category) {
    case CATEGORIES.IDEA:
      return `${sprite}#icon-light`;
    case CATEGORIES.QUOTE:
      return `${sprite}#icon-quote`;
    case CATEGORIES.RANDOM_THOUGHT:
      return `${sprite}#icon-thinking`;
    case CATEGORIES.TASK:
      return `${sprite}#icon-cart`;
    default:
      return `${sprite}#icon-light`;
  }
};

export default insertCategoryIcon;
