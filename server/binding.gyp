{
  "targets": [
    {
      "target_name": "runWithoutThreadsTime",
      "sources": [ "runWithoutThreadsTime.cc" ],
      "include_dirs": ["<!(node -e \"require('nan')\")"]
    },
    {
      "target_name": "runWithThreadsTime",
      "sources": [ "runWithThreadsTime.cc" ],
      "include_dirs": ["<!(node -e \"require('nan')\")"]
    },
  ]
}
