/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useMemo, useState } from "react";
import "./index.css";
import Table from "./Table";
import InputTable from "./InputTable";
import checkImg from "./check.png";
import { CSVLink, CSVDownload } from "react-csv";

import myArray1 from "./Array1"; // original
import myArray2 from "./Array2"; // art equal
import myArray3 from "./Array3"; // bt max 100
import myArray4 from "./Array4"; // bt max 500
import myArray5 from "./Array5"; // bt max 1000
import myArray6 from "./Array6"; // low bt high pri
import myArray7 from "./Array7"; // low bt low pri

function App() {
  const [resultsWithThread, setResultsWithThread] = useState({});
  const [resultsWithoutThread, setResultsWithoutThread] = useState({});
  const [quantum, setQuantum] = useState(2);
  const [size, setSize] = useState(10);

  const [processes, setProcesses] = useState(myArray7);
  const [current, setCurrent] = useState(7);

  const [timeWithThreads, setTimeWithThreads] = useState(0);
  const [timeWithoutThreads, setTimeWithoutThreads] = useState(0);
  const [itemsArray, setItemsArray] = useState([]);
  const [avgWithoutThreads, setAvgWithoutThreads] = useState({});
  const [avgWithThreads, setAvgWithThreads] = useState({});
  const [useManual, setUseManual] = useState(false);
  const [comparisonObject, setComparisonObject] = useState({
    testThreading: false,
    testExecTime: false,
    testAvgWait: false,
    testAvgTaT: false,
  });

  const algorithms = useMemo(() => ["fcfs", "sjf", "ps", "rr"], []);
  const algorithmsNames = useMemo(
    () => [
      "First Come First Serve",
      "Shortest Job First",
      "Priority Scheduling",
      "Round Robin",
    ],
    []
  );

  const comparisonNames = useMemo(
    () => [
      "Multithreading / Sequential (2 or more algorithms)",
      "Individual Execution Time",
      "Average Waiting Time",
      "Average Turnaround Time",
    ],
    []
  );

  const comparisonNamesNick = useMemo(
    () => ["testThreading", "testExecTime", "testAvgWait", "testAvgTaT"],
    []
  );

  const handleSetSize = (e) => {
    setSize(Number(e.target.value));
  };
  const handleSetQuantum = (e) => {
    setQuantum(Number(e.target.value));
  };

  const handleSetItemsArray = (index) => {
    const newArray = [...itemsArray];
    const foundIndex = newArray.indexOf(Number(index));
    if (foundIndex > -1) {
      newArray.splice(foundIndex, 1); // Removes the element if it is found
      setItemsArray(newArray);
    } else {
      setItemsArray([...itemsArray, Number(index)]);
    }
  };

  const handleSetComparisonObject = (target) => {
    setComparisonObject({
      ...comparisonObject,
      [target]: !comparisonObject[target],
    });
  };

  const handleModifyProcesses = (index, target, newValue) => {
    console.log("before", processes[index][target]);
    console.log("newValue", newValue);
    processes[index][target] = Number(newValue);
    console.log("after", processes[index][target]);
  };

  // let processes = useMemo(
  //   () => [
  //     { pid: 1, art: 0, bt: 10, pri: 1, wt: -1, tat: -1 },
  //     { pid: 2, art: 2, bt: 1, pri: 3, wt: -1, tat: -1 },
  //     { pid: 3, art: 4, bt: 2, pri: 2, wt: -1, tat: -1 },
  //     { pid: 4, art: 6, bt: 1, pri: 4, wt: -1, tat: -1 },
  //   ],
  //   []
  // );

  const fillProcesses = () => {
    console.log("processes", processes);
    if (processes.length <= 0) {
      setUseManual(false);

      const allProcesses = [];
      // Initialize the starting value for pid
      let startingPid = 1;
      for (let i = 0; i < size; i++) {
        // Create a process object with default wt and tat values set to -1
        let process = {
          pid: startingPid,
          art: Math.floor(Math.random() * (size * 2)) + 1, // Random values for art between 1 and 2n
          bt: Math.floor(Math.random() * (size * 2)) + 1, // Random values for bt between 1 and 2n
          pri: Math.floor(Math.random() * (size * 2)) + 1, // Random values for pri between 1 and 2n
          wt: 0,
          tat: 0,
        };

        // Increment pid for the next process
        startingPid++;
        // Add the process object to the processes array
        allProcesses.push(process);
      }
      setProcesses(allProcesses);
    }
  };

  const getAverages = useCallback((data) => {
    const result = {
      fcfs: {
        wt: 0,
        tat: 0,
        bt: 0,
        art: 0,
      },
      sjf: {
        wt: 0,
        tat: 0,
        bt: 0,
        art: 0,
      },
      ps: {
        wt: 0,
        tat: 0,
        bt: 0,
        art: 0,
      },
      rr: {
        wt: 0,
        tat: 0,
        bt: 0,
        art: 0,
      },
    };

    const { fcfsResults, sjfResults, psResults, rrResults } = data;

    for (let i = 0; i < fcfsResults.length; i++) {
      result.fcfs.wt += fcfsResults[i].wt;
      result.fcfs.tat += fcfsResults[i].tat;
      result.fcfs.bt += fcfsResults[i].bt;
      result.fcfs.art += fcfsResults[i].art;

      result.sjf.wt += sjfResults[i].wt;
      result.sjf.tat += sjfResults[i].tat;
      result.sjf.bt += sjfResults[i].bt;
      result.sjf.art += sjfResults[i].art;

      result.ps.wt += psResults[i].wt;
      result.ps.tat += psResults[i].tat;
      result.ps.bt += psResults[i].bt;
      result.ps.art += psResults[i].art;

      result.rr.wt += rrResults[i].wt;
      result.rr.tat += rrResults[i].tat;
      result.rr.bt += rrResults[i].bt;
      result.rr.art += rrResults[i].art;
    }

    const length = fcfsResults.length;
    if (length > 0) {
      result.fcfs.wt /= length;
      result.fcfs.tat /= length;
      result.fcfs.bt /= length;
      result.fcfs.art /= length;

      result.sjf.wt /= length;
      result.sjf.tat /= length;
      result.sjf.bt /= length;
      result.sjf.art /= length;

      result.ps.wt /= length;
      result.ps.tat /= length;
      result.ps.bt /= length;
      result.ps.art /= length;

      result.rr.wt /= length;
      result.rr.tat /= length;
      result.rr.bt /= length;
      result.rr.art /= length;

      // round to 2 dp
      result.fcfs.wt = result.fcfs.wt.toFixed(2);
      result.fcfs.tat = result.fcfs.tat.toFixed(2);
      result.fcfs.bt = result.fcfs.bt.toFixed(2);
      result.fcfs.art = result.fcfs.art.toFixed(2);

      result.sjf.wt = result.sjf.wt.toFixed(2);
      result.sjf.tat = result.sjf.tat.toFixed(2);
      result.sjf.bt = result.sjf.bt.toFixed(2);
      result.sjf.art = result.sjf.art.toFixed(2);

      result.ps.wt = result.ps.wt.toFixed(2);
      result.ps.tat = result.ps.tat.toFixed(2);
      result.ps.bt = result.ps.bt.toFixed(2);
      result.ps.art = result.ps.art.toFixed(2);

      result.rr.wt = result.rr.wt.toFixed(2);
      result.rr.tat = result.rr.tat.toFixed(2);
      result.rr.bt = result.rr.bt.toFixed(2);
      result.rr.art = result.rr.art.toFixed(2);
    }

    return result;
  }, []);

  const runProcessesWithoutThreads = useCallback(() => {
    fetch("/api/run", {
      method: "POST", // Specify the method
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify({
        processes,
        size,
        quantum,
        multithread: false,
        items: itemsArray,
      }), // Convert the JavaScript object to a JSON string
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeWithoutThreads(data.time.toFixed(4));
        setResultsWithoutThread(data.runWithoutThreadsResults);
        const averages = getAverages(data.runWithoutThreadsResults);
        setAvgWithoutThreads(averages);
      });
  }, [getAverages, itemsArray, processes, quantum, size]);

  const runProcessesWithThreads = useCallback(() => {
    fetch("/api/run", {
      method: "POST", // Specify the method
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify({
        processes,
        size,
        quantum,
        multithread: true,
        items: itemsArray,
      }), // Convert the JavaScript object to a JSON string
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeWithThreads(data.time.toFixed(4));
        setResultsWithThread(data.runWithThreadsResults);
        const averages = getAverages(data.runWithThreadsResults);
        setAvgWithThreads(averages);
      });
  }, [getAverages, itemsArray, processes, quantum, size]);

  const useManualInput = () => {
    setUseManual(true);
  };

  const handleRuntest = () => {
    if (comparisonObject.testThreading === true) {
      if (itemsArray.length < 2) {
        return;
      }
      runProcessesWithThreads();
      runProcessesWithoutThreads();
    } else {
      runProcessesWithoutThreads();
    }
  };

  useEffect(() => {
    // runProcessesWithoutThreads();
    // runProcessesWithThreads();
  }, []);

  console.log("resultsWithoutThread", resultsWithoutThread);

  // Expected format
  // {
  //   fcfs: [ 1, 2, 3, 4 ],
  //   sjf: [ 2, 4, 3, 1 ],
  //   ps: [ 1, 3, 2, 4 ],
  //   rr: [ [ 1, 4 ], [ 3, 6 ], [ 2, 7 ], [ 4, 8 ], [ 1, 12 ], [ 1, 14 ] ],
  //   results: [
  //     { pid: 1, art: 0, bt: 10, pri: 1, wt: 4, tat: 14 },
  //     { pid: 3, art: 4, bt: 2, pri: 2, wt: 0, tat: 2 },
  //     { pid: 2, art: 2, bt: 1, pri: 3, wt: 4, tat: 5 },
  //     { pid: 4, art: 6, bt: 1, pri: 4, wt: 1, tat: 2 }
  //   ],
  //   fcfsDuration: 2515,
  //   sjfDuration: 2246,
  //   psDuration: 802,
  //   rrDuration: 2086
  // }

  // Note: duration for Each process is in nanosecond, while time taken for threading vs multithreading is in milliseconds
  return (
    <main id="main">
      <div id="title">
        <h1>Scheduling Algorithms Simulator</h1>
      </div>

      <div id="row1">
        <div id="row1_col1">
          <div className="item-title">Select Scheduling Algorithm</div>
          {algorithmsNames.map((name, i) => {
            return (
              <div
                className="item-list-and-image"
                onClick={() => handleSetItemsArray(i)}
              >
                <div className="item-list" key={`aa${i}`}>
                  {name}
                </div>
                {itemsArray.includes(i) && (
                  <div className="item-list-img" key={`bb${i}`}>
                    <img src={checkImg} alt="check" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div id="row1_col2">
          <div className="item-title">Select Comparison</div>
          {comparisonNames.map((name, i) => {
            return (
              <div
                className="item-list-and-image"
                onClick={() =>
                  handleSetComparisonObject(comparisonNamesNick[i])
                }
              >
                <div className="item-list" key={`cc${i}`}>
                  {name}
                </div>
                {comparisonObject[comparisonNamesNick[i]] === true && (
                  <div className="item-list-img" key={`dd${i}`}>
                    <img src={checkImg} alt="check" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div id="row2">
        <div id="row2_col1">
          <div id="row2_col1_top">
            <div className="item-title-black">Input or Generate Processes</div>
            <div className="text_input">
              <div className="value">Number of Processes:</div>
              <input
                className="input"
                onChange={handleSetSize}
                value={size}
                placeholder="size"
              />
            </div>
            <div className="text_input">
              <div className="value">Quantum value:</div>
              <input
                className="input"
                onChange={handleSetQuantum}
                value={quantum}
                placeholder="quantum"
              />
            </div>
            <div className="buttons-data">
              <button className="btn-data" onClick={fillProcesses}>
                Random Generation
              </button>

              <button className="btn-data" onClick={useManualInput}>
                Manual Input
              </button>

              <button className="btn-data" onClick={handleRuntest}>
                Run Test: {current}
              </button>
            </div>
            <div>
              <CSVLink
                filename={`fcfs-${current}.csv`}
                data={
                  Object.keys(resultsWithoutThread).length > 0
                    ? resultsWithoutThread?.fcfsResults
                    : ""
                }
                style={{ marginRight: "10px" }}
              >
                fcfs CSV
              </CSVLink>

              <CSVLink
                filename={`sjf-${current}.csv`}
                data={
                  Object.keys(resultsWithoutThread).length > 0
                    ? resultsWithoutThread?.sjfResults
                    : ""
                }
                style={{ marginRight: "10px" }}
              >
                sjf CSV
              </CSVLink>

              <CSVLink
                filename={`ps-${current}.csv`}
                data={
                  Object.keys(resultsWithoutThread).length > 0
                    ? resultsWithoutThread?.psResults
                    : ""
                }
                style={{ marginRight: "10px" }}
              >
                ps CSV
              </CSVLink>

              <CSVLink
                filename={`rr-${current}.csv`}
                data={
                  Object.keys(resultsWithoutThread).length > 0
                    ? resultsWithoutThread?.rrResults
                    : ""
                }
                style={{ marginRight: "10px" }}
              >
                rr CSV
              </CSVLink>
            </div>
          </div>

          {comparisonObject.testThreading === true && (
            <div id="row2_col1_bottom">
              <div className="item-title-black">
                Multithreading vs No Multithreading Results
              </div>
              <div className="text_input">
                <div className="value">Multithreading:</div>
                <div className="value">{`${timeWithThreads} ms`}</div>
              </div>
              <div className="text_input">
                <div className="value">No Multithreading:</div>
                <div className="value">{`${timeWithoutThreads} ms`}</div>
              </div>
            </div>
          )}
        </div>

        {Object.keys(processes).length !== 0 && (
          <div id="row2_col2">
            {processes.length > 0 && (
              <>
                <div className="item-title-black">
                  {useManual ? "Manual " : "Random "}Process Input Table
                </div>
                {useManual ? (
                  <InputTable
                    allProcesses={processes}
                    modifyProcesses={handleModifyProcesses}
                  />
                ) : (
                  <Table processes={processes} />
                )}
              </>
            )}
          </div>
        )}
      </div>

      {(Object.keys(resultsWithThread).length > 0 ||
        Object.keys(resultsWithoutThread).length > 0) && (
        <div id="row3">
          <div id="row3_col1">
            {itemsArray.map((item, i) => {
              return (
                <div key={`ee${i}`} className="each-table">
                  <div className="item-title-black">
                    {algorithmsNames[item]}
                  </div>
                  <div className="text_input">
                    <div className="value-table">Order:</div>
                    {/* <div className="value-gantt">
                      {[...(resultsWithoutThread[algorithms[item]] || [])].map(
                        (value, i) => {
                          if (algorithms[item] !== "rr") {
                            return (
                              <div
                                key={`hh${i}`}
                                className="block"
                              >{`P${value}`}</div>
                            );
                          } else {
                            return (
                              <div
                                key={`ii${i}`}
                                className="block"
                              >{`P${value[0]}`}</div>
                            );
                          }
                        }
                      )}
                    </div> */}
                  </div>

                  {comparisonObject.testExecTime === true && (
                    <div className="text_input">
                      <div className="value">Duration:</div>
                      <div className="value">
                        {comparisonObject.testThreading
                          ? `
                        Threading: ${
                          resultsWithThread[`${algorithms[item]}Duration`]
                        } ns
                        | Sequential: ${
                          resultsWithoutThread[`${algorithms[item]}Duration`]
                        } ns
                        `
                          : `${
                              resultsWithoutThread[
                                `${algorithms[item]}Duration`
                              ]
                            } ns`}
                      </div>
                    </div>
                  )}

                  {comparisonObject.testAvgWait === true && (
                    <div className="text_input">
                      <div className="value">Average Waiting Time:</div>
                      <div className="value">
                        {`${avgWithoutThreads[algorithms[item]]?.wt}`}
                      </div>
                    </div>
                  )}

                  {comparisonObject.testAvgTaT === true && (
                    <>
                      <div className="text_input">
                        <div className="value">Average Turnaround Time:</div>
                        <div className="value">
                          {`${avgWithoutThreads[algorithms[item]]?.tat}`}
                        </div>
                      </div>

                      <div className="text_input">
                        <div className="value">Average Burst Time:</div>
                        <div className="value">
                          {`${avgWithoutThreads[algorithms[item]]?.bt}`}
                        </div>
                      </div>

                      <div className="text_input">
                        <div className="value">Average Arrival Time:</div>
                        <div className="value">
                          {`${avgWithoutThreads[algorithms[item]]?.art}`}
                        </div>
                      </div>
                    </>
                  )}

                  <Table
                    key={`jj${i}`}
                    processes={
                      resultsWithoutThread[`${algorithms[item]}Results`]
                    }
                    rest
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* <div id="row4">
        <div id="row4_top">
          <div id="row4_top_col1">Hello</div>
          <div id="row4_top_col2">Hello</div>
        </div>

        <div id="row4_bottom">
          <div id="row4_bottom_col1">Hello</div>
          <div id="row4_bottom_col2">Hello</div>
        </div>
      </div> */}
    </main>
  );
}

export default App;
