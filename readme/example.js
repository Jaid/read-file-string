import readFileString from "read-file-string"

readFileString("./existingFile.txt").then(result => {

})

readFileString("./doesNotExist.txt").then(result2 => {

})