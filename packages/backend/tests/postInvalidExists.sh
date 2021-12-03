#!/bin/env bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

# Certifica que o objeto exista para ver o teste falhar

. ./post.sh
. ./post.sh
