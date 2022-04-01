const fee = {
  headline: 'Входной взнос',
  chipName: 'ФЛ Холдем',
  availableSum: 'Доступно средств:',
  warning: 'Ваш входной взнос не может быть меньше суммы, с которой вы покинули данный стол. Нажмите кнопку ОК, чтобы\n' +
    '        продолжить, или подождите, когда пройдет время ограничения.',
  nameExtraBtn: 'Быстрая посадка и автодокупка'
};

const seat = {
  name: 'Быстрая посадка',
  notice: 'Я хочу пользоваться функцией быстрой посадки и понимаю, что она будет автоматически ставить на стол указанную сумму.',
  text: 'Автоматически ставить на стол:'
};

const purchase = {
  name: 'Автодокупка',
  notice: 'Я хочу пользоваться функцией автоматической докупки и понимаю, что она будет автоматически пополнять мой счет для обеспечения заданного номера стека.',
  textMyCount: 'Если у меня меньше: ',
  textCount: 'Автоматически докупать до: '
};

const save = {
  name: 'Сохранить настройки после выхода из приложения',
  notice: 'Я хочу пользоваться функцией сохранения и понимаю, что она будет автоматически сохранять настройки после выхода из приложения.',
};

const defaultSettings = {
  seatCount: 2,
  purchaseCount: 2,
  myCount: 2,
  isNoticeSeat: false,
  isNoticePurchase: false,
  isNoticeSave: false,
  isCheckedSeat: false,
  isCheckedPurchase: false,
  isCheckedSave: false,
};

export {fee, purchase, seat, save, defaultSettings};