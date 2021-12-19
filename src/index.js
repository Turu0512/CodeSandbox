import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値の取得と初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // divの生成
  const div = document.createElement("div");
  div.className = "list-row";
  // liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;
  // 未完了リストに追加
  const ul = document.getElementById("incomplete-list");
  ul.appendChild(div);

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    const deleteTerget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTerget);
    console.log(deleteTerget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  console.log(completeButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
