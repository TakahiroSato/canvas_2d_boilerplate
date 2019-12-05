#!/bin/bash
cd `dirname $0`

echo -n "input projectname:"
read projectname
sed -i -e "s/canvas_2d_boilerplate/$projectname/g" package.json

rm -rf .git

rm -rf $0