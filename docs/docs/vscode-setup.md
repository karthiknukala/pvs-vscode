---
sidebar_position: 3
---

# Setting Up the VSCode Extension

This guide will help you set up and configure the PVS extension for Visual Studio Code.

## Prerequisites

Before installing the extension, ensure you have:
1. [Visual Studio Code](https://code.visualstudio.com/) installed
2. [PVS installed](./installation) and working correctly
3. PVS environment variables properly set

## Installation

### From VS Code Marketplace

1. Open VS Code
2. Click on the Extensions icon in the Activity Bar
3. Search for "PVS Language Support"
4. Click Install

### Manual Installation

If you prefer to install the extension manually:

1. Download the `.vsix` file from our [GitHub releases](https://github.com/karthiknukala/pvs-vscode/releases)
2. Open VS Code
3. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
4. Type "Install from VSIX" and select the command
5. Choose the downloaded `.vsix` file

## Configuration

### Extension Settings

The extension provides several configuration options:

```json
{
    "pvs.executable": "/path/to/pvs",
    "pvs.autoStartServer": true,
    "pvs.trace.server": "off"
}
```

To modify these settings:
1. Open VS Code Settings (`Ctrl+,` or `Cmd+,`)
2. Search for "PVS"
3. Adjust the settings as needed

### Verifying the Setup

To verify that the extension is working correctly:

1. Create a new file with `.pvs` extension
2. Type some PVS code
3. Check that syntax highlighting is working
4. Try running the PVS prover on a simple theorem

## Features

The extension provides:

- Syntax highlighting for PVS files
- Integration with the PVS prover
- Code completion
- Go to definition
- Find references
- And more...

## Troubleshooting

Common issues and their solutions:

1. **PVS executable not found**
   - Ensure PVS is properly installed
   - Check that PATH environment variable includes PVS

2. **Syntax highlighting not working**
   - Make sure the file has `.pvs` extension
   - Try reloading VS Code

3. **Prover integration issues**
   - Verify PVS works from command line
   - Check extension settings

## Next Steps

Now that you have the extension set up, you can proceed to:
- [Writing Your First Specification](./first-spec)
- Exploring the extension features
- Contributing to the extension development 