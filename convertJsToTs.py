import argparse
import glob
import os


# Function to perform basic JS to TS transformations
def js_to_ts(content):
    transformations = {
        "PropTypes.string": "string",
        "PropTypes.number": "number",
        "PropTypes.bool": "boolean",
        "PropTypes.func": "() => void",
        "PropTypes.object": "Record<string, any>",
        "PropTypes.array": "any[]",
        "PropTypes.node": "React.ReactNode",
        "PropTypes.element": "JSX.Element",
    }

    for key, value in transformations.items():
        content = content.replace(key, value)

    return content


# Function to convert a single file
def convert_file(file):
    ext = os.path.splitext(file)[1]
    new_ext = ".tsx" if ext == ".jsx" else ".ts"
    new_file = file.replace(ext, new_ext)

    with open(file, "r", encoding="utf-8") as f:
        content = f.read()

    transformed_content = js_to_ts(content)

    with open(new_file, "w", encoding="utf-8") as f:
        f.write(transformed_content)

    print(f"Converted {file} to {new_file}")

    # Remove the original file
    os.remove(file)
    print(f"Removed original file {file}")


# Function to convert all files matching the pattern in the given directory
def convert_files(directory):
    pattern = os.path.join(directory, "**", "*.js")
    files = glob.glob(pattern, recursive=True)
    files += glob.glob(os.path.join(directory, "**", "*.jsx"), recursive=True)

    for file in files:
        convert_file(file)


# Main function to parse arguments and start the conversion
def main():
    parser = argparse.ArgumentParser(
        description="Convert JS and JSX files to TS and TSX."
    )
    parser.add_argument(
        "directory", type=str, help="Directory to search for JS and JSX files"
    )
    args = parser.parse_args()

    if not os.path.isdir(args.directory):
        print("The provided path is not a directory.")
        exit(1)

    convert_files(args.directory)


if __name__ == "__main__":
    main()
