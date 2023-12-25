const insert = document.querySelector(".insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <table style="width: 100%" border="white">
        <tr>
          <th>KEY</th>
          <th>KEY CODE</th>
          <th>CODE</th>
        </tr>
        <tr>
          <td>${e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    `;
});
