---
sidebar_position: 2
---

# Installing PVS

This guide will walk you through the process of installing PVS on your system.

## System Requirements

PVS can be installed on the following operating systems:
- Linux
- macOS
- Windows (via WSL)

## Prerequisites

Before installing PVS, ensure you have:
- Common Lisp implementation (Allegro CL or SBCL)
- Emacs (optional, if you prefer the traditional PVS interface)
- Git (for downloading the source)

## Installation Steps

### 1. Download PVS

```bash
git clone https://github.com/SRI-CSL/PVS.git
cd PVS
```

### 2. Install Dependencies

#### On Ubuntu/Debian:
```bash
sudo apt-get update
sudo apt-get install sbcl make gcc libx11-dev
```

#### On macOS:
```bash
brew install sbcl
```

### 3. Build PVS

```bash
make
```

### 4. Set Environment Variables

Add the following to your shell configuration file (`.bashrc`, `.zshrc`, etc.):

```bash
export PVS_DIR=/path/to/pvs
export PATH=$PATH:$PVS_DIR/bin
```

### 5. Verify Installation

To verify your installation:

```bash
pvs --version
```

## Troubleshooting

If you encounter any issues during installation:

1. Check that all dependencies are properly installed
2. Ensure environment variables are correctly set
3. Consult the [PVS GitHub repository](https://github.com/SRI-CSL/PVS) for detailed troubleshooting

## Next Steps

Once PVS is installed, proceed to:
1. [Setting up the VSCode Extension](./vscode-setup)
2. [Writing Your First Specification](./first-spec) 