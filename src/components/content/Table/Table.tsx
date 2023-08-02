import { useState, useMemo } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { SearchInput } from "components/inputs/Search/Search";

export interface TableProps {
  search?: boolean;
  resultText: string;
  tHead: {
    id: number;
    value: string;
  }[];
  tBody: {
    id: number;
    data: {
      key: number;
      value: string;
    }[];
  }[];
}

// Set background colors
const alternatingColors = ["bg-white", "bg-slate-100"];

export const Table = ({
  search = true,
  resultText,
  tHead,
  tBody,
}: TableProps) => {
  //Search state
  const [term, setTerm] = useState("");
  const [data] = useState(tBody);

  //Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  //Filter data
  const filteredData = useMemo(() => {
    // loop trough the table data and deconstruct the data into an array
    const rows = data.map((item) => item.data.map((row) => row));

    // Return rows if search is not used
    if (!term) return rows;

    // filter the array of objects based on search value
    return rows.filter((row) =>
      row.some((item) => item.value.toLowerCase().includes(term.toLowerCase())),
    );
  }, [data, term]);

  return (
    <>
      {search && (
        <div className="mb-4">
          <SearchInput
            onChange={handleSearch}
            name=""
            id=""
            placeholder="Zoeken..."
          />
        </div>
      )}

      {filteredData.length > 0 ? (
        <div className="flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 overflow-hidden">
              <table className="min-w-full divide-y-2 divide-slate-100">
                <thead>
                  <tr>
                    {tHead.map((item, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="py-3.5 px-4 text-left text-xs font-bold text-black uppercase tracking-widest">
                        {item.value}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row, index) => (
                    <tr
                      key={index}
                      className={
                        alternatingColors[index % alternatingColors.length]
                      }>
                      {row.map((item) => (
                        <td
                          key={item.key}
                          className="py-4 px-4 whitespace-nowrap text-sm text-black">
                          {item.value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex space-x-2 items-center justify-center w-full h-[40vh] bg-slate-100 rounded-md">
          <QuestionMarkCircleIcon className="w-6 h-6 text-black" />
          <p className="text-sm font-medium text-black">{resultText}</p>
        </div>
      )}
    </>
  );
};
