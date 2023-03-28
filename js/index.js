const detailWrapper = document.getElementById("details-wrapper");

let details = "";
questions.forEach((q) => {
  details += getDetail(q);
});
detailWrapper.innerHTML = details;

function getDetail(q) {
  return `
    <details>
      <summary>
        ${q.question}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 96 960 960"
            width="24"
            fill="currentColor"
          >
            <path
              d="M480 711 240 471l56-56 184 184 184-184 56 56-240 240Z"
            /></svg
        ></span>
      </summary>
      <div class="content">
        <p>${
          q.answer.length > 0
            ? q.answer.map((text) => `<span>${text}</span>`).join("")
            : "There's no anwser yet."
        }</p>
        ${q.code ? `<pre><code>${q.code}</code></pre>` : ""}
      </div>
    </details>
  `;
}
