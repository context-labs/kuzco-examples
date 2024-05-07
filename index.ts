import OpenAI from "openai";

const oai = new OpenAI({
  baseURL: "https://relay.kuzco.xyz/v1",
  apiKey: `<YOUR_API_KEY>`, // obtainable from https://kuzco.xyz/register
  timeout: 5 * 60 * 1000,
});

const main = async () => {
  const abortController = new AbortController();
  const response = await oai.chat.completions.create(
    {
      messages: [
        {
          role: "user",
          content: `Tell me a short story about an emperor named Kuzco.`,
        },
      ],
      model: 'llama3:latest',
      stream: false, // streaming is disabled in Kuzco for now
    },
    { signal: abortController.signal },
  );

  console.log(response.choices[0].message.content);
};


try {
  main();
} catch (e) {
  console.error(e);
}