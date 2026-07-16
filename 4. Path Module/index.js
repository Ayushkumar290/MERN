import path from "path";

const filePath = "/users/alex/documents/file.txt";

// basename() -> Returns the file name from the path.
console.log("basename():", path.basename(filePath)); // file.txt

// dirname() -> Returns the parent directory of the file.
console.log("dirname():", path.dirname(filePath)); // /users/alex/documents

// extname() -> Returns the file extension.
console.log("extname():", path.extname(filePath)); // .txt

// join() -> Joins multiple path segments into one path.
console.log(
  "join():",
  path.join("users", "alex", "downloads", "image.png")
);
// users/alex/downloads/image.png

// resolve() -> Converts path segments into an absolute path.
console.log(
  "resolve():",
  path.resolve("users", "alex", "downloads")
);

// normalize() -> Removes duplicate separators and resolves "." and "..".
console.log(
  "normalize():",
  path.normalize("/users//alex/../downloads/file.txt")
);
// /users/downloads/file.txt

// parse() -> Converts a path into an object.
console.log("parse():", path.parse(filePath));

// format() -> Converts a path object back into a path string.
console.log(
  "format():",
  path.format({
    dir: "/users/alex",
    base: "resume.pdf",
  })
);
// /users/alex/resume.pdf

// isAbsolute() -> Checks whether a path is absolute.
console.log("isAbsolute():", path.isAbsolute(filePath)); // true

// relative() -> Returns the relative path from one location to another.
console.log(
  "relative():",
  path.relative("/users/alex", "/users/alex/documents/file.txt")
);
// documents/file.txt

// sep -> Returns the path separator of the current operating system.
console.log("sep:", path.sep);
// Windows -> \
// Linux/macOS -> /

// delimiter -> Returns the environment variable path separator.
console.log("delimiter:", path.delimiter);
// Windows -> ;
// Linux/macOS -> :

// win32 -> Works with Windows-style paths on any operating system.
console.log(
  "win32.basename():",
  path.win32.basename("C:\\Users\\Alex\\Desktop\\photo.jpg")
);
// photo.jpg

// posix -> Works with Linux/macOS-style paths on any operating system.
console.log(
  "posix.basename():",
  path.posix.basename("/home/alex/Desktop/photo.jpg")
);
// photo.jpg

// matchesGlob() -> Checks if a path matches a glob pattern (Node.js 22+).
console.log(
  "matchesGlob():",
  path.matchesGlob("src/index.js", "**/*.js")
);
// true