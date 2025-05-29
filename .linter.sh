#!/bin/bash
cd /home/kavia/workspace/code-generation/savehabit-16008-aec4743a/savehabit_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

