document.getElementById("button5").addEventListener("click", async (event) => {
  event.preventDefault();
  const longURL = document.getElementById("longURL").value;
  const shortURL = document.getElementById("shortURL");
  if (!longURL) {
    alert("URL field cannot be empty!");
    return;
  }
  try {
    const response = await axios.get(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longURL)}`
    );
    const shortenedURL = response.data;
    shortURL.style.display = "block";
    shortURL.innerHTML = `Short URL: <a href="${shortenedURL}" target="_blank" id="shortenedUrl">${shortenedURL}</a>`;
    document.getElementById("shortenedUrl").style.cssText =
      "text-decoration: none; font-size: 15px;  color: #005ae2;";
  } catch (error) {
    console.error("Axios error:", error);
    shortURL.style.display = "block";
    shortURL.innerHTML = `An error occurred: ${error.message}`;
  }
});
