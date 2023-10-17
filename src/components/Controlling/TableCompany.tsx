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
    <div className="w-full border border-gray-light-5 rounded-customRadius_1">
      <table className="w-full border-collapse space-y-6 text-center text-field-label ">
        <thead className="relative ">
          <tr>
            <th className="p-3 font-normal">نام شرکت</th>
            <th className="p-3 font-normal">نام فضای تبلیغاتی</th>
            <th className="p-3 font-normal">کد فضای تبلیغاتی</th>
            <th className="p-3 font-normal"></th>
          </tr>
          <tr>
            <td className="absolute  inset-x-5 bottom-0 border-b border-gray-light-5" />
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="p-3">{row.companyName}</td>
              <td className="p-3">{row.commercialSpace}</td>
              <td className="p-3">{row.codeSpace}</td>
              <td className="p-3">
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
function toggleModal() {
  throw new Error("Function not implemented.");
}
