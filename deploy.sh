#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 构建lib
npm run lib

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:h5-group/lattice-lottery.github.io.git docs

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:h5-group/lattice-lottery.git master:gh-pages

cd -