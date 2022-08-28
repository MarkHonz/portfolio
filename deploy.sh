echo "Switching to branch main."
git checkout main

echo "Building App..."
npm run build

echo "Deploying files to server..."
scp -r build/* markhonz@45.79.132.46:/var/www/html/markhonz.dev/

echo "Done!"