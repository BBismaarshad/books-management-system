import { Book, books } from "@/data";

export async function GET() {
  return new Response(JSON.stringify(books), { status: 200 });
}

export async function POST(request: Request) {
  try {
    const newBook: Omit<Book, "id"> = await request.json();

    const bookWithId: Book = { ...newBook, id: books.length + 1 };

    books.push(bookWithId);

    return new Response(
      JSON.stringify({ message: "Book added!", book: bookWithId }),
      { status: 201 }
    );
  } catch {
    return new Response(JSON.stringify({ message: "Invalid JSON input" }), {
      status: 400,
    });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...updatedBook } = await request.json();

    const bookIndex = books.findIndex((b) => b.id === id);

    if (bookIndex !== -1) {
      books[bookIndex] = { ...books[bookIndex], ...updatedBook };

      return new Response(
        JSON.stringify({ message: "Book updated!", book: books[bookIndex] }),
        { status: 200 }
      );
    } else {
      return new Response(JSON.stringify({ message: "Book not found!" }), {
        status: 404,
      });
    }
  } catch {
    return new Response(JSON.stringify({ message: "Invalid JSON input" }), {
      status: 400,
    });
  }
}

export async function DELETE(request: Request) {
  const { id }: { id: number } = await request.json();

  const bookIndex = books.findIndex((b) => b.id === id);

  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1);

    return new Response(
      JSON.stringify({ message: "Book deleted!", book: deletedBook[0] }),
      { status: 200 }
    );
  } else {
    return new Response(JSON.stringify({ message: "Book not found!" }), {
      status: 404,
    });
  }
}
