import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",  // اللغة الافتراضية
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'navigator', 'path', 'subdomain'],
      caches: ['cookie'],  // حفظ اللغة المحددة في الكوكيز
    },
    backend: {
      loadPath: '/locale/{{lng}}/translation.json',  // مسار ملفات الترجمة
    },
  });
export default i18n;
// function Translation() {
//   const { t } = useTranslation();
//   const lng = Cookies.get("i18next") || "en";
//   useEffect(()=>{
//     window.document.dir = i18n.dir();
//   },[lng])
//   return(
//     <>
//         <h2>{t('Welcome to React')}</h2>
//         <button onClick={
//             ()=> {i18n.changeLanguage('en')}
//         }>
//             en
//         </button>
//         <button onClick={()=>{
//             i18n.changeLanguage('ar')
//         }}>Ar</button>
//     </>
//   );
// }
// export default Translation ;