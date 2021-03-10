export default function formatDate(date: any) {
  const mapNumberToMonth = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const [year, month , day] = date.split('-');
  return `${day} de ${mapNumberToMonth[month - 1]} de ${year}`;
} 