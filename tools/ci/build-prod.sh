# This command should be run on CI/Netlify enviroment!
# If you really wanted to run it, run it on the root.

rm -rf dist-temp
rm -rf dist
rm -rf .parcel-cache

cp -r web/ dist-temp/

if [ "$NETLIFY" = true ]; then
	echo "Netlify detected. Showing Netlify elements."
	echo ".d-none.d-netlify-block {display: block !important}" >> dist-temp/_css/style.css
fi

npm i
python tools/ci/cdn-to-local.py
npx parcel build dist-temp/index.html dist-temp/**.html --dist-dir "dist" --no-source-maps --no-content-hash --public-url ./

rm -rf dist-temp

cp -r web/_img/ dist/
cp web/atlas.json dist/
cp web/*.txt dist/
cp web/_headers dist/
cp web/favicon.ico dist/
cp web/sw.js dist/