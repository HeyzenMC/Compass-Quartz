---
unlisted: true
---
<%* const activeFile = app.workspace.getActiveFile(); const path = activeFile.path.replace(/\.md$/, ""); const folderName = activeFile.parent.name; const linkValue = `[[${path}|${folderName}]]`; await app.fileManager.processFrontMatter(activeFile, (fm) => { fm["card_link"] = linkValue; }); -%>