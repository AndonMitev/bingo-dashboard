import './style.css';

export const Table = ({ tableHeaders, tableData, onRowPressed }) => {
  const handleOnClick = (data) => {
    if (onRowPressed) {
      onRowPressed(data);
    }
  };

  return (
    <table className='responsibility-table'>
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
          <tr
            key={idx}
            onClick={() => handleOnClick(data)}
            style={{
              cursor: onRowPressed ? 'pointer' : 'default'
            }}
          >
            {data.map((info) => (
              <td
                key={info}
                className='text-content'
                style={{ color: onRowPressed ? 'cyan' : null }}
              >
                {info}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
