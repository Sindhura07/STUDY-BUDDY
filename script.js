const topicInput = document.getElementById('topicInput');
const addBtn = document.getElementById('addBtn');
const topicList = document.getElementById('topicList');

let topics = JSON.parse(localStorage.getItem('topics')) || [];

function renderTopics() {
  topicList.innerHTML = '';
  topics.forEach((topic, index) => {
    const li = document.createElement('li');
    li.textContent = topic.text;
    if (topic.done) li.classList.add('completed');

    li.addEventListener('click', () => {
      topics[index].done = !topics[index].done;
      saveTopics();
      renderTopics();
    });

    topicList.appendChild(li);
  });
}

function saveTopics() {
  localStorage.setItem('topics', JSON.stringify(topics));
}

addBtn.addEventListener('click', () => {
  const topicText = topicInput.value.trim();
  if (topicText === '') return;
  topics.push({ text: topicText, done: false });
  topicInput.value = '';
  saveTopics();
  renderTopics();
});

renderTopics();
