class Fetch {
  getInfo () {
    return {
      id: 'fetch',
      name: 'Fetch',
      blocks: [
        {
          opcode: 'get',
          blockType: Scratch.BlockType.REPORTER,
          text: 'GET [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://extensions.turbowarp.org/hello.txt'
            }
          }
        },
        {
          opcode: 'get2',
          blockType: Scratch.BlockType.REPORTER,
          text: 'GET2 [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'bonjour'
            }
          }
        }
      ]
    };
  }

  get (args) {
    return fetch(args.URL)
      .then(r => r.text())
      .catch(() => '');
  }
   get2 (args) {
    return fetch(args.URL)
      .then(r => r.text())
      .catch(() => '');
  }
}

Scratch.extensions.register(new Fetch());
