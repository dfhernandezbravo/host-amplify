export const useEvents = () => {
  const dispatchEvent = <T>(data: { name: string; detail: T }) => {
    const { name, detail } = data;
    const event = new CustomEvent(name, { detail });
    typeof window !== 'undefined' && document.dispatchEvent(event);
  };

  return { dispatchEvent };
};
