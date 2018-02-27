#!/bin/sh
set -e

SOURCE_DIR=$PWD
TEMP_REPO_DIR=$PWD/../gatsby-gh-pages

rm -rf $SOURCE_DIR/public

gatsby build

echo "Removing temporary doc directory $TEMP_REPO_DIR"
rm -rf $TEMP_REPO_DIR
mkdir $TEMP_REPO_DIR

echo "Cloning the repo with the gh-pages branch"
git clone https://github.com/bocasfx/osp-gatsby.git --branch gh-pages $TEMP_REPO_DIR

echo "Clear repo directory"
cd $TEMP_REPO_DIR
git rm -r *

echo "Copy documentation into the repo"
cp -r $SOURCE_DIR/public/* .

echo "Copying images"
mkdir img
cp -r $SOURCE_DIR/src/images/* ./img

echo "Push the new docs to the remote branch"
git add . -A
git commit -m "Update generated documentation"
git push origin gh-pages

echo "Cleaning up"
cd ..
rm -rf ./gatsby-gh-pages
