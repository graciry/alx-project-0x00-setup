// interfaces/index.ts

export interface PillProps {
  title: string;
}

// (Optional) If you later want to pass props to the Card component,
// you can define something like this:

export interface CardProps {
  imageSrc: string;
  title: string;
  tags: string[];
}
