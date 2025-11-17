const createButton = document.querySelector('.create');
const promptButton = document.querySelector('.prompt');
const progress = document.querySelector('progress');
const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('output[for=input]');
const bioText = document.querySelector('.schedule-day').innerText.trim();

let sessionCreationTriggered = false;
let localSession = null;

const createSession = async (options = {}) => {
  if (sessionCreationTriggered) {
    return;
  }

  progress.hidden = true;
  progress.value = 0;

  try {
    if (!('LanguageModel' in self)) {
      throw new Error('LanguageModel is not supported.');
    }

    const availability = await LanguageModel.availability();
    if (availability === 'unavailable') {
      throw new Error('LanguageModel is not available.');
    }

    let modelNewlyDownloaded = false;
    if (availability !== 'available') {
      modelNewlyDownloaded = true;
      progress.hidden = false;
    }
    console.log(`LanguageModel is ${availability}.`);
    sessionCreationTriggered = true;

    const llmSession = await LanguageModel.create({
      monitor(m) {
        m.addEventListener('downloadprogress', (e) => {
          progress.value = e.loaded;
          if (modelNewlyDownloaded && e.loaded === 1) {
            // The model was newly downloaded and needs to be extracted
            // and loaded into memory, so show the undetermined state.
            progress.removeAttribute('value');
          }
        });
      },
      ...options,
    });

    sessionCreationTriggered = false;
    return llmSession;
  } catch (error) {
    throw error;
  } finally {
    progress.hidden = true;
    progress.value = 0;
  }
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  try {
    console.log(
      `You are an expert in answering questions about the conference DevFest Karlsruhe, Germany. The schedule is the following:\n\n${bioText}`
    );
    localSession = await createSession({
      expectedInputs: [{ type: 'text', languages: ['en'] }],
      expectedOutputs: [{ type: 'text', languages: ['en'] }],
      initialPrompts: [
        {
          role: 'system',
          content: `You are an expert in answering questions about the conference DevFest Karlsruhe, Germany. The schedule is the following:\n\n${bioText}`,
        },
      ],
    });
    promptButton.disabled = false;
  } catch (error) {
    alert(error);
    output.textContent = error.message;
  }
  output.innerHTML = '';
  console.log(localSession);
  let result = '';
  try {
    const stream = localSession.promptStreaming(input.value.trim());
    for await (const chunk of stream) {
      result += chunk;
      output.innerHTML = marked.parse(result);
    }
  } catch (err) {
    output.textContent = err.message;
  }
});

document.querySelector('#translate').addEventListener('click', async () => {
  const abstracts = document.querySelectorAll('h3');

  try {
    for (const abstract of abstracts) {
      (async () => {
        const d = await LanguageDetector.create();
        console.log(
          abstract.textContent,
          (await d.detect(abstract.textContent.trim()))[0].detectedLanguage
        );
        const translator = await Translator.create({
          sourceLanguage: (await d.detect(abstract.textContent.trim()))[0]
            .detectedLanguage,
          targetLanguage: 'fr',
        });
        const stream = translator.translateStreaming(
          abstract.textContent.trim()
        );
        let result = '';
        for await (const chunk of stream) {
          result += chunk;
          abstract.textContent = result;
        }
      })();
    }
  } catch (err) {
    console.error(err.message);
  }
});

document
  .querySelector('#summarize-button')
  .addEventListener('click', async () => {
    try {
      const summarizer = await Summarizer.create({
        expectedInputLanguages: ['en'],
        expectedContextLanguages: ['en'],
        outputLanguage: 'en',
        sharedContext:
          'This is the schedule of a conference called "DevFest Karlsruhe".',
      });

      const stream = summarizer.summarizeStreaming(bioText, {});
      let result = '';
      for await (const chunk of stream) {
        result += chunk;
        document.querySelector('.summarize-output').innerHTML =
          marked.parse(result);
      }
    } catch (err) {
      document.querySelector('.summarize-output').textContent = err.message;
    }
  });
