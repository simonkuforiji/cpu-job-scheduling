import { useCallback, useEffect, useMemo, useState } from "react";
import "./index.css";

function Table(props) {
  const { processes, rest } = props;

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
            <tr key={`kk${i}`}>
              <td>{process.pid}</td>
              <td>{process.art}</td>
              <td>{process.bt}</td>
              <td>{process.pri}</td>
              {rest && (
              <>
              <td>{process.wt}</td>
              <td>{process.tat}</td>
              </>
            )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
