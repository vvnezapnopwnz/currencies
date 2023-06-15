export interface ITabButton {
    name: string;
    onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    active: boolean
  }
  