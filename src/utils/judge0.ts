
    // if (!id || !sourceCode) {
    //   alert("Language ID or source code missing!");
    //   return;
    // }

    // const encodedCode = btoa(sourceCode);
    // const encodedStdin = btoa("Judge0");

    // try {
    //   if (!URL) {
    //     alert("API URL is missing!");
    //     return;
    //   }

    //   const response = await axios.post(
    //     URL,
    //     {
    //       language_id: id,
    //       source_code: encodedCode,
    //       stdin: encodedStdin,
    //     },
    //     {
    //       params: {
    //         base64_encoded: "true",
    //         wait: "true",
    //         fields: "*",
    //       },
    //       headers: {
    //         "x-rapidapi-key": key,
    //         "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   console.log(response.data)
    //     const data = response.data;
    //         setOutput({
    //             stdout: data.stdout ? atob(data.stdout) : undefined,
    //             stderr: data.stderr ? atob(data.stderr) : undefined,
    //             compile_output: data.compile_output ? atob(data.compile_output) : undefined,
    //             message: data.message ? atob(data.message) : undefined,
    //         });