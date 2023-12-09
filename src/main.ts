// import { Plugin } from 'obsidian';

import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';


interface OpenAsMdSettings {
	mySetting: string;
	mySettingArray:string[];
}


const DEFAULT_SETTINGS: OpenAsMdSettings = {
	mySetting: 'txt,nfo,json',
	
	mySettingArray:["txt","tid","ini"]
}

export default class OpenAsMd extends Plugin {
	// settings: OpenAsMdSettings;
	settings: OpenAsMdSettings;

	async onload() {
		
    super.onload();
    await this.loadSettings();
    this.addSettingTab(new SampleSettingTab(this.app, this));

	this.settings.mySettingArray=this.settings.mySetting.split(",");
	// console.log("array->"+this.settings.mySettingArray);
	this.registerExtensions(this.settings.mySettingArray, "markdown");

		
	}

	onunload() {
    }

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

	async saveSettings() {
		await this.saveData(this.settings);
		// console.log(this.settings)
	}

}


class SampleSettingTab extends PluginSettingTab {
	plugin: OpenAsMd;

	constructor(app: App, plugin: OpenAsMd) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('File Extensions')
			.setDesc('File types to be opened by Obsidian')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
