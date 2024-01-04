export type navegacaoProps = {
  [key: number]: string;
  default: string;
};

type Image = {
  src: string;
  title: string;
  subtitle: string;
  cidade: string;
};
export type ImagesListProps = Image[][];
