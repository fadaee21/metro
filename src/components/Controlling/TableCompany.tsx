import { ICompany } from "@/type";
import ButtonTable from "./ButtonTable";

interface Props {
  data: ICompany[];
  toggleModal: () => void;
}
const TableCompany = ({ data, toggleModal }: Props) => {
  const handleClick = () => {
    toggleModal();
  };
  return (
    <div className="w-11/12 max-w-2xl border border-gray-light-5 rounded-customRadius_1 overflow-auto">
      <table className="w-full border-collapse space-y-6 text-center text-field-label ">
        <thead className="relative ">
          <tr>
            <th className="table_row_control ">نام شرکت</th>
            <th className="table_row_control ">نام فضای تبلیغاتی</th>
            <th className="table_row_control ">کد فضای تبلیغاتی</th>
            <th className="table_row_control "></th>
          </tr>
          <tr>
            <td className="absolute  inset-x-5 bottom-0 border-b border-gray-light-5" />
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="table_row_control">{row.companyName}</td>
              <td className="table_row_control">{row.commercialSpace}</td>
              <td className="table_row_control">{row.codeSpace}</td>
              <td className="table_row_control">
                <ButtonTable onCLick={handleClick} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCompany;
