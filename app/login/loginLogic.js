export const generateRandomKeyboard = () => {
    const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
  };
  
  export const validateCredentials = async (idNumber, password) => {
    try {
      const response = await fetch('/api/validate-credentials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idNumber, password }),
      });
  
      const data = await response.json();
      return data; // Retorna la respuesta del servidor
    } catch (error) {
      console.error('Error validating credentials:', error);
      return { success: false, message: 'Error connecting to server' };
    }
  };
  