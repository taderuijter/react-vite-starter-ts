import { useQuery } from "@tanstack/react-query";
import { useFetch } from "hooks/useFetch";
import { useTranslation } from "react-i18next";

export const FetchUsers = () => {
  const { t } = useTranslation();
  const { isLoading, data } = useQuery(["users"], useFetch);

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex justify-center items-center h-[25vw] bg-slate-100 rounded-md">
          Loading users...
        </div>
      )}
      {data && (
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                {t("queries.users.name")}
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                {t("queries.users.gender")}
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                {t("queries.users.birthday")}
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                {t("queries.users.skin")}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.results.map((user: any, index: number) => (
              <tr
                key={user.name}
                className={index % 2 === 0 ? undefined : "bg-gray-50"}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                  {user.name}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {user.gender}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {user.birth_year}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {user.skin_color}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
