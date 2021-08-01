#!/bin/env bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

echo "6105e6505ffe5a237fcd7ae9" | . ./delete.sh
