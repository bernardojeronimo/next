const API_URL = 'https://deisishop.pythonanywhere.com/products/';

export async function GET() {
 return fetch(API_URL)
        .then(res => res.json())
        .then(data => Response.json(data))
        .catch(error => console.error('Erro ao carregar produtos:', error));
}

