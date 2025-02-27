import fs from "fs";

// Deep merge function
const deepMerge = (obj1, obj2) => {
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (
        obj1[key] &&
        typeof obj1[key] === "object" &&
        typeof obj2[key] === "object"
      ) {
        // If both objects have the same key and both are objects, merge them recursively
        deepMerge(obj1[key], obj2[key]);
      } else {
        // Otherwise, just assign the value from obj2 to obj1
        obj1[key] = obj2[key];
      }
    }
  }
};

// Read the JSON files asynchronously
fs.readFile("tatrapayplus_api_sandbox.json", "utf8", (err, data1) => {
  if (err) {
    console.error("Error reading tatrapayplus_api_sandbox.json:", err);
    return;
  }

  fs.readFile("code-samples-map.json", "utf8", (err, data2) => {
    if (err) {
      console.error("Error reading code-samples-map.json:", err);
      return;
    }

    // Parse the JSON strings into JavaScript objects
    const json1 = JSON.parse(data1);
    const json2 = JSON.parse(data2);

    // Deep merge the two JSON objects
    deepMerge(json1, json2);
    // Optionally, write the merged JSON to a new file
    fs.writeFile(
      "tatrapayplus_api_sandbox_final.json",
      JSON.stringify(json1, null, 4),
      (err) => {
        if (err) {
          console.error("Error writing merged JSON to file:", err);
        } else {
          console.log(
            "Merged JSON has been saved to 'tatrapayplus_api_sandbox_final.json'",
          );
        }
      },
    );
  });
});
