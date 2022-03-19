class Fetch {
  getInfo () {
    return {
      id: 'fetch',
      name: 'Fetch',
      blocks: [
        {
          {
          opcode: 'openURL',
          blockType: Scratch.BlockType.COMMAND,
          text: 'OPEN URL : [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://google.com'
            }
        }
      ]
    };
  }

  openURL (args) {
    window.open(args.URL);
      .then(r => r.text())
      .catch(() => '');
  }
}

Scratch.extensions.register(new Fetch());
