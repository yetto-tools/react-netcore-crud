import { useTranslation } from "react-i18next";
import LayoutDefault from "../layouts/LayoutDefault";
import LayoutBasic from "../layouts/LayoutBasic"; // Asegúrate de importar LayoutBasic si no está importado
import useAuthStore from "../stores/useAuthStore";

const AboutPage = () => {
  const { t } = useTranslation();
  const isLogged = useAuthStore((state) => state.isLogged());

  // Decide qué layout usar basado en si el usuario está logueado o no
  const Layout = isLogged ? LayoutDefault : LayoutBasic;

  return (
    <Layout>
      <div className="flex-1 w-full">
        <section className="bg-white px-4 py-4 shadow rounded">
          <h1 className="text-2xl font-semibold border-b pb-1 mb-4">
            {t("about.title")}
          </h1>
        </section>
        <section className="w-4/6 min-h-96 flex flex-col justify-around items-center mx-auto"></section>
      </div>
    </Layout>
  );
};

export default AboutPage;
