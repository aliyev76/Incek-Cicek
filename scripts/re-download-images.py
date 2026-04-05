import os
import requests
import json
import time

# We can find all products from src/lib/seed-data.ts or just list the public/products contents
# Actually, I'll extract from src/lib/seed-data.ts

# For brevity, I'll just hardcode the logic to iterate over the known pattern
# but it's better to read the actual list.

# I'll use the list of files I previously saw to recreate the download tasks.
# But wait, I already deleted them. I'll read seed-data.ts

def re_download():
    print("Starting re-download of product images...")
    
    # Path to seed-data.ts
    path = "src/lib/seed-data.ts"
    with open(path, "r") as f:
        content = f.read()
    
    # Extract images using regex (simplified)
    # "/products/thumb_..."
    import re
    matches = re.finditer(r'"image_url": "/products/(?P<filename>thumb_[^"]+?)"', content)
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://www.incekcicek.com/"
    }
    
    out_dir = "public/products"
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)

    for match in matches:
        filename = match.group("filename")
        url = f"https://www.incekcicek.com/uploads/products/{filename}"
        out_path = os.path.join(out_dir, filename)
        
        if os.path.exists(out_path) and os.path.getsize(out_path) > 10000:
            print(f"Skipping {filename}, already exists and seems valid.")
            continue

        print(f"Downloading {filename}...")
        try:
            resp = requests.get(url, headers=headers, timeout=10)
            if resp.status_code == 200 and len(resp.content) > 10000:
                with open(out_path, "wb") as f:
                    f.write(resp.content)
                print(f"Saved {filename} ({len(resp.content)} bytes)")
            else:
                print(f"Failed to download {filename}: Status {resp.status_code}, Size {len(resp.content)}")
        except Exception as e:
            print(f"Error downloading {filename}: {e}")
        
        # Small delay to avoid triggering bots
        time.sleep(0.5)

if __name__ == "__main__":
    re_download()
