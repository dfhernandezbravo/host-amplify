export default function extractEmail(input: string): string {
  const parts = input.split('-');
  if (parts.length === 0) {
    return '';
  }
  const email = parts[0];

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email) ? email : '';
}

export function extractNumber(input: string): string {
  return input.replace(/\D/g, '');
}
