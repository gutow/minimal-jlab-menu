import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the minimal-jlab-menu extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'minimal-jlab-menu:plugin',
  description: 'Attempt a schema menu using copier template',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd,
      palette: ICommandPalette) => {

    const {commands } = app;

    const tstcmd = 'minimal-jlab-menu:main-menu';
    commands.addCommand(tstcmd, {
        label: 'Open example on github',
        caption: 'Opens the github repository in web browser.',
        execute: () =>{
            commands.execute('help:open',
            {url:"https://github.com/gutow/minimal-jlab-menu",
            newBrowserTab: "true"}
            );
            }
        });

    palette.addItem({
        command: tstcmd,
        category: 'Minimal Jlab Menu'
        });

    console.log('JupyterLab extension minimal-jlab-menu is activated!');
  }
};

export default plugin;
