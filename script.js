const form = document.querySelector('#leadForm');
const dialog = document.querySelector('#leadDialog');
const leadText = document.querySelector('#leadText');
const copyBtn = document.querySelector('#copyLead');
const closeBtn = document.querySelector('.dialog-close');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const text = `Заявка с сайта MGN Auto Parts\n\nИмя: ${data.get('name')}\nКонтакт: ${data.get('contact')}\nЗапрос: ${data.get('request')}`;
  leadText.value = text;
  dialog.showModal();
});

copyBtn?.addEventListener('click', async () => {
  await navigator.clipboard.writeText(leadText.value);
  copyBtn.textContent = 'Скопировано ✓';
  setTimeout(() => copyBtn.textContent = 'Скопировать', 1600);
});

closeBtn?.addEventListener('click', () => dialog.close());
