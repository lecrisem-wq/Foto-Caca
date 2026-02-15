export interface LetterContent {
  recipient: string;
  body: string;
  sender: string;
  imageSrc: string;
}

export interface AppState {
  showIntro: boolean;
  isLetterOpen: boolean;
  hasReadLetter: boolean;
}