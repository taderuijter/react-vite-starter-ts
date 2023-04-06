import { useQuery } from "@tanstack/react-query";
import { useFetch } from "hooks/useFetch";

export const FetchUsers = () => {
  const { isLoading, data } = useQuery(["users"], useFetch);

  return (
    <div className="w-full">
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 relative">
            <svg
              className="animate-spin absolute h-full w-full text-indigo-500"
              fill="none"
              viewBox="0 0 24 24">
              <path
                d="M12 6a1 1 0 011 1v5a1 1 0 01-2 0V7a1 1 0 011-1zM12 13a1 1 0 100 2 1 1 0 000-2z"
                className="heroicon-ui"
              />
            </svg>
          </div>
        </div>
      )}
      {data && (
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Gender
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Birth year
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Skin color
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
