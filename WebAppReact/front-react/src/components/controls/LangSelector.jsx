import { useEffect, useState } from "react";
import ReactFlagsSelect, { Gt } from "react-flags-select";
import { useTranslation } from "react-i18next";

function LangSelector() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("GT");

  const getUserBrowserLanguage = () => {
    const lang = window.navigator.language;

    if (lang.includes("es")) return "GT";
    if (lang.includes("en")) return "US";

    return "es-GT";
  };

  const countryCodeToLangCode = (countryCode) => {
    const country = countryCode.toLowerCase();

    if (country.includes("es")) return "es-GT";
    if (country.includes("us")) return "en";

    return "es-GT";
  };

  const handleLangSelect = (countryCode) => {
    const currentLang = countryCodeToLangCode(countryCode);
    i18n.changeLanguage(currentLang);

    setLang(countryCode);
  };

  useEffect(() => {
    const userBrowserLang = getUserBrowserLanguage();

    i18n.changeLanguage(userBrowserLang);
    setLang(userBrowserLang);
  }, []);

  return (
    <ReactFlagsSelect
      countries={["GT", "US"]}
      customLabels={{ GT: "es-GT", US: "en-US" }}
      selected={lang.toUpperCase()}
      onSelect={handleLangSelect}
      customStyle={{
        option: {
          color: "black", // Establece el color del texto en las opciones
        },
        control: {
          color: "black", // Establece el color del texto en el control seleccionado
        },
      }}
    />
  );
}

export default LangSelector;
