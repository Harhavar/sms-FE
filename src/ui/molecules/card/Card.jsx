const Card = ({ data }) => {
  return (
    <div className="container mx-auto bg-white w-full py-5 px-7 border-2 rounded-lg border-slate-200">
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-left border-b-2">
            <th className="pb-5 text-sm text-slate-800 font-semibold">
              {data.heading}
            </th>
          </tr>
        </thead>
        {data.rows[0].label && data.rows[0].value && (
          <tbody>
            {data.rows.map((el) => (
              <tr
                key={el.id}
                className="text-sm font-normal border-b-2 last:border-0"
              >
                <td className="py-4">{el.label}</td>
                <td className="py-4 text-slate-700">{el.value}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};
export default Card;
