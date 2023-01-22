const API_KEY = "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";
const ENDPOINT = "https://api.openai.com/v1/engines/davinci/completions";

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  var prompt = document.querySelector("#prompt").value;

  // Send the prompt to the OpenAI API
  fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      prompt: prompt,
      temperature: 0.5
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // Display the response in the div element
    document.querySelector("#response").innerHTML = response.choices[0].text;
  });
});
