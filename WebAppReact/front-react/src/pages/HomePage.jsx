import AccessButton from "../components/AccessButton";
import LayoutDefault from "../layouts/LayoutDefault";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();
  const menuButtons = [
    { url: "/Sales", name: t("sales.title"), description: "", icon: "" },
    { url: "/Products", name: t("products.title"), description: "", icon: "" },
    {
      url: "/Categories",
      name: t("categories.title"),
      description: "",
      icon: "",
    },
    {
      url: "/Customers",
      name: t("customers.title"),
      description: "",
      icon: "",
    },
    { url: "/Reports", name: t("reports.title"), description: "", icon: "" },
    { url: "/Users", name: t("users.title"), description: "", icon: "" },
  ];
  return (
    <LayoutDefault className="">
      <div className="flex-1 w-full">
        <section className="bg-white px-4 py-4 shadow rounded">
          <h1 className="text-2xl font-semibold border-b pb-1 mb-4 ">
            {t("home.welcome")}
          </h1>
        </section>
        <section className="w-full flex justify-center items-start flex-wrap gap-4 mx-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-x-4 place-items-center gap-y-8 py-20 mx-auto">
            {menuButtons.map((item, index) => (
              <AccessButton
                key={index}
                title={item.name}
                url={item.url}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </div>
    </LayoutDefault>
  );
}

export default HomePage;
