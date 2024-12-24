export interface Book {
  id: number;
  title: string;
  author: string;
  imgUrl: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Introduction to Algorithms",
    author:
      "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein",
    imgUrl:
      "https://www.cengage.com/covers/imageServlet?image_type=LRGFC&catalog=cengage&productISBN13=9780357673560",
  },
  {
    id: 2,
    title: "Fluent Python",
    author: "Luciano Ramalho",
    imgUrl: "https://static01.helion.com.pl/global/okladki/145x218/e_2zfx.jpg",
  },
  {
    id: 3,
    title: "Java: The Complete Reference",
    author: "Herbert Schildt",
    imgUrl:
      "https://cdn.kobo.com/book-images/f1ba85f0-b134-45e4-a804-b93d1bb5da29/1200/1200/False/java-the-complete-reference-2024.jpg",
  },
  {
    id: 4,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    imgUrl:
      "https://m.media-amazon.com/images/I/91-PASfiUVL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 5,
    title: "The C Programming Language",
    author: "Brian W. Kernighan and Dennis M. Ritchie",
    imgUrl: "https://pictures.abebooks.com/isbn/9780876925225-us.jpg",
  },
  {
    id: 6,
    title: "Python Machine Learning",
    author: "Sebastian Raschka and Vahid Mirjalili",
    imgUrl:
      "https://simg.pothi.com/mrXmVTtIM5FvHId_lQvFbPDLWMEshpd8pnuTPFdXvMk/rs:fit/w:371/h:477/el:1/g:sm/cb:rev-3/bG9jYWw6Ly8vaW1h/Z2VzL3Byb2R1Y3Rz/LzIwMjQvMDcvU0tV/MjQzOTQvSW1hZ2Vf/MC5qcGc.jpg",
  },
];
