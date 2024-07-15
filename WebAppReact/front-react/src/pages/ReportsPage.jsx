import { useTranslation } from "react-i18next";
import LayoutDefault from "../layouts/LayoutDefault";
import { Link } from "react-router-dom";

const ReportsPage = () => {
  const { t } = useTranslation();
  return (
    <LayoutDefault>
      <div className="flex-1 w-full">
        <section className="bg-white px-4 py-4">
          <h1 className="text-2xl font-semibold mb-1 pr-4 inline-flex items-center gap-2">
            <Link to="/"> {t("home.title")}</Link>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="48"
                d="m184 112 144 144-144 144"
              ></path>
            </svg>
            <span>{t("reports.title")}</span>
          </h1>
        </section>
        <section className="w-4/6 min-h-96 flex flex-col justify-around items-center mx-auto"></section>
      </div>
    </LayoutDefault>
  );
};

export default ReportsPage;
