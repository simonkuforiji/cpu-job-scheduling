


#include <nan.h>
#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
#include <chrono>

using namespace std;
using namespace std::chrono;

struct Process {
    int pid;  // Process ID
    int art;  // Arrival Time
    int bt;   // Burst Time
    int pri;  // Priority
    int wt;   // Waiting Time
    int tat;  // Turnaround Time
};

void updateWaitingAndTurnaroundTimes(vector<Process>& processes) {
    int currentTime = 0;
    for (auto& proc : processes) {
        if (currentTime < proc.art)
            currentTime = proc.art;
        proc.wt = currentTime - proc.art;
        currentTime += proc.bt;
        proc.tat = proc.wt + proc.bt;
    }
}

void runFCFS(vector<Process>& processes, vector<int>& order, double& duration) {
    auto start = high_resolution_clock::now();
    sort(processes.begin(), processes.end(), [](const Process& a, const Process& b) {
        return a.art < b.art;
    });
    updateWaitingAndTurnaroundTimes(processes);
    for (auto& proc : processes) {
        order.push_back(proc.pid);
    }
    auto end = high_resolution_clock::now();
    duration = duration_cast<nanoseconds>(end - start).count();
}

void runSJF(vector<Process>& processes, vector<int>& order, double& duration) {
    auto start = high_resolution_clock::now();
    sort(processes.begin(), processes.end(), [](const Process& a, const Process& b) {
        return a.bt < b.bt || (a.bt == b.bt && a.art < b.art);
    });
    updateWaitingAndTurnaroundTimes(processes);
    for (auto& proc : processes) {
        order.push_back(proc.pid);
    }
    auto end = high_resolution_clock::now();
    duration = duration_cast<nanoseconds>(end - start).count();
}

void runPS(vector<Process>& processes, vector<int>& order, double& duration) {
    auto start = high_resolution_clock::now();
    sort(processes.begin(), processes.end(), [](const Process& a, const Process& b) {
        return a.pri < b.pri || (a.pri == b.pri && a.art < b.art);
    });
    updateWaitingAndTurnaroundTimes(processes);
    for (auto& proc : processes) {
        order.push_back(proc.pid);
    }
    auto end = high_resolution_clock::now();
    duration = duration_cast<nanoseconds>(end - start).count();
}

void runRR(vector<Process>& processes, int quantum, vector<vector<int>>& timeline, double& duration) {
    auto start = high_resolution_clock::now();
    int n = processes.size();
    vector<int> rem_bt(n);
    vector<int> arrival_time(n);
    for (int i = 0; i < n; i++) {
        rem_bt[i] = processes[i].bt;
        arrival_time[i] = processes[i].art;
    }
    int t = 0;
    while (true) {
        bool done = true;
        for (int i = 0; i < n; i++) {
            if (rem_bt[i] > 0) {
                done = false;
                if (rem_bt[i] > quantum) {
                    t += quantum;
                    rem_bt[i] -= quantum;
                } else {
                    t += rem_bt[i];
                    processes[i].wt = max(0, t - processes[i].bt - processes[i].art);
                    processes[i].tat = processes[i].wt + processes[i].bt;
                    rem_bt[i] = 0;
                }
                timeline.push_back({processes[i].pid, t});
            }
        }
        if (done) break;
    }
    auto end = high_resolution_clock::now();
    duration = duration_cast<nanoseconds>(end - start).count();
}

void RunScheduling(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    Nan::HandleScope scope;

    if (info.Length() < 2 || !info[0]->IsArray() || !info[1]->IsNumber() || !info[2]->IsArray()) {
        Nan::ThrowTypeError("Expected an array of processes and a quantum number");
        return;
    }

    v8::Local<v8::Array> inputArray = v8::Local<v8::Array>::Cast(info[0]);
    int quantum = info[1]->NumberValue(Nan::GetCurrentContext()).FromJust();
    v8::Local<v8::Array> itemsArray = v8::Local<v8::Array>::Cast(info[2]);
    unsigned int numProcesses = inputArray->Length();
    vector<Process> allProcessesA(numProcesses);
    vector<Process> allProcessesB(numProcesses);
    vector<Process> allProcessesC(numProcesses);
    vector<Process> allProcessesD(numProcesses);

    for (unsigned int i = 0; i < numProcesses; i++) {
        v8::Local<v8::Value> jsObj = Nan::Get(inputArray, i).ToLocalChecked();
        v8::Local<v8::Object> obj = jsObj->ToObject(Nan::GetCurrentContext()).ToLocalChecked();

        Process proc;
        proc.pid = Nan::Get(obj, Nan::New("pid").ToLocalChecked()).ToLocalChecked()->NumberValue(Nan::GetCurrentContext()).FromJust();
        proc.art = Nan::Get(obj, Nan::New("art").ToLocalChecked()).ToLocalChecked()->NumberValue(Nan::GetCurrentContext()).FromJust();
        proc.bt = Nan::Get(obj, Nan::New("bt").ToLocalChecked()).ToLocalChecked()->NumberValue(Nan::GetCurrentContext()).FromJust();
        proc.pri = Nan::Get(obj, Nan::New("pri").ToLocalChecked()).ToLocalChecked()->NumberValue(Nan::GetCurrentContext()).FromJust();
        proc.wt = Nan::Get(obj, Nan::New("wt").ToLocalChecked()).ToLocalChecked()->NumberValue(Nan::GetCurrentContext()).FromJust();
        proc.tat = Nan::Get(obj, Nan::New("tat").ToLocalChecked()).ToLocalChecked()->NumberValue(Nan::GetCurrentContext()).FromJust();
        allProcessesA[i] = proc;
        allProcessesB[i] = proc;
        allProcessesC[i] = proc;
        allProcessesD[i] = proc;
    }

    double fcfsDuration, sjfDuration, psDuration, rrDuration;
    vector<int> fcfsOrder, sjfOrder, psOrder;
    vector<vector<int>> rrTimeline;

    unsigned int numItems = itemsArray->Length();
    for (unsigned int i = 0; i < numItems; i++) {
        v8::Local<v8::Value> item = Nan::Get(itemsArray, i).ToLocalChecked();
        if (item->IsNumber()) {
            int action = item->NumberValue(Nan::GetCurrentContext()).FromJust();
            if (action == 0) {
                runFCFS(allProcessesA, fcfsOrder, fcfsDuration);
            } else if (action == 1) {
                runSJF(allProcessesB, sjfOrder, sjfDuration);
            } else if (action == 2) {
                runPS(allProcessesC, psOrder, psDuration);
            } else if (action == 3) {
                runRR(allProcessesD, quantum, rrTimeline, rrDuration);
            }
        }
    }

    v8::Local<v8::Array> fcfsResult = Nan::New<v8::Array>(fcfsOrder.size());
    for (size_t i = 0; i < fcfsOrder.size(); i++) {
        Nan::Set(fcfsResult, i, Nan::New(fcfsOrder[i]));
    }

    v8::Local<v8::Array> sjfResult = Nan::New<v8::Array>(sjfOrder.size());
    for (size_t i = 0; i < sjfOrder.size(); i++) {
        Nan::Set(sjfResult, i, Nan::New(sjfOrder[i]));
    }

    v8::Local<v8::Array> psResult = Nan::New<v8::Array>(psOrder.size());
    for (size_t i = 0; i < psOrder.size(); i++) {
        Nan::Set(psResult, i, Nan::New(psOrder[i]));
    }

    v8::Local<v8::Array> rrResult = Nan::New<v8::Array>(rrTimeline.size());
    for (size_t i = 0; i < rrTimeline.size(); i++) {
        v8::Local<v8::Array> pair = Nan::New<v8::Array>(2);
        Nan::Set(pair, 0, Nan::New(rrTimeline[i][0]));
        Nan::Set(pair, 1, Nan::New(rrTimeline[i][1]));
        Nan::Set(rrResult, i, pair);
    }
    
    v8::Local<v8::Array> resultsArrayA = Nan::New<v8::Array>(numProcesses);
    v8::Local<v8::Array> resultsArrayB = Nan::New<v8::Array>(numProcesses);
    v8::Local<v8::Array> resultsArrayC = Nan::New<v8::Array>(numProcesses);
    v8::Local<v8::Array> resultsArrayD = Nan::New<v8::Array>(numProcesses);

    for (unsigned int i = 0; i < numProcesses; i++) {
        v8::Local<v8::Object> resultObjA = Nan::New<v8::Object>();
        resultObjA->Set(Nan::GetCurrentContext(), Nan::New("pid").ToLocalChecked(), Nan::New(allProcessesA[i].pid));
        resultObjA->Set(Nan::GetCurrentContext(), Nan::New("art").ToLocalChecked(), Nan::New(allProcessesA[i].art));
        resultObjA->Set(Nan::GetCurrentContext(), Nan::New("bt").ToLocalChecked(), Nan::New(allProcessesA[i].bt));
        resultObjA->Set(Nan::GetCurrentContext(), Nan::New("pri").ToLocalChecked(), Nan::New(allProcessesA[i].pri));
        resultObjA->Set(Nan::GetCurrentContext(), Nan::New("wt").ToLocalChecked(), Nan::New(allProcessesA[i].wt));
        resultObjA->Set(Nan::GetCurrentContext(), Nan::New("tat").ToLocalChecked(), Nan::New(allProcessesA[i].tat));
        Nan::Set(resultsArrayA, i, resultObjA);

        v8::Local<v8::Object> resultObjB = Nan::New<v8::Object>();
        resultObjB->Set(Nan::GetCurrentContext(), Nan::New("pid").ToLocalChecked(), Nan::New(allProcessesB[i].pid));
        resultObjB->Set(Nan::GetCurrentContext(), Nan::New("art").ToLocalChecked(), Nan::New(allProcessesB[i].art));
        resultObjB->Set(Nan::GetCurrentContext(), Nan::New("bt").ToLocalChecked(), Nan::New(allProcessesB[i].bt));
        resultObjB->Set(Nan::GetCurrentContext(), Nan::New("pri").ToLocalChecked(), Nan::New(allProcessesB[i].pri));
        resultObjB->Set(Nan::GetCurrentContext(), Nan::New("wt").ToLocalChecked(), Nan::New(allProcessesB[i].wt));
        resultObjB->Set(Nan::GetCurrentContext(), Nan::New("tat").ToLocalChecked(), Nan::New(allProcessesB[i].tat));
        Nan::Set(resultsArrayB, i, resultObjB);

        v8::Local<v8::Object> resultObjC = Nan::New<v8::Object>();
        resultObjC->Set(Nan::GetCurrentContext(), Nan::New("pid").ToLocalChecked(), Nan::New(allProcessesC[i].pid));
        resultObjC->Set(Nan::GetCurrentContext(), Nan::New("art").ToLocalChecked(), Nan::New(allProcessesC[i].art));
        resultObjC->Set(Nan::GetCurrentContext(), Nan::New("bt").ToLocalChecked(), Nan::New(allProcessesC[i].bt));
        resultObjC->Set(Nan::GetCurrentContext(), Nan::New("pri").ToLocalChecked(), Nan::New(allProcessesC[i].pri));
        resultObjC->Set(Nan::GetCurrentContext(), Nan::New("wt").ToLocalChecked(), Nan::New(allProcessesC[i].wt));
        resultObjC->Set(Nan::GetCurrentContext(), Nan::New("tat").ToLocalChecked(), Nan::New(allProcessesC[i].tat));
        Nan::Set(resultsArrayC, i, resultObjC);

        v8::Local<v8::Object> resultObjD = Nan::New<v8::Object>();
        resultObjD->Set(Nan::GetCurrentContext(), Nan::New("pid").ToLocalChecked(), Nan::New(allProcessesD[i].pid));
        resultObjD->Set(Nan::GetCurrentContext(), Nan::New("art").ToLocalChecked(), Nan::New(allProcessesD[i].art));
        resultObjD->Set(Nan::GetCurrentContext(), Nan::New("bt").ToLocalChecked(), Nan::New(allProcessesD[i].bt));
        resultObjD->Set(Nan::GetCurrentContext(), Nan::New("pri").ToLocalChecked(), Nan::New(allProcessesD[i].pri));
        resultObjD->Set(Nan::GetCurrentContext(), Nan::New("wt").ToLocalChecked(), Nan::New(allProcessesD[i].wt));
        resultObjD->Set(Nan::GetCurrentContext(), Nan::New("tat").ToLocalChecked(), Nan::New(allProcessesD[i].tat));
        Nan::Set(resultsArrayD, i, resultObjD);
    }

    v8::Local<v8::Object> result = Nan::New<v8::Object>();
    result->Set(Nan::GetCurrentContext(), Nan::New("fcfs").ToLocalChecked(), fcfsResult).Check();
    result->Set(Nan::GetCurrentContext(), Nan::New("sjf").ToLocalChecked(), sjfResult).Check();
    result->Set(Nan::GetCurrentContext(), Nan::New("ps").ToLocalChecked(), psResult).Check();
    result->Set(Nan::GetCurrentContext(), Nan::New("rr").ToLocalChecked(), rrResult).Check();

    result->Set(Nan::GetCurrentContext(), Nan::New("fcfsResults").ToLocalChecked(), resultsArrayA);
    result->Set(Nan::GetCurrentContext(), Nan::New("sjfResults").ToLocalChecked(), resultsArrayB);
    result->Set(Nan::GetCurrentContext(), Nan::New("psResults").ToLocalChecked(), resultsArrayC);
    result->Set(Nan::GetCurrentContext(), Nan::New("rrResults").ToLocalChecked(), resultsArrayD);

    result->Set(Nan::GetCurrentContext(), Nan::New("fcfsDuration").ToLocalChecked(), Nan::New(fcfsDuration));
    result->Set(Nan::GetCurrentContext(), Nan::New("sjfDuration").ToLocalChecked(), Nan::New(sjfDuration));
    result->Set(Nan::GetCurrentContext(), Nan::New("psDuration").ToLocalChecked(), Nan::New(psDuration));
    result->Set(Nan::GetCurrentContext(), Nan::New("rrDuration").ToLocalChecked(), Nan::New(rrDuration));

    info.GetReturnValue().Set(result);
}

void Initialize(v8::Local<v8::Object> exports) {
    Nan::HandleScope scope;
    v8::Local<v8::Context> context = Nan::GetCurrentContext();
    exports->Set(context, Nan::New("runScheduling").ToLocalChecked(), Nan::New<v8::FunctionTemplate>(RunScheduling)->GetFunction(context).ToLocalChecked()).Check();
}

NODE_MODULE(addon, Initialize)
