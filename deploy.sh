set -e

npm run build

cd dist


echo > .nojekyll


git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:semapavel/semapavel.github.io.git main


cd -