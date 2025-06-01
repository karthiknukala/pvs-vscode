import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('PVS extension is now active');

    // Register commands and providers here
    let disposable = vscode.commands.registerCommand('pvs-vscode.helloWorld', () => {
        vscode.window.showInformationMessage('Hello from PVS Extension!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    // Clean up resources here
} 