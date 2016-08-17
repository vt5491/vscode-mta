'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {WordCounter} from './wordcounter';
//fs = require 'fs-plus'/
// import fs = require("fs-plus");
// import * as fs from 'fs-plus';
// note: we cant use jquery because extensions run in a separate thread
// import * as $ from "jquery";  //this works 
// import $ from "jQuery"; // this doesn't work
 import * as fs from "fs-extra";  //this works 

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-mta" is now active!');

    // create a new word counter
    let wordCounter = new WordCounter();
    
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed
        // var $node = $('.monaco-workbench');
        //console.log('$node=' + $node)
        var basePath = '../lib'
        // var msgPath = "../../lib/msg.txt"
        var msgPath = "/home/vturner/vtstuff/github/vscode-mta/lib/msg.txt"
        // console.log("file exists=" + fs.existsSync(msgPath))
        var exists = fs.existsSync(msgPath) 
        // var data = fs.readFileSync(msgPath, 'utf8')
        // data = data.toString()
        // console.log('extension: data=' + data)
        var data = fs.readFileSync(msgPath);

        // explore the usage of outputChannel
        //createOutputChannel(name: string): OutputChannel
        var vtTmpChannel = vscode.window.createOutputChannel('vt-tmp')
        console.log('now writing to output Channel')
        vtTmpChannel.appendLine("abc")
        console.log("Synchronous read: " + data.toString());
 
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World ' + data );
        vscode.window.showQuickPick(['option 1', 'option 2', 'option 3'])
            .then(val => vscode.window.showInformationMessage('You picked ' + val));

        wordCounter.updateWordCount();
    });

    //context.subscriptions.push(disposable);
    // Add to a list of disposables which are disposed when this extension is deactivated.
    context.subscriptions.push(wordCounter);
    context.subscriptions.push(disposable); 
}

// this method is called when your extension is deactivated
export function deactivate() {
}