import { useQuery } from "@tanstack/react-query";

export const useGetProducts = ({ url, keyNane }) => {
  return useQuery({
    queryKey: keyNane || ["menu", url],
    queryFn: async () => {
      const respose = await fetch(url);
      if (!respose.ok) {
        throw new Error("خطایی در دریافت اطلاعات");
      }
      const result = await respose.json();
      return result.record?.menu || result;
    },
    staleTime: 1000 * 60 * 10,
  });
};
