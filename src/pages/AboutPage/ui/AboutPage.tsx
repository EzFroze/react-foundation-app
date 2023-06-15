import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation('about')
    return (<div>
        {t('pageAbout')}
    </div>)
}

export default AboutPage
