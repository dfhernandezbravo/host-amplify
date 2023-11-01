export default function extractEmail(input: string): string {
  const parts = input.split('-');
  if (parts.length === 0) {
    return '';
  }

  // La primera parte debería ser el correo
  const email = parts[0];

  // Validar que efectivamente tenga un formato de correo
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email) ? email : '';
}
