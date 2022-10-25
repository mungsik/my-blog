import usDateString from "./../lib/usDateString";

const MDXPost = ({ title, date, children }) => {
  return (
    <div className="w-full flex flex-col prose scrollbar-thin">
      <h1>{title}</h1>
      {date && (
        <span className="text-sm font-light mb-5">{usDateString(date)}</span>
      )}
      {children}
    </div>
  );
};

export default MDXPost;
