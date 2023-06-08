import nlp from 'compromise';

export async function handleCommand(command: string) {
  const doc = nlp(command);

  let response;

  if (doc.has('#Greeting')) {
    response = 'Hello, how can I assist you today?';
  } else if (doc.has('how are you')) {
    response = 'I am an AI, I do not have feelings, but thank you for asking.';
  } else if (doc.has('who are you')) {
    response = 'I am Jarvis, your personal assistant.';
  } else {
    response = `I'm sorry, I did not understand the command: ${command}`;
  }

  return {
    message: response,
  };
}
