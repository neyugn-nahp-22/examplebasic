import { Route, Routes } from "react-router-dom";
import config from "../config";
import * as page from "../pages";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path={config.routes.home} element={<page.HomePage />} />
        <Route path={config.routes.birthday} element={<page.BirthdayPage />} />
        <Route path={config.routes.travel} element={<page.TravelPage />} />
        <Route path={config.routes.review} element={<page.ReviewPage />} />
      </Routes>
    </>
  );
};

export default Router;
