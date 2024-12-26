import { useCallback, useEffect, useMemo, useState } from "react";
import "./index.css";

function InputTable(props) {
  const { allProcesses, rest, modifyProcesses } = props;
  const [processes, setProcesses] = useState([...allProcesses])

  const handleValueChange = useCallback((e, index, target) => {
    const newValue = Number(e.target.value);
    const newProc = [...processes]
    newProc[index][target] = Number(newValue);
    setProcesses(newProc)
    modifyProcesses(index, target, newValue)
  }, [modifyProcesses, processes]);

  return (
    <div id="table-div">
      <table>
        <thead>
          <tr>
            <th>Process ID</th>
            <th>Arrival Time</th>
            <th>Burst Time</th>
            <th>Priority</th>
            {rest && (
              <>
                <th>Waiting Time</th>
                <th>Turnaround Time</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {(processes || []).map((process, i) => (
            <tr key={`ll${i}`}>
              <td>
                <input
                  className="table_input"
                  onChange={e => handleValueChange(e, i, 'pid')}
                  value={process.pid}
                  placeholder="size"
                />
              </td>
              <td>
                <input
                  className="table_input"
                  onChange={e => handleValueChange(e, i, 'art')}
                  value={process.art}
                  placeholder="size"
                />
              </td>
              <td>
                <input
                  className="table_input"
                  onChange={e => handleValueChange(e, i, 'bt')}
                  value={process.bt}
                  placeholder="size"
                />
              </td>
              <td>
                <input
                  className="table_input"
                  onChange={e => handleValueChange(e, i, 'pri')}
                  value={process.pri}
                  placeholder="size"
                />
              </td>
              {rest && (
                <>
                  <td>
                    <input
                      className="table_input"
                      onChange={e => handleValueChange(e, i, 'wt')}
                      value={process.wt}
                      placeholder="size"
                    />
                  </td>
                  <td>
                    <input
                      className="table_input"
                      onChange={e => handleValueChange(e, i, 'tat')}
                      value={process.tat}
                      placeholder="size"
                    />
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InputTable;
