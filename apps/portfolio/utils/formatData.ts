export const formatHour = (hour: string) => {
  const date = new Date(hour).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', hour12: false});

  const [hr, mn] = date.split(',')[1].split(':');

  return `${hr}:${mn}`
}

export const formatDate = (hour: string) => {
  const date = new Date(hour).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', hour12: false});

  return date.split(',')[0]
}

export const formatDateWithHour = (hour: string) => {
  const dateWithTime = `${hour}T00:00:00`;
  const date = new Date(dateWithTime).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', hour12: false});

  return date.split(',')[0]
}

export const stripTimeAndTimezone = (dateTime: string): string => {
  return new Date(dateTime).toISOString().split('T')[0];
};

export const calculateDaysBetween = ({start, end}: { start: number, end: number}) => {
  const millisecondsInADay = 24 * 60 * 60 * 1000;

  const differenceInMilliseconds = Math.abs(end - start);

  const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInADay);

  return differenceInDays;
}