import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const {className} = props;
  const {t, i18n} = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ua' ? 'en' : 'ua');
  }

  return <Button theme={ButtonTheme.CLEAR}
                 onClick={toggleLanguage}
                 className={classNames('', {}, [className])}
  >
    {t('language')}
  </Button>;
};