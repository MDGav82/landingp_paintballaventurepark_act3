export interface Activity {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  minPlayers: number;
  minAge: number;
  price: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
