import './style.css';

export const Table = ({ tableHeaders, tableData }) => {
  return (
    <table class='responsibility-table'>
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th
              key={header}
              className='text-content'
              style={{ color: '#66BCDF' }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, idx) => (
          <tr key={idx}>
            {data.map((info) => (
              <td key={info} className='text-content'>
                {info}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
