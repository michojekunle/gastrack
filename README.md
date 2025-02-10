# **GasTrack 🚀**  
*A simplified developer tool for tracking Solidity contract gas usage.*  

## **🔍 Overview**  
GasTrack is a lightweight, developer-friendly tool that profiles gas consumption for Solidity smart contracts, helping developers optimize their code efficiently.  

## **⚡ Features**  
✅ Line-by-line gas usage tracking for Solidity contracts.  
✅ Works locally with **Hardhat** and **Foundry** environments.  
✅ Simple CLI interface for easy usage.  
✅ Generates reports in **CLI, JSON, and HTML formats**.  
✅ Helps identify **expensive operations** for gas optimization.  

## **🛠 Installation**  
```sh
git clone https://github.com/yourusername/gastrack.git
cd gastrack
npm install
```

## **🚀 Usage**  
### **1️⃣ Run Gas Profiling**  
```sh
npx gastrack profile path/to/contract.sol
```

### **2️⃣ Generate a Gas Report**  
```sh
npx gastrack report --format=json
```

### **3️⃣ View CLI Help**  
```sh
npx gastrack --help
```

## **📂 Project Structure**  
```
📂 gastrack
 ┣ 📂 src
 ┃ ┣ 📜 index.ts        # CLI Entry point
 ┃ ┣ 📜 profiler.ts     # Gas tracking logic
 ┃ ┣ 📜 report.ts       # Report generation module
 ┃ ┣ 📜 utils.ts        # Helper functions
 ┣ 📂 tests
 ┃ ┣ 📜 profiler.test.ts
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┣ 📜 .gitignore
```

## **🎯 Roadmap**  
✅ **MVP** - Gas profiling engine with CLI output.  
🔜 **Integrate with Hardhat & Foundry** for deeper analysis.  
🔜 **Enhanced Reports** - Export results in Markdown/CSV.  
🔜 **VS Code Extension** for inline gas cost highlights.  

## **🤝 Contributing**  
We welcome contributions! Open an **issue** or submit a **PR** to get involved.  

## **📜 License**  
MIT License.  