import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
export const productData = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getProduct: builder.query({ query: () => "product.json" }),
  }),
});
export const { useGetProduct } = productData;
