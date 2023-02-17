chromium_path=$(dpkg-query -L chromium-browser | grep "/usr/bin/chromium-browser$" | head -n 1)

echo "Chromium is installed at: $chromium_path"