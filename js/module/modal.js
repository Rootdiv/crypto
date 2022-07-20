const heroBtn = document.querySelector('.hero__btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

heroBtn.addEventListener('click', () => {
  overlay.classList.add('overlay_open');
  modal.classList.add('modal_open');
});

overlay.addEventListener('click', event => {
  const target = event.target;
  if (target === overlay || target.closest('.modal__close')) {
    overlay.classList.remove('overlay_open');
    modal.classList.remove('modal_open');
  }
});

const form = document.querySelector('.modal__form');
const modalTitle = document.querySelector('.modal__title');

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = {
    name: form.first_name.value,
    surname: form.last_name.value,
    phone: form.phone.value,
  };
  fetch('https://api-form-order.herokuapp.com/api/order', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(person => {
      modalTitle.textContent = `${person.name}, Ваша заявка успешно отправлена, номер: ${person.id}`;
      form.remove();
      setTimeout(() => {
        location.href = location.href;
      }, 3000);
    });
});
