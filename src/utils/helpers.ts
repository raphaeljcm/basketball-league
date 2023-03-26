export const slugify = (name: string) =>
  name.toLocaleLowerCase().split(' ').join('-');

export const formatDate = (date: string, locale = 'pt-BR') =>
  new Intl.DateTimeFormat(locale).format(new Date(date));
