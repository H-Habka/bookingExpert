import React from "react";
import BookItem from "./BookItem";

const count=10
const BookList = ({isModal}) => {
  return (
    <div className="mt-10 flex flex-col gap-4 px-4">
      {Array(count)
        .fill()
        .map((_,idx) => (
          <BookItem key={idx} isModal={isModal} />
        ))}
    </div>
  );
};

export default BookList;
