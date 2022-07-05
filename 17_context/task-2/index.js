const callbackPrompt = {
  message: 'Enter your phone number',
  showPrompt() {
    const promptNumber = prompt(this.message);
    console.log(promptNumber);
  },
  showDeferredPromt(ms) {
    setTimeout(this.showPrompt.bind(this), ms);
  },
};
callbackPrompt.showDeferredPromt(2000);
