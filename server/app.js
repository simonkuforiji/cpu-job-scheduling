const express = require("express");
const { performance } = require('perf_hooks');
const runWithThreadsTime = require("./build/Release/runWithThreadsTime.node");
const runWithoutThreadsTime = require("./build/Release/runWithoutThreadsTime.node");

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server started"));

app.use(express.static("build"));
// Middleware to parse JSON bodies
app.use(express.json());

app.post("/api/run", (req, res) => {
  // console.log('req.body', req.body);

  const { processes, size, quantum, multithread, items } = req.body;
  // console.log('porcc', processes, size, quantum, multithread, typeof multithread);
  console.log('items', items);
  let runWithThreadsResults = {};
  let runWithoutThreadsResults = {};

  if (multithread) {
    // start time
    const startTime = performance.now();

    runWithThreadsResults = runWithThreadsTime.runScheduling(processes, Number(quantum), items);
    // end time
    const endTime = performance.now();

    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
    const time = endTime - startTime;
    console.log(runWithThreadsResults);
    res.send({ runWithThreadsResults, time })
  } else {
    // start time
    const startTime = performance.now();

    runWithoutThreadsResults = runWithoutThreadsTime.runScheduling(processes, Number(quantum), items);
    // end time
    const endTime = performance.now();

    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);
    const time = endTime - startTime;
    console.log(runWithoutThreadsResults);
    res.send({ runWithoutThreadsResults, time })
  }
});

// { processes, n, quantum, multithread: true }
// node-gyp rebuild
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

//   { pid: 1, art: 0, bt: 10, pri: 1, wt: -1, tat: -1 },
