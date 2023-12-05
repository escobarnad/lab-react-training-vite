function NumbersTable({ limit }) {
  const numsArray = [];

  for (let i = 1; i <= limit; i++) {
    numsArray.push(i);
  }

  return (
    <table>
      <tbody>
        {numsArray.map((eachNum, index) =>
          index % 5 === 0 ? (
            <tr key={index}>
              {numsArray.slice(index, index + 5).map((num, innerIndex) => (
                <td
                  key={innerIndex}
                  style={{ background: num % 2 === 0 ? "red" : "white" }}
                >
                  {num}
                </td>
              ))}
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
}

export default NumbersTable;
