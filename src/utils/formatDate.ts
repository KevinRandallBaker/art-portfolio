const formatter = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

export function formatDate(isoDate: string): string {
  return formatter.format(new Date(isoDate));
}
