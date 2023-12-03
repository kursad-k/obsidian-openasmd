import { Plugin } from 'obsidian';

export default class OpenAsMd extends Plugin {

  async onload() {
    super.onload();

  // register the view and extensions
  this.registerExtensions(["txt"], "markdown");
	this.registerExtensions(["ini"], "markdown");
	this.registerExtensions(["nfo"], "markdown");
	this.registerExtensions(["py"], "markdown");
	this.registerExtensions(["html"], "markdown");
	this.registerExtensions(["tid"], "markdown");
  this.registerExtensions(["config"], "markdown");
  this.registerExtensions(["json"], "markdown");
  this.registerExtensions(["conf"], "markdown");
  this.registerExtensions(["tid"], "markdown");
  this.registerExtensions(["TID"], "markdown");
  this.registerExtensions(["tid"], "markdown");

	  }
}
