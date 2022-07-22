const hide = (elem, answer) => {
  if (!elem.classList.contains('faq__item_show')) return;
  answer.style.height = `${answer.offsetHeight}px`;
  answer.offsetHeight;
  answer.style.display = 'block';
  answer.style.height = 0;
  answer.style.overflow = 'hidden';
  answer.style.transition = 'height 360ms ease-in-out';
  elem.classList.remove('faq__item_show');
  setTimeout(() => {
    answer.removeAttribute('style');
  }, 360);
};

const show = (elem, answer) => {
  if (elem.classList.contains('faq__item_show')) return;
  answer.style.display = 'block';
  const height = answer.offsetHeight;
  answer.style.height = 0;
  answer.style.overflow = 'hidden';
  answer.style.transition = 'height 360ms ease-in-out';
  answer.offsetHeight;
  answer.style.height = `${height}px`;
  setTimeout(() => {
    elem.classList.add('faq__item_show');
    answer.removeAttribute('style');
  }, 360);
};

export const accordion = () => {
  const list = document.querySelector('.faq__list');
  list.addEventListener('click', event => {
    const button = event.target.closest('.faq__question');
    const item = button.closest('.faq__item');
    const answer = item.querySelector('.faq__answer');
    if (button) {
      item.classList.contains('faq__item_show') ? hide(item, answer) : show(item, answer);
    }
  });
};
