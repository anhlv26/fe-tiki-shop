import HomePage from "~/pages/HomePage/HomePage";
import NotFoundPage from "~/pages/NotFoundPage/NotFoundPage";
import OrderPage from "~/pages/OrderPage/OrderPage";
import ProductDetailPage from "~/pages/ProductDetailPage/ProductDetailPage";
import ProductPage from "~/pages/ProductPage/ProductPage";
import SignInPage from "~/pages/SignInPage/SignInPage";
import SignUpPage from "~/pages/SignUpPage/SignUpPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/products",
    page: ProductPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/product-detail",
    page: ProductDetailPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: true,
    isShowFooter: true,
  },
  {
    path: "/*",
    page: NotFoundPage,
  },
];
