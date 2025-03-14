function convertLinks() {
  const inputUrl = document.getElementById("inputUrl").value;
  const resultDiv = document.getElementById("result");
  const githubLinkElement = document.getElementById("githubLink");
  const rawLinkElement = document.getElementById("rawLink");
  const jsdelivrLinkElement = document.getElementById("jsdelivrLink");

  resultDiv.style.display = "none";
  githubLinkElement.innerHTML = "";
  rawLinkElement.innerHTML = "";
  jsdelivrLinkElement.innerHTML = "";

  if (!inputUrl) {
    alert("请输入链接");
    return;
  }

  const githubRegex =
    /https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)/;
  const githubMatch = inputUrl.match(githubRegex);
  const rawRegex =
    /https:\/\/raw\.githubusercontent\.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\/(.+)/;
  const rawMatch = inputUrl.match(rawRegex);

  if (githubMatch) {
    const username = githubMatch[1];
    const repo = githubMatch[2];
    const branch = githubMatch[3];
    const filePath = githubMatch[4];

    const githubLink = `https://github.com/${username}/${repo}/blob/${branch}/${filePath}`;
    const rawLink = `https://raw.githubusercontent.com/${username}/${repo}/${branch}/${filePath}`;
    const jsdelivrLink = `https://gcore.jsdelivr.net/gh/${username}/${repo}@${branch}/${filePath}`;

    githubLinkElement.innerHTML = `GitHub仓库链接 <a href="${githubLink}" target="_blank">${githubLink}</a>`;
    rawLinkElement.innerHTML = `GitHub直链 <a href="${rawLink}" target="_blank">${rawLink}</a>`;
    jsdelivrLinkElement.innerHTML = `jsDelivr代理链接 <a href="${jsdelivrLink}" target="_blank">${jsdelivrLink}</a>`;
  } else if (rawMatch) {
    const username = rawMatch[1];
    const repo = rawMatch[2];
    const branch = rawMatch[3];
    const filePath = rawMatch[4];

    const githubLink = `https://github.com/${username}/${repo}/blob/${branch}/${filePath}`;
    const rawLink = `https://raw.githubusercontent.com/${username}/${repo}/${branch}/${filePath}`;
    const jsdelivrLink = `https://gcore.jsdelivr.net/gh/${username}/${repo}@${branch}/${filePath}`;

    githubLinkElement.innerHTML = `GitHub仓库链接 <a href="${githubLink}" target="_blank">${githubLink}</a>`;
    rawLinkElement.innerHTML = `GitHub直链 <a href="${rawLink}" target="_blank">${rawLink}</a>`;
    jsdelivrLinkElement.innerHTML = `jsDelivr代理链接 <a href="${jsdelivrLink}" target="_blank">${jsdelivrLink}</a>`;
  } else {
    alert("链接无效");
    resultDiv.style.display = "none";
    return;
  }

  resultDiv.style.display = "block";
}
