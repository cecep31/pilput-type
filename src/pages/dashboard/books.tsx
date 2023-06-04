import { useEffect, useState } from "react";
import Logged from "../../components/layouts/Logged";
import { getData } from "../../utils/fetch";

const Books = () => {
  const [books, setbooks] = useState<any[]>([]);

  async function getBooks() {
    const response = await getData("/api/v1/books")
    if (response.status) {
      setbooks(response.data)
    }
  }
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <Logged>
      <div className="">
        <div className="bg-white rounded-lg shadow-md p-5">
          <h1>Books</h1>
        </div>
        {/* <div>Add Books</div> */}
        <div className="grid grid-rows-4 gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="w-full shadow-xl bg-white rounded-lg mt-4"
            >
              <figure className="px-10 pt-10">
                <img
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                  className="rounded-xl"
                  width={200}
                  height={200}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{book.title}</h2>
                <p>{book.desc}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Logged>
  );
};

export default Books;
