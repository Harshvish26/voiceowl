export async function mockDownload(audioUrl: string) {
  console.log("Mock downloading:", audioUrl);
  await new Promise((r) => setTimeout(r, 500));
  return Buffer.from("fake audio data");
}

export async function mockTranscribe(buffer: Buffer) {
  console.log("Mock transcribing...");
  await new Promise((r) => setTimeout(r, 500));
  return "this is a mocked transcription";
}
