const createButton = document.querySelector('.create');
const promptButton = document.querySelector('.prompt');
const progress = document.querySelector('progress');
const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('output[for=input]');
const img = document.querySelector('#avatar');
const bioText = document.querySelector('#bio').innerText.trim();
const titleText = document.querySelector('#bio').innerText.trim();
const abstractText = document.querySelector('#abstract').innerText.trim();

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
      `You are an expert in answering questions about the conference speaker ${document.querySelector('#name').textContent.trim()}. The speaker's talk has the title "${document.querySelector('#title').textContent.trim()}". The conference is called JSConf Japan and takes place in Tokyo, Japan. Here's the speaker's bio:\n\n${document.querySelector('#bio').textContent.trim()}\n\nHere's the abstract for the speaker's talk:\n\n${document.querySelector('#bio').textContent.trim()}`
    );
    localSession = await createSession({
      expectedInputs: [{ type: 'text', languages: ['en'] }, { type: 'image' }],
      expectedOutputs: [{ type: 'text', languages: ['en'] }],
      initialPrompts: [
        {
          role: 'system',
          content: `You are an expert in answering questions about the conference speaker ${document.querySelector('#name').textContent.trim()}. The speaker's talk has the title "${document.querySelector('#title').textContent.trim()}". The conference is called JSConf Japan and takes place in Tokyo, Japan. Here's the speaker's bio:\n\n${document.querySelector('#bio').textContent.trim()}\n\nHere's the abstract for the speaker's talk:\n\n${document.querySelector('#bio').textContent.trim()}`,
        },
        { role: 'user', content: [{ type: 'image', value: img }] },
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

document
  .querySelector('.translate-button')
  .addEventListener('click', async () => {
    const abstract = document.querySelector('#abstract');
    const bio = document.querySelector('#bio');
    const title = document.querySelector('#title');
    try {
      const translator = await Translator.create({
        sourceLanguage: 'en',
        targetLanguage: 'ja',
      });
      {
        const stream = translator.translateStreaming(titleText);
        let result = '';
        for await (const chunk of stream) {
          result += chunk;
          title.innerHTML = marked.parse(result);
        }
      }
      {
        const stream = translator.translateStreaming(abstractText);
        let result = '';
        for await (const chunk of stream) {
          result += chunk;
          abstract.innerHTML = marked.parse(result);
        }
      }
      {
        const stream = translator.translateStreaming(bioText);
        let result = '';
        for await (const chunk of stream) {
          result += chunk;
          bio.innerHTML = marked.parse(result);
        }
      }
    } catch (err) {
      abstract.textContent = err.message;
    }
  });

document
  .querySelector('.summarize-button')
  .addEventListener('click', async () => {
    const abstract = document.querySelector('#abstract');
    try {
      const summarizer = await Summarizer.create({
        expectedInputLanguages: ['en'],
        expectedContextLanguages: ['en'],
        outputLanguage: 'en',
        sharedContext:
          'This is the abstract of a talk from the conference "JSConf Tokyo 2025".',
      });

      const stream = summarizer.summarizeStreaming(abstractText, {
        context:
          'The speaker is called "' +
          document.querySelector('#name').textContent.trim() +
          '" and the talk is titled "' +
          document.querySelector('#title').textContent.trim() +
          '".',
      });
      let result = '';
      for await (const chunk of stream) {
        result += chunk;
        abstract.innerHTML = marked.parse(result);
      }
    } catch (err) {
      abstract.textContent = err.message;
    }
  });
