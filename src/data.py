# I will start by loading each file and processing them to append a comma at the end of each JSON object.

import os

# Paths to the user's files
file_paths = [
    "/Users/simonkuforiji/Downloads/paper data/data low bt low pri.txt",
    "/Users/simonkuforiji/Downloads/paper data/data low bt high pri.txt",
    "/Users/simonkuforiji/Downloads/paper data/data original.txt",
    "/Users/simonkuforiji/Downloads/paper data/data bt max 1000.txt",
    "/Users/simonkuforiji/Downloads/paper data/data bt max 500.txt",
    "/Users/simonkuforiji/Downloads/paper data/data bt max 100.txt",
    "/Users/simonkuforiji/Downloads/paper data/data art equal.txt"
]

# Function to process each file and add a comma at the end of each line
def process_files(file_paths):
    for path in file_paths:
        with open(path, 'r') as file:
            lines = file.readlines()
        
        # Adding a comma at the end of each line except the last
        processed_lines = [line.strip() + ',' if not line.endswith(",\n") else line for line in lines[:-1]]
        processed_lines.append(lines[-1].strip())  # Last line should not end with a comma

        # Writing the modified content back to the file
        with open(path, 'w') as file:
            file.write("\n".join(processed_lines))

# Execute the function to process the files
process_files(file_paths)
