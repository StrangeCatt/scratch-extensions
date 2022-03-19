class url {
  getInfo () {
    return {
      id: 'url',
      name: 'Open URL',
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

Scratch.extensions.register(new url());
