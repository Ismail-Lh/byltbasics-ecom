import argparse  # Importing the argparse module for command-line argument parsing
import glob  # Importing the glob module for file pattern matching
import os  # Importing the os module for file operations


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
    ext = os.path.splitext(file)[1]  # Extracting the file extension
    new_ext = (
        ".tsx" if ext == ".jsx" else ".ts"
    )  # Determining the new file extension based on the original extension
    new_file = file.replace(
        ext, new_ext
    )  # Creating the new file name with the new extension

    with open(
        file, "r", encoding="utf-8"
    ) as f:  # Opening the original file for reading
        content = f.read()  # Reading the content of the file

    transformed_content = js_to_ts(content)  # Transforming the JS content to TS

    with open(new_file, "w", encoding="utf-8") as f:  # Opening the new file for writing
        f.write(transformed_content)  # Writing the transformed content to the new file

    print(
        f"Converted {file} to {new_file}"
    )  # Printing a message indicating the conversion

    # Remove the original file
    os.remove(file)  # Removing the original file
    print(f"Removed original file {file}")  # Printing a message indicating the removal


# Function to convert all files matching the pattern in the given directory
def convert_files(directory):
    pattern = os.path.join(
        directory, "**", "*.js"
    )  # Creating the file pattern to match JS files
    files = glob.glob(pattern, recursive=True)  # Finding all files matching the pattern
    files += glob.glob(
        os.path.join(directory, "**", "*.jsx"), recursive=True
    )  # Adding JSX files to the list

    for file in files:  # Iterating over each file
        convert_file(file)  # Converting the file


# Main function to parse arguments and start the conversion
def main():
    parser = argparse.ArgumentParser(
        description="Convert JS and JSX files to TS and TSX."
    )  # Creating an argument parser with a description
    parser.add_argument(
        "directory", type=str, help="Directory to search for JS and JSX files"
    )  # Adding a command-line argument for the directory
    args = parser.parse_args()  # Parsing the command-line arguments

    if not os.path.isdir(
        args.directory
    ):  # Checking if the provided path is a directory
        print("The provided path is not a directory.")
        exit(1)

    convert_files(args.directory)  # Converting the files in the directory


if __name__ == "__main__":
    main()  # Calling the main function to start the conversion
