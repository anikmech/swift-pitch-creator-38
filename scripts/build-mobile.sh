
#!/bin/bash
# Build script for mobile deployment

echo "Building for mobile deployment..."

# Build the web app
npm run build

# Sync with Capacitor (if platforms are added)
if [ -d "android" ] || [ -d "ios" ]; then
    npx cap sync
    echo "Capacitor sync completed"
else
    echo "No native platforms found. Add platforms using 'npx cap add android' or 'npx cap add ios'"
fi

echo "Build completed!"
