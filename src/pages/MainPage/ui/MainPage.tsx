import { useTranslation } from "react-i18next";
import { Page } from "shared/ui/Page/Page";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <div>{t("pageMain")}</div>
    </Page>
  );
};

export default MainPage;
